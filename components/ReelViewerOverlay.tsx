"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export type ReelViewerPayload = {
  videoSrc: string;
  label: string;
  title?: string;
};

type ReelViewerOverlayProps = {
  state: ReelViewerPayload | null;
  onClose: () => void;
};

export function ReelViewerOverlay({ state, onClose }: ReelViewerOverlayProps) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [surfaceReady, setSurfaceReady] = useState(false);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!state) {
      setSurfaceReady(false);
      return;
    }

    setSurfaceReady(false);
    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => setSurfaceReady(true));
    });

    document.addEventListener("keydown", handleEscape);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusT = window.setTimeout(() => closeRef.current?.focus(), 80);

    return () => {
      cancelAnimationFrame(outerRaf);
      if (innerRaf) cancelAnimationFrame(innerRaf);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusT);
    };
  }, [state, handleEscape]);

  useEffect(() => {
    if (!state) return;
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p !== undefined) void p.catch(() => {});
    return () => {
      v.pause();
    };
  }, [state]);

  const headline = state?.title ?? state?.label ?? "Reel";
  const eyebrow = state?.title ? state.label : null;

  return (
    <AnimatePresence>
      {state ? (
        <motion.div
          key="reel-viewer"
          className="reel-viewer-root"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reel-viewer-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0.08 : 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <button
            type="button"
            className="reel-viewer-backdrop"
            aria-label="Close reel"
            onClick={onClose}
          />
          <div
            className={`reel-viewer-surface${surfaceReady ? " reel-viewer-surface--ready" : ""}`}
          >
            <div className="reel-viewer-drawer-cap" aria-hidden>
              <span className="reel-viewer-drawer-handle" />
            </div>
            <div className="reel-viewer-chrome">
              <div className="reel-viewer-toolbar">
                <div className="reel-viewer-titles">
                  {eyebrow ? (
                    <span className="reel-viewer-eyebrow">{eyebrow}</span>
                  ) : null}
                  <h2 id="reel-viewer-title" className="reel-viewer-title">
                    {headline}
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="reel-viewer-close"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
              <div className="reel-viewer-frame">
                <video
                  ref={videoRef}
                  key={state.videoSrc}
                  className="reel-viewer-video"
                  src={state.videoSrc}
                  controls
                  playsInline
                  controlsList="nodownload"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
