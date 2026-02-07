'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiX, FiCheck, FiTrash2, FiImage } from 'react-icons/fi';

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
}

interface ImageGalleryProps {
  onSelectImage?: (url: string) => void;
  selectedImage?: string;
}

export default function ImageGallery({ onSelectImage, selectedImage }: ImageGalleryProps) {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/upload');
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        await fetchImages();
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('An error occurred during upload');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleUpload(file);
  };

  const handleDelete = async (publicId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const encodedId = encodeURIComponent(publicId);
      const response = await fetch(`/api/upload/${encodedId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setImages(images.filter((img) => img.public_id !== publicId));
      } else {
        alert('Failed to delete image');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('An error occurred');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-primary bg-primary/5'
            : 'border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary'
        }`}
      >
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center gap-2"
        >
          {uploading ? (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Uploading...</p>
            </>
          ) : (
            <>
              <FiUpload className="h-12 w-12 text-gray-400" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Drag and drop an image here, or click to select
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Supports: JPG, PNG, GIF, WebP
              </p>
            </>
          )}
        </label>
      </div>

      {/* Image Grid */}
      {images.length === 0 ? (
        <div className="text-center py-12">
          <FiImage className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">No images uploaded yet</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Upload your first image to get started
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {images.map((image) => {
              const isSelected = selectedImage === image.secure_url;
              return (
                <motion.div
                  key={image.public_id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700"
                >
                  <img
                    src={image.secure_url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center gap-2">
                    {onSelectImage && (
                      <button
                        onClick={() => onSelectImage(image.secure_url)}
                        className={`${
                          isSelected
                            ? 'opacity-100 bg-green-500'
                            : 'opacity-0 group-hover:opacity-100 bg-primary'
                        } hover:bg-primary-dark text-white p-2 rounded-lg transition-all duration-200`}
                        title={isSelected ? 'Selected' : 'Select'}
                      >
                        {isSelected ? <FiCheck size={20} /> : <FiCheck size={20} />}
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(image.public_id)}
                      className="opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-all duration-200"
                      title="Delete"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>

                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                      <FiCheck size={16} />
                    </div>
                  )}

                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-white truncate">
                      {image.width} × {image.height}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
