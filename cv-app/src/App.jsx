/**
 * PERSISTENCE RULE:
 * 1. DO NOT remove, truncate or summarize the 'fullExperience' data array.
 * 2. DO NOT remove UI components (Terminal, Gherkin Modal, Jira Ticket, IDE Fix).
 * 3. ALWAYS maintain technical fixes (special characters escaping in BDD scenarios).
 * 4. CONSULT before modifying the structure of existing professional data.
 * 5. MAINTAIN the full length of the file (approx. 1200 lines) to ensure all descriptive details are present.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Bot, Terminal, ShieldCheck, ChevronRight, Mail, Phone, MapPin, Globe, GitCommit, CheckCircle, FileCode, CheckCircle2, CircleDashed, Code2, LayoutTemplate, AlertTriangle, Bug, Trello, UserPlus, PlayCircle, BadgeCheck, Activity, Loader2, Download, XCircle, FastForward, ExternalLink, Eye, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const GTM_ID = 'GTM-5LXQPPV6';
const LAST_UPDATED = 'Feb 2026';

export default function App() {
  const [phase, setPhase] = useState('FAILED_ALERT'); 
  // Phases: FAILED_ALERT -> TEST_RESULTS -> GHERKIN -> JIRA_TICKET -> IDE_FIX -> PIPELINE_RUN_PASS -> COMMIT_FINAL -> FIXED
  
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

  // Missing utility functions restored
  const delay = (ms) => new Promise(res => setTimeout(res, ms));
  const addLog = (msg, type = "info") => setLogs(prev => [...prev, { msg, type }]);

  // Auto-scroll for the terminal logs
  useEffect(() => {
    endOfLogsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Scroll detection for dynamic button
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 150;
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold;
      setIsAtBottom(isBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: 'smooth' });

  // GTM and Visits Counter
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

    fetch('https://api.counterapi.dev/v1/qatransformation-cv/portfolio_visits/up')
      .then(res => res.json())
      .then(data => { if (data && data.count !== undefined) setVisits(data.count); })
      .catch(err => console.error('Visits counter error:', err));
  }, []);

  const cvContext = `
    Name: Cecilia Ponce Molinas.
    Roles: QA Architect, QA Lead, QA Automation Specialist.
    Location: Barcelona, Spain / Remote (European Citizen).
    Contact: cecilia.poncemolinas@gmail.com, +34 910052989.
    Experience & Tools: WebdriverIO (TypeScript), Cypress (TypeScript), Playwright (TypeScript), Appium, Selenium, Cucumber (BDD), TypeScript, JavaScript, Java, C#, PHP, MySQL, Vitest, xUnit, PHP Unit, TestNG, Karate, Jira, Xray, Jenkins, Gitlab CI, Sonarqube, Postman, GitHub Copilot, Google Gemini.
    Summary: Senior QA Architect and Test Automation Specialist with a comprehensive background in software development and quality engineering. Proven track record of defining and leading scalable QA strategies for international, cross-functional teams across the US, Canada, and Europe. Adept at bridging the gap between business objectives and technology execution, establishing rigorous quality gates, and fostering CI/CD best practices. Holistic perspective gained from roles as a Business Analyst, Full-Stack Developer, and QA Lead.
    Certifications: Playwright TypeScript: GenAI + MCP Servers + Cucumber BDD (Udemy 2026), Generative AI for QA Professionals and Software Testers (Udemy 2025), Scrum Manager (2023), ICCD, CT, monitorización continua (DEXS 2022).
    Featured GitHub Repositories: playwright_cucumber_spanish, playwright_cucumber_pom, webdriverio-cucumber-pom-framework.
  `;

  // Full experience array without truncation
  const fullExperience = [
    { 
      role: "QA Automation Consultant | Freelance", 
      company: "AYESA (Customer: BBVA España)", 
      date: "Apr 2024 - To Date", 
      details: [
        "Expert testing consultant supporting critical project teams in defining and launching their automation strategies.",
        "Spearheaded a gamification project designed to improve engagement and optimize key metrics across backlog management, testing, and CI/CD pipelines.",
        "Assisted in tracking and auditing critical applications to ensure strict adherence to quality processes throughout their entire lifecycle, heavily leveraging AI tools (GitHub Copilot, Google Gemini) to accelerate analysis and reporting workflows.",
        "Designed continuous improvement strategies to adapt to internal testing regulations and process playbooks, covering the entire lifecycle from feature design to functionality deployment.",
        "Conducted 'Garages' (short-format technical talks and workshops) to train teams on the standardized quality assurance processes mandated by the bank.",
        "Created POCs for frontend automation using the custom TypeScript framework developed for BBVA (based on WebdriverIO (TypeScript), Cucumber).", 
        "Collaborated with diverse teams to define unit testing tools across a wide technological stack (Vitest, PHPUnit, etc.).",
        "Conducted backend testing using proprietary institutional frameworks and configured main monitoring dashboards.",
        "Developed automated tests for mobile using TypeScript and Appium on SauceLabs, and configured CI/CD pipelines."
      ],
      tags: ["TypeScript", "WebdriverIO", "Cucumber", "Vitest", "PHPUnit", "Appium", "SauceLabs", "GitHub Copilot", "Google Gemini", "TEST UNITARIOS", "TESTING MOBILE", "BACKEND TESTING"]
    },
    { 
      role: "QA Architect / QA Lead / Scrum Master", 
      company: "TOOLSGROUP", 
      date: "Apr 2023 – Dec 2023", 
      details: [
        "Define QA Strategy for the different company projects.", 
        "Contributes on Product Roadmap Planning.",
        "Supports the SCRUM team on test case design in order to maximise test coverage for the most critical features of the system.",
        "Writing documentation for automated processes including test plans, test procedures, and test cases when required.",
        "Conducted a comprehensive study of automation frameworks, comparing WebdriverIO (TypeScript) and Playwright (TypeScript). Selected and implemented Playwright (TypeScript) with Cucumber as the standard framework for automating projects.",
        "QA certification authority.",
        "Provides feedback on QA team performance (when applicable).",
        "Cooperates to define career path for QA engineers.",
        "Helps to train QA team.",
        "Engaged on recruitment.",
        "Collaborate with Producto Owner and team to improve the process. Define metrics and create reports for the different projects."
      ],
      tags: ["QA Strategy", "Scrum", "Playwright", "Cucumber", "TypeScript", "Automation Frameworks", "Metrics", "Team Leadership", "TESTING FUNCIONAL", "BACKEND TESTING"]
    },
    { 
      role: "QA Architect / Technical Lead", 
      company: "AT Sistemas (Customer: AT Sistemas & El Corte Inglés)", 
      date: "Feb 2022 - Mar 2023", 
      details: [
        "QA Automation Lead and support for the QA community.",
        "Part of Expert Community, that give support about QA to all company.",
        "Participate as QA in news pre-sales, preparing proposals, requirements, and defining resources y necessities.",
        "Prepare and propose new technical course and formations for the QA communities.",
        "Ensure all processes are controlled and monitored, for 9 tribes, for the new supermarket application.", 
        "Process quality audits and quality assurance reviews.",
        "Communication with the QA Manager of ECI, to update the status and necessities of all teams.",
        "Review the different daily executions to ensure that you meet the quality gates defined for ECI.",
        "Propose improvements for the processes.",
        "Audit for an external application: review of requirements and documentation, evaluate the development process, and evaluate the QA tasks. Generate a report to define the price applications according to the quality."
      ],
      tags: ["QA Architecture", "Quality Gates", "Audits", "Pre-sales", "Process Improvement", "TESTING FUNCIONAL", "BACKEND TESTING"]
    },
    { 
      role: "QA Manager / QA Automation", 
      company: "ZURICH ESPAÑA", 
      date: "Mar 2021 - Feb 2022", 
      details: [
        "Provide management and control of the quality assurance processes.",
        "Ensure all processes are controlled and monitored.",
        "Process quality audits and quality assurance reviews.",
        "Document new and existing processes.",
        "Troubleshooting manufacturing quality issues.",
        "Train and mentor technicians and other members of the quality assurance team.",
        "Oversee internal processes and procedures to ensure quality.",
        "Hire, train, and evaluate staff according to the project's needs.",
        "Regularly analyze quality data and suggest actions based on collected data.",
        "Ensure quality and sustainability of production processes.",
        "Investigate customers' needs and wanted and developed a strategy for meeting their needs.",
        "Communicate with the Product Development team on a daily basis.",
        "Define the automation framework for the different projects according to the requirements and resources (Cypress with TypeScript, WebdriverIO with TypeScript).",
        "Develop and dictates formation course about QA and how to work in an agile environment for gerent, product managers, and other important personnel."
      ],
      tags: ["Cypress", "WebdriverIO", "Gherkin", "TypeScript", "QA Management", "TESTING FUNCIONAL", "API TESTING", "BACKEND TESTING"]
    },
    { 
      role: "QA Lead / QA Automation Tech Lead", 
      company: "Sopra Steria (Customer: Sopra, Nestlé, AXA, Zurich)", 
      date: "Jul 2019 - Mar 2021", 
      details: [
        "QA Automation Lead for Sopra Steria company. Aim and mentor for the different QA of Sopra Steria.",
        "Evaluate different automation frameworks and prepare meet-ups.",
        "Functional testing of the new web system for Zurich Company. Identify test scenarios, estimate test effort, and create test plans.",
        "Maintained regression test suite and other testing scenarios. Created key metrics and audit processes to ensure established goals were met.",
        "Evangelize in QA processes for the delivery of a product with high-quality standards, challenge: a project with multiple actors and external companies. Design of strategy of testing and automation.",
        "Run different types of testing cross-browser and multiplatform: Win, OS, Android, iPhone (exploratory, regression, smoke, integration).",
        "Design QA strategy for the different chatbots used in the project, challenge: multiples market, channels and languages.",
        "POC for client: Automation framework with java, spring boot, cucumber, docker and jenkings. Configuration of Jira with Xray to automate the process of implement new test cases using BDD."
      ],
      tags: ["Java", "Spring Boot", "WebdriverIO", "TypeScript", "Cucumber", "Docker", "Jenkins", "Jira", "Xray", "BDD", "TESTING FUNCIONAL", "TESTING MOBILE", "API TESTING", "BACKEND TESTING"]
    },
    { 
      role: "QA Lead / Functional & Automated Tester", 
      company: "Altran Innovation (Customer: ImaginBank, Axa, Caixa Bank)", 
      date: "Jul 2017 - Jul 2019", 
      details: [
        "QA Lead, for a team of 4 testers with different seniorities.", 
        "Review of QA process and reports.",
        "Train and mentor other members of the quality assurance team.",
        "Work closely with the developer team (9 people) to teach and help in the process to include QA in the software cycle.",
        "Develop of QA strategy for a Kanban project, with 2 releases per week for a mobile application for two platforms: iOS and Android.",
        "Guide to external QA team in the understanding of the project and QA process.",
        "Coordination between the external QA team (India) and the development team (French).",
        "Clarification of specifications, contact with product owner and managers.",
        "Daily revision and approval of new bugs and revision of testing tasks.",
        "Develop and run smoke and regression tests to ensure product stability and performance.",
        "Review the specifications to find lack of information and provide information to development teams to support their bugfixing.",
        "Automation of regression test in Appium with Java and Testng for Android and iOS.",
        "Audit the testing process of the different teams that are developing the application 'Caixa Bank'.",
        "Testing of the mobile applications for different OS: android, iOS, and windows.",
        "Project estimation and develop test script using Selenium, Java, TestNG (page factory and page object pattern)."
      ],
      tags: ["Appium", "Java", "TestNG", "Selenium", "iOS", "Android", "Kanban", "TESTING FUNCIONAL", "TESTING MOBILE", "BACKEND TESTING"]
    },
    { 
      role: "Manual Tester, Automated Testing", 
      company: "GLOBANT (Customer: HUB International, Burson-Martseller)", 
      date: "Mar 2015 - Jul 2017", 
      details: [
        "Develop test script using an Accenture Test Automation Center.",
        "Run and manage different test suites.",
        "Run different types of testing: exploratory, regression, smoke, sanity, and integration.",
        "Design and review of Test Case. Report and manage bugs reported.",
        "Accessibility testing.",
        "Testing multi-browser and multi-platform. Mobile testing with different devices (android, iPhone).",
        "Develop automated tests for the smoke test, using Selenium Webdriver, C# (POM - PF).",
        "Some relevant projects in this account: New interactive map of San Francisco Airport. PVA, accessibility testing for the campaign for Paralyzed Veterans of America."
      ],
      tags: ["Selenium Webdriver", "C#", "Mobile Testing", "Accessibility", "TESTING FUNCIONAL", "TESTING MOBILE", "API TESTING", "BACKEND TESTING"]
    },
    { 
      role: "Developer Frontend", 
      company: "FREELANCE", 
      date: "Jan 2013 - To date", 
      details: [
        "Dynamic web development: Wordpress, Joomla.", 
        "Develop web application software.",
        "Responsive web design.", 
        "Responsive email marketing."
      ],
      tags: ["WordPress", "Joomla", "Frontend", "Responsive Design", "BACKEND TESTING"]
    },
    { 
      role: "Functional Analyst / Developer Back / QA Tester", 
      company: "PROAGILE S.A", 
      date: "Apr 2013 - Feb 2015", 
      details: [
        "Develop a web application for metal mechanic industry. (php mysql - js)", 
        "Design UAT Test.",
        "Perform estimation and progress reports.",
        "Design user manuals.",
        "Provide Functional Support for the Testing Team (Back Office).",
        "Design and execution of test cases.",
        "Selection and definition of test cases for smoke test.",
        "Reporting and defects trucking.",
        "Data preparation and Control results."
      ],
      tags: ["PHP", "MySQL", "JavaScript", "UAT", "Manual Testing", "TESTING FUNCIONAL", "BACKEND TESTING"]
    },
    { 
      role: "Team Leader / Developer / Functional Testing", 
      company: "Learning Latin America", 
      date: "Jan 2012 - Nov 2013", 
      details: [
        "Manage team with different roles: developer, design, illustrator.", 
        "Developer of interactive e-learning courses.",
        "Installation and configuration of different e-learning platforms.",
        "Functional testing of the different courses developed.",
        "Develop of different interactive courses for the tool Enterprise Architect.",
        "Installation, configuration, and maintenance of the learning platform, courses, material, and students.",
        "Support for the different clients with Enterprise Architect."
      ],
      tags: ["Enterprise Architect", "E-learning", "Functional Testing", "Team Leadership", "TESTING FUNCIONAL", "BACKEND TESTING"]
    },
    { 
      role: "Front end and Back end / Functional Testing", 
      company: "Operadores Mendoza Viajes", 
      date: "Jan 2011 - Jan 2012", 
      details: [
        "Develop a new institutional site for this tour operator.", 
        "Develop a booking system. (Java, JSP, MVC)",
        "Email marketing campaign. Search Engine Optimization.",
        "Design and execution of test cases.",
        "Reporting and defects tracking.",
        "Data Preparation and Control results."
      ],
      tags: ["Java", "JSP", "MVC", "SEO", "Functional Testing", "TESTING FUNCIONAL", "BACKEND TESTING"]
    }
  ];

  // --- Automation Flow Logic ---
  const viewTestResults = () => {
    setPhase('TEST_RESULTS');
    setLogs([
      { msg: "> Gitlab CI/CD: Pipeline #8892 Failed.", type: "error" },
      { msg: "> Running 3 tests using 1 worker", type: "info" },
      { msg: "  ✘ 1) cv-profile.spec.ts:12:5 › Verify Candidate Core Profile (1.2s)", type: "error" },
      { msg: "      AssertionError: expected locator('.profile-name') to have text 'Cecilia Ponce Molinas'", type: "error" },
      { msg: "  ✘ 2) cv-experience.spec.ts:24:2 › Verify Work Experience Complete List (0.8s)", type: "error" },
      { msg: "      AssertionError: expected locator('.experience-list').count() to be >= 11", type: "error" },
      { msg: "  ✘ 3) cv-skills.spec.ts:40:1 › Verify Tech Stack Rendering (0.5s)", type: "error" },
      { msg: "      Error: locator('.tech-stack-container') is not visible", type: "error" }
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
    setLogs(prev => [
      ...prev,
      { msg: "> [System] Automation skipped by user.", type: "system" },
      { msg: "> [System] Deployment successful. CV v2.0.0 is live.", type: "success" }
    ]);
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
        if (!isMounted) return;
        setTicketStatus('In Progress');
        
        await delay(1500);
        if (!isMounted) return;
        setTicketStatus('Fixed');
        
        await delay(1500);
        if (!isMounted) return;
        setPhase('IDE_FIX');
      } else if (phase === 'IDE_FIX') {
        setIdeStep(0);
        await delay(1500);
        if (!isMounted) return;
        setIdeStep(1); 
        await delay(1000);
        if (!isMounted) return;
        setIdeStep(2); 
        await delay(1500);
        if (!isMounted) return;
        setIdeStep(3); 
        await delay(1000);
        if (!isMounted) return;
        setIdeStep(4); 
        
        await delay(2500);
        if (!isMounted) return;
        setPhase('PIPELINE_RUN_PASS');
      } else if (phase === 'PIPELINE_RUN_PASS') {
        setLogs([
          { msg: "> Gitlab CI/CD: Triggering pipeline run #8893...", type: "system" },
          { msg: "> [Job: Test] npx playwright test cv-validations.feature", type: "command" }
        ]);
        await delay(1500);
        if (!isMounted) return;
        addLog("  ✓ 1) Verify Candidate Core Profile (0.8s)", "success");
        await delay(1500);
        if (!isMounted) return;
        addLog("  ✓ 2) Verify Work Experience Complete List (1.1s)", "success");
        await delay(1500);
        if (!isMounted) return;
        addLog("  ✓ 3) Verify Tech Stack Rendering (0.6s)", "success");
        await delay(1000);
        if (!isMounted) return;
        addLog("> 3 passed (2.5s)", "success");
        
        await delay(3000); 
        if (!isMounted) return;
        setPhase('COMMIT_FINAL');
      } else if (phase === 'COMMIT_FINAL') {
        addLog("> [Job: Deploy] Committing production release...", "system");
        await delay(1000);
        if (!isMounted) return;
        addLog("> [Dev] git add .", "command");
        addLog("> [Dev] git commit -m 'Release: CV v2.0.0 (Bugfixes applied)'", "command");
        await delay(1500);
        if (!isMounted) return;
        addLog("> [Dev] git push origin main", "command");
        await delay(1500);
        if (!isMounted) return;
        addLog("> [System] Deployment successful. CV v2.0.0 is live.", "success");
        
        await delay(2500);
        if (!isMounted) return;
        setPhase('FIXED');
      }
    };
    
    automateBugFixFlow();
    return () => { isMounted = false; };
  }, [phase]);

  const handleDownloadPDF = () => {
    window.print();
  };

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

  let actionText = null;
  let isWaiting = false;

  switch (phase) {
    case 'FAILED_ALERT':
      actionText = 'Click the blinking "REVIEW LOGS" button to start the self-healing process.';
      isWaiting = true;
      break;
    case 'TEST_RESULTS':
      actionText = 'Click "VIEW BDD SCENARIOS" (blinking yellow button) in the console below to see why tests failed.';
      isWaiting = true;
      break;
    case 'GHERKIN':
      if (gherkinStep < 8) {
        actionText = 'Executing BDD scenarios evaluation step by step...';
        isWaiting = false;
      } else {
        actionText = 'Evaluation finished with critical failures. Click "REPORT BUG TO JIRA" to continue.';
        isWaiting = true;
      }
      break;
    case 'JIRA_TICKET':
      actionText = 'The system is auto-assigning the ticket and working on the fix automatically...';
      isWaiting = false;
      break;
    case 'IDE_FIX':
      actionText = 'Developer rewriting and fixing locators and data arrays in App.jsx...';
      isWaiting = false;
      break;
    case 'PIPELINE_RUN_PASS':
      actionText = 'Opening BDD validation window and verifying all scenarios pass (green)...';
      isWaiting = false;
      break;
    case 'COMMIT_FINAL':
      actionText = 'Tests successful. Performing final Commit simulating Production deployment (v2.0.0)...';
      isWaiting = false;
      break;
    case 'FIXED':
      actionText = 'Process successfully completed! The CV is fully operational.';
      isWaiting = false;
      break;
    default:
      actionText = 'Executing automatic processes...';
      isWaiting = false;
      break;
  }

  const containerClasses = "min-h-screen font-sans overflow-x-hidden flex transition-all duration-1000 " + (isBrokenUI ? "bg-zinc-50" : "bg-[#fafafa]");

  return (
    <div className={containerClasses} ref={topRef}>
      
      {/* Dynamic Smart Navigation Button */}
      {!isBrokenUI && phase === 'FIXED' && (
        <button
          onClick={isAtBottom ? scrollToTop : scrollToBottom}
          className="fixed bottom-8 right-8 z-[200] bg-indigo-600 text-white p-3.5 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-indigo-700 hover:scale-110 active:scale-95 transition-all duration-300 print:hidden flex items-center justify-center group"
          title={isAtBottom ? "Volver arriba" : "Ir al contacto"}
        >
          {isAtBottom ? (
            <ArrowUpCircle size={28} className="animate-in fade-in zoom-in duration-300" />
          ) : (
            <ArrowDownCircle size={28} className="animate-in fade-in zoom-in duration-300" />
          )}
        </button>
      )}

      {/* FLOATING SKIP BUTTON FOR IMPATIENT USERS */}
      {phase !== 'FIXED' && phase !== 'FAILED_ALERT' && (
        <button
          onClick={skipToFinal}
          className="fixed top-6 right-6 z-[200] bg-[#09090b]/90 text-zinc-300 px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] font-medium text-xs flex items-center gap-2 border border-white/20 backdrop-blur-md transition-all hover:bg-white hover:text-black animate-bounce print:hidden group"
        >
          <FastForward size={14} className="text-zinc-400 group-hover:text-black" />
          SKIP TO FULL CV
        </button>
      )}

      {/* --- SIDEBAR: PROGRESS TRACKER (TECH MINIMALIST) --- */}
      <aside className="hidden md:flex flex-col w-[280px] bg-[#09090b] text-zinc-400 fixed h-full left-0 top-0 z-[100] border-r border-white/5 shadow-2xl print:hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-zinc-100 font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
            <Activity size={16} className="text-zinc-500" />
            QA Lifecycle
          </h2>
          <p className="text-xs text-zinc-600 mt-2 font-mono">Status monitoring</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {workflowSteps.map((step, index) => {
              let statusIcon;
              let textClass = "text-zinc-700";
              
              const isPast = phase === 'FIXED' || index < currentStepIndex;
              const isCurrent = phase !== 'FIXED' && index === currentStepIndex;

              if (isPast) {
                statusIcon = <CheckCircle2 size={16} className="text-emerald-500" />;
                textClass = "text-emerald-500";
              } else if (isCurrent) {
                statusIcon = <CircleDashed size={16} className="text-blue-400 animate-spin" />;
                textClass = "text-zinc-100 font-medium";
              } else {
                statusIcon = <div className="w-4 h-4 rounded-full border-2 border-zinc-800"></div>;
              }

              if (step.id === 'FAILED_ALERT') {
                 statusIcon = <XCircle size={16} className="text-red-500" />;
                 textClass = isCurrent ? "text-red-400 font-medium" : "text-red-500";
              }
              if (step.id === 'GHERKIN') {
                 if ((isCurrent && gherkinStep >= 8) || isPast) {
                    statusIcon = <XCircle size={16} className="text-red-500" />;
                    textClass = isCurrent ? "text-red-400 font-medium" : "text-red-500";
                 }
              }

              return (
                <div key={step.id} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {statusIcon}
                  </div>
                  <div className={`text-xs tracking-wide ${textClass}`}>
                    {step.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Panel */}
        <div className="p-4 border-t border-white/5 print:hidden flex flex-col gap-2">
          <div className={"p-4 rounded-lg border transition-all duration-300 bg-[#121214] " + (isWaiting ? "border-zinc-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]" : "border-white/5")}>
            <div className="flex items-center gap-2 mb-3">
              {isWaiting ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
                  </span>
                  <span className="text-zinc-200 font-semibold text-[10px] uppercase tracking-widest flex items-center gap-1">
                    AWAITING ACTION
                  </span>
                </>
              ) : (
                <>
                  <Loader2 size={12} className="animate-spin text-zinc-500" />
                  <span className="text-zinc-500 font-semibold text-[10px] uppercase tracking-widest">PROCESSING</span>
                </>
              )}
            </div>
            <p className={"text-xs leading-relaxed font-mono " + (isWaiting ? "text-zinc-300" : "text-zinc-500")}>
              {actionText}
            </p>
          </div>
        </div>
      </aside>

      {/* --- INITIAL MODAL OVERLAY --- */}
      {phase === 'FAILED_ALERT' && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#09090b]/80 backdrop-blur-sm p-4 print:hidden">
          <div className="bg-[#121214] border border-red-900/40 p-8 sm:p-12 rounded-2xl shadow-[0_0_60px_rgba(220,38,38,0.15)] max-w-xl w-full text-center flex flex-col items-center animate-in zoom-in-95 fade-in duration-500 relative overflow-hidden">
            
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

            <button 
              onClick={viewTestResults}
              className="w-full sm:w-auto bg-red-600/90 hover:bg-red-500 text-white font-bold px-8 py-3.5 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] animate-[pulse_2s_ease-in-out_infinite] ring-1 ring-red-400/50 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Terminal size={18} />
              REVIEW LOGS (Heal CV)
            </button>

            <div className="w-full mt-10 pt-6 border-t border-white/5 flex flex-col items-center gap-4">
              <p className="text-[11px] sm:text-xs text-zinc-500 italic">
                If you are in a rush, you can skip straight to the CV, but you'll miss out on the game :)
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button 
                  onClick={skipToFinal}
                  className="text-zinc-400 hover:text-zinc-200 font-medium px-6 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <FastForward size={14} />
                  SKIP TO FULL CV
                </button>
                <a 
                  href="https://www.linkedin.com/in/ceciliaponce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium px-6 py-2 rounded-md border border-blue-900/30 hover:border-blue-700/50 hover:bg-blue-900/10 transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <ExternalLink size={14} />
                  LINKEDIN PROFILE
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="flex-1 md:ml-[280px] relative flex justify-center pb-32 print:m-0 print:p-0 print:pb-0">
        
        {/* Main CV Container */}
        <div className="w-full max-w-5xl xl:max-w-6xl transition-all duration-500 relative my-8 sm:my-16 px-4 sm:px-8 print:my-0 print:px-0 print:w-full print:max-w-none">
          
          {/* Header Dashboard superior */}
          {!isBrokenUI && phase === 'FIXED' && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 animate-in fade-in duration-1000 print:hidden">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">v2.0.0</span>
                <span className="text-zinc-400 border-l border-zinc-300 pl-2">Updated: {LAST_UPDATED}</span>
                <span className="ml-2 pl-2 border-l border-zinc-300 flex items-center gap-1.5 text-zinc-400" title="Page Views">
                  <Eye size={14} /> {visits !== null ? visits.toLocaleString() : <Loader2 size={10} className="animate-spin" />}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handleDownloadPDF} className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 bg-white border border-zinc-200 hover:border-zinc-300 hover:text-zinc-900 px-3 py-1.5 rounded-md shadow-sm transition-all">
                  <Download size={14} /> Download PDF
                </button>
                <a href="mailto:cecilia.poncemolinas@gmail.com" className="flex items-center gap-1.5 text-xs font-medium text-white bg-zinc-900 border border-zinc-900 hover:bg-zinc-800 px-3 py-1.5 rounded-md shadow-sm transition-all">
                  <Mail size={14} /> Contact
                </a>
              </div>
            </div>
          )}

          {/* CV Content - Modern Minimalist Paper */}
          <main className={"p-6 sm:p-12 h-full relative transition-all duration-1000 print:shadow-none print:border-none print:p-0 print:bg-transparent " + (isBrokenUI ? "bg-[#f4f4f5] grayscale-[50%] contrast-125 opacity-90 blur-[0.5px]" : "bg-white border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl")}>
            
            {/* HEADER */}
            <header className={"relative z-10 mb-10 sm:mb-12 flex flex-col md:flex-row md:justify-between md:items-start transition-all duration-1000 " + (isBrokenUI ? "border-l-4 border-red-500 pl-4 -rotate-1 skew-x-1 print:border-none print:pl-0" : "print:mb-8")}>
              {isBrokenUI && (
                <div className="absolute -top-4 -right-4 bg-red-500 text-white text-[9px] font-mono px-2 py-0.5 rounded-sm print:hidden">
                  ERR_DATA_CORRUPTION
                </div>
              )}

              <div>
                <h1 className={"transition-all duration-1000 pb-1 " + (isBrokenUI ? "font-semibold tracking-tighter text-2xl font-mono text-red-900 line-through profile-name" : "text-5xl sm:text-6xl font-serif font-light text-zinc-900 tracking-tight profile-name")}>
                  {isBrokenUI ? 'Sizilia Ponse M.' : 'Cecilia Ponce Molinas'}
                </h1>
                <h2 className={"mt-2 font-medium transition-all duration-1000 " + (isBrokenUI ? "text-sm text-red-600" : "text-base sm:text-lg text-zinc-500 tracking-tight")}>
                  {isBrokenUI ? 'Junior Manual Tester' : 'QA Architect / QA Lead / QA Automation'}
                </h2>
              </div>
              
              <div className={"mt-5 md:mt-0 flex flex-col gap-2 transition-all duration-1000 " + (isBrokenUI ? "text-red-700 font-mono items-start md:items-end text-xs" : "text-zinc-700 md:items-end text-sm")}>
                <span className="flex items-center gap-2 font-medium">
                  <MapPin size={16} className={isBrokenUI ? "text-red-500 shrink-0" : "text-indigo-500 shrink-0"} /> 
                  {isBrokenUI ? 'Undefined Location' : 'Barcelona, Spain / Remote'}
                </span>
                <span className="flex items-center gap-2 font-medium group">
                  <Phone size={16} className={isBrokenUI ? "text-red-500 shrink-0" : "text-indigo-500 shrink-0 animate-[bounce_3s_infinite] group-hover:scale-110 transition-transform"} /> 
                  {isBrokenUI ? '555-0000-ERROR' : '+34 910052989'}
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

            {/* SUMMARY */}
            <section className={"relative z-10 mb-10 sm:mb-12 transition-all duration-1000 " + (isBrokenUI ? "opacity-70 translate-x-2" : "")}>
              <h3 className={"text-xs font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 " + (isBrokenUI ? "text-red-500" : "text-zinc-900")}>
                {isBrokenUI ? 'ERR_SUMMARY' : 'Career Summary'}
              </h3>
              {isBrokenUI ? (
                <div className="space-y-1 text-[11px] font-mono text-zinc-500">
                  <p>Exception in thread "main" java.lang.NullPointerException</p>
                  <p>growth + learning = NaN</p>
                </div>
              ) : (
                <div className="space-y-4 text-[13px] sm:text-sm text-zinc-600 leading-relaxed font-light">
                  <p className="italic font-medium text-zinc-800">"growth + learning = happiness"</p>
                  <p>
                    Senior QA Architect and Test Automation Specialist with a comprehensive background in software development and quality engineering. Proven track record of defining and leading scalable QA strategies for international, cross-functional teams across the US, Canada, and Europe.
                  </p>
                  <p>
                    Adept at bridging the gap between business objectives and technology execution. My expertise encompasses designing modern testing frameworks from scratch, leading technical proposals, establishing rigorous quality gates, and fostering CI/CD best practices to accelerate delivery.
                  </p>
                  <p>
                    Having navigated roles as a Business Analyst, Full-Stack Developer, and QA Lead, I bring a holistic, end-to-end perspective to software quality. This multifaceted background empowers me to anticipate architectural bottlenecks, design resilient automation ecosystems, and drive a culture of continuous improvement within agile environments.
                  </p>
                </div>
              )}
            </section>

            {/* EXPERIENCE */}
            <section className={"relative z-10 mb-10 sm:mb-12 transition-all duration-1000 " + (isBrokenUI ? "scale-[0.98] -translate-y-2 opacity-60 experience-list" : "experience-list")}>
              <h3 className={"text-xs font-semibold tracking-widest uppercase mb-6 " + (isBrokenUI ? "text-red-500 line-through" : "text-zinc-900")}>
                {isBrokenUI ? 'Work XP' : 'Experience'}
              </h3>

              <div className="space-y-8 print:space-y-6">
                {fullExperience.map((job, i) => (
                  <div key={i} className={"relative " + (isBrokenUI && i > 0 ? "hidden" : "animate-in fade-in slide-in-from-bottom-2 duration-500 print:break-inside-avoid")}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1.5">
                      <h4 className={"font-semibold text-sm sm:text-base " + (isBrokenUI ? "text-red-800 font-mono" : "text-zinc-900")}>
                        {isBrokenUI ? 'Manual Tester' : job.role}
                      </h4>
                      <span className={"text-[11px] sm:text-xs font-medium mt-1 sm:mt-0 tabular-nums tracking-wide px-2.5 py-1 rounded " + (isBrokenUI ? "bg-red-50 text-red-500" : "bg-zinc-50 text-zinc-500")}>
                        {isBrokenUI ? '1990 - 1991' : job.date}
                      </span>
                    </div>
                    <h5 className={"text-xs sm:text-[13px] font-medium mb-3 tracking-tight " + (isBrokenUI ? "text-red-400" : "text-indigo-600 uppercase")}>
                      {isBrokenUI ? 'Unknown Corp' : job.company}
                    </h5>
                    {!isBrokenUI && (
                      <>
                        <ul className="space-y-2 mb-4">
                          {job.details.map((detail, j) => (
                            <li key={j} className="text-[13px] sm:text-sm text-zinc-600 flex items-start gap-2.5 leading-relaxed font-light">
                              <span className="w-1 h-1 rounded-full bg-indigo-200 mt-2 shrink-0 border border-indigo-200 print:bg-zinc-400 print:border-zinc-400"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        {job.tags && job.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3 print:mt-2">
                            {job.tags.map((tag, tid) => (
                              <span key={tid} className="px-3 py-1 bg-sky-50 text-sky-700 rounded-md text-[10px] sm:text-[11px] font-bold border border-sky-100 tracking-tight uppercase print:border-zinc-300 print:text-zinc-800 print:bg-transparent">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION & SKILLS */}
            {!isBrokenUI && (
              <section className="grid lg:grid-cols-2 gap-12 mb-14 border-t border-zinc-100 pt-12 relative z-10 tech-stack-container print:break-inside-avoid print:grid-cols-2 print:gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 mb-8">Education & Certifications</h3>
                  <ul className="space-y-6">
                    <li className="flex flex-col gap-1">
                      <a href="https://www.udemy.com/certificate/UC-e21bf1b5-e85a-4d80-9a0b-fd3a73781371/" target="_blank" rel="noopener noreferrer" className="group">
                        <strong className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          Playwright TypeScript: GenAI + MCP Servers + Cucumber BDD <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </strong>
                        <span className="text-xs text-zinc-500 italic">Udemy (Feb 2026) • ID: UC-e21bf1b5-e85a-4d80-9a0b-fd3a73781371</span>
                      </a>
                    </li>
                    <li className="flex flex-col gap-1">
                      <a href="https://www.udemy.com/certificate/UC-e21bf1b5-e85a-4d80-9a0b-fd3a73781371/" target="_blank" rel="noopener noreferrer" className="group">
                        <strong className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          Playwright: Web Automation Testing with Java <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </strong>
                        <span className="text-xs text-zinc-500 italic">Udemy • ID: UC-e21bf1b5...</span>
                      </a>
                    </li>
                    <li className="flex flex-col gap-1">
                      <a href="https://www.udemy.com/certificate/UC-2ca81437-73f0-4404-98d1-22befd4b7a8b/" target="_blank" rel="noopener noreferrer" className="group">
                        <strong className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          Generative AI for QA Professionals (Udemy 2025) <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </strong>
                        <span className="text-xs text-zinc-500 italic">Udemy (Mar 2025) • ID: UC-2ca81437...</span>
                      </a>
                    </li>
                    <li className="flex flex-col gap-1">
                      <a href="https://scrummanager.com/website/c/verify-cert.php?code=6401aa48b79148.88104918" target="_blank" rel="noopener noreferrer" className="group">
                        <strong className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          Scrum Manager <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </strong>
                        <span className="text-xs text-zinc-500 italic">Scrum Manager (Mar 2023) • ID: 43106</span>
                      </a>
                    </li>
                    <li className="flex flex-col gap-1">
                      <a href="https://alumno.dexs.es/certificados/comprobar/f86d86be9d8fe91888d42f726b3a1f0b?embed=1&og=1" target="_blank" rel="noopener noreferrer" className="group">
                        <strong className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          ICCD, CT, monitorización continua <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </strong>
                        <span className="text-xs text-zinc-500 italic">DEXS (Apr 2022) • ID: f86d86be...</span>
                      </a>
                    </li>
                    <li className="pt-2 border-t border-zinc-50">
                      <strong className="text-[14px] font-bold text-zinc-900 block">Professional Testing Master</strong>
                      <span className="text-xs text-zinc-500">Universidad Tecnológica Nacional (Oct 2024)</span>
                    </li>
                    <li>
                      <strong className="text-[14px] font-bold text-zinc-900 block">Tecnicatura Universitaria en Web</strong>
                      <span className="text-xs text-zinc-500">Univ. Nacional de San Luis (2009-2011)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 mb-8">Global Tech Stack</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {['WebdriverIO', 'Cypress', 'Playwright', 'Appium', 'Selenium', 'Cucumber (BDD)', 'TypeScript', 'JavaScript', 'Java', 'C#', 'PHP', 'MySQL', 'Vitest', 'xUnit', 'PHP Unit', 'TestNG', 'Karate', 'Jira', 'Xray', 'Jenkins', 'Gitlab CI', 'Sonarqube', 'Postman'].map((skill, sid) => (
                      <span key={sid} className="px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-md text-[11px] font-bold text-violet-700 tracking-tight uppercase print:border-zinc-300 print:text-zinc-800 print:bg-transparent">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 mb-8 mt-12">Featured Repositories</h3>
                  <ul className="space-y-8">
                    <li>
                      <a href="https://github.com/qatransformation/playwright_cucumber_spanish" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-indigo-100 pl-4 hover:border-indigo-400 transition-all">
                         <span className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 flex items-center gap-2">playwright_cucumber_spanish <ExternalLink size={14}/></span>
                         <span className="text-[12px] text-zinc-500 block mt-2 font-light">Playwright automation framework integrated with Cucumber BDD, configured for Spanish language step definitions.</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/qatransformation/playwright_cucumber_pom" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-indigo-100 pl-4 hover:border-indigo-400 transition-all">
                         <span className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 flex items-center gap-2">playwright_cucumber_pom <ExternalLink size={14}/></span>
                         <span className="text-[12px] text-zinc-500 block mt-2 font-light">Playwright testing framework implementing Cucumber BDD and Page Object Model (POM) pattern. Optimized for scalability.</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/qatransformation/webdriverio-cucumber-pom-framework" target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-indigo-100 pl-4 hover:border-indigo-400 transition-all">
                         <span className="text-[14px] font-bold text-zinc-900 group-hover:text-indigo-600 flex items-center gap-2">webdriverio-cucumber-pom-framework <ExternalLink size={14}/></span>
                         <span className="text-[12px] text-zinc-500 block mt-2 font-light">WebdriverIO framework utilizing Cucumber for BDD and adhering to POM architecture with TypeScript integration.</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            )}

            {/* FREELANCE PROJECT & VIDEO */}
            <section className={`relative z-10 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-zinc-200 transition-all duration-1000 print:hidden ${isBrokenUI ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 mb-8 flex items-center gap-2"><PlayCircle size={16}/> Freelance Project Showcase</h3>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6">
                 <h4 className="font-semibold text-zinc-900 text-sm sm:text-base mb-2">QA Transformation Initiatives</h4>
                 <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
                   Showcasing advanced QA architecture and automation strategies implemented for freelance clients, focusing on scalable frameworks, CI/CD integration, and quality process optimization.
                 </p>
                 <div className="w-full aspect-video rounded-lg border border-zinc-300 overflow-hidden shadow-sm bg-black">
                   <video 
                     className="w-full h-full object-cover" 
                     controls 
                     preload="metadata">
                     <source src="/cv/qatransformationai.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                   </video>
                 </div>
              </div>
            </section>

            {/* FINAL CONTACT FOOTER */}
            {!isBrokenUI && phase === 'FIXED' && (
              <section ref={bottomRef} className="relative z-10 mt-16 pt-12 border-t-2 border-indigo-100 flex flex-col items-center animate-in slide-in-from-bottom-8 duration-1000 print:hidden">
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-indigo-900 mb-8 bg-indigo-50 px-6 py-2 rounded-full">
                  Get in touch
                </h3>
                <div className="flex flex-col sm:flex-row items-center gap-10 text-zinc-700">
                  <a href="mailto:cecilia.poncemolinas@gmail.com" className="flex flex-col items-center gap-3 group transition-transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-white border border-indigo-100 rounded-full flex items-center justify-center shadow-md group-hover:border-indigo-400 group-hover:shadow-lg transition-all">
                      <Mail size={22} className="text-indigo-600 animate-pulse" />
                    </div>
                    <span className="text-sm font-medium">cecilia.poncemolinas@gmail.com</span>
                  </a>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-14 h-14 bg-white border border-indigo-100 rounded-full flex items-center justify-center shadow-md">
                      <Phone size={22} className="text-indigo-600 animate-bounce" />
                    </div>
                    <span className="text-sm font-medium">+34 910052989</span>
                  </div>
                  <a href="https://www.linkedin.com/in/ceciliaponce/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group transition-transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-white border border-indigo-100 rounded-full flex items-center justify-center shadow-md group-hover:border-blue-400 group-hover:shadow-lg transition-all">
                      <ExternalLink size={22} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-2 text-zinc-400 text-xs italic">
                  <Globe size={14} /> European Citizen
                </div>
              </section>
            )}

          </main>
        </div>

        {/* --- MODALS & OVERLAYS --- */}

        {/* Console Drawer */}
        <div className={`
          fixed bottom-0 left-0 md:left-[280px] w-full md:w-[calc(100%-280px)] bg-[#09090b] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-[60] font-mono text-xs transition-transform duration-500 ease-in-out print:hidden backdrop-blur-xl
          ${showConsole ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-[#121214] border-b border-white/5 gap-2">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px]">
              <Terminal size={12} /> <span>GitLab CI/CD - run-e2e-tests</span>
            </div>
            {phase === 'TEST_RESULTS' && (
              <div className="flex gap-2">
                <button onClick={viewGherkin} className="bg-amber-500 text-black hover:bg-amber-400 font-bold text-[10px] sm:text-xs px-4 py-2 rounded-md flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-[bounce_1s_infinite] ring-2 ring-amber-300 transition-colors">
                  <FileCode size={14}/> VIEW BDD SCENARIOS (Click here)
                </button>
              </div>
            )}
          </div>
          <div className="p-4 h-48 md:h-56 overflow-y-auto overflow-x-auto whitespace-pre-wrap text-zinc-400">
            {logs.map((log, index) => (
              <div key={index} className={"mb-1 " + (log.type === 'error' ? "text-red-400" : log.type === 'success' ? "text-emerald-400" : log.type === 'command' ? "text-zinc-300" : "text-zinc-500")}>
                {log.msg}
              </div>
            ))}
            <div ref={endOfLogsRef} />
          </div>
        </div>

        {/* Gherkin View Modal */}
        {(phase === 'GHERKIN' || phase === 'PIPELINE_RUN_PASS') && (
          <div className="fixed inset-0 md:left-[280px] bg-black/40 backdrop-blur-md z-[70] flex items-center justify-center p-4 print:hidden">
            <div className="bg-[#09090b] border border-white/10 rounded-xl shadow-2xl w-[95vw] md:w-full max-w-3xl overflow-hidden font-mono text-xs animate-in zoom-in-95">
              <div className="bg-[#121214] px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/5 text-zinc-400">
                <div className="flex items-center gap-2"><FileCode size={14} className="text-zinc-500" /> cv-validations.feature</div>
                {phase === 'GHERKIN' && gherkinStep >= 8 && (
                  <button onClick={openJira} className="bg-blue-600 text-white hover:bg-blue-500 border border-blue-400 text-[10px] sm:text-xs px-5 py-2.5 rounded-md flex items-center gap-2 font-sans font-bold shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-pulse transition-all">
                    <Bug size={14}/> REPORT BUG TO JIRA (Click here)
                  </button>
                )}
                {phase === 'PIPELINE_RUN_PASS' && gherkinStep >= 8 && (
                  <div className="flex items-center gap-1.5 text-emerald-400 font-sans font-medium text-[10px]">
                    <CheckCircle2 size={14} /> AUTOMATION PASSED
                  </div>
                )}
              </div>
              <div className="p-5 text-zinc-400 overflow-x-auto overflow-y-auto max-h-[60vh] whitespace-pre-wrap break-words leading-relaxed">
                <span className="text-zinc-100">Feature:</span> Full CV Rendering Validation<br/><br/>
                
                &nbsp;&nbsp;<span className="text-zinc-100">Scenario:</span> Verify Candidate Core Profile<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">Given</span> the user accesses the CV portal
                {gherkinStep >= 1 && <span className="text-emerald-500 ml-2 animate-in fade-in">✓ PASS</span>}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">Then</span> the profile name should be "Cecilia Ponce Molinas"
                {gherkinStep >= 2 && <span className={phase === 'PIPELINE_RUN_PASS' ? "text-emerald-500 ml-2 animate-in fade-in" : "text-red-400 ml-2 animate-in fade-in"}>{phase === 'PIPELINE_RUN_PASS' ? '✓ PASS' : '✘ FAIL'}</span>}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">And</span> the role should match "QA Architect"
                {gherkinStep >= 3 && <span className={phase === 'PIPELINE_RUN_PASS' ? "text-emerald-500 ml-2 animate-in fade-in" : "text-red-400 ml-2 animate-in fade-in"}>{phase === 'PIPELINE_RUN_PASS' ? '✓ PASS' : '✘ FAIL'}</span>}<br/><br/>

                &nbsp;&nbsp;<span className="text-zinc-100">Scenario:</span> Verify Work Experience Complete List<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">Given</span> the profile is loaded
                {gherkinStep >= 4 && <span className="text-emerald-500 ml-2 animate-in fade-in">✓ PASS</span>}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">When</span> I check the experience section
                {gherkinStep >= 5 && <span className="text-emerald-500 ml-2 animate-in fade-in">✓ PASS</span>}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">Then</span> there should be at least 11 job entries visible
                {gherkinStep >= 6 && <span className={phase === 'PIPELINE_RUN_PASS' ? "text-emerald-500 ml-2 animate-in fade-in" : "text-red-400 ml-2 animate-in fade-in"}>{phase === 'PIPELINE_RUN_PASS' ? '✓ PASS' : '✘ FAIL'}</span>}<br/><br/>

                &nbsp;&nbsp;<span className="text-zinc-100">Scenario:</span> Verify Tech Stack Rendering<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">Then</span> the tech stack container should be visible
                {gherkinStep >= 7 && <span className={phase === 'PIPELINE_RUN_PASS' ? "text-emerald-500 ml-2 animate-in fade-in" : "text-red-400 ml-2 animate-in fade-in"}>{phase === 'PIPELINE_RUN_PASS' ? '✓ PASS' : '✘ FAIL'}</span>}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">And</span> it should contain "WebdriverIO" and "Playwright"
                {gherkinStep >= 8 && <span className={phase === 'PIPELINE_RUN_PASS' ? "text-emerald-500 ml-2 animate-in fade-in" : "text-red-400 ml-2 animate-in fade-in"}>{phase === 'PIPELINE_RUN_PASS' ? '✓ PASS' : '✘ FAIL'}</span>}
              </div>
            </div>
          </div>
        )}

        {/* JIRA Ticket Modal */}
        {phase === 'JIRA_TICKET' && (
          <div className="fixed inset-0 md:left-[280px] bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4 print:hidden">
            <div className="bg-white rounded-xl shadow-2xl w-[95vw] md:w-full max-w-3xl overflow-hidden font-sans animate-in zoom-in-95 border border-zinc-200">
              <div className="bg-zinc-50 px-5 py-3 border-b border-zinc-200 flex items-center gap-3">
                <Trello className="text-zinc-400" size={16} />
                <span className="text-zinc-600 font-medium text-xs tracking-wide uppercase">Project: CV-PORTAL / Defect</span>
                <span className="ml-auto text-xs text-zinc-400 font-mono">BUG-404</span>
              </div>
              
              <div className="flex flex-col md:flex-row max-h-[70vh] overflow-y-auto">
                <div className="flex-1 p-6 md:border-r border-zinc-100">
                  <h2 className="text-lg font-semibold text-zinc-900 mb-4 leading-snug">Regression: CV Data corrupted and missing sections</h2>
                  <div className="mb-4">
                    <h4 className="font-semibold text-xs text-zinc-500 uppercase tracking-widest mb-2">Description</h4>
                    <div className="text-xs text-zinc-600 bg-red-50/50 p-4 rounded-lg border border-red-100 font-mono whitespace-pre-wrap leading-relaxed">
                      <p>E2E pipeline failed during nightly run.</p>
                      <p>- Name is incorrectly displayed as "Sizilia Ponse M."</p>
                      <p>- Experience list is truncated to 1 item.</p>
                      <p>- Education & Tech Stack blocks are completely missing from DOM.</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-56 bg-zinc-50/50 p-6 flex flex-col gap-6">
                  <div>
                    <h4 className="font-semibold text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Status</h4>
                    <div className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider ${ticketStatus === 'Fixed' ? 'bg-emerald-100 text-emerald-700' : 'bg-zinc-200 text-zinc-700'}`}>
                      {ticketStatus}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Assignee</h4>
                    {ticketAssignee === 'Unassigned' ? (
                      <div className="text-xs text-zinc-500 flex items-center gap-2">
                        <Loader2 size={12} className="animate-spin" /> Unassigned
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-zinc-700 font-medium animate-in fade-in">
                        <div className="w-6 h-6 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[9px]">DT</div>
                        Dev Team
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-6 border-t border-zinc-200">
                    <div className="w-full bg-white text-zinc-600 py-2.5 rounded-md border border-zinc-200 text-center font-medium text-xs flex items-center justify-center gap-2 shadow-sm">
                      {ticketStatus === 'Fixed' ? (
                        <><CheckCircle size={14} className="text-emerald-500" /> Resolved</>
                      ) : (
                        <><Loader2 size={14} className="animate-spin text-zinc-400" /> Automating...</>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visualizador IDE Modal */}
        {phase === 'IDE_FIX' && (
          <div className="fixed inset-0 md:left-[280px] bg-black/40 backdrop-blur-md z-[80] flex items-center justify-center p-2 sm:p-4 print:hidden">
            <div className="bg-[#09090b] border border-white/10 rounded-xl shadow-2xl w-[95vw] md:w-full max-w-4xl h-[65vh] flex flex-col overflow-hidden animate-in zoom-in-95">
              <div className="bg-[#121214] px-4 py-2 flex items-center gap-2 border-b border-white/5 text-zinc-500 text-[10px]">
                <Code2 size={12} /> VS Code - Fixing BUG-404
              </div>
              <div className="flex flex-1 overflow-hidden">
                <div className="hidden sm:block w-48 bg-[#09090b] border-r border-white/5 p-4 text-[10px] text-zinc-500 font-mono">
                  <div className="mb-3 text-zinc-600 uppercase tracking-widest">Explorer</div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-zinc-300"><LayoutTemplate size={12}/> App.jsx</div>
                  <div className="flex items-center gap-1.5 mt-1.5"><FileCode size={12}/> data.json</div>
                </div>
                <div className="flex-1 p-4 font-mono text-[11px] bg-[#09090b] overflow-x-auto overflow-y-auto whitespace-pre leading-loose text-zinc-300">
                  <div className="text-zinc-600 mb-4">// src/App.jsx - Restoring full English CV Data</div>
                  
                  {ideStep >= 1 && (
                    <>
                      <div className="flex line-through opacity-40 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">42</span>
                        <span className="text-red-400">- {"<h1>Sizilia Ponse M.</h1>"}</span>
                      </div>
                      <div className="flex mb-4 line-through opacity-40 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">43</span>
                        <span className="text-red-400">- {"<h2>Junior Manual Tester</h2>"}</span>
                      </div>
                    </>
                  )}
                  {ideStep === 0 && (
                     <>
                      <div className="flex w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">42</span>
                        <span className="text-zinc-500">- {"<h1>Sizilia Ponse M.</h1>"}</span>
                      </div>
                      <div className="flex mb-4 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">43</span>
                        <span className="text-zinc-500">- {"<h2>Junior Manual Tester</h2>"}</span>
                      </div>
                     </>
                  )}

                  {ideStep >= 2 && (
                    <>
                      <div className="bg-emerald-900/10 flex animate-in fade-in slide-in-from-left-4 duration-300 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">42</span>
                        <span className="text-emerald-400">+ {"<h1>Cecilia Ponce Molinas</h1>"}</span>
                      </div>
                      <div className="bg-emerald-900/10 flex mb-6 animate-in fade-in slide-in-from-left-4 duration-300 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">43</span>
                        <span className="text-emerald-400">+ {"<h2>QA Architect / QA Lead / QA Automation</h2>"}</span>
                      </div>
                    </>
                  )}

                  {ideStep >= 3 && (
                    <>
                      <div className="flex mb-1 line-through opacity-40 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">88</span>
                        <span className="text-red-400">- const experience = [ data[0] ]; // BUG: Truncated array</span>
                      </div>
                      <div className="flex mb-4 line-through opacity-40 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">120</span>
                        <span className="text-red-400">- {"{/* <TechStackSection /> */}"}</span>
                      </div>
                    </>
                  )}
                  {ideStep < 3 && (
                    <>
                      <div className="flex mb-1 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">88</span>
                        <span className="text-zinc-500">- const experience = [ data[0] ]; // BUG: Truncated array</span>
                      </div>
                      <div className="flex mb-4 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">120</span>
                        <span className="text-zinc-500">- {"{/* <TechStackSection /> */}"}</span>
                      </div>
                    </>
                  )}

                  {ideStep >= 4 && (
                    <>
                      <div className="bg-emerald-900/10 flex mb-1 animate-in fade-in slide-in-from-left-4 duration-300 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">88</span>
                        <span className="text-emerald-400">+ const experience = data; // Restored full array (11 items)</span>
                      </div>
                      <div className="bg-emerald-900/10 flex animate-in fade-in slide-in-from-left-4 duration-300 w-max min-w-full">
                        <span className="text-zinc-700 w-8 shrink-0 select-none">120</span>
                        <span className="text-emerald-400">+ {"<TechStackSection isVisible={true} />"}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}