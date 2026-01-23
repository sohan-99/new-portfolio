"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiAlertCircle, FiLoader } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
        >
          Your Name <span className="text-sky-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Sohanur Rahman Jahin"
          className={`input ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : ""
          }`}
          disabled={status === "submitting"}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
          >
            <FiAlertCircle className="w-4 h-4" />
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
        >
          Your Email <span className="text-sky-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="sohan75632@gmail.com"
          className={`input ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : ""
          }`}
          disabled={status === "submitting"}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
          >
            <FiAlertCircle className="w-4 h-4" />
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Phone field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
        >
          Phone Number <span className="text-slate-400 text-xs">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+880 1234-567890"
          className="input"
          disabled={status === "submitting"}
        />
      </div>

      {/* Subject field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
        >
          Subject <span className="text-sky-400">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          className={`input ${
            errors.subject
              ? "border-red-500 focus:ring-red-500"
              : ""
          }`}
          disabled={status === "submitting"}
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
          >
            <FiAlertCircle className="w-4 h-4" />
            {errors.subject}
          </motion.p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
        >
          Your Message <span className="text-sky-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          className={`textarea resize-y ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : ""
          }`}
          disabled={status === "submitting"}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500 flex items-center gap-1"
          >
            <FiAlertCircle className="w-4 h-4" />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
        whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
        className={`btn-primary w-full ${
          status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {status === "submitting" ? (
          <>
            <FiLoader className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : status === "success" ? (
          <>
            <FiCheck className="w-5 h-5" />
            Message Sent!
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status messages */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
        >
          <p className="text-green-700 dark:text-green-300 text-sm flex items-center gap-2">
            <FiCheck className="w-5 h-5" />
            Thank you for your message! I'll get back to you soon.
          </p>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
        >
          <p className="text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
            <FiAlertCircle className="w-5 h-5" />
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}
