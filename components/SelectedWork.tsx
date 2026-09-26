"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, X } from "lucide-react";
import { useState } from "react";

type Analytics = {
  label: string;
  value: string;
};

type Work = {
  number: string;
  title: string;
  category: string;
  stack: string[];
  description: string;
  solved: string;
  url?: string;
  analytics?: Analytics[];
};

const works: Work[] = [
  {
    number: "01",
    title: "Henna by Ramya",
    category: "Full-stack website",
    stack: ["MERN Stack"],
    description:
      "A full-stack digital presence created for a creative henna brand.",
    solved:
      "Created a complete web experience to present the brand, services and work in a clear, engaging way.",
  },
  {
    number: "02",
    title: "Droog AI",
    category: "AI / Web application",
    stack: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Docker",
      "RAG",
      "GPT-4o-mini",
      "Google OAuth",
    ],
    description:
      "Droog AI is an AI-powered conversational platform I worked on for deploying intelligent assistants that can answer customer questions, retrieve information from a knowledge base, recommend relevant courses, collect leads, identify knowledge gaps, and escalate conversations when human support is required. My work covered AI agent configuration, prompt engineering, hybrid RAG retrieval, knowledge-base management, course recommendation systems, Google Sheets integration, FastAPI backend services, PostgreSQL, authentication, AWS deployment, Docker, WebChat and WordPress integration, lead management, escalation workflows, analytics, testing, and production debugging. One of the main implementations was an education consultancy assistant that helps users with study-abroad, university, course, admission, scholarship, visa, and post-study queries while combining conversational AI with structured course data.",
    solved:
      "Built and connected the different layers of the AI application, from the conversational interface and prompt pipeline to knowledge retrieval, course recommendations, backend APIs, cloud infrastructure, analytics, lead management, and human escalation. I also worked on production issues involving Google OAuth, JWT authentication, CORS, PostgreSQL constraints, API authorization, Docker deployments, AWS infrastructure, and recommendation workflows.",
    url: "https://app.droog.io",
    analytics: [
      { label: "Conversations", value: "1,173" },
      { label: "Users", value: "973" },
      { label: "Messages", value: "3,644" },
      { label: "Success Rate", value: "67.5%" },
      { label: "Escalation Rate", value: "22.89%" },
      { label: "Knowledge Documents", value: "52" },
      { label: "Course Catalog", value: "1,382" },
      { label: "Catalog Columns", value: "24" },
      { label: "Conversation Rating", value: "3.85 / 5" },
      { label: "Message Feedback", value: "193" },
    ],
  },
  {
    number: "03",
    title: "CourseFind",
    category: "Education / Search platform",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "GA4",
      "Google Search Console",
    ],
    description:
      "CourseFind is an education-focused course discovery platform designed to make searching for international university programs simpler and more useful for students. I worked across the website experience, backend functionality, structured course data, search and filtering system, analytics, and SEO setup. The platform allows users to search and discover courses based on country, program level, university, intake, delivery mode, duration, tuition fee range, scholarships, STEM designation, and mathematics requirements. One of the key features I worked on was displaying tuition fees according to the user's selected country, converting the original course fee into a relevant local-currency amount so students can understand the cost more easily instead of seeing a single fixed currency across all users. The course results provide structured information including university, country, duration, intakes, ranking, tuition fees, scholarships, academic requirements, and course details, while individual course pages provide deeper information such as campus locations, admission requirements, English proficiency requirements, course overview, scholarship information, and links to the university and course pages. I also worked with analytics and search-monitoring tools including GA4 and Google Search Console to understand how users discover the platform and monitor organic search performance, while implementing SEO-related improvements to make the course content more discoverable through search engines.",
    solved:
      "Built a searchable course discovery experience that brings together structured university and course information into one platform. The system supports multiple filters and course attributes, provides localized tuition-fee display based on the user's country context, and gives users detailed course information before sending them to the university or course website. I also worked on analytics and search monitoring to understand how users discover the platform and improve its visibility through organic search.",
    url: "https://search.coursefind.app",
  },
  {
    number: "04",
    title: "EduVerifi",
    category: "Education portal",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "EduVerifi is an Australian credential verification platform designed to help applicants, universities, employers, and organisations access trusted verification services through a structured digital experience. I worked on the frontend UI of the platform, translating the product's verification-focused requirements into a clean and professional interface. The website presents EduPassport, document and qualification verification services, security features, verification categories for Australia and India, English test verification, benefits, FAQs, and authorised verification sources. I focused on creating a clear information hierarchy, responsive layouts, reusable UI sections, visual consistency, and a trustworthy user experience suitable for a verification and compliance-focused product.",
    solved:
      "Designed and implemented the complete user-facing UI for the EduVerifi website, including the hero section, verification record presentation, EduPassport section, security-focused sections, service categories, benefits, FAQ area, authorised verification sources, and supporting footer content. The main focus was making a complex verification product easy to understand while maintaining a professional and trustworthy visual experience across the website.",
    url: "https://portal.eduverifi.com",
  },
  {
    number: "05",
    title: "ZEE5 Contest",
    category: "Campaign / Contest Platform",
    stack: ["React", "Supabase"],
    description:
      "A promotional giveaway platform created for the Jana Nayagan campaign on ZEE5. The website was designed to let viewers participate in the giveaway by submitting their personal details, ZEE5 registered account information, and a screenshot confirming their participation. I worked on the user-facing campaign experience as well as the entry management dashboard, creating a structured flow from the campaign landing page to giveaway submission and entry management. The campaign interface included a hero section, giveaway messaging, participant form, screenshot upload, terms confirmation, and submission flow, while the dashboard provided an overview of submitted entries and their details.",
    solved:
      "Built a complete campaign experience that made the giveaway participation process simple and structured. The platform collected participant information, handled screenshot submissions, and provided an admin dashboard to view and manage giveaway entries. Supabase was used for storing and managing the submitted giveaway data and uploaded screenshots.",
    analytics: [
      { label: "Total Entries", value: "1,203" },
      { label: "Campaign", value: "Jana Nayagan" },
      { label: "Platform", value: "ZEE5" },
      { label: "Status", value: "Entries Closed" },
    ],
    url: "https://jananayagancontest.com",
  },
  {
    number: "06",
    title: "LadyO",
    category: "E-commerce",
    stack: ["Shopify", "FlexyPay", "FlexyCart", "Meta Ads"],
    description:
      "Ladyo is a women's innerwear e-commerce brand where I worked on enhancing an existing Shopify storefront. The original UI was developed by another team, and my role focused on improving and extending the existing experience based on evolving product and business requirements. I worked on pricing and size presentation, refined existing interface elements, implemented additional UI sections, and handled SEO setup and optimization to improve the store's search visibility and product discoverability.",
    solved:
      "Improved the existing Shopify storefront without rebuilding the original design. I implemented pricing and size-related changes, refined product-facing UI elements, added new interface components, and completed SEO setup and optimization across the store while maintaining consistency with the existing Ladyo design.",
    url: "https://ladyo.in",
  },
];

