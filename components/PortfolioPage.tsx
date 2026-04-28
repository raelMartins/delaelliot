"use client";

import Image from "next/image";
import { useState } from "react";
import { CoverWebGL } from "./CoverWebGL";
import { CustomCursor } from "./CustomCursor";
import { Reveal } from "./Reveal";
import { Center } from "@chakra-ui/react";

const TAB_LABELS = [
  "All Work",
  "Brand Content",
  "Event Coverage",
  "Short-form Video",
  "Product Shoots",
] as const;

const BRAND_CLIENTS = [
  {
    image: "/images/brands/that-purple-dot-couture.jpeg",
    name: "ThatPurpleDot Couture",
    category: "Fashion",
  },
  {
    image: "/images/brands/ilu-oba-international.jpeg",
    name: "Ìlú-Obà International",
    category: "Real Estate",
  },
  {
    image: "/images/brands/da-consulting.jpeg",
    name: "DA Consulting",
    category: "Consulting",
  },
  {
    image: "/images/brands/tecga.jpeg",
    name: "TECGA",
    category: "Tech / Gaming",
  },
  {
    image: "/images/brands/brandx-sourcing.jpeg",
    name: "BrandX Sourcing",
    category: "Logistics",
  },
] as const;

export function PortfolioPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="portfolio-root">
      <CustomCursor />
      <nav>
        <div className="nav-logo">
          DELA<span>.</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#drive">Projects</a>
          </li>
          <li>
            <a href="#brands">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="cover">
        <div className="cover-left">
          <div className="cover-eyebrow">Portfolio 2025 — Lagos, Nigeria</div>
          <div className="cover-name">
            Mercy
            <br />
            Elliot
            <em>(Dela)</em>
          </div>
          <p className="cover-tagline">
            <strong>Creating scroll-stopping content</strong> that converts —
            through intentional storytelling, mobile-first visuals &amp;
            strategic social media.
          </p>
          <div className="cover-roles">
            <div className="cover-role">Content Creator</div>
            <div className="cover-role">Mobile Videographer</div>
            <div className="cover-role">Social Media Manager</div>
          </div>
          <div className="cover-scroll">
            <div className="scroll-line" />
            Scroll to explore
          </div>
        </div>
        <div className="cover-right">
          <div className="red-bar" />
          <div className="cover-photo-wrap">
            <CoverWebGL />
            <div className="cover-photo-placeholder">
              <div className="photo-icon">📷</div>
              Portrait Photo
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <Reveal className="about-left">
          <div className="section-label">01 — About</div>
          <div className="section-heading">
            The
            <br />
            Story
            <br />
            <em>
              Behind
              <br />
              The Frame
            </em>
          </div>
          <Center
            className="about-image-block"
            position="relative"
            boxSize={"240px"}
            // display="none"
          >
            <Image
              src="/images/adela_headshot.jpeg"
              alt="Mercy Elliot (Dela) — headshot"
              fill
              objectFit="cover"
              objectPosition="center top"
              priority
            />
          </Center>
        </Reveal>
        <Reveal className="about-right">
          <p className="about-intro">
            I&apos;m Mercy Elliot — <strong>Dela</strong>. A storyteller with a
            smartphone, a strategy, and a deep love for brands that want to be
            seen.
          </p>
          <p className="about-body">
            With over 5 years of experience in social media management and
            content creation, I&apos;ve partnered with more than 10 brands
            across fashion, consulting, tech, and events — helping them grow
            their online presence, deepen audience engagement, and tell stories
            that actually land.
            <br />
            <br />
            In 2025, I took a bold step and founded{" "}
            <strong>Dela The Creator</strong> — a mobile videography brand
            dedicated to delivering high-quality, intentional visuals using just
            a smartphone. From weddings and proposals to brand promotions and
            live events, every frame is crafted with purpose.
            <br />
            <br />
            My philosophy is simple: great content isn&apos;t about expensive
            gear — it&apos;s about vision, consistency, and connection.
          </p>
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">
                5<span>+</span>
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">
                10<span>+</span>
              </div>
              <div className="stat-label">Brands Worked With</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">3</div>
              <div className="stat-label">Core Platforms</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">
                1<span>★</span>
              </div>
              <div className="stat-label">Dela The Creator Brand</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="services">
        <Reveal className="services-header">
          <div>
            <div className="section-label">02 — Services</div>
            <div className="section-heading services-heading-white">
              What I
              <br />
              Offer
              <br />
              <span className="services-heading-you">You</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="services-grid">
          <div className="service-card">
            <div className="service-num">01</div>
            <div className="service-icon">📲</div>
            <div className="service-title">Social Media Management</div>
            <p className="service-desc">
              Full-service management of your Instagram, TikTok &amp; Facebook —
              from strategy to posting, community engagement, and monthly
              analytics reporting.
            </p>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <div className="service-icon">✍🏾</div>
            <div className="service-title">Content Creation</div>
            <p className="service-desc">
              Scroll-stopping graphics, captions, and visual content tailored to
              your brand voice. Planned, created, and delivered on a consistent
              calendar.
            </p>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <div className="service-icon">🎥</div>
            <div className="service-title">Mobile Videography</div>
            <p className="service-desc">
              Professional-quality video shot entirely on mobile — for brand
              promos, weddings, proposals, and events. No heavy equipment, just
              great storytelling.
            </p>
          </div>
          <div className="service-card">
            <div className="service-num">04</div>
            <div className="service-icon">⚡</div>
            <div className="service-title">
              Short-Form Video (Reels / TikTok)
            </div>
            <p className="service-desc">
              Punchy, trend-aware short-form videos built for virality. From
              concept to final cut, optimized for algorithm performance on each
              platform.
            </p>
          </div>
          <div className="service-card">
            <div className="service-num">05</div>
            <div className="service-icon">🎬</div>
            <div className="service-title">Video Editing & Post-Production</div>
            <p className="service-desc">
              Clean, cinematic edits using CapCut, VN, and InShot. Color
              grading, captioning, sound design — everything your raw footage
              needs to shine.
            </p>
          </div>
          <div className="service-card">
            <div className="service-num">06</div>
            <div className="service-icon">🗺️</div>
            <div className="service-title">Content Strategy</div>
            <p className="service-desc">
              Data-informed content roadmaps, audience profiling,
              platform-specific planning, and content calendars designed to
              drive measurable growth.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="portfolio">
        <Reveal>
          <div className="section-label portfolio-section-label">
            03 — Portfolio
          </div>
          <div className="section-heading">
            Selected
            <br />
            Work
          </div>
        </Reveal>
        <Reveal className="portfolio-tabs">
          {TAB_LABELS.map((label, i) => (
            <button
              key={label}
              type="button"
              className={`tab-btn${i === activeTab ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {label}
            </button>
          ))}
        </Reveal>
        <Reveal className="portfolio-bento">
          <div className="portfolio-item bento-feature">
            <div className="portfolio-placeholder">
              <div className="pi">🎬</div>
              Brand Promo Video — Dela The Creator
            </div>
            <div className="portfolio-label">Brand Content · Video</div>
          </div>
          <div className="portfolio-item bento-tile-a">
            <div className="portfolio-placeholder">
              <div className="pi">📸</div>
              Product Shoot — Fashion Brand
            </div>
            <div className="portfolio-label">Product · Photo</div>
          </div>
          <div className="portfolio-item bento-tile-b">
            <div className="portfolio-placeholder">
              <div className="pi">💍</div>
              Proposal Coverage
            </div>
            <div className="portfolio-label">Event · Video</div>
          </div>
          <div className="portfolio-item bento-banner">
            <div className="portfolio-placeholder">
              <div className="pi">⚡</div>
              TikTok Reel Series
            </div>
            <div className="portfolio-label">Short-form · Reel</div>
          </div>
          <div className="portfolio-item bento-span-left">
            <div className="portfolio-placeholder">
              <div className="pi">🎊</div>
              Live Event Coverage — Corporate
            </div>
            <div className="portfolio-label">Event Coverage · Video</div>
          </div>
          <div className="portfolio-item bento-span-mid">
            <div className="portfolio-placeholder">
              <div className="pi">📱</div>
              Instagram Campaign
            </div>
            <div className="portfolio-label">Social · Content</div>
          </div>
          <div className="portfolio-item bento-tile-c">
            <div className="portfolio-placeholder">
              <div className="pi">💒</div>
              Wedding Film
            </div>
            <div className="portfolio-label">Events · Video</div>
          </div>
          <div className="portfolio-item bento-tile-d">
            <div className="portfolio-placeholder">
              <div className="pi">🛍️</div>
              Product Demo — BrandX
            </div>
            <div className="portfolio-label">Product · Video</div>
          </div>
        </Reveal>
      </section>

      <section id="drive">
        <Reveal className="drive-heading-center">
          <div className="section-label">04 — Full Projects</div>
          <div className="section-heading drive-heading-white">
            View Full
            <br />
            Portfolio Links
          </div>
        </Reveal>
        <Reveal className="drive-inner">
          <div className="drive-header">
            <div className="drive-icon">📂</div>
            <div className="drive-title">Project Folders</div>
          </div>
          <p className="drive-subtitle">
            All video projects, client deliverables, and event coverage are
            organized and available via the links below. Click any card to open
            the folder.
          </p>
          <div className="drive-links-grid">
            <a
              href="#"
              className="drive-link-card"
              title="Replace # with your Google Drive link"
            >
              <div className="drive-link-icon">🎥</div>
              <div className="drive-link-title">Video Projects</div>
              <div className="drive-link-url">
                <em>drive.google.com</em>/video-projects
              </div>
            </a>
            <a
              href="#"
              className="drive-link-card"
              title="Replace # with your Google Drive link"
            >
              <div className="drive-link-icon">🤝</div>
              <div className="drive-link-title">Client Work</div>
              <div className="drive-link-url">
                <em>drive.google.com</em>/client-work
              </div>
            </a>
            <a
              href="#"
              className="drive-link-card"
              title="Replace # with your Google Drive link"
            >
              <div className="drive-link-icon">🎊</div>
              <div className="drive-link-title">Event Coverage</div>
              <div className="drive-link-url">
                <em>drive.google.com</em>/event-coverage
              </div>
            </a>
          </div>
          <div className="drive-note">
            Replace the # hrefs above with your actual Google Drive share links
          </div>
        </Reveal>
      </section>

      <section id="brands">
        <Reveal>
          <div className="section-label portfolio-section-label">
            05 — Clients
          </div>
          <div className="section-heading">
            Brands I&apos;ve
            <br />
            Worked With
          </div>
        </Reveal>
        <Reveal className="brands-grid">
          {BRAND_CLIENTS.map((brand) => (
            <div key={brand.image} className="brand-box">
              <Center
                position="relative"
                boxSize="70px"
                borderRadius="full"
                overflow="hidden"
                flexShrink={0}
              >
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="70px"
                  quality={90}
                  style={{ objectFit: "cover" }}
                />
              </Center>
              <div className="brand-name">{brand.name}</div>
              <div>{brand.category}</div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="tools">
        <Reveal>
          <div className="section-label">06 — Toolkit</div>
          <div className="section-heading tools-heading-white">
            Tools &amp;
            <br />
            Platforms
          </div>
        </Reveal>
        <Reveal className="tools-row">
          <div className="tool-group">
            <div className="tool-group-label">Social Platforms</div>
            <div className="tool-list">
              <div className="tool-item">
                <span className="ti">📸</span> Instagram
              </div>
              <div className="tool-item">
                <span className="ti">🎵</span> TikTok
              </div>
              <div className="tool-item">
                <span className="ti">👥</span> Facebook
              </div>
            </div>
          </div>
          <div className="tool-group">
            <div className="tool-group-label">Video Editing</div>
            <div className="tool-list">
              <div className="tool-item">
                <span className="ti">✂️</span> CapCut
              </div>
              <div className="tool-item">
                <span className="ti">🎬</span> VN Editor
              </div>
              <div className="tool-item">
                <span className="ti">📱</span> InShot
              </div>
            </div>
          </div>
          <div className="tool-group">
            <div className="tool-group-label">Design & Management</div>
            <div className="tool-list">
              <div className="tool-item">
                <span className="ti">🎨</span> Canva
              </div>
              <div className="tool-item">
                <span className="ti">☁️</span> Google Drive
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact">
        <div className="contact-inner">
          <Reveal className="contact-left">
            <div className="section-label">07 — Contact</div>
            <div className="contact-heading">
              Let&apos;s
              <br />
              Work
              <br />
              Together
            </div>
            <p className="contact-sub">
              Ready to elevate your brand&apos;s content? Let&apos;s talk
              strategy, visuals, and storytelling. Reach out — I&apos;d love to
              hear about your project.
            </p>
          </Reveal>
          <Reveal className="contact-details">
            <a href="tel:07045401072" className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">0704 540 1072</div>
              </div>
            </a>
            <a href="mailto:Delaelliot28@gmail.com" className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">Delaelliot28@gmail.com</div>
              </div>
            </a>
            <a
              href="https://instagram.com/dainty_dela"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-item-icon">📸</div>
              <div>
                <div className="contact-item-label">Instagram</div>
                <div className="contact-item-value">@dainty_dela</div>
              </div>
            </a>
            <a
              href="https://tiktok.com/@Dela.the.creator"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <div className="contact-item-icon">🎵</div>
              <div>
                <div className="contact-item-label">TikTok</div>
                <div className="contact-item-value">@Dela.the.creator</div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          DELA<span> THE CREATOR</span>
        </div>
        <div className="footer-copy">
          © 2025 Mercy Elliot (Dela). All rights reserved.
        </div>
      </footer>
    </div>
  );
}
