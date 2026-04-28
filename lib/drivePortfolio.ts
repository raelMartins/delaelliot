export type DriveClipGroup = "bridal" | "wedding" | "other";

export type DriveClip = {
  id: string;
  title: string;
  group: DriveClipGroup;
};

/** Google Drive file IDs — share each file as “Anyone with the link” for embeds to load. */
export const DRIVE_PORTFOLIO_CLIPS: DriveClip[] = [
  {
    id: "1ITauNuyxMpNLkI15csaqXLzeOFj7OIRH",
    title: "Bridal Robe Transition",
    group: "bridal",
  },
  {
    id: "1HtDWmlHaoW27aNYs-JzrBo5DSdLpyqeW",
    title: "Bride & Asoebi Ladies",
    group: "bridal",
  },
  {
    id: "1dCAH3T8jruZyTnCT5yJrTCudWlpvV7VK",
    title: "Bridal Robe Content",
    group: "bridal",
  },
  {
    id: "19jgIbpHEclHOLsakzT3TkCPx8JizgKPL",
    title: "Bridal Moment",
    group: "bridal",
  },
  {
    id: "1BLyRigSfE-YesxUc3_FOExzvOgEQXZKH",
    title: "Bridal Moment II",
    group: "bridal",
  },
  {
    id: "1_TtzsOxIm875mC3EBYCQiClcRmLr5mmQ",
    title: "Bridal Moment III",
    group: "bridal",
  },
  {
    id: "11EUNh3TOwK4GUUoM6AYiw2OOQlxulCFV",
    title: "Bridal Moment IV",
    group: "bridal",
  },
  {
    id: "1-C_YY8NuBunHeWz9Kx89oXPgINJWC-eG",
    title: "Bridal Moment V",
    group: "bridal",
  },
  {
    id: "1I7_0mL6qi6Y7UC7NCfNbkwh3PJMORFRt",
    title: "Bridal Moment VI",
    group: "bridal",
  },
  {
    id: "1emqWwpLQyJFLjaTXJC5iAm9I4ASrejfk",
    title: "Bridal Moment VII",
    group: "bridal",
  },
  {
    id: "1EhlzdgFoTYRUacc1rP20zjacwHjuDluw",
    title: "Couple II",
    group: "wedding",
  },
  {
    id: "1NskqP8G_0XxK8nw3m0QlHV5hFzK4BUQi",
    title: "Demi & Her Girls",
    group: "wedding",
  },
  {
    id: "1L-dPyhpjm7k9-w9dLr0nONtICiTIWPg_",
    title: "Demi",
    group: "wedding",
  },
  {
    id: "1FUUg87NSudcQdqHOK6sGM3Fxh3F6DUlM",
    title: "Groom & Groomsmen",
    group: "wedding",
  },
  {
    id: "1x-A0CflDqeW-j1BYfgIUiqD79iYpCxNF",
    title: "Victor II",
    group: "wedding",
  },
  {
    id: "1nlPpZ1AEygUrLH-xLt0EMkBV85mDdxML",
    title: "Baby Adeleye — Gender Reveal",
    group: "other",
  },
  {
    id: "1GHlS7XRUUciC8Vj4x9EegcspmEwW2zVu",
    title: "BSL EOYP 2025",
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
