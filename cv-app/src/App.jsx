import React, { useState, useEffect, useRef } from 'react';
import { Bot, Terminal, ShieldCheck, ChevronRight, Mail, Phone, MapPin, Globe, GitCommit, CheckCircle, FileCode, CheckCircle2, CircleDashed, Code2, LayoutTemplate, AlertTriangle, Bug, Trello, UserPlus, PlayCircle, BadgeCheck, Activity, Loader2, Download, XCircle, FastForward, ExternalLink, Eye, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const GTM_ID = 'GTM-5LXQPPV6';
const LAST_UPDATED = 'Feb 2026';

export default function App() {
  const [phase, setPhase] = useState('FAILED_ALERT'); 
  // Phases: FAILED_ALERT -> TEST_RESULTS -> GHERKIN -> JIRA_TICKET -> IDE_FIX -> PIPELINE_RUN_PASS -> GHERKIN_PASS -> COMMIT_FINAL -> FIXED
  
  const [logs, setLogs] = useState([]);
  const [ticketStatus, setTicketStatus] = useState('To Do');
  const [ticketAssignee, setTicketAssignee] = useState('Unassigned');
  const [gherkinStep, setGherkinStep] = useState(0);
  const [ideStep, setIdeStep] = useState(0);
  const [visits, setVisits] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const endOfLogsRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // Lógica de scroll para el botón dinámico
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150;
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold;
      setIsAtBottom(isBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funciones de desplazamiento
  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: 'smooth' });

  // Inicialización de Google Tag Manager
  useEffect(() => {
    if (GTM_ID) {
      (function(w,d,s,l,i){
        w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',GTM_ID);
    }
  }, []);

  // Incremento y obtención del contador de visitas
  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/qatransformation-cv/portfolio_visits/up')
      .then(response => response.json())
      .then(data => {
        if (data && data.count !== undefined) {
          setVisits(data.count);
        }
      })
      .catch(error => console.error('Error fetching counter:', error));
  }, []);

  const cvContext = `
    Name: Cecilia Ponce Molinas.
    Roles: QA Architect, QA Lead, QA Automation Specialist.
    Location: Barcelona, Spain / Remote (European Citizen).
    Contact: cecilia.poncemolinas@gmail.com, +34 910052989.
    Experience & Tools: WebdriverIO (TypeScript), Cypress (TypeScript), Playwright (TypeScript), Appium, Selenium, Cucumber (BDD), TypeScript, JavaScript, Java, C#, PHP, MySQL, Vitest, xUnit, PHP Unit, TestNG, Karate, Jira, Xray, Jenkins, Gitlab CI, Sonarqube, Postman, GitHub Copilot, Google Gemini.
    Certifications: Playwright: Web Automation Testing with Java (Udemy), Generative AI for QA Professionals and Software Testers (Udemy 2025), Scrum Manager (2023), ICCD, CT, monitorización continua (DEXS 2022).
  `;

  const fullExperience = [
    { 
      role: "QA Automation Consultant | Freelance", company: "AYESA (Customer: BBVA España)", date: "Apr 2024 - To Date", 
      details: [
        "Expert testing consultant supporting critical project teams in defining and launching their automation strategies.",
        "Spearheaded a gamification project designed to improve engagement and optimize key metrics across backlog management, testing, and CI/CD pipelines.",
        "Assisted in tracking and auditing critical applications using AI tools (GitHub Copilot, Google Gemini).",
        "Created POCs for frontend automation using the custom TypeScript framework developed for BBVA (based on WebdriverIO (TypeScript), Cucumber).", 
        "Developed automated tests for mobile using TypeScript and Appium on SauceLabs."
      ],
      tags: ["TypeScript", "WebdriverIO", "Cucumber", "Vitest", "PHPUnit", "Appium", "SauceLabs", "GitHub Copilot", "Google Gemini"]
    },
    { 
      role: "QA Architect / QA Lead / Scrum Master", company: "TOOLSGROUP", date: "Apr 2023 – Dec 2023", 
      details: [
        "Define QA Strategy for company projects and contribute to Product Roadmap Planning.",
        "Conducted a comprehensive study of automation frameworks. Selected and implemented Playwright (TypeScript) with Cucumber as the standard.",
        "QA certification authority and team performance feedback."
      ],
      tags: ["QA Strategy", "Scrum", "Playwright", "Cucumber", "TypeScript", "Automation Frameworks", "Metrics"]
    },
    { 
      role: "QA Architect / Technical Lead", company: "AT Sistemas (ECI)", date: "Feb 2022 - Mar 2023", 
      details: [
        "QA Automation Lead and support for 9 tribes in new supermarket applications.",
        "Process quality audits and daily execution reviews to meet ECI quality gates."
      ],
      tags: ["QA Architecture", "Quality Gates", "Audits", "Pre-sales"]
    },
    { 
      role: "QA Manager / QA Automation", company: "ZURICH ESPAÑA", date: "Mar 2021 - Feb 2022", 
      details: [
        "Provide management and control of quality assurance processes.",
        "Define automation framework requirements (Cypress/WebdriverIO with TypeScript)."
      ],
      tags: ["Cypress", "WebdriverIO", "Gherkin", "TypeScript", "QA Management"]
    },
    { 
      role: "QA Lead / QA Automation Tech Lead", company: "Sopra Steria", date: "Jul 2019 - Mar 2021", 
      details: [
        "QA Automation Lead and mentor. Designed strategy for chatbots across multiple markets.",
        "POC for client: Java, Spring Boot, Cucumber, Docker, and Jenkins."
      ],
      tags: ["Java", "Spring Boot", "WebdriverIO", "TypeScript", "Cucumber", "Docker", "Jenkins"]
    },
    { 
      role: "QA Lead / Functional & Automated Tester", company: "Altran Innovation", date: "Jul 2017 - Jul 2019", 
      details: [
        "QA Lead for mobile Kanban projects (iOS/Android) with 2 releases per week.",
        "Automation of regression tests in Appium with Java and TestNG."
      ],
      tags: ["Appium", "Java", "TestNG", "Selenium", "iOS", "Android", "Kanban"]
    },
    { 
      role: "Manual Tester, Automated Testing", company: "GLOBANT", date: "Mar 2015 - Jul 2017", 
      details: [
        "Developed automated smoke tests using Selenium Webdriver and C# (POM).",
        "Accessibility testing for Paralyzed Veterans of America campaign."
      ],
      tags: ["Selenium Webdriver", "C#", "Mobile Testing", "Accessibility"]
    },
    { 
      role: "Developer Frontend", company: "FREELANCE", date: "Jan 2013 - To date", 
      details: ["Dynamic web development: Wordpress, Joomla. Responsive design."],
      tags: ["WordPress", "Joomla", "Frontend", "Responsive Design"]
    },
    { 
      role: "Functional Analyst / Developer Back / QA Tester", company: "PROAGILE S.A", date: "Apr 2013 - Feb 2015", 
      details: ["Develop web applications (PHP/MySQL) and design UAT tests."],
      tags: ["PHP", "MySQL", "JavaScript", "UAT", "Manual Testing"]
    },
    { 
      role: "Team Leader / Developer / Functional Testing", company: "Learning Latin America", date: "Jan 2012 - Nov 2013", 
      details: ["Manage team for e-learning platforms and functional testing."],
      tags: ["Enterprise Architect", "E-learning", "Functional Testing", "Team Leadership"]
    },
    { 
      role: "Front end and Back end / Functional Testing", company: "Operadores Mendoza Viajes", date: "Jan 2011 - Jan 2012", 
      details: ["Developed booking system (Java, JSP, MVC)."],
      tags: ["Java", "JSP", "MVC", "SEO", "Functional Testing"]
    }
  ];

  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const addLog = (msg, type = "info") => setLogs(prev => [...prev, { msg, type }]);
  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  // --- Automation Flow Logic ---
  const viewTestResults = () => {
    setPhase('TEST_RESULTS');
    setLogs([
      { msg: "> Gitlab CI/CD: Pipeline #8892 Failed.", type: "error" },
      { msg: "> Running 3 tests using 1 worker", type: "info" },
      { msg: "  ✘ 1) cv-profile.spec.ts:12:5 › Verify Candidate Core Profile (1.2s)", type: "error" },
      { msg: "  ✘ 2) cv-experience.spec.ts:24:2 › Verify Work Experience Complete List (0.8s)", type: "error" },
      { msg: "  ✘ 3) cv-skills.spec.ts:40:1 › Verify Tech Stack Rendering (0.5s)", type: "error" }
    ]);
  };

  const viewGherkin = () => setPhase('GHERKIN');
  const openJira = () => setPhase('JIRA_TICKET');

  const skipToFinal = () => {
    setPhase('FIXED');
    setTicketAssignee('Dev Team');
    setTicketStatus('Fixed');
    setGherkinStep(8);
    setIdeStep(4);
  };

  useEffect(() => {
    if (phase === 'GHERKIN' || phase === 'PIPELINE_RUN_PASS') {
      setGherkinStep(0);
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < 8) {
          currentStep++;
          setGherkinStep(currentStep);
        } else {
          clearInterval(interval);
        }
      }, 700);
      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    let isMounted = true;
    const automateBugFixFlow = async () => {
      if (phase === 'JIRA_TICKET') {
        await delay(1500);
        if (!isMounted) return;
        setTicketAssignee('Dev Team');
        await delay(1000);
        setTicketStatus('In Progress');
        await delay(1500);
        setTicketStatus('Fixed');
        await delay(1500);
        setPhase('IDE_FIX');
      } else if (phase === 'IDE_FIX') {
        setIdeStep(0);
        await delay(1500); setIdeStep(1); 
        await delay(1000); setIdeStep(2); 
        await delay(1500); setIdeStep(3); 
        await delay(1000); setIdeStep(4); 
        await delay(2500);
        setPhase('PIPELINE_RUN_PASS');
      } else if (phase === 'PIPELINE_RUN_PASS') {
        await delay(3000); 
        setPhase('COMMIT_FINAL');
      } else if (phase === 'COMMIT_FINAL') {
        await delay(2500);
        setPhase('FIXED');
      }
    };
    automateBugFixFlow();
    return () => { isMounted = false; };
  }, [phase]);

  const handleDownloadPDF = () => window.print();

  const isBrokenUI = ['FAILED_ALERT', 'TEST_RESULTS', 'GHERKIN', 'JIRA_TICKET', 'IDE_FIX'].includes(phase);
  const showConsole = ['TEST_RESULTS', 'PIPELINE_RUN_PASS', 'COMMIT_FINAL'].includes(phase);

  const workflowSteps = [
    { id: 'FAILED_ALERT', label: 'Pipeline Alert' },
    { id: 'TEST_RESULTS', label: 'Log Analysis' },
    { id: 'GHERKIN', label: 'Executing automation test' },
    { id: 'JIRA_TICKET', label: 'Defect Management' },
    { id: 'IDE_FIX', label: 'Code Correction' },
    { id: 'PIPELINE_RUN_PASS', label: 'Playwright test' },
    { id: 'COMMIT_FINAL', label: 'Release & Deploy' },
    { id: 'FIXED', label: 'Operational CV' }
  ];

  const currentStepIndex = workflowSteps.findIndex(s => s.id === phase);

  return (
    <div ref={topRef} className={"min-h-screen font-sans overflow-x-hidden flex transition-all duration-1000 " + (isBrokenUI ? "bg-zinc-50" : "bg-[#fafafa]")}>
      
      {/* BOTÓN FLOTANTE DE NAVEGACIÓN INTELIGENTE */}
      {!isBrokenUI && phase === 'FIXED' && (
        <button
          onClick={isAtBottom ? scrollToTop : scrollToBottom}
          className="fixed bottom-8 right-8 z-[200] bg-indigo-600 text-white p-3 rounded-full shadow-2xl hover:bg-indigo-700 hover:scale-110 transition-all duration-300 print:hidden flex items-center justify-center group border-2 border-white/20"
          title={isAtBottom ? "Back to Top" : "Go to Bottom"}
        >
          {isAtBottom ? (
            <ArrowUpCircle size={32} className="animate-in fade-in zoom-in duration-300" />
          ) : (
            <ArrowDownCircle size={32} className="animate-in fade-in zoom-in duration-300" />
          )}
        </button>
      )}

      {/* BOTÓN SKIP */}
      {phase !== 'FIXED' && phase !== 'FAILED_ALERT' && (
        <button
          onClick={skipToFinal}
          className="fixed top-6 right-6 z-[200] bg-[#09090b]/90 text-zinc-300 px-5 py-2.5 rounded-lg shadow-xl font-medium text-xs flex items-center gap-2 border border-white/20 backdrop-blur-md transition-all hover:bg-white hover:text-black animate-bounce print:hidden group"
        >
          <FastForward size={14} className="text-zinc-400 group-hover:text-black" />
          SKIP TO FULL CV
        </button>
      )}

      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col w-[280px] bg-[#09090b] text-zinc-400 fixed h-full left-0 top-0 z-[100] border-r border-white/5 shadow-2xl print:hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-zinc-100 font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
            <Activity size={16} className="text-zinc-500" />
            QA Lifecycle
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {workflowSteps.map((step, index) => {
            let statusIcon;
            let textClass = "text-zinc-700";
            const isPast = phase === 'FIXED' || index < currentStepIndex;
            const isCurrent = phase !== 'FIXED' && index === currentStepIndex;

            if (isPast) { statusIcon = <CheckCircle2 size={16} className="text-emerald-500" />; textClass = "text-emerald-500"; }
            else if (isCurrent) { statusIcon = <CircleDashed size={16} className="text-blue-400 animate-spin" />; textClass = "text-zinc-100 font-medium"; }
            else { statusIcon = <div className="w-4 h-4 rounded-full border-2 border-zinc-800"></div>; }

            if (step.id === 'FAILED_ALERT') { statusIcon = <XCircle size={16} className="text-red-500" />; textClass = isCurrent ? "text-red-400 font-medium" : "text-red-500"; }
            if (step.id === 'GHERKIN' && ((isCurrent && gherkinStep >= 8) || isPast)) { statusIcon = <XCircle size={16} className="text-red-500" />; textClass = isCurrent ? "text-red-400 font-medium" : "text-red-500"; }

            return (
              <div key={step.id} className="flex items-start gap-3">
                <div className="mt-0.5">{statusIcon}</div>
                <div className={`text-xs tracking-wide ${textClass}`}>{step.label}</div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* MODAL INICIAL */}
      {phase === 'FAILED_ALERT' && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#09090b]/80 backdrop-blur-sm p-4 print:hidden">
          <div className="bg-[#121214] border border-red-900/40 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-xl w-full text-center flex flex-col items-center animate-in zoom-in-95 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
              <AlertTriangle className="text-red-500 animate-pulse" size={32} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">This is not an error.</h2>
            <p className="text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed max-w-md">
              This is the interactive CV of <strong className="text-zinc-200">Cecilia Ponce</strong>.<br/>
              We have simulated a deployment pipeline failure. Please click on <span className="text-zinc-300 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">Review Logs</span> to start the automated self-healing process.
            </p>
            <p className="text-emerald-400 font-mono text-sm mb-6 animate-pulse">Happy Testing!</p>
            <button onClick={viewTestResults} className="w-full sm:w-auto bg-red-600/90 hover:bg-red-500 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg animate-pulse transition-all flex items-center justify-center gap-2 text-sm">
              <Terminal size={18} /> REVIEW LOGS (Heal CV)
            </button>
            <div className="w-full mt-10 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
              <p className="text-[11px] sm:text-xs text-zinc-500 italic">If you are in a rush, you can skip straight to the CV, but you'll miss out on the game :)</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button onClick={skipToFinal} className="text-zinc-400 hover:text-zinc-200 font-medium px-6 py-2 rounded-md border border-white/10 transition-all flex items-center justify-center gap-2 text-xs">
                  <FastForward size={14} /> SKIP TO FULL CV
                </button>
                <a href="https://www.linkedin.com/in/ceciliaponce/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium px-6 py-2 rounded-md border border-blue-900/30 transition-all flex items-center justify-center gap-2 text-xs">
                  <ExternalLink size={14} /> LINKEDIN PROFILE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 md:ml-[280px] relative flex justify-center pb-32 print:m-0 print:p-0">
        <div className="w-full max-w-4xl transition-all duration-500 relative my-8 sm:my-16 px-4 sm:px-8 print:my-0 print:px-0">
          
          {/* Cabecera de controles */}
          {!isBrokenUI && phase === 'FIXED' && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 animate-in fade-in duration-1000 print:hidden">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">v2.0.0</span>
                <span className="text-zinc-400 border-l border-zinc-300 pl-2">Updated: {LAST_UPDATED}</span>
                <span className="ml-2 pl-2 border-l border-zinc-300 flex items-center gap-1.5 text-zinc-400">
                  <Eye size={14} /> {visits !== null ? visits.toLocaleString() : <Loader2 size={10} className="animate-spin" />}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleDownloadPDF} className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 hover:border-zinc-300 px-3 py-1.5 rounded-md shadow-sm transition-all">
                  <Download size={14} /> PDF
                </button>
                <a href="mailto:cecilia.poncemolinas@gmail.com" className="flex items-center gap-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3 py-1.5 rounded-md shadow-sm transition-all">
                  <Mail size={14} /> Contact
                </a>
              </div>
            </div>
          )}

          {/* Papel del CV */}
          <main className={"p-6 sm:p-12 h-full relative transition-all duration-1000 print:p-0 " + (isBrokenUI ? "bg-[#f4f4f5] grayscale-[50%] contrast-125 opacity-90 blur-[0.5px]" : "bg-white border border-zinc-200/60 shadow-xl rounded-xl")}>
            
            {/* CABECERA DEL CV */}
            <header className={"relative z-10 mb-10 sm:mb-12 flex flex-col md:flex-row md:justify-between md:items-start transition-all duration-1000 " + (isBrokenUI ? "border-l-4 border-red-500 pl-4" : "")}>
              <div>
                <h1 className={"transition-all duration-1000 " + (isBrokenUI ? "font-semibold text-2xl font-mono text-red-900 line-through" : "text-4xl sm:text-5xl text-zinc-900 font-serif italic tracking-tight")}>
                  {isBrokenUI ? 'Sizilia Ponse M.' : 'Cecilia Ponce Molinas'}
                </h1>
                <h2 className={"mt-2 font-medium transition-all duration-1000 " + (isBrokenUI ? "text-sm text-red-600" : "text-base sm:text-lg text-zinc-500")}>
                  {isBrokenUI ? 'Junior Manual Tester' : 'QA Architect / QA Lead / QA Automation'}
                </h2>
              </div>
              
              <div className={"mt-5 md:mt-0 flex flex-col gap-2 transition-all duration-1000 " + (isBrokenUI ? "text-red-700 font-mono items-start md:items-end text-xs" : "text-zinc-700 md:items-end text-sm")}>
                <span className="flex items-center gap-2 font-medium">
                  <MapPin size={16} className={isBrokenUI ? "text-red-500 shrink-0" : "text-indigo-500 shrink-0"} /> 
                  {isBrokenUI ? 'Undefined' : 'Barcelona, Spain / Remote'}
                </span>
                <span className="flex items-center gap-2 font-medium group">
                  <Phone size={16} className={isBrokenUI ? "text-red-500 shrink-0" : "text-indigo-500 shrink-0 animate-[bounce_3s_infinite] group-hover:scale-110 transition-transform"} /> 
                  {isBrokenUI ? '555-ERROR' : '+34 910052989'}
                </span>
                <a href="mailto:cecilia.poncemolinas@gmail.com" className={"flex items-center gap-2 font-medium transition-colors group " + (isBrokenUI ? "" : "hover:text-indigo-600")}>
                  <Mail size={16} className={isBrokenUI ? "text-red-500 shrink-0" : "text-indigo-500 shrink-0 animate-[pulse_2s_infinite] group-hover:scale-110 transition-transform"} /> 
                  {isBrokenUI ? 'null@undefined.com' : 'cecilia.poncemolinas@gmail.com'}
                </a>
                {!isBrokenUI && (
                  <span className="flex items-center gap-2 text-zinc-500 text-xs mt-1">
                    <Globe size={14} className="text-zinc-400 shrink-0" /> European Citizen
                  </span>
                )}
              </div>
            </header>

            {/* EXPERIENCIA */}
            <section className="relative z-10 mb-10 sm:mb-12">
              <h3 className={"text-xs font-semibold tracking-widest uppercase mb-6 " + (isBrokenUI ? "text-red-500 line-through" : "text-zinc-900")}>Experience</h3>
              <div className="space-y-8">
                {fullExperience.map((job, i) => (
                  <div key={i} className={isBrokenUI && i > 0 ? "hidden" : ""}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1.5">
                      <h4 className={"font-semibold text-sm sm:text-base " + (isBrokenUI ? "text-red-800 font-mono" : "text-zinc-900")}>{job.role}</h4>
                      <span className={"text-[11px] sm:text-xs font-medium " + (isBrokenUI ? "text-red-500" : "text-zinc-400")}>{job.date}</span>
                    </div>
                    <h5 className={"text-xs sm:text-[13px] font-medium mb-3 " + (isBrokenUI ? "text-red-400" : "text-zinc-500")}>{job.company}</h5>
                    {!isBrokenUI && (
                      <>
                        <ul className="space-y-2 mb-3">
                          {job.details.map((detail, j) => (
                            <li key={j} className="text-[13px] sm:text-sm text-zinc-600 flex items-start gap-2.5 leading-relaxed font-light">
                              <span className="w-1 h-1 rounded-full bg-zinc-300 mt-2 shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {job.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-sky-50 text-sky-700 rounded text-[10px] border border-sky-200/60">{tag}</span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCACIÓN Y SKILLS */}
            <section className={"relative z-10 grid lg:grid-cols-2 gap-8 transition-all duration-1000 " + (isBrokenUI ? "opacity-0 h-0 overflow-hidden" : "")}>
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6">Education & Certs</h3>
                <ul className="space-y-4">
                   {['Playwright: Web Automation Testing with Java (Udemy)', 'Generative AI for QA Professionals (Udemy 2025)', 'Professional Testing Master (UTN 2024)', 'Product Owner & Scrum Manager (PUE 2023)'].map((edu, idx) => (
                     <li key={idx} className="text-[13px] text-zinc-600 flex items-start gap-2"><BadgeCheck size={14} className="text-indigo-500 mt-0.5 shrink-0" /> {edu}</li>
                   ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['WebdriverIO', 'Cypress', 'Playwright', 'Appium', 'Selenium', 'TypeScript', 'Java', 'Cucumber', 'Jira', 'Jenkins', 'Postman'].map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-violet-50/80 border border-violet-200/60 rounded text-xs font-medium text-violet-700">{skill}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* FREELANCE Y VIDEO */}
            <section className={`relative z-10 mt-12 pt-8 border-t border-zinc-200 transition-all ${isBrokenUI ? 'opacity-0 h-0 overflow-hidden' : ''}`}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6">Freelance Project Showcase</h3>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                 <div className="w-full aspect-video rounded-lg border border-zinc-300 overflow-hidden shadow-sm bg-black mb-4">
                   <video className="w-full h-full object-cover" controls preload="metadata">
                     <source src="/cv/qatransformationai.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
                 </div>
                 <p className="text-xs text-zinc-500 text-center italic">Video: QA Transformation Initiatives presentation</p>
              </div>
            </section>

            {/* SECCIÓN DE CONTACTO FINAL */}
            {!isBrokenUI && phase === 'FIXED' && (
              <section ref={bottomRef} className="relative z-10 mt-16 pt-12 border-t-2 border-indigo-100 flex flex-col items-center animate-in slide-in-from-bottom-8 duration-1000">
                <h3 className="text-xs font-bold tracking-widest uppercase text-indigo-900 mb-8 bg-indigo-50 px-4 py-1 rounded-full">Get in touch</h3>
                <div className="flex flex-col sm:flex-row items-center gap-8 text-zinc-700">
                  <a href="mailto:cecilia.poncemolinas@gmail.com" className="flex flex-col items-center gap-3 group transition-all hover:scale-105">
                    <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-indigo-400 group-hover:shadow-md transition-all">
                      <Mail size={20} className="text-indigo-600 animate-pulse" />
                    </div>
                    <span className="text-sm font-medium">cecilia.poncemolinas@gmail.com</span>
                  </a>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm">
                      <Phone size={20} className="text-indigo-600 animate-bounce" />
                    </div>
                    <span className="text-sm font-medium">+34 910052989</span>
                  </div>
                  <a href="https://www.linkedin.com/in/ceciliaponce/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group transition-all hover:scale-105">
                    <div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:shadow-md transition-all">
                      <ExternalLink size={20} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </div>
                {/* Nota de ciudadanía también al final para consistencia */}
                <div className="mt-6 flex items-center gap-2 text-zinc-400 text-xs italic">
                  <Globe size={14} /> European Citizen
                </div>
              </section>
            )}

          </main>
        </div>

        {/* CONSOLE DRAWER */}
        <div className={`fixed bottom-0 left-0 md:left-[280px] w-full md:w-[calc(100%-280px)] bg-[#09090b] border-t border-white/10 shadow-2xl z-[60] font-mono text-xs transition-transform duration-500 ${showConsole ? 'translate-y-0' : 'translate-y-full'} print:hidden`}>
          <div className="flex items-center justify-between px-4 py-2 bg-[#121214] border-b border-white/5">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px]"><Terminal size={12} /> GitLab CI/CD</div>
            {phase === 'TEST_RESULTS' && (
              <button onClick={viewGherkin} className="bg-amber-500 text-black font-bold px-4 py-1 rounded shadow-lg animate-bounce text-[10px]">
                VIEW BDD SCENARIOS
              </button>
            )}
          </div>
          <div className="p-4 h-48 overflow-y-auto text-zinc-400">
            {logs.map((log, i) => (
              <div key={i} className={"mb-1 " + (log.type === 'error' ? "text-red-400" : log.type === 'success' ? "text-emerald-400" : log.type === 'command' ? "text-zinc-300" : "text-zinc-500")}>
                {log.msg}
              </div>
            ))}
            <div ref={endOfLogsRef} />
          </div>
        </div>

        {/* GHERKIN VIEW */}
        {(phase === 'GHERKIN' || phase === 'PIPELINE_RUN_PASS') && (
          <div className="fixed inset-0 md:left-[280px] bg-black/40 backdrop-blur-md z-[70] flex items-center justify-center p-4">
            <div className="bg-[#09090b] border border-white/10 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden font-mono text-xs animate-in zoom-in-95">
              <div className="bg-[#121214] px-4 py-3 flex items-center justify-between border-b border-white/5 text-zinc-400">
                <div className="flex items-center gap-2"><FileCode size={14} /> cv-validations.feature</div>
                {phase === 'GHERKIN' && gherkinStep >= 8 && (
                  <button onClick={openJira} className="bg-blue-600 text-white px-4 py-1.5 rounded flex items-center gap-2 font-bold animate-pulse">
                    <Bug size={14}/> REPORT BUG
                  </button>
                )}
              </div>
              <div className="p-5 text-zinc-400 space-y-2 max-h-[60vh] overflow-y-auto">
                <div><span className="text-zinc-100">Scenario:</span> Verify Candidate Core Profile</div>
                <div className="pl-4">Given user accesses portal {gherkinStep >= 1 && <span className="text-emerald-500">✓ PASS</span>}</div>
                <div className="pl-4">Then name should be "Cecilia Ponce Molinas" {gherkinStep >= 2 && <span className={phase === 'PIPELINE_RUN_PASS' ? "text-emerald-500" : "text-red-400"}>{phase === 'PIPELINE_RUN_PASS' ? '✓ PASS' : '✘ FAIL'}</span>}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}