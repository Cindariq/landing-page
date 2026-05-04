"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaBehance } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

// TODO: Replace all placeholder entries with real team data before launch.
const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "[Founder Name]",
    role: "Founder & Chief Executive",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "2",
    name: "[Co-founder Name]",
    role: "Co-founder & Head of Operations",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b0e8?w=600&h=600&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "3",
    name: "[Head of Compliance]",
    role: "Head of Compliance",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "4",
    name: "[Head of Logistics]",
    role: "Head of Secure Logistics",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "[ESG Lead]",
    role: "ESG Reporting Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=face",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "6",
    name: "[Client Relations]",
    role: "Client Relations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex w-full flex-col items-start gap-8 px-0 py-8 font-sans select-none md:flex-row md:gap-10 lg:gap-14">
      {/* Photo grid */}
      <div className="flex shrink-0 gap-2 overflow-x-auto pb-1 md:gap-3 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-44 w-40 sm:h-52 sm:w-48 md:h-60 md:w-56"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 — offset down */}
        <div className="mt-12 flex flex-col gap-2 sm:mt-14 md:mt-17 md:gap-3">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-48 w-44 sm:h-56 sm:w-52 md:h-64 md:w-60"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 — half offset */}
        <div className="mt-5.5 flex flex-col gap-2 sm:mt-6.5 md:mt-8 md:gap-3">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-46 w-42 sm:h-54 sm:w-50 md:h-62 md:w-58"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* Member name list */}
      <div className="flex flex-1 flex-col gap-4 pt-0 sm:grid sm:grid-cols-2 md:flex md:flex-col md:gap-5 md:pt-2">
        {members.map((member) => (
          <MemberRow key={member.id} member={member} hoveredId={hoveredId} onHover={setHoveredId} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "relative shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-400",
        className,
        isDimmed ? "opacity-60" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 768px) 224px, (min-width: 640px) 192px, 176px"
        className="object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.77)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name row
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100",
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social icons */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-3 shrink-0 rounded-[5px] bg-cinder transition-all duration-300",
            isActive ? "w-5 bg-cinder" : "w-4 bg-cinder/25",
          )}
        />
        <span
          className={cn(
            "text-base leading-none font-semibold tracking-tight transition-colors duration-300 md:text-[18px]",
            isActive ? "text-cinder" : "text-cinder/80",
          )}
        >
          {member.name}
        </span>

        {/* Social icons — slide in on hover */}
        {hasSocial && (
          <div
            className={cn(
              "ml-0.5 flex items-center gap-1.5 transition-all duration-200",
              isActive
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-2 opacity-0",
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on X`}
                className="rounded p-1 text-ash transition-all duration-150 hover:scale-110 hover:bg-cinder/10 hover:text-cinder"
              >
                <FaXTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on LinkedIn`}
                className="rounded p-1 text-ash transition-all duration-150 hover:scale-110 hover:bg-cinder/10 hover:text-cinder"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on Instagram`}
                className="rounded p-1 text-ash transition-all duration-150 hover:scale-110 hover:bg-cinder/10 hover:text-cinder"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on Behance`}
                className="rounded p-1 text-ash transition-all duration-150 hover:scale-110 hover:bg-cinder/10 hover:text-cinder"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-6.75 text-[7px] font-medium tracking-[0.2em] text-ash uppercase md:text-[10px]">
        {member.role}
      </p>
    </div>
  );
}