export default function SelectedWork() {
  const [selected, setSelected] = useState<Work | null>(null);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const openWork = (work: Work) => {
    setSelected(work);
    setShowAnalytics(false);
  };

  const closeWork = () => {
    setSelected(null);
    setShowAnalytics(false);
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden py-28 md:py-40"
      style={{
        backgroundColor: "var(--cream)",
        color: "var(--plum)",
      }}
    >
      <div className="mx-auto max-w-[1450px] px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-[10px] uppercase tracking-[0.28em]"
              style={{ color: "var(--deep-lilac)" }}
            >
              Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif leading-[0.9] tracking-[-0.055em]"
              style={{
                fontSize: "clamp(4rem, 9vw, 9rem)",
              }}
            >
              Things I&apos;ve
              <br />
              <span style={{ color: "var(--deep-lilac)" }}>
                worked on.
              </span>
            </motion.h2>
          </div>

          <p
            className="max-w-[330px] text-sm leading-7"
            style={{ color: "var(--muted)" }}
          >
            A selection of websites, products, platforms and digital
            experiences I&apos;ve worked on.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard
              key={work.number}
              work={work}
              index={index}
              onOpen={() => openWork(work)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <WorkModal
            work={selected}
            onClose={closeWork}
            onOpenAnalytics={() => setShowAnalytics(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAnalytics && selected?.analytics && (
          <AnalyticsModal
            work={selected}
            onClose={() => setShowAnalytics(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function WorkCard({
  work,
  index,
  onOpen,
}: {
  work: Work;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
      whileHover={{ y: -6 }}
      className="group relative min-h-[260px] overflow-hidden rounded-[28px] border p-7 text-left transition-all duration-500 md:min-h-[300px] md:p-8"
      style={{
        borderColor: "var(--line)",
        backgroundColor: "rgba(255,255,255,0.28)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, var(--soft-lilac), transparent 70%)",
        }}
      />

      <div className="relative flex h-full min-h-[205px] flex-col justify-between md:min-h-[245px]">
        <div className="flex items-start justify-between">
          <span
            className="text-[10px] tracking-[0.2em]"
            style={{ color: "var(--muted)" }}
          >
            {work.number}
          </span>
        </div>

        <div>
          <p
            className="mb-4 text-[9px] uppercase tracking-[0.18em]"
            style={{ color: "var(--muted)" }}
          >
            {work.category}
          </p>

          <h3
            className="font-serif leading-[0.95] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[var(--deep-lilac)]"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
            }}
          >
            {work.title}
          </h3>

          <div
            className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.16em]"
            style={{ color: "var(--muted)" }}
          >
            Click to explore
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function WorkModal({
  work,
  onClose,
  onOpenAnalytics,
}: {
  work: Work;
  onClose: () => void;
  onOpenAnalytics: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden p-5 md:p-10"
      style={{ backgroundColor: "rgba(36,27,45,.72)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.96 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(event) => event.stopPropagation()}
        className="project-modal-scroll relative h-[85vh] w-full max-w-[950px] overflow-y-auto overscroll-contain rounded-[32px] p-7 md:p-10"
        style={{
          backgroundColor: "var(--cream)",
          color: "var(--plum)",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 hover:rotate-90"
          style={{ borderColor: "var(--line)" }}
          aria-label="Close project details"
        >
          <X size={17} strokeWidth={1.5} />
        </button>

        <div className="max-w-[820px]">
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.24em]"
            style={{ color: "var(--deep-lilac)" }}
          >
            {work.number} / {work.category}
          </p>

          <h3
            className="font-serif leading-[0.9] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
            }}
          >
            {work.title}
          </h3>

          <p
            className="mt-7 max-w-[780px] text-sm leading-8 md:text-base"
            style={{ color: "var(--muted)" }}
          >
            {work.description}
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--deep-lilac)" }}
              >
                Technologies used
              </p>

              <div className="flex flex-wrap gap-2">
                {work.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border px-3 py-2 text-[10px]"
                    style={{
                      borderColor: "var(--line)",
                      color: "var(--plum)",
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p
                className="mb-3 text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--deep-lilac)" }}
              >
                What I solved
              </p>

              <p
                className="text-sm leading-7"
                style={{ color: "var(--muted)" }}
              >
                {work.solved}
              </p>
            </div>
          </div>

          <div
            className="mt-10 flex flex-col gap-4 border-t pt-7 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              {work.analytics && (
                <button
                  type="button"
                  onClick={onOpenAnalytics}
                  className="group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--line)",
                    color: "var(--plum)",
                  }}
                >
                  <BarChart3
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  View analytics
                </button>
              )}

              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full px-5 py-3 text-[10px] uppercase tracking-[0.18em]"
                  style={{
                    backgroundColor: "var(--plum)",
                    color: "var(--cream)",
                  }}
                >
                  View live project
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--line)",
                color: "var(--plum)",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AnalyticsModal({
  work,
  onClose,
}: {
  work: Work;
  onClose: () => void;
}) {
  if (!work.analytics) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden p-5 md:p-10"
      style={{ backgroundColor: "rgba(36,27,45,.82)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.95 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(event) => event.stopPropagation()}
        className="analytics-modal-scroll relative h-[85vh] w-full max-w-[950px] overflow-y-auto rounded-[32px]"
        style={{
          backgroundColor: "var(--cream)",
          color: "var(--plum)",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-y",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="border-b p-7 md:p-10"
          style={{ borderColor: "var(--line)" }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-300 hover:rotate-90"
            style={{ borderColor: "var(--line)" }}
            aria-label="Close analytics"
          >
            <X size={17} strokeWidth={1.5} />
          </button>

          <p
            className="mb-4 text-[10px] uppercase tracking-[0.24em]"
            style={{ color: "var(--deep-lilac)" }}
          >
            Project analytics
          </p>

          <div className="flex flex-col gap-3 pr-12 md:flex-row md:items-end md:justify-between">
            <h3
              className="font-serif leading-none tracking-[-0.05em]"
              style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
              }}
            >
              {work.title}
            </h3>

            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "var(--muted)" }}
            >
              Performance snapshot
            </span>
          </div>
        </div>

        <div className="p-5 md:p-10">
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border md:grid-cols-3"
            style={{ borderColor: "var(--line)" }}
          >
            {work.analytics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="min-h-[145px] p-5 md:min-h-[170px] md:p-7"
                style={{
                  backgroundColor: "rgba(233,225,243,.28)",
                }}
              >
                <p
                  className="text-[9px] uppercase tracking-[0.16em]"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </p>

                <p
                  className="mt-7 font-serif leading-none tracking-[-0.045em]"
                  style={{
                    color: "var(--plum)",
                    fontSize: "clamp(1.7rem, 3.5vw, 3rem)",
                  }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            className="mt-8 flex flex-col gap-4 border-t pt-7 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: "var(--line)" }}
          >
            <p
              className="max-w-[600px] text-xs leading-6"
              style={{ color: "var(--muted)" }}
            >
              These figures represent the available project and platform
              metrics and are presented as a snapshot of the system&apos;s
              usage and performance.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-3 text-[10px] uppercase tracking-[0.18em]"
              style={{
                borderColor: "var(--line)",
                color: "var(--plum)",
              }}
            >
              Close
            </button>
          </div>
        </div>

        <style jsx>{`
          .analytics-modal-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .analytics-modal-scroll::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}