"use client";
import React, { useState } from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import { Quote, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Oyedokun Kehinde",
    role: "CEO, Rexta Technologies",
    content:
      "Mayowa is a dependable engineer who takes ownership of his work. He understands requirements quickly, communicates clearly, and consistently delivers quality work on time. He's proactive, willing to take on complex problems, and has been a valuable contributor across the projects we've worked on.",
  },
  {
    name: "Asamu Caleb",
    role: "CEO, Alcatech",
    content:
      "Mayowa is proactive, communicates well, keeps to time, and consistently delivers ahead of deadlines.",
    videoUrl: "https://uxfkvbvtmwjfzwlgelbf.supabase.co/storage/v1/object/public/media/1787981680607-nfe9yt.mp4",
  },
];

function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl aspect-video bg-surface rounded-lg overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video placeholder */}
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <p className="text-white/40 text-sm">
                    Video proof will be displayed here
                  </p>
                  <p className="text-white/20 text-xs mt-1">
                    Add the video URL to enable playback
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <AnimateIn direction="up" delay={0} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.4em]">
              Client Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            What It&apos;s Like to Work With Me
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            Good software comes from good collaboration. Here's what people I've worked with have to say.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={index} direction="up" delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-surface border border-white/5 rounded-xl p-8 h-full flex flex-col hover:border-primary/20 transition-all duration-500"
              >
                {/* Quote icon */}
                <Quote className="text-primary/30 w-8 h-8 mb-6 group-hover:text-primary/50 transition-colors duration-300" />

                {/* Testimonial content */}
                <p className="text-white/80 text-sm leading-relaxed mb-8 flex-1">
                  {testimonial.content}
                </p>

                {/* Attribution and video */}
                <div className="border-t border-white/5 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-bold text-base mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-white/40 text-xs uppercase tracking-wider">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Video proof button */}
                    {testimonial.videoUrl !== undefined && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveVideo(testimonial.videoUrl || "")}
                        className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 shrink-0"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Video proof
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        videoUrl={activeVideo || ""}
      />
    </section>
  );
}
