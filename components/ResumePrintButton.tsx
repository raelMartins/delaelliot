"use client";

type ResumePrintButtonProps = {
  className?: string;
  label?: string;
};

export function ResumePrintButton({
  className = "resume-download-btn",
  label = "Download / Print PDF",
}: ResumePrintButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.print()}
    >
      {label}
    </button>
  );
}
