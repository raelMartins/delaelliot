import type { Metadata } from "next";
import { ResumePage } from "@/components/ResumePage";
import "./resume.css";

export const metadata: Metadata = {
  title: "Resume — Mercy Elliot (Dela)",
  description:
    "ATS-friendly resume for Mercy Elliot — Creative Content Strategist & Account Executive. Lagos, Nigeria.",
};

export default function ResumeRoute() {
  return <ResumePage />;
}
