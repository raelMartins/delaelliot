export type DriveClipGroup = "bridal" | "wedding" | "other";

export type DriveClip = {
  id: string;
  title: string;
  group: DriveClipGroup;
};

/** Google Drive file IDs — share each file as “Anyone with the link” for embeds to load. */
export const DRIVE_PORTFOLIO_CLIPS: DriveClip[] = [
  {
    id: "1nlPpZ1AEygUrLH-xLt0EMkBV85mDdxML",
    title: "Baby Adeleye — Gender Reveal",
    group: "other",
  },
];

/** Thumbnail frame from Drive (works when the file is shared for link viewers). */
export function driveThumbnailUrl(fileId: string, width = 800) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
}

export function drivePreviewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function driveViewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export const driveGroupLabel: Record<
  DriveClipGroup,
  string
> = {
  bridal: "Bridal",
  wedding: "Wedding",
  other: "Events",
};
