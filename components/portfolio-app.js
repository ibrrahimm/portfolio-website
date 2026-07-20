"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as THREE from "three";
import { ArrowRight, ChevronDown, ChevronUp, Download, ExternalLink, Mail, MessageCircleMore, SendHorizontal, X } from "lucide-react";

const content = {
  hero: {
    name: "Ibrahim Yehia",
    headline: {
      en: "Technical Solutions Engineer for Enterprise Integrations, Pre-Sales, and Digital Delivery",
      ar: "مهندس حلول تقنية متخصص في التكاملات المؤسسية وما قبل البيع وتسليم الحلول الرقمية",
    },
    subheadline: {
      en: "I lead end-to-end delivery for integration workflows, custom platforms, and automated technical solutions, turning complex requirements into deployable systems and commercially credible proposals.",
      ar: "أقود دورة التسليم الكاملة لمسارات التكامل والمنصات المخصصة والحلول التقنية المؤتمتة، مع تحويل المتطلبات المعقدة إلى أنظمة قابلة للتنفيذ وعروض فنية وتجارية موثوقة.",
    },
    primary: { en: "🚀 View Work", ar: "🚀 استعرض الأعمال" },
    secondary: { en: "📄 Download Resume", ar: "📄 تحميل السيرة الذاتية" },
  },
  profile: {
    eyebrow: {
      en: "Profile",
      ar: "نبذة",
    },
    title: {
      en: "Technical Solutions Engineer & Presales Lead",
      ar: "مهندس حلول تقنية وقائد ما قبل البيع",
    },
    paragraphs: [
      {
        en: "I manage delivery from discovery and technical scoping through prototype validation, proposal development, and rollout planning, with direct ownership of the solution path throughout execution.",
        ar: "أدير مسار التسليم من اكتشاف الاحتياجات وتحديد النطاق الفني وحتى التحقق من النماذج الأولية وإعداد العروض وخطط الإطلاق، مع مسؤولية مباشرة عن مسار الحل طوال التنفيذ.",
      },
      {
        en: "I operate as the bridge between clients, engineering, and product, translating business needs into structured scopes, integration logic, and production-ready execution.",
        ar: "أعمل كحلقة وصل بين العملاء وفرق الهندسة والمنتج، وأحوّل الاحتياجات التجارية إلى نطاقات واضحة ومنطق تكامل ومسارات تنفيذ جاهزة للإطلاق.",
      },
      {
        en: "My core strengths are data transformation, API and webhook integrations, and proposal-backed solution delivery that supports faster decision cycles and clearer client outcomes.",
        ar: "تتمثل نقاط قوتي الأساسية في تحويل البيانات وتكاملات الـ API والـ Webhooks وتسليم الحلول المدعوم بعروض قوية تسرّع اتخاذ القرار وتوضح الأثر لدى العميل.",
      },
    ],
    stats: [
      {
        value: "25+",
        label: {
          en: "Low-Level Designs and Platform Architectures Delivered",
          ar: "تصميماً تفصيلياً ومعماريات منصات تم تنفيذها",
        },
      },
      {
        value: "+10",
        label: {
          en: "Core Sectors Served Across Banking, EdTech, Healthcare, Real Estate, and Government",
          ar: "قطاعات رئيسية تم تقديم حلول لها عبر البنوك والتعليم والصحة والعقارات والجهات الحكومية",
        },
      },
      {
        value: "250+",
        label: {
          en: "Branches Sized and Delivered Across Multiple Programs",
          ar: "فرعاً تم تصميمها وتسليمها عبر برامج متعددة",
        },
      },

      {
        value: "5+",
        label: {
          en: "AI Automation Tools Built for Technical Analysis",
          ar: "أدوات ذكاء اصطناعي طُوّرت لدعم التحليل الفني",
        },
      },
      {
        value: "60%",
        label: {
          en: "Operational Downtime Reduction with Stronger SLA Performance",
          ar: "خفض في التوقفات التشغيلية مع تعزيز كفاءة الأداء التشغيلي",
        },
        chart: [ 98, 92, 86, 75, 64, 54, 45],
      },
      {
        value: "40%",
        label: {
          en: "Reduction in Delivery Effort Through Advanced Analytical Tooling",
          ar: "خفض في جهد التسليم الفني عبر أدوات تحليلية متقدمة",
        },
        chart: [ 98, 92, 86, 75, 64, 54, 40],
      },
      
    ],
  },
  methodology: [
    {
      id: "01",
      title: {
        en: "Client Discovery & Site Survey",
        ar: "استكشاف متطلبات العميل والمسح الميداني",
      },
      dataPoints: {
        en: ["Survey", "Constraints", "Bottlenecks"],
        ar: ["المعاينة", "القيود", "الاختناقات"],
      },
      description: {
        en: "Assessing the environment, constraints, and operational bottlenecks.",
        ar: "فهم البيئة التشغيلية والقيود وتحديد نقاط الاختناق الأساسية.",
      },
    },
    {
      id: "02",
      title: {
        en: "Digital Transformation Consulting",
        ar: "استشارات التحول الرقمي",
      },
      dataPoints: {
        en: ["Strategy", "Alignment", "Value"],
        ar: ["الاستراتيجية", "المواءمة", "القيمة"],
      },
      description: {
        en: "Aligning technical direction with business priorities and value.",
        ar: "مواءمة التوجه التقني مع أولويات العمل والقيمة المستهدفة.",
      },
    },
    {
      id: "03",
      title: {
        en: "Requirement Translation",
        ar: "ترجمة المتطلبات",
      },
      dataPoints: {
        en: ["Logic", "Specs", "Scope"],
        ar: ["المنطق", "المواصفات", "النطاق"],
      },
      description: {
        en: "Translating stakeholder needs into clear technical scopes and logic.",
        ar: "تحويل احتياجات أصحاب المصلحة إلى نطاقات فنية ومنطق تنفيذي واضح.",
      },
    },
    {
      id: "04",
      title: {
        en: "Proposals & Presentations",
        ar: "المقترحات والعروض التقديمية",
      },
      dataPoints: {
        en: ["RFP", "Pitch", "Narrative"],
        ar: ["RFP", "العرض", "السرد"],
      },
      description: {
        en: "Shaping proposals, commercial responses, and executive presentations.",
        ar: "صياغة العروض والاستجابات التجارية وتقديم العروض التنفيذية.",
      },
    },
    {
      id: "05",
      title: {
        en: "System Integration & Architecture",
        ar: "البنية التحتية وتكامل الأنظمة",
      },
      dataPoints: {
        en: ["Interop", "Devices", "Architecture"],
        ar: ["التوافق", "الأجهزة", "المعمارية"],
      },
      description: {
        en: "Designing reliable interoperability across platforms, devices, and data flows.",
        ar: "تصميم تكامل موثوق بين المنصات والأجهزة ومسارات البيانات.",
      },
    },
    {
      id: "06",
      title: {
        en: "R&D & POC Creation",
        ar: "البحث والتطوير وبناء النماذج المبدئية",
      },
      dataPoints: {
        en: ["Prototype", "Testing", "Validation"],
        ar: ["النموذج", "الاختبار", "التحقق"],
      },
      description: {
        en: "Building rapid proofs of concept to validate feasibility and direction.",
        ar: "بناء نماذج أولية سريعة للتحقق من الجدوى وصحة المسار.",
      },
    },
    {
      id: "07",
      title: {
        en: "Release & Handover",
        ar: "الإطلاق والتسليم",
      },
      dataPoints: {
        en: ["Launch", "Docs", "Transition"],
        ar: ["الإطلاق", "التوثيق", "الانتقال"],
      },
      description: {
        en: "Driving rollout, documentation, and smooth operational handover.",
        ar: "قيادة الإطلاق والتوثيق وضمان انتقال تشغيلي سلس.",
      },
    },
  ],
  industries: [
    {
      label: { en: "Banking & Finance", ar: "القطاع المصرفي والمالي" },
      clients: {
        en: "NBK, IDB, HSBC, KFH, ADCB, United Bank, NBE, Banque Misr.",
        ar: "NBK, IDB, HSBC, KFH, ADCB, United Bank, NBE, Banque Misr.",
      },
      solutions: {
        en: "Queue management, online booking, customer feedback, and CRM/API integration.",
        ar: "إدارة الطوابير والحجز الإلكتروني وتجارب قياس رضا العملاء وتكاملات الـ CRM والـ API.",
      },
    },
    {
      label: { en: "Education (EdTech)", ar: "تكنولوجيا التعليم" },
      clients: {
        en: "AOU, BUE, October Univ, American School in Egypt.",
        ar: "AOU, BUE, October Univ, American School in Egypt.",
      },
      solutions: {
        en: "Wayfinding, ID-scanning access control, and automated WhatsApp/SMS communication.",
        ar: "أنظمة التوجيه الملاحي والتحكم في الدخول عبر مسح الهوية والتواصل الآلي عبر واتساب والرسائل القصيرة.",
      },
    },
    {
      label: { en: "Real Estate & Hospitality", ar: "العقارات والضيافة" },
      clients: {
        en: "Taj City, Madinet Masr, Westin, Steigenberger.",
        ar: "Taj City, Madinet Masr, Westin, Steigenberger.",
      },
      solutions: {
        en: "Visitor management, self check-in, smart QR parking, and loyalty/CRM integrations.",
        ar: "إدارة الزوار وتسجيل الدخول الذاتي والمواقف الذكية بالـ QR وتكاملات الولاء والـ CRM.",
      },
    },
    {
      label: { en: "Healthcare", ar: "الرعاية الصحية" },
      clients: {
        en: "Cleopatra Group, As-Salam Intl, Ministry of Health.",
        ar: "Cleopatra Group, As-Salam Intl, Ministry of Health.",
      },
      solutions: {
        en: "Patient queuing, nurse calling workflows, and hospital database mapping.",
        ar: "مسارات انتظار المرضى وأنظمة استدعاء التمريض ومواءمة قواعد بيانات المستشفيات.",
      },
    },
    {
      label: { en: "Government & Energy", ar: "القطاع الحكومي والطاقة" },
      clients: {
        en: "Ministry of Electricity & Energy.",
        ar: "Ministry of Electricity & Energy.",
      },
      solutions: {
        en: "Nationwide infrastructure rollout, workflow blueprinting, and hardware-software interoperability validation.",
        ar: "نشر بنية تحتية على نطاق قومي وتخطيط مسارات العمل والتحقق من تكامل الأجهزة والبرمجيات.",
      },
    },
  ],
  arsenal: [
    {
      label: { en: "Software & Web", ar: "البرمجيات والويب" },
      items: ["Python (ETL & Automation)", "Next.js & React", "SQL (Supabase, PostgreSQL)"],
    },
    {
      label: { en: "System Integration", ar: "تكامل الأنظمة" },
      items: ["RESTful APIs", "JSON Webhooks", "Gateways", "ERP & CRM", "Payload Mapping", "Data Modeling & Transformation"],
    },
    {
      label: { en: "Engineering & Automation", ar: "الهندسة والأتمتة" },
      items: ["M2M", "n8n", "Postman & Mockup Servers", "Odoo Applications", "Hardware Software Verification", "AIoT Smart Control", "LLD", "PII & Tokenization", "Secure Networking", "AutoCAD"],
    },
    {
      label: { en: "Data & Analytics", ar: "البيانات والتحليلات" },
      items: ["Power BI", "Advanced Excel", "Data ETL (Competitor Benchmarking)"],
    },
  ],
  projects: [
    {
      title: { en: "AIoT Smart Gated Infrastructure", ar: "البنية التحتية الذكية للبوابات باستخدام AIoT" },
      impact: {
        en: "Built an AIoT access-control workflow linking vision nodes with centralized validation for automated gate decisions.",
        ar: "بناء مسار تحكم في الوصول يعتمد على AIoT ويربط العقد البصرية بمنطق تحقق مركزي لأتمتة قرارات الدخول.",
      },
      blueprint: {
        en: "Localized computer-vision verification integrated through secure JSON webhooks with centralized relational databases.",
        ar: "نموذج تحقق محلي للرؤية الحاسوبية متكامل عبر JSON Webhooks آمنة مع قواعد بيانات علائقية مركزية.",
      },
    },
    {
      title: {
        en: "Data-Driven Analytical Console & Automated ETL Pipeline",
        ar: "منصة تحليل البيانات المستندة إلى الأداء ومسار ETL الآلي",
      },
      impact: {
        en: "Delivered a real-time analytical console that improved operational visibility and competitor benchmarking speed.",
        ar: "تقديم منصة تحليلية لحظية حسّنت رؤية الأداء وسرّعت المقارنات المرجعية التنافسية.",
      },
      blueprint: {
        en: "Built with Next.js, React, Supabase, and a custom Python engine, cutting effort-estimation time by 40%.",
        ar: "تم بناء المنصة باستخدام Next.js وReact وSupabase ومحرك Python مخصص، مع خفض زمن تقدير الجهد بنسبة 40%.",
      },
    },
    {
      title: {
        en: "SCZONE Infrastructure Tracking Networks (PETROJET)",
        ar: "شبكات تتبع البنية التحتية للمنطقة الاقتصادية لقناة السويس (بتروجيت)",
      },
      impact: {
        en: "Standardized tracking-network architecture across SCZONE sites to reduce field ambiguity and improve delivery confidence.",
        ar: "توحيد معمارية شبكات التتبع عبر مواقع SCZONE لتقليل الغموض الميداني ورفع موثوقية التنفيذ.",
      },
      blueprint: {
        en: "Formulated 25+ LLDs, accelerated delivery by 30%, and reduced downtime by 60% through field diagnostics.",
        ar: "صياغة أكثر من 25 تصميماً تفصيلياً، وتسريع التسليم بنسبة 30%، وخفض التوقفات التشغيلية بنسبة 60% عبر التشخيص الميداني.",
      },
    },
    {
      title: {
        en: "Armed Forces ISI Alexandria 17 Beach Resort System",
        ar: "نظام منتجع شاطئ 17 التابع للقوات المسلحة بالإسكندرية",
      },
      impact: {
        en: "Delivered an integrated guest journey linking mobile reservations, parking allocation, and access control.",
        ar: "تقديم رحلة ضيف متكاملة تربط الحجوزات عبر الهاتف وتخصيص المواقف والتحكم في الوصول.",
      },
      blueprint: {
        en: "Designed the reservation flow and integrated it with access control for booked and walk-in visitors.",
        ar: "تصميم مسار الحجوزات وربطه بنظام التحكم في الوصول لإدارة الحجوزات والزوار الفوريين.",
      },
    },
    {
      title: {
        en: "Ministry of Electricity & Energy National Rollout (60 Branches)",
        ar: "النشر القومي لوزارة الكهرباء والطاقة (60 فرعاً)",
      },
      impact: {
        en: "Structured a nationwide rollout model for a 60-branch government program with repeatable deployment standards.",
        ar: "هيكلة نموذج نشر وطني لبرنامج حكومي يضم 60 فرعاً بمعايير نشر قابلة للتكرار.",
      },
      blueprint: {
        en: "Designed and reviewed unified queuing and integration packages across 60 regional branches.",
        ar: "تصميم ومراجعة حزم الانتظار وتكامل الأنظمة الموحدة عبر 60 فرعاً إقليمياً.",
      },
    },
    {
      title: {
        en: "High-End School Management System",
        ar: "نظام إدارة المدارس المتطور",
      },
      impact: {
        en: "Replaced fragmented school administration workflows with one digital operating layer for attendance, staff, students, and reporting.",
        ar: "استبدال مسارات الإدارة المدرسية المتجزئة بطبقة تشغيل رقمية موحدة للحضور والموظفين وشؤون الطلاب والتقارير.",
      },
      blueprint: {
        en: "Independently developed a custom platform covering students, staff, attendance tracking, analytics, and reporting.",
        ar: "تطوير مستقل لمنصة مخصصة تغطي الطلاب والموظفين وتتبع الحضور والتحليلات والتقارير.",
      },
    },
  ],
  contact: {
    title: { en: "Start a Conversation", ar: "ابدأ تواصلك" },
    fields: {
      fullName: { en: "Full Name", ar: "الاسم الكامل" },
      email: { en: "Work Email", ar: "البريد الإلكتروني" },
      company: { en: "Company", ar: "الشركة" },
      reason: { en: "Reason for Contact", ar: "سبب التواصل" },
    },
    reasons: [
      { en: "Project Discussion", ar: "مناقشة مشروع" },
      { en: "Consulting Inquiry", ar: "استفسار استشاري" },
      { en: "Pre-Sales / Technical Proposal", ar: "ما قبل البيع / عرض فني" },
      { en: "Partnership Opportunity", ar: "فرصة شراكة" },
      { en: "Career Opportunity", ar: "فرصة مهنية" },
      { en: "Other", ar: "أخرى" },
    ],
    submit: { en: "📨 Send Inquiry", ar: "📨 إرسال الطلب" },
    linkedin: {
      en: "💼 LinkedIn",
      ar: "💼 لينكد إن",
    },
    emailAnchor: {
      en: "✉️ Email",
      ar: "✉️ البريد الإلكتروني",
    },
    quickButton: {
      en: "Check Availability",
      ar: "التحقق من التوفر",
    },
    success: {
      en: "Your inquiry has been sent successfully.",
      ar: "تم إرسال طلبك بنجاح.",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionOrder = ["hero", "profile", "methodology", "industries", "arsenal", "solutions", "contact"];
const sectionThemes = {
  hero: {
    a: "rgba(56, 189, 248, 0.14)",
    b: "rgba(129, 140, 248, 0.12)",
  },
  profile: {
    a: "rgba(129, 140, 248, 0.14)",
    b: "rgba(56, 189, 248, 0.08)",
  },
  methodology: {
    a: "rgba(56, 189, 248, 0.12)",
    b: "rgba(103, 232, 249, 0.08)",
  },
  industries: {
    a: "rgba(74, 222, 128, 0.08)",
    b: "rgba(56, 189, 248, 0.08)",
  },
  arsenal: {
    a: "rgba(250, 204, 21, 0.07)",
    b: "rgba(129, 140, 248, 0.08)",
  },
  solutions: {
    a: "rgba(56, 189, 248, 0.1)",
    b: "rgba(236, 72, 153, 0.08)",
  },
  contact: {
    a: "rgba(129, 140, 248, 0.14)",
    b: "rgba(56, 189, 248, 0.12)",
  },
};

export default function PortfolioApp() {
  const [lang, setLang] = useState("en");
  const [activeMethod, setActiveMethod] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openProject, setOpenProject] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isQuickPanelOpen, setIsQuickPanelOpen] = useState(false);
  const [isSubmittingMain, setIsSubmittingMain] = useState(false);
  const [isSubmittingQuick, setIsSubmittingQuick] = useState(false);
  const [toast, setToast] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    reason: "",
  });
  const [quickFormData, setQuickFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const isArabic = lang === "ar";
  const direction = isArabic ? "rtl" : "ltr";
  const pick = useMemo(() => (value) => (value?.[lang] ? value[lang] : value), [lang]);
  const activeTheme = sectionThemes[activeSection] || sectionThemes.hero;

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang");
    if (stored === "en" || stored === "ar") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = direction;
  }, [direction, lang]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const sections = sectionOrder
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".premium-hover-card"));
    const cleanups = [];

    cards.forEach((card) => {
      const handleMove = (event) => {
        const rect = card.getBoundingClientRect();
        const relativeX = event.clientX - rect.left;
        const relativeY = event.clientY - rect.top;
        const offsetX = ((relativeX / rect.width) - 0.5) * 18;
        const offsetY = ((relativeY / rect.height) - 0.5) * 18;

        card.style.setProperty("--mx", `${offsetX}px`);
        card.style.setProperty("--my", `${offsetY}px`);
        card.style.setProperty("--gx", `${(relativeX / rect.width) * 100}%`);
        card.style.setProperty("--gy", `${(relativeY / rect.height) * 100}%`);
      };

      const handleLeave = () => {
        card.style.setProperty("--mx", "0px");
        card.style.setProperty("--my", "0px");
        card.style.setProperty("--gx", "50%");
        card.style.setProperty("--gy", "50%");
      };

      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);
      cleanups.push(() => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [activeIndustry, activeMethod, isQuickPanelOpen, lang, openProject]);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return undefined;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      setHeroTilt({
        x: relativeY * -12,
        y: relativeX * 16,
      });
    };

    const handleLeave = () => setHeroTilt({ x: 0, y: 0 });

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", handleLeave);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleQuickInputChange = (event) => {
    const { name, value } = event.target;
    setQuickFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmittingMain(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "main",
          lang,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setToast(pick(content.contact.success));
      setFormData({
        fullName: "",
        email: "",
        company: "",
        reason: "",
      });
    } catch {
      setToast(
        isArabic
          ? "تعذر إرسال الطلب حالياً. حاول مرة أخرى بعد قليل."
          : "The request could not be sent right now. Please try again shortly."
      );
    } finally {
      setIsSubmittingMain(false);
    }
  };

  const handleQuickSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmittingQuick(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "quick",
          lang,
          ...quickFormData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setToast(
        isArabic
          ? "تم إرسال الرسالة السريعة بنجاح."
          : "Quick message submitted successfully."
      );
      setQuickFormData({
        fullName: "",
        email: "",
        message: "",
      });
      setIsQuickPanelOpen(false);
    } catch {
      setToast(
        isArabic
          ? "تعذر إرسال الرسالة السريعة حالياً."
          : "The quick message could not be sent right now."
      );
    } finally {
      setIsSubmittingQuick(false);
    }
  };

  const currentSectionIndex = Math.max(0, sectionOrder.indexOf(activeSection));
  const canGoUp = currentSectionIndex > 0;
  const canGoDown = currentSectionIndex < sectionOrder.length - 1;

  const scrollToSection = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsQuickPanelOpen(false);
  };

  return (
    <main
      className="portfolio-shell"
      dir={direction}
      data-section={activeSection}
      style={{
        "--chapter-glow-a": activeTheme.a,
        "--chapter-glow-b": activeTheme.b,
      }}
    >
      <header className="sticky-nav">
        <button type="button" className="monogram" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span>IY</span>
        </button>

        <div className="lang-switch" aria-label="language switch">
          <button
            type="button"
            className={lang === "ar" ? "active" : ""}
            onClick={() => setLang("ar")}
          >
            AR
          </button>
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </header>

      <motion.div
        className="section-arrow-rail"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
      >
        <button
          type="button"
          className="arrow-button"
          onClick={() => canGoUp && scrollToSection(sectionOrder[currentSectionIndex - 1])}
          disabled={!canGoUp}
          aria-label="Scroll up"
        >
          <ChevronUp size={18} />
        </button>
        <span className="arrow-rail-label">
          {String(currentSectionIndex + 1).padStart(2, "0")} / {String(sectionOrder.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          className="arrow-button arrow-button-down"
          onClick={() => canGoDown && scrollToSection(sectionOrder[currentSectionIndex + 1])}
          disabled={!canGoDown}
          aria-label="Scroll down"
        >
          <ChevronDown size={18} />
        </button>
      </motion.div>

      <section className="hero-section" id="hero">
        <ParticleField />
        <div
          ref={heroRef}
          className="hero-copy hero-parallax-stage"
          style={{
            "--hero-rotate-x": `${heroTilt.x}deg`,
            "--hero-rotate-y": `${heroTilt.y}deg`,
            "--hero-shift-x": `${heroTilt.y * 1.4}px`,
            "--hero-shift-y": `${heroTilt.x * -1.2}px`,
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1>{content.hero.name}</h1>
            <h2>
              <WordReveal text={pick(content.hero.headline)} />
            </h2>
            <p className="hero-subheadline">{pick(content.hero.subheadline)}</p>

            <div className="hero-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>{pick(content.hero.primary)}</span>
                <ArrowRight size={18} className="animated-arrow" />
              </button>

              <a className="secondary-button" href="/Ibrahim_Yehia_CV.pdf" download>
                <Download size={18} />
                <span>{pick(content.hero.secondary)}</span>
              </a>
            </div>

            <button
              type="button"
              className="hero-scroll-arrow"
              onClick={() => scrollToSection("profile")}
              aria-label="Scroll to next section"
            >
              <span>{isArabic ? "⬇️ تابع للأسفل" : "⬇️ Scroll Down"}</span>
              <ChevronDown size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="section-block"
        id="profile"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
      >
        <div className="profile-atmosphere">
          <article className="profile-card narrative-card">
            <span className="editorial-kicker">{pick(content.profile.eyebrow)}</span>
            <h3>{pick(content.profile.title)}</h3>

            <div className="profile-paragraphs">
              {content.profile.paragraphs.map((paragraph) => (
                <p key={paragraph.en}>{pick(paragraph)}</p>
              ))}
            </div>
          </article>

          <aside className="profile-stats-grid">
            {content.profile.stats.map((stat, index) => (
              <motion.div
                key={`${stat.value}-${stat.label.en}`}
                className="fact-card profile-stat-card premium-hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <strong>
                  <AnimatedCounter value={stat.value} delay={index * 160} />
                </strong>
                <span>{pick(stat.label)}</span>
                {stat.chart ? <Sparkline points={stat.chart} delay={index * 0.1} /> : null}
              </motion.div>
            ))}
          </aside>
        </div>
      </motion.section>

      <motion.section
        className="section-block"
        id="methodology"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionHeader
          tag={isArabic ? "🧬 المنهجية" : "🧬 Methodology"}
          title={isArabic ? "تدفق تنفيذي بتصميم DNA من الاكتشاف إلى التسليم" : "DNA Flow from Discovery to Delivery"}
        />

        <div className="stepper-shell dna-shell">
          <div className="dna-layout">
            <div className="dna-showcase premium-hover-card">
              <div className="dna-three-wrap">
                <DNAHelixScene activeIndex={activeMethod} />
              </div>
              <div className="dna-showcase-overlay">
                <span className="method-floating-kicker">
                  {isArabic ? "التسلسل التنفيذي" : "Execution Sequence"}
                </span>
                <h3>{pick(content.methodology[activeMethod].title)}</h3>
                  {isArabic
                    ? "Discovery"
                    : "Discovery"}
              </div>
              <div className="dna-vertical-shell">
                <div className="dna-vertical-spine" />
                <div className="dna-vertical-spine dna-vertical-spine-secondary" />
                {content.methodology.map((step, index) => (
                  <motion.article
                    key={step.id}
                    className={`dna-vertical-card premium-hover-card ${index % 2 === 0 ? "left" : "right"} ${activeMethod === index ? "active" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 18 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    onMouseEnter={() => setActiveMethod(index)}
                    onFocus={() => setActiveMethod(index)}
                  >
                    <span className="dna-card-dot" />
                    <span className="step-index">{step.id}</span>
                    <span className="step-mini-tag">{step.dataPoints[lang][0]}</span>
                    <h3>{pick(step.title)}</h3>
                    <p>{pick(step.description)}</p>
                    <div className="method-point-grid">
                      {step.dataPoints[lang].map((point) => (
                        <span key={point} className="method-point-chip">
                          {point}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-block"
        id="industries"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionHeader
          tag={isArabic ? "🏦 القطاعات" : "🏦 Industries"}
          title={isArabic ? "اختراق تنفيذي عبر قطاعات متعددة" : "Cross-Industry Penetration"}
        />

        <div className="industry-layout">
          <div className="industry-tabs">
            {content.industries.map((industry, index) => (
              <button
                key={industry.label.en}
                type="button"
                className={`industry-tab ${activeIndustry === index ? "active" : ""}`}
                onClick={() => setActiveIndustry(index)}
              >
                {pick(industry.label)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${lang}-${activeIndustry}`}
              className="industry-panel premium-hover-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
            >
              <h3>{pick(content.industries[activeIndustry].label)}</h3>
              <div className="detail-row">
                <span>{isArabic ? "العملاء" : "Clients"}</span>
                <p>{pick(content.industries[activeIndustry].clients)}</p>
              </div>
              <div className="detail-row">
                <span>{isArabic ? "الحلول" : "Solutions"}</span>
                <p>{pick(content.industries[activeIndustry].solutions)}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section
        className="section-block"
        id="arsenal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionHeader
          tag={isArabic ? "🧰 الترسانة التقنية" : "🧰 Technical Arsenal"}
          title={isArabic ? "الأدوات والتقنيات المحركة للحلول" : "The Technical Arsenal"}
        />

        <div className="arsenal-grid">
          {content.arsenal.map((group) => (
            <div key={group.label.en} className="arsenal-card premium-hover-card">
              <h3>{pick(group.label)}</h3>
              <div className="badge-row">
                {group.items.map((item) => (
                  <span key={item} className="tech-badge" title={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-block"
        id="solutions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <SectionHeader
          tag={isArabic ? "🚀 الحلول المبنية" : "🚀 Solutions Built"}
          title={isArabic ? "المشروعات الرئيسية وإثباتات المفهوم" : "Key Projects & POCs"}
        />

        <div className="projects-grid">
          {content.projects.map((project, index) => {
            const isOpen = openProject === index;
            return (
              <motion.article key={project.title.en} className="project-card premium-hover-card">
                <div className="project-card-head">
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pick(project.title)}</h3>
                </div>
                <p>{pick(project.impact)}</p>

                <button
                  type="button"
                  className={`accordion-toggle ${isOpen ? "open" : ""}`}
                  onClick={() => setOpenProject(isOpen ? -1 : index)}
                >
                  <span>{isArabic ? "عرض المخطط التقني" : "View Technical Blueprint"}</span>
                  <ChevronDown size={18} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26 }}
                    >
                      <div className="blueprint-copy">
                        <p>{pick(project.blueprint)}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        className="section-block"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <SectionHeader
          tag={isArabic ? "📬 التواصل" : "📬 Contact"}
          title={pick(content.contact.title)}
        />

        <div className="contact-layout">
          <form className="contact-form premium-hover-card" onSubmit={handleSubmit}>
            <label className="field">
              <span>{pick(content.contact.fields.fullName)}</span>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={pick(content.contact.fields.fullName)}
                required
              />
            </label>

            <label className="field">
              <span>{pick(content.contact.fields.email)}</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={pick(content.contact.fields.email)}
                required
              />
            </label>

            <label className="field">
              <span>{pick(content.contact.fields.company)}</span>
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={pick(content.contact.fields.company)}
                required
              />
            </label>

            <label className="field">
              <span>{pick(content.contact.fields.reason)}</span>
              <select name="reason" value={formData.reason} onChange={handleInputChange} required>
                <option value="">{isArabic ? "اختر" : "Select"}</option>
                {content.contact.reasons.map((reason) => (
                  <option key={reason.en} value={reason.en}>
                    {pick(reason)}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit" className="primary-button submit-button" disabled={isSubmittingMain}>
              <span>{isSubmittingMain ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : pick(content.contact.submit)}</span>
              <ArrowRight size={18} className="animated-arrow" />
            </button>
          </form>

          <div className="anchor-column">
            <a
              className="anchor-card premium-hover-card"
              href="https://www.linkedin.com/in/ibrahimyehia/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span>{pick(content.contact.linkedin)}</span>
                <p>linkedin.com/in/ibrahimyehia</p>
              </div>
              <ExternalLink size={18} />
            </a>

            <a className="anchor-card premium-hover-card" href="mailto:ibrahiimyehia@gmail.com">
              <div>
                <span>{pick(content.contact.emailAnchor)}</span>
                <p>ibrahiimyehia@gmail.com</p>
              </div>
              <Mail size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      <div className={`quick-contact-shell ${isQuickPanelOpen ? "is-open" : ""}`}>
        <AnimatePresence>
          {isQuickPanelOpen ? (
            <motion.div
              className="quick-contact-panel"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.22 }}
            >
              <div className="quick-panel-head">
                <strong>{isArabic ? "💬 تواصل سريع" : "💬 Quick Contact"}</strong>
                <button
                  type="button"
                  className="quick-panel-close"
                  onClick={() => setIsQuickPanelOpen(false)}
                  aria-label="Close quick contact panel"
                >
                  <X size={16} />
                </button>
              </div>

              <form className="quick-panel-form" onSubmit={handleQuickSubmit}>
                <input
                  name="fullName"
                  value={quickFormData.fullName}
                  onChange={handleQuickInputChange}
                  placeholder={isArabic ? "الاسم" : "Name"}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={quickFormData.email}
                  onChange={handleQuickInputChange}
                  placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
                  required
                />
                <textarea
                  name="message"
                  rows="3"
                  value={quickFormData.message}
                  onChange={handleQuickInputChange}
                  placeholder={isArabic ? "رسالتك السريعة" : "Your quick message"}
                  required
                />
                <div className="quick-panel-actions">
                  <button type="submit" className="quick-panel-submit" disabled={isSubmittingQuick}>
                    <span>{isSubmittingQuick ? (isArabic ? "جارٍ الإرسال..." : "Sending...") : isArabic ? "إرسال سريع" : "Quick Send"}</span>
                    <SendHorizontal size={16} />
                  </button>
                  <button
                    type="button"
                    className="quick-panel-secondary"
                    onClick={() => scrollToSection("contact")}
                  >
                    {isArabic ? "فتح القسم الكامل" : "Open full form"}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          className="quick-contact-button"
          onClick={() => setIsQuickPanelOpen((current) => !current)}
        >
          <MessageCircleMore size={18} />
          <span>{pick(content.contact.quickButton)}</span>
        </button>
      </div>

      <AnimatePresence>
        {toast ? (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}

function Sparkline({ points, delay = 0 }) {
  const width = 120;
  const height = 42;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const plottedPoints = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / range) * (height - 8) - 4;
      return { x, y };
    });

  const pathD = plottedPoints
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <svg className="sparkline" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <defs>
        <linearGradient id="sparkline-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--cyan)" />
          <stop offset="100%" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      <motion.path
        d={pathD}
        fill="none"
        stroke="url(#sparkline-stroke)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.5 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      {plottedPoints.map((point, index) => (
        <motion.circle
          key={`${point.x}-${point.y}`}
          cx={point.x}
          cy={point.y}
          r="2.8"
          fill={index === plottedPoints.length - 1 ? "var(--violet)" : "var(--cyan)"}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.28, delay: delay + 0.08 * index }}
        />
      ))}
    </svg>
  );
}

function WordReveal({ text }) {
  const words = text.split(" ");

  return (
    <motion.span
      className="word-reveal"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="word-chip"
          variants={{
            hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
}

function AnimatedCounter({ value, delay = 0 }) {
  const numericMatch = String(value).match(/(\d+(\.\d+)?)/);
  const suffix = String(value).replace(/[\d.]/g, "");
  const target = numericMatch ? Number(numericMatch[1]) : null;
  const [displayValue, setDisplayValue] = useState(target ? 0 : value);

  useEffect(() => {
    if (target === null) {
      setDisplayValue(value);
      return undefined;
    }

    let frameId = 0;
    let start = 0;
    const duration = 1400;
    let timeoutId = 0;

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(target * eased);
      setDisplayValue(next);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    timeoutId = window.setTimeout(() => {
      frameId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [delay, target, value]);

  if (target === null) {
    return value;
  }

  return `${displayValue}${suffix}`;
}

function DNAHelixScene({ activeIndex }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return undefined;

    const scene = new THREE.Scene();
    const width = mountNode.clientWidth;
    const height = mountNode.clientHeight;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = 0.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setSize(width, height);
    mountNode.appendChild(renderer.domElement);

    const helixGroup = new THREE.Group();
    scene.add(helixGroup);

    const glowMaterialA = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const glowMaterialB = new THREE.MeshBasicMaterial({ color: 0x818cf8 });
    const sphereGeometry = new THREE.SphereGeometry(0.22, 20, 20);
    const rungMaterial = new THREE.LineBasicMaterial({
      color: 0x84ccff,
      transparent: true,
      opacity: 0.4,
    });

    const nodes = [];
    const rungLines = [];
    const totalSteps = 28;

    for (let index = 0; index < totalSteps; index += 1) {
      const angle = index * 0.48;
      const x = (index - totalSteps / 2) * 0.95;
      const leftPosition = new THREE.Vector3(x, Math.sin(angle) * 2.9, Math.cos(angle) * 2.9);
      const rightPosition = new THREE.Vector3(
        x,
        Math.sin(angle + Math.PI) * 2.9,
        Math.cos(angle + Math.PI) * 2.9
      );

      const leftNode = new THREE.Mesh(sphereGeometry, glowMaterialA.clone());
      leftNode.position.copy(leftPosition);
      helixGroup.add(leftNode);

      const rightNode = new THREE.Mesh(sphereGeometry, glowMaterialB.clone());
      rightNode.position.copy(rightPosition);
      helixGroup.add(rightNode);

      const points = [leftPosition, rightPosition];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, rungMaterial.clone());
      helixGroup.add(line);

      nodes.push(leftNode, rightNode);
      rungLines.push(line);
    }

    const ambient = new THREE.AmbientLight(0x7dd3fc, 0.7);
    scene.add(ambient);

    const directional = new THREE.PointLight(0x818cf8, 2, 120);
    directional.position.set(16, 12, 20);
    scene.add(directional);

    let frameId = 0;
    let targetRotationY = 0.18;
    let targetRotationX = -0.28;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      helixGroup.rotation.y += (targetRotationY - helixGroup.rotation.y) * 0.03;
      helixGroup.rotation.x += (targetRotationX - helixGroup.rotation.x) * 0.03;
      helixGroup.rotation.z = Math.sin(Date.now() * 0.00045) * 0.04;

      const highlightedRung = Math.min(activeIndex * 4, rungLines.length - 1);
      rungLines.forEach((line, index) => {
        line.material.opacity = index === highlightedRung ? 0.95 : 0.22 + Math.abs(Math.sin(Date.now() * 0.001 + index)) * 0.16;
        line.material.color.set(index === highlightedRung ? 0xffffff : 0x84ccff);
      });

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(Date.now() * 0.0014 + index * 0.12) * 0.08;
        node.scale.setScalar(pulse);
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const nextWidth = mountNode.clientWidth;
      const nextHeight = mountNode.clientHeight;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };

    const handlePointerMove = (event) => {
      const rect = mountNode.getBoundingClientRect();
      const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = 0.18 + normalizedX * 0.48;
      targetRotationX = -0.28 + normalizedY * 0.28;
    };

    animate();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      renderer.dispose();
      sphereGeometry.dispose();
      glowMaterialA.dispose();
      glowMaterialB.dispose();
      rungMaterial.dispose();
      mountNode.removeChild(renderer.domElement);
    };
  }, [activeIndex]);

  return <div ref={mountRef} className="dna-three-canvas" aria-hidden="true" />;
}

function SectionHeader({ tag, title }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
    </div>
  );
}

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    let animationFrame = 0;
    let pointer = { x: -9999, y: -9999, active: false };
    const particleCount = 64;
    const particles = [];

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      const width = rect?.width || window.innerWidth;
      const height = rect?.height || 520;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!particles.length) {
        for (let index = 0; index < particleCount; index += 1) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            baseX: Math.random() * width,
            baseY: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            radius: 1.2 + Math.random() * 1.8,
          });
        }
      } else {
        particles.forEach((particle) => {
          particle.x = Math.min(particle.x, width);
          particle.y = Math.min(particle.y, height);
        });
      }
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.baseX += particle.vx;
        particle.baseY += particle.vy;

        if (particle.baseX < 0 || particle.baseX > width) particle.vx *= -1;
        if (particle.baseY < 0 || particle.baseY > height) particle.vy *= -1;

        let targetX = particle.baseX;
        let targetY = particle.baseY;

        if (pointer.active) {
          const dx = pointer.x - particle.baseX;
          const dy = pointer.y - particle.baseY;
          const distance = Math.hypot(dx, dy);
          if (distance < 180) {
            const force = (180 - distance) / 180;
            targetX += dx * force * 0.18;
            targetY += dy * force * 0.18;
          }
        }

        particle.x += (targetX - particle.x) * 0.08;
        particle.y += (targetY - particle.y) * 0.08;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 120) {
            const alpha = 1 - distance / 120;
            context.strokeStyle = `rgba(62, 201, 255, ${alpha * 0.18})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(229, 245, 255, 0.85)";
        context.shadowColor = "rgba(62, 201, 255, 0.65)";
        context.shadowBlur = pointer.active ? 14 : 8;
        context.fill();
      }

      context.shadowBlur = 0;
      animationFrame = window.requestAnimationFrame(draw);
    };

    const handleMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handleLeave = () => {
      pointer.active = false;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
