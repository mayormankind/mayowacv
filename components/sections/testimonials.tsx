"use client";
import React, { useRef, useState } from "react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Modal from "@/components/ui/Modal";
import { Quote, X, Play } from "lucide-react";
import { motion } from "framer-motion";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      ariaLabel="Testimonial video"
      className="relative w-full max-w-3xl mx-4 aspect-video bg-surface rounded-lg overflow-hidden border border-white/10"
    >
      <button
        onClick={handleClose}
        aria-label="Close video"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-200"
      >
        <X className="w-4 h-4" />
      </button>

      {isOpen && (
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          playsInline
          className="h-full w-full bg-black"
        />
      )}
    </Modal>
  );
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <AnimateIn direction="up" delay={0} className="mb-16">
          <SectionHeader
            eyebrow="Client Feedback"
            title="What It’s Like to Work With Me"
            description="Good software comes from good collaboration. Here's what people I've worked with have to say."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateIn key={testimonial.name} direction="up" delay={index * 0.15}>
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-surface border border-white/5 rounded-xl p-8 h-full flex flex-col hover:border-primary/20 transition-all duration-500"
              >
                {/* Quote icon */}
                <Quote className="text-primary/30 w-8 h-8 mb-6 group-hover:text-primary/50 transition-colors duration-300" />

                {/* Testimonial content */}
                <blockquote className="flex-1 mb-8">
                  <p className="text-white/80 text-base leading-relaxed text-pretty">
                    {testimonial.content}
                  </p>
                </blockquote>

                {/* Attribution and video */}
                <figcaption className="border-t border-white/5 pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-white font-bold text-base mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-white/60 text-xs uppercase tracking-wider">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Video proof button */}
                    {testimonial.videoUrl !== undefined && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveVideo(testimonial.videoUrl || "")}
                        aria-label={`Watch video testimonial from ${testimonial.name}`}
                        className="flex items-center gap-2 px-3 py-2 min-h-10 rounded-md bg-primary/5 border border-primary/20 text-primary-soft text-[10px] font-bold uppercase tracking-wider hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 shrink-0"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Video proof
                      </motion.button>
                    )}
                  </div>
                </figcaption>
              </motion.figure>
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
