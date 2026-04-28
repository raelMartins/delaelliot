"use client";

import { useCallback, useEffect, useRef } from "react";
import { drivePreviewUrl, driveViewUrl } from "@/lib/drivePortfolio";

type DrivePreviewModalProps = {
  fileId: string | null;
  title?: string;
  onClose: () => void;
};

export function DrivePreviewModal({
  fileId,
  title,
  onClose,
}: DrivePreviewModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!fileId) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [fileId, handleEscape]);

  if (!fileId) return null;

  return (
    <div
      className="portfolio-drive-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Preview: ${title}` : "Video preview"}
    >
      <button
        type="button"
        className="portfolio-drive-lightbox-backdrop"
        aria-label="Close preview"
        onClick={onClose}
      />
      <div className="portfolio-drive-lightbox-panel">
        <div className="portfolio-drive-lightbox-toolbar">
          {title ? (
            <span className="portfolio-drive-lightbox-title">{title}</span>
          ) : null}
          <button
            ref={closeRef}
            type="button"
            className="portfolio-drive-lightbox-close"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="portfolio-drive-lightbox-frame">
          <iframe
            title={title ?? "Google Drive video preview"}
            src={drivePreviewUrl(fileId)}
            allowFullScreen
            allow="autoplay; fullscreen"
            loading="eager"
          />
        </div>
        <a
          href={driveViewUrl(fileId)}
          className="portfolio-drive-lightbox-external"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Drive
        </a>
      </div>
    </div>
  );
}
