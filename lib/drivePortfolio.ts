export type DriveClipGroup = "bridal" | "wedding" | "other";

export type DriveClip = {
  id: string;
  title: string;
  group: DriveClipGroup;
};

/** Google Drive file IDs — share each file as “Anyone with the link” for embeds to load. */
export const DRIVE_PORTFOLIO_CLIPS: DriveClip[] = [
  {
    id: "1Xq69HANqN9QCO_zLHP9y4Udiapji11Q6",
    title: "Baby O. Gender Reveal",
    group: "other",
  },
  {
    id: "1Rud_9RV9JpLcYV2F9RwMVcMh50QhfRHK",
    title: "Wedding Highlights",
    group: "wedding",
  },
  {
    id: "19wWq6eGAZfkp8IUWxWOV6m3kWDGjghjM",
    title: "Birthday Thanksgiving",
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
