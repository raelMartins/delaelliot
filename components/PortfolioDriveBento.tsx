"use client";

import Image from "next/image";
import { useState } from "react";
import type { DriveClip } from "@/lib/drivePortfolio";
import { driveThumbnailUrl } from "@/lib/drivePortfolio";
import type { ReelViewerPayload } from "./ReelViewerOverlay";

export type DriveBentoTile = {
  layoutClass: string;
  clip: DriveClip;
  label: string;
};

/** Hosted under `public/` (e.g. `/videos/clip.mp4`). */
export type LocalVideoBentoTile = {
  layoutClass: string;
  videoSrc: string;
  label: string;
  title?: string;
};

export type PortfolioBentoTile = DriveBentoTile | LocalVideoBentoTile;

function isLocalVideoTile(tile: PortfolioBentoTile): tile is LocalVideoBentoTile {
  return "videoSrc" in tile;
}

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

function LocalVideoBentoItem({
  tile,
  onOpen,
}: {
  tile: LocalVideoBentoTile;
  onOpen: (payload: ReelViewerPayload) => void;
}) {
  const { layoutClass, videoSrc, label, title } = tile;
  const name = title ?? label;

  return (
    <div className={`portfolio-item portfolio-item--local-video ${layoutClass}`}>
      <button
        type="button"
        className="portfolio-drive-bento-btn portfolio-local-video-open"
        aria-label={`Open reel: ${name}`}
        onClick={() => onOpen({ videoSrc, label, title })}
      >
        <div className="portfolio-drive-bento-thumb-area">
          <video
            src={videoSrc}
            className="portfolio-local-video-thumb"
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => {
              try {
                e.currentTarget.currentTime = 0.06;
              } catch {
                /* seek unsupported */
              }
            }}
          />
          <span className="portfolio-drive-grid-play" aria-hidden>
            ▶
          </span>
        </div>
      </button>
      <div className="portfolio-label portfolio-drive-bento-label">
        <span className="portfolio-drive-bento-eyebrow">{label}</span>
        {title ? <span className="portfolio-drive-bento-name">{title}</span> : null}
      </div>
    </div>
  );
}

type PortfolioDriveBentoProps = {
  tiles: readonly PortfolioBentoTile[];
  onSelect: (clip: DriveClip) => void;
  onReelOpen: (payload: ReelViewerPayload) => void;
};

function bentoTileKey(tile: PortfolioBentoTile, layoutClass: string): string {
  if (isLocalVideoTile(tile)) {
    return `${layoutClass}-${tile.videoSrc}`;
  }
  return `${layoutClass}-${tile.clip.id}`;
}

export function PortfolioDriveBento({
  tiles,
  onSelect,
  onReelOpen,
}: PortfolioDriveBentoProps) {
  return (
    <div className="portfolio-bento portfolio-drive-bento">
      {tiles.map((tile) => {
        const { layoutClass } = tile;
        if (isLocalVideoTile(tile)) {
          return (
            <LocalVideoBentoItem
              key={bentoTileKey(tile, layoutClass)}
              tile={tile}
              onOpen={onReelOpen}
            />
          );
        }
        const { clip, label } = tile;
        return (
          <div
            key={bentoTileKey(tile, layoutClass)}
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
        );
      })}
    </div>
  );
}
