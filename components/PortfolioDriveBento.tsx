"use client";

import Image from "next/image";
import { useState } from "react";
import type { DriveClip } from "@/lib/drivePortfolio";
import { driveThumbnailUrl } from "@/lib/drivePortfolio";

export type DriveBentoTile = {
  layoutClass: string;
  clip: DriveClip;
  label: string;
};

function DriveClipThumbnailMedia({
  clip,
  sizes,
}: {
  clip: DriveClip;
  sizes: string;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <>
      {!imgFailed ? (
        <Image
          src={driveThumbnailUrl(clip.id)}
          alt=""
          fill
          className="portfolio-drive-grid-thumb"
          sizes={sizes}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="portfolio-drive-grid-fallback" aria-hidden />
      )}
      <span className="portfolio-drive-grid-play" aria-hidden>
        ▶
      </span>
    </>
  );
}

type PortfolioDriveBentoProps = {
  tiles: readonly DriveBentoTile[];
  onSelect: (clip: DriveClip) => void;
};

export function PortfolioDriveBento({ tiles, onSelect }: PortfolioDriveBentoProps) {
  return (
    <div className="portfolio-bento portfolio-drive-bento">
      {tiles.map(({ layoutClass, clip, label }) => (
        <div
          key={`${layoutClass}-${clip.id}`}
          className={`portfolio-item ${layoutClass}`}
        >
          <button
            type="button"
            className="portfolio-drive-bento-btn"
            aria-label={`Preview video: ${clip.title}`}
            onClick={() => onSelect(clip)}
          >
            <div className="portfolio-drive-bento-thumb-area">
              <DriveClipThumbnailMedia
                clip={clip}
                sizes="(max-width: 900px) 100vw, (max-width: 1400px) 45vw, 520px"
              />
            </div>
          </button>
          <div className="portfolio-label portfolio-drive-bento-label">
            <span className="portfolio-drive-bento-eyebrow">{label}</span>
            <span className="portfolio-drive-bento-name">{clip.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
