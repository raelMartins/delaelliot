import type { ReactNode } from "react";
import Link from "next/link";
import { ResumePrintButton } from "./ResumePrintButton";

const jobs = [
  {
    company: "BrandX Sourcing Ltd. - Lagos, Nigeria",
    role: "Account Executive & Lead Digital Strategist",
    dates: "Sep 2025 - Present",
    bullets: [
      "Procured and closed high-value enterprise accounts, including securing a major corporate branding package for Interswitch valued at ₦150 Million.",
      "Spearheaded digital video content creation and social marketing campaigns, aligning visual messaging with client branding objectives to drive engagement.",
      "Created and edited high-converting promotional video content for multi-platform distribution across e-commerce and social channels.",
      "Managed and optimized company e-commerce listings, leveraging promotional content and product copy to increase online sales conversions.",
      "Partnered closely with design and sales teams to document client experiences and deliver high-standard brand deliverables.",
    ],
  },
  {
    company: "Tegga Stores - Lagos, Nigeria",
    role: "Social Media Manager & Content Creator",
    dates: "Dec 2024 - Sep 2025",
    bullets: [
      "Developed and executed end-to-end social media strategies across Instagram, Twitter, and Facebook, significantly boosting brand visibility.",
      "Produced, edited, and published engaging short-form videos and graphic content aligned with brand tone and active promotional campaigns.",
      "Fostered customer relationships and managed real-time inquiries across WhatsApp and Jiji, directly driving order conversions and customer satisfaction.",
    ],
  },
  {
    company: "ILU-OBA International Ltd. - Lagos, Nigeria",
    role: "Digital Content & Administrative Officer",
    dates: "Jul 2024 - Sep 2024",
    bullets: [
      "Created, curated, and managed all visual and written social content (images, videos, copy) across Instagram and Facebook to build brand equity.",
      "Analyzed social media performance metrics to refine publishing cadence and boost audience engagement rates.",
      "Managed day-to-day office logistics, vendor communications, and operational budgets to support core business functions.",
    ],
  },
  {
    company: "ThatPurpleDot Couture - Lagos, Nigeria",
    role: "Content Creator & Executive Assistant",
    dates: "Apr 2024 - Jun 2024",
    bullets: [
      "Produced and edited short-form video content for TikTok and Instagram, driving audience growth and showcasing brand collections.",
      "Supported the founder with organizational workflows, daily operations, and event attendance.",
    ],
  },
  {
    company: "BrainyKid Foundation (NGO) - Lagos, Nigeria",
    role: "Personal Assistant",
    dates: "Aug 2022 - Mar 2024",
    bullets: [
      "Provided personal assistant support including calendar management, scheduling, correspondence, and day-to-day coordination for foundation leadership.",
      "Handled inquiries and visitor communications while assisting with event prep and light digital content for foundation campaigns.",
    ],
  },
] as const;

const certifications = [
  "Bachelor of Science (B.Sc.) in Mass Communication (In Progress) - University of Lagos (UNILAG), 2025 - Present",
  "Women In Film Intensive Hands-on Training - 2024",
  "Social Media Marketing Certification - Emarketing Institute, 2022",
  "Senior Secondary School Certificate (SSCE) - Jotlad College, 2019",
] as const;

/** Bold recruiter-skim figures like ₦150 Million without changing ATS text. */
function withImpactEmphasis(text: string): ReactNode {
  const parts = text.split(/(₦150 Million)/g);
  if (parts.length === 1) return text;
  return parts.map((part, index) =>
    part === "₦150 Million" ? (
      <strong key={index} className="resume-impact">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function ResumePage() {
  return (
    <div className="resume-root">
      <header className="resume-toolbar print-hidden">
        <Link href="/" className="resume-toolbar-brand">
          DELA<span>.</span>
        </Link>
        <div className="resume-toolbar-actions">
          <Link href="/" className="resume-toolbar-link">
            Portfolio
          </Link>
        </div>
      </header>

      <div className="resume-actions print-hidden">
        <ResumePrintButton />
        <p className="resume-actions-note">
          Opens the system print dialog - choose Save as PDF
        </p>
      </div>

      <article className="resume-sheet" aria-label="Resume - Mercy Elliot">
        <header className="resume-header">
          <h1 className="resume-name">Mercy Elliot</h1>
          <ul className="resume-contact">
            <li>Lagos, Nigeria</li>
            <li>
              <a href="tel:+2347045401072">+234 704 540 1072</a>
            </li>
            <li>
              <a href="mailto:mercyelliot28@gmail.com">
                mercyelliot28@gmail.com
              </a>
            </li>
          </ul>
          <a
            className="resume-portfolio-link"
            href="https://delaelliot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="resume-portfolio-label">View Portfolio</span>
            <span className="resume-portfolio-url">delaelliot.vercel.app</span>
            <span className="resume-portfolio-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </header>

        <section className="resume-section" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="resume-section-title">
            Professional Summary
          </h2>
          <p className="resume-summary">
            {withImpactEmphasis(
              "Results-driven Creative Content Strategist and Account Executive with proven expertise in short-form video production, brand storytelling, and high-value client acquisition. Strategic cross-functional operator capable of bridging creative media production with business revenue growth - demonstrated by securing top-tier enterprise accounts valued up to ₦150 Million. Skilled in end-to-end video editing, social media expansion, and client relationship management.",
            )}
          </p>
        </section>

        <section className="resume-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="resume-section-title">
            Core Skills &amp; Tools
          </h2>
          <ul className="resume-skills">
            <li>
              <strong>Creative &amp; Production:</strong> Short-Form Video
              Editing, Visual Storytelling, Content Strategy, Brand Identity,
              Event Videography, Social Media Management.
            </li>
            <li>
              <strong>Business &amp; Revenue:</strong> Enterprise Account
              Acquisition, Client Relationship Management, Sales Strategy,
              E-commerce Optimization.
            </li>
            <li>
              <strong>Software &amp; Tools:</strong> CapCut, Canva, Notion,
              Google Workspace, Meta Business Suite, TikTok, Instagram.
            </li>
          </ul>
        </section>

        <section
          className="resume-section"
          aria-labelledby="experience-heading"
        >
          <h2 id="experience-heading" className="resume-section-title">
            Work Experience
          </h2>
          {jobs.map((job) => (
            <div className="resume-job" key={job.company}>
              <h3 className="resume-job-company">{job.company}</h3>
              <div className="resume-job-meta">
                <p className="resume-job-role">{job.role}</p>
                <p className="resume-job-dates">{job.dates}</p>
              </div>
              <ul className="resume-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{withImpactEmphasis(bullet)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section" aria-labelledby="certs-heading">
          <h2 id="certs-heading" className="resume-section-title">
            Certifications &amp; Education
          </h2>
          <ul className="resume-certs">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <p className="resume-hint print-hidden">
        Tip: Use Print → Save as PDF for a clean, ATS-ready file
      </p>
    </div>
  );
}
