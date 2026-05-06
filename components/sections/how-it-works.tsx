"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "Logistics",
    title: "GPS-Tracked, End-to-End Custody",
    body: "From your server room to the processing facility, every asset is sealed, tagged, and tracked via GPS. The chain-of-custody never breaks. You know where your assets are — always.",
    tags: ["Real-time GPS", "Tamper-evident seals", "Custody handoffs"],
  },
  {
    num: "02",
    label: "Data Destruction",
    title: "Certified, Verifiable Data Erasure",
    body: "Every asset undergoes NIST 800-88 compliant data wiping or physical destruction. Each step is timestamped, witnessed, and documented — producing an evidence trail your DPO, auditors, and board can trust.",
    tags: ["NIST 800-88", "DoD 5220.22-M", "Physical Shredding"],
  },
  {
    num: "03",
    label: "Platform",
    title: "Immutable Audit Trail, API-Driven",
    body: "Our SaaS compliance platform integrates directly into your existing IT workflows — ERP, ServiceNow, and more. Every action is logged to an immutable audit trail, ready for regulatory review at any time.",
    tags: ["REST API", "ServiceNow", "ERP Connectors"],
  },
  {
    num: "04",
    label: "Recovery",
    title: "Vetted Recycler Network",
    body: "We connect only with licensed, verified downstream partners. No shortcuts. No unlicensed recyclers. Recovered value is returned to you; what cannot be recovered is disposed of responsibly.",
    tags: ["Licensed partners", "Asset recovery value", "R2 aligned"],
  },
  {
    num: "05",
    label: "Compliance",
    title: "Built for Kenyan & Global Regulation",
    body: "Cindariq is designed to satisfy Kenya's Data Protection Act, PCI DSS, GDPR data residency requirements, and ISO 27001 data management standards — in a single, unified process.",
    tags: ["Kenya DPA", "GDPR-ready", "PCI DSS"],
  },
  {
    num: "06",
    label: "Reporting",
    title: "Board-Ready ESG Documentation",
    body: "Every retirement cycle generates comprehensive ESG-aligned reports: environmental impact metrics, carbon offset estimates, and waste diversion tonnage. Exactly what your sustainability disclosures require.",
    tags: ["ESG metrics", "Carbon data", "Board reports"],
  },
];

interface HowItWorksProps {
  showHeading?: boolean;
}

export function HowItWorks({ showHeading = true }: HowItWorksProps) {
  return (
    <section className="bg-slate py-32" id="how-it-works">
      <div className="mx-auto max-w-360 px-6 md:px-10 lg:px-20">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-20 max-w-[56ch]"
          >
            <p className="mb-4 flex items-center gap-2 text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
              <span className="inline-block h-[1.5px] w-5 shrink-0 bg-ember" aria-hidden="true" />
              How We Do It
            </p>
            <h2 className="text-h2 leading-[1.1] font-bold tracking-[-0.03em] text-smoke">
              The compliance infrastructure{" "}
              <span className="font-light text-smoke/60">Kenya has been missing.</span>
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-steel/30 bg-steel/20 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative bg-slate p-11 transition-colors duration-300 hover:bg-cinder"
            >
              <div className="mb-5 font-sans text-[3.5rem] leading-none font-bold tracking-tighter text-smoke/10">
                {step.num}
              </div>
              <p className="mb-3 text-eyebrow font-semibold tracking-[0.08em] text-ember uppercase">
                {step.label}
              </p>
              <h3 className="mb-3 text-h4 leading-tight font-semibold text-smoke">{step.title}</h3>
              <p className="text-body leading-relaxed font-light text-smoke/70">{step.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-ember/20 bg-ember/5 px-3 py-1 font-sans text-[0.65rem] font-medium tracking-widest text-ember/50 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
