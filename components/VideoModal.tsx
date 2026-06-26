"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    } else {
      videoRef.current?.play().catch(() => {});
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(2,8,16,0.94)", backdropFilter: "blur(20px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(200,162,90,0.2)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ background: "rgba(4,15,30,0.95)", borderBottom: "1px solid rgba(200,162,90,0.12)" }}
            >
              <p className="text-[#C8A25A] text-[11px] tracking-[0.24em] uppercase font-bold">
                Robotic Joint Reconstruction
              </p>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(200,162,90,0.25)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video */}
            <video
              ref={videoRef}
              src="/assets/reconstruction.mp4"
              controls
              playsInline
              className="w-full block"
              style={{ maxHeight: "75vh", background: "#000" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
