// lib/cms.js — Static data: services, products, jobs
// Blog posts live in content/posts/ as Markdown files (see lib/posts.js)

export const services = [
  {
    slug: "software-development",
    icon: "Code2",
    name: "Software Development",
    description:
      "Custom software engineered for scale — from MVP to enterprise platform, built with modern stacks and rigorous quality.",
    benefits: ["Bespoke architecture", "Full SDLC ownership", "CI/CD & testing baked in"],
  },
  {
    slug: "cloud-solutions",
    icon: "Cloud",
    name: "Cloud Solutions",
    description:
      "Design, migrate, and operate workloads on AWS, Azure, and GCP with cost-optimized, secure cloud-native architectures.",
    benefits: ["Multi-cloud expertise", "Infrastructure as Code", "FinOps optimization"],
  },
  {
    slug: "web-applications",
    icon: "Globe",
    name: "Web Applications",
    description:
      "High-performance web platforms with elegant UX — built on React, Next.js, and edge-first architectures.",
    benefits: ["Lighthouse 95+ performance", "SEO-first builds", "Accessible by default"],
  },
  {
    slug: "mobile-applications",
    icon: "Smartphone",
    name: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native, Swift, and Kotlin.",
    benefits: ["Single codebase delivery", "Native module support", "App Store launch ready"],
  },
  {
    slug: "it-consulting",
    icon: "Briefcase",
    name: "IT Consulting",
    description:
      "Strategic technology advisory to align IT investments with business outcomes and accelerate decision making.",
    benefits: ["Technology roadmaps", "Vendor evaluation", "Architecture audits"],
  },
  {
    slug: "digital-transformation",
    icon: "Sparkles",
    name: "Digital Transformation",
    description:
      "Reimagine operations end-to-end — process automation, data platforms, and modern customer experience.",
    benefits: ["Change management", "Workflow automation", "Data-driven KPIs"],
  },
  {
    slug: "enterprise-technology",
    icon: "Building2",
    name: "Enterprise Technology",
    description:
      "Mission-critical systems integration, ERP/CRM modernization, and large-scale platform engineering.",
    benefits: ["SAP / Salesforce integration", "Zero-downtime migrations", "24/7 SLAs"],
  },
  {
    slug: "ai-data",
    icon: "Brain",
    name: "AI & Data Engineering",
    description:
      "Production AI systems, LLM applications, and modern data pipelines that turn information into advantage.",
    benefits: ["RAG & agent systems", "Real-time pipelines", "MLOps best practice"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: "Megaphone",
    description:
      "Data-driven marketing strategies designed to increase your brand's online visibility, drive high-quality traffic, and maximize conversions.",
    benefits: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) campaigns",
      "Social media marketing & strategy",
      "Performance analytics & reporting",
    ],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    icon: "Globe",
    description:
      "Custom, secure, and highly scalable WordPress websites tailored to your business needs, featuring intuitive content management.",
    benefits: [
      "Custom theme & plugin development",
      "Headless WordPress architectures",
      "Speed & performance optimization",
      "Advanced security & maintenance",
    ],
  },
];

export const products = [
  {
    slug: "sellops",
    name: "SellOps ERP",
    tagline: "Complete ERP solution for modern businesses",
    description:
      "SellOps ERP is an all-in-one enterprise resource planning platform that helps businesses streamline sales, inventory, procurement, finance, HR, CRM, and daily operations. Available as both a web application and mobile app, SellOps empowers teams to work smarter with real-time insights and automation.",
    image: "/products/sellops.png",
    features: [
      "Sales & CRM Management",
      "Inventory & Warehouse Management",
      "Purchase & Procurement",
      "Accounting & Finance",
      "HR & Payroll",
      "Order & Invoice Management",
      "Business Analytics & Reports",
      "Web & Mobile Applications",
    ],
    category: "Enterprise Resource Planning (ERP)",
  },
];

export const blogCategories = ["All", "Cloud", "AI", "Web", "Design", "Security", "Architecture"];

export const jobs = [
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    level: "Fresher / Mid-Level",
    location: "Remote",
    type: "Contract / Freelance",
    description:
      "Design and build scalable web applications from database schemas to client-side components. Experience with the MERN ecosystem, modern APIs, and server management required.",
    postedAt: "2026-06-23",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    level: "Fresher / Mid-Level",
    location: "Remote",
    type: "Contract / Freelance",
    description:
      "Own end-to-end design paths for digital products. Bridge user empathy with clean visual identity, crafting systems that map perfectly to developer handoffs.",
    postedAt: "2026-06-23",
  },
];
