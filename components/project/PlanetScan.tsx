"use client";

import Image from "next/image";

import {
  ArrowLeft,
  ExternalLink,
  Radio,
  Radar,
  ShieldCheck,
  Satellite,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import {
  projects,
} from "@/data/projects";

import {
  useGalaxyStore,
} from "@/store/galaxyStore";

export default function PlanetScan() {
  const selectedProjectId =
    useGalaxyStore(
      (state) =>
        state.selectedProjectId
    );

  const projectWorldOpen =
    useGalaxyStore(
      (state) =>
        state.projectWorldOpen
    );

  const closeProjectWorld =
    useGalaxyStore(
      (state) =>
        state.closeProjectWorld
    );

  const project =
    projects.find(
      (item) =>
        item.id ===
        selectedProjectId
    );

  if (
    !projectWorldOpen ||
    !project
  ) {
    return null;
  }

  return (
    <div className="planet-scan-enter fixed inset-0 z-[200] overflow-y-auto bg-[#020302] text-white">

      {/* GALACTIC GRID */}

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(215,255,0,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(215,255,0,.3) 1px, transparent 1px)
          `,

          backgroundSize:
            "70px 70px",
        }}
      />

      {/* PLANET COLOR GLOW */}

      <div
        className="pointer-events-none fixed left-1/2 top-[20%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[220px]"
        style={{
          background:
            project.accent,
        }}
      />

      {/* TOP HUD */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#020302]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 lg:px-10">

          <button
            onClick={
              closeProjectWorld
            }
            className="flex items-center gap-3 font-mono text-[8px] tracking-[0.18em] text-white/40 transition hover:text-[#d7ff00]"
          >
            <ArrowLeft
              size={14}
            />

            RETURN TO ORBIT
          </button>

          <div className="flex items-center gap-3">

            <span
              className="h-2 w-2 rounded-full"
              style={{
                background:
                  project.accent,

                boxShadow:
                  `0 0 12px ${project.accent}`,
              }}
            />

            <p className="font-mono text-[8px] tracking-[0.2em] text-white/35">
              PLANETARY DATABASE

              <span
                className="ml-3"
                style={{
                  color:
                    project.accent,
                }}
              >
                ONLINE
              </span>
            </p>

          </div>

        </div>

      </header>

      <main className="relative z-10 mx-auto max-w-[1500px] px-6 pb-32 lg:px-10">

        {/* PLANET HERO */}

        <section className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-16 xl:grid-cols-[380px_minmax(0,1fr)_360px]">

          {/* LEFT SCAN DATA */}

          <div className="space-y-5">

            <ScanPanel
              icon={
                <Radar size={14} />
              }
              label="DESIGNATION"
            >
              <p
                className="text-2xl font-semibold tracking-[0.1em]"
                style={{
                  color:
                    project.accent,
                }}
              >
                {
                  project.planetCode
                }
              </p>
            </ScanPanel>

            <ScanPanel
              icon={
                <Satellite
                  size={14}
                />
              }
              label="CLASSIFICATION"
            >
              <p className="text-sm leading-6 text-white/75">
                {
                  project.classification
                }
              </p>
            </ScanPanel>

            <ScanPanel
              icon={
                <Radio size={14} />
              }
              label="GALACTIC SECTOR"
            >
              <p className="font-mono text-[10px] tracking-[0.15em] text-white/60">
                {project.sector}
              </p>
            </ScanPanel>

            <div className="grid grid-cols-2 gap-3">

              <MiniData
                label="DISCOVERED"
                value={project.year}
                color={
                  project.accent
                }
              />

              <MiniData
                label="STATUS"
                value={
                  project.status
                }
                color={
                  project.accent
                }
              />

            </div>

          </div>

          {/* CENTER PLANET */}

          <div className="relative flex min-h-[650px] items-center justify-center">

            {/* OUTER SCANNER */}

            <div
              className="absolute h-[560px] w-[560px] rounded-full border opacity-[0.09]"
              style={{
                borderColor:
                  project.accent,
              }}
            />

            <div className="absolute h-[470px] w-[470px] rounded-full border border-dashed border-white/[0.07]" />

            <div
              className="absolute h-[390px] w-[390px] rounded-full opacity-[0.09] blur-[80px]"
              style={{
                background:
                  project.accent,
              }}
            />

            {/* CROSSHAIR */}

            <div className="absolute left-1/2 top-8 h-20 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="absolute bottom-8 left-1/2 h-20 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="absolute left-8 top-1/2 h-px w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="absolute right-8 top-1/2 h-px w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <Image
              src={
                project.image
              }
              alt={
                project.name
              }
              width={600}
              height={600}
              priority
              className="relative z-10 h-[400px] w-[400px] rounded-full object-cover drop-shadow-[0_0_80px_rgba(215,255,0,0.15)]"
            />

            {/* SCAN STATUS */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">

              <div className="flex items-center gap-3 font-mono text-[7px] tracking-[0.22em] text-white/30">

                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background:
                      project.accent,

                    boxShadow:
                      `0 0 10px ${project.accent}`,
                  }}
                />

                PLANETARY SCAN COMPLETE

              </div>

            </div>

          </div>

          {/* RIGHT DESCRIPTION */}

          <div>

            <p
              className="font-mono text-[8px] tracking-[0.3em]"
              style={{
                color:
                  project.accent,
              }}
            >
              PLANETARY ANALYSIS
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] lg:text-6xl">
              {project.name}
            </h1>

            <p className="mt-7 text-sm leading-8 text-white/45">
              {
                project.planetaryDescription
              }
            </p>

            <div className="mt-10 border-t border-white/10 pt-6">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={15}
                  style={{
                    color:
                      project.accent,
                  }}
                />

                <p className="font-mono text-[7px] tracking-[0.2em] text-white/35">
                  EXPLORATION AUTHORIZED
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ATMOSPHERIC COMPOSITION */}

        <section className="border-t border-white/10 py-24">

          <SectionHeading
            number="01"
            title="ATMOSPHERIC COMPOSITION"
            subtitle="PRIMARY TECHNOLOGICAL ELEMENTS"
            accent={
              project.accent
            }
          />

          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">

            {project.technologies.map(
              (
                technology,
                index
              ) => (
                <div
                  key={
                    technology
                  }
                  className="relative min-h-[150px] border border-white/10 bg-black/20 p-5"
                >

                  <p className="font-mono text-[6px] tracking-[0.17em] text-white/25">
                    ELEMENT //

                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </p>

                  <p
                    className="mt-8 text-sm font-medium"
                    style={{
                      color:
                        project.accent,
                    }}
                  >
                    {
                      technology
                    }
                  </p>

                  <div className="absolute bottom-5 left-5 right-5 h-px bg-white/10">

                    <div
                      className="h-full"
                      style={{
                        width:
                          `${65 + ((index * 7) % 30)}%`,

                        background:
                          project.accent,
                      }}
                    />

                  </div>

                </div>
              )
            )}

          </div>

          <p className="mt-4 font-mono text-[6px] tracking-[0.13em] text-white/20">
            // BARS REPRESENT SYSTEM PRESENCE, NOT CODE PERCENTAGE
          </p>

        </section>

        {/* PLANETARY CAPABILITIES */}

        <section className="border-t border-white/10 py-24">

          <SectionHeading
            number="02"
            title="PLANETARY CAPABILITY SYSTEMS"
            subtitle="ACTIVE INFRASTRUCTURE"
            accent={
              project.accent
            }
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {project.features.map(
              (
                feature,
                index
              ) => (
                <CapabilityCard
                  key={
                    feature.name
                  }
                  number={
                    index + 1
                  }
                  name={
                    feature.name
                  }
                  description={
                    feature.description
                  }
                  accent={
                    project.accent
                  }
                />
              )
            )}

          </div>

        </section>

        {/* SOURCE TRANSMISSION */}

        <section className="border-t border-white/10 py-24">

          <SectionHeading
            number="03"
            title="EXPLORATION CHANNELS"
            subtitle="EXTERNAL ACCESS"
            accent={
              project.accent
            }
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-2">

            <AccessPanel
              title="ACCESS SOURCE ARCHIVES"
              subtitle="GitHub Repository"
              description="Inspect the source infrastructure, project history and implementation details stored in the planetary archives."
              accent={
                project.accent
              }
              icon={
                <FaGithub
                  size={22}
                />
              }
              href={
                project.github
              }
            />

            <AccessPanel
              title="ESTABLISH CONNECTION"
              subtitle="Live Project"
              description="Open a direct communication channel to the deployed project environment when an active transmission is available."
              accent={
                project.accent
              }
              icon={
                <ExternalLink
                  size={20}
                />
              }
              href={
                project.demo
              }
            />

          </div>

        </section>

      </main>

    </div>
  );
}

function ScanPanel({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative border border-white/10 bg-black/20 p-5">

      <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-[#d7ff00]" />

      <div className="flex items-center gap-2 text-[#d7ff00]">

        {icon}

        <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
          {label}
        </span>

      </div>

      <div className="mt-5">
        {children}
      </div>

    </div>
  );
}

function MiniData({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="border border-white/10 p-4">

      <p className="font-mono text-[6px] tracking-[0.18em] text-white/25">
        {label}
      </p>

      <p
        className="mt-3 text-[8px] uppercase tracking-[0.1em]"
        style={{
          color,
        }}
      >
        {value}
      </p>

    </div>
  );
}

function SectionHeading({
  number,
  title,
  subtitle,
  accent,
}: {
  number: string;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div>

      <div className="flex items-center gap-4">

        <span
          className="font-mono text-[8px]"
          style={{
            color:
              accent,
          }}
        >
          {number}
        </span>

        <h2 className="text-sm font-medium tracking-[0.18em] text-white/80">
          {title}
        </h2>

        <div className="h-px flex-1 bg-white/10" />

      </div>

      <p className="ml-8 mt-2 font-mono text-[6px] tracking-[0.17em] text-white/20">
        {subtitle}
      </p>

    </div>
  );
}

function CapabilityCard({
  number,
  name,
  description,
  accent,
}: {
  number: number;
  name: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="group relative min-h-[230px] border border-white/10 bg-black/20 p-6 transition hover:border-white/20">

      <p
        className="font-mono text-[7px]"
        style={{
          color:
            accent,
        }}
      >
        SYSTEM //

        {String(
          number
        ).padStart(
          2,
          "0"
        )}
      </p>

      <h3 className="mt-9 text-sm font-medium tracking-[0.08em] text-white/80">
        {name}
      </h3>

      <p className="mt-5 text-xs leading-6 text-white/35">
        {description}
      </p>

      <div
        className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background:
            accent,
        }}
      />

    </div>
  );
}

function AccessPanel({
  title,
  subtitle,
  description,
  accent,
  icon,
  href,
}: {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="group relative min-h-[230px] border border-white/10 bg-black/20 p-7 transition hover:border-white/25">

      <div
        style={{
          color:
            accent,
        }}
      >
        {icon}
      </div>

      <h3 className="mt-7 text-sm font-medium tracking-[0.12em] text-white">
        {title}
      </h3>

      <p
        className="mt-2 font-mono text-[7px] tracking-[0.16em]"
        style={{
          color:
            accent,
        }}
      >
        {subtitle}
      </p>

      <p className="mt-5 max-w-md text-xs leading-6 text-white/35">
        {description}
      </p>

      <p className="mt-7 font-mono text-[7px] tracking-[0.15em] text-white/25">
        {href
          ? "CHANNEL AVAILABLE →"
          : "CHANNEL OFFLINE"}
      </p>

    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}