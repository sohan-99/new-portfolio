"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiClock,
} from "react-icons/fi";
import { personalInfo } from "@/data/personal";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/ui/SectionHeader";
import { FadeInLeft, FadeInRight } from "@/components/ui/MotionWrapper";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: FiClock,
    label: "Availability",
    value:
      personalInfo.availability === "available"
        ? "Available for work"
        : personalInfo.availability === "busy"
        ? "Limited availability"
        : "Not available",
    href: null,
    status: personalInfo.availability,
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/sohan-99",
    username: "@sohan-99",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohanur-tech",
    username: "Md. Sohanur Rahman Jahin",
  },
  {
    icon: FiTwitter,
    label: "Twitter",
    href: "https://twitter.com/sohanurrahman",
    username: "@sohanurrahman",
  },
];

export default function ContactContent() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="section">
        <div className="container-custom">
          <SectionHeader
            badge="Get in Touch"
            title="Let's Work"
            titleHighlight="Together"
            description="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
          />

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <FadeInLeft className="lg:col-span-2">
              <div className="space-y-8">
                {/* Contact details */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <motion.div
                        key={item.label}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-slate-900 dark:text-white font-medium hover:text-primary-500 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-900 dark:text-white font-medium flex items-center gap-2">
                              {item.status && (
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    item.status === "available"
                                      ? "bg-green-500"
                                      : item.status === "busy"
                                      ? "bg-yellow-500"
                                      : "bg-red-500"
                                  }`}
                                />
                              )}
                              {item.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                    Connect with Me
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                          <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-primary-500 transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {social.label}
                          </p>
                          <p className="text-slate-900 dark:text-white font-medium group-hover:text-primary-500 transition-colors">
                            {social.username}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Additional info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
                >
                  <h4 className="font-semibold text-lg mb-2">
                    Prefer a quick chat?
                  </h4>
                  <p className="text-white/80 text-sm mb-4">
                    I typically respond to emails within 24 hours. For urgent
                    matters, feel free to reach out on LinkedIn.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <FiClock className="w-4 h-4" />
                    <span>Response time: ~24 hours</span>
                  </div>
                </motion.div>
              </div>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight className="lg:col-span-3">
              <div className="card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                <ContactForm />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {personalInfo.location}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
