/*
 * All portfolio copy and facts live here, never in components. The story, stats, timeline,
 * credentials and VerdictRx wording match the AI with Ahmad platform's src/content/site.ts:
 * change them there and here together, so the two sites always tell the same story.
 * Visitor-facing text never uses the em dash.
 */

export const platform = {
  name: 'AI with Ahmad',
  url: 'https://learn.ahmadhassanrx.com',
  tagline: 'My free learning community',
  pitch:
    'Six stage-by-stage roadmaps, from your first line of Python to deployed AI products, with lessons, notebooks, portfolio projects and progress tracking. Free for everyone.',
  cta: 'Visit AI with Ahmad',
  navCta: 'AI with Ahmad',
  roadmapsCta: 'Explore the roadmaps',
  joinCta: 'How to join',
};

export const person = {
  name: 'Ahmad Hassan',
  roles: ['AI Engineer', 'Data Scientist', 'AI Educator'],
  location: 'Rawalpindi, Pakistan',
  headline: 'From drug molecules to neural networks.',
  intro:
    "I'm Ahmad, a PharmD graduate who taught himself machine learning and now builds production AI and MLOps systems. I've mentored 100+ students from medicine, business, engineering and the arts into data and AI roles.",
  availability: 'Open to collaboration and research',
  photoAlt: 'Ahmad Hassan',
  /** The two facts under the hero photo. */
  photoFacts: [
    { title: 'RQF Level 6 Diploma in AIOps', sub: 'Grade A* · EduQual', icon: 'Award' },
    { title: 'PharmD, 3.9 cGPA', sub: 'Quaid-i-Azam University (QAU)', icon: 'GraduationCap' },
  ],
} as const;

export const socials = {
  email: 'ahmad.hds393@gmail.com',
  whatsapp: '+92 316 5193665',
  whatsappUrl: 'https://wa.me/923165193665',
  linkedin: 'https://www.linkedin.com/in/ahmad-hassan-79a44b1a3',
  github: 'https://github.com/ahmadhassan-aiops',
  huggingface: 'https://huggingface.co/myhuggingface333',
  huggingfaceUser: 'myhuggingface333',
  portfolioProjects: 'https://github.com/ahmadhassan-aiops/AIOPS-Portfolio-Projects',
  superprof:
    'https://www.superprof.com/tutor-data-science-devops-mlops-cloud-cybersecurity-python-machine-learning-automation-lessons.html',
};

export const meta = {
  title: 'Ahmad Hassan · AI Engineer, Data Scientist & AI Educator',
  description:
    'Ahmad Hassan: a PharmD turned AI engineer with 1,500+ live teaching hours and 100+ students mentored. Projects in AI for health and medicine, ML, GenAI and MLOps, and the founder of AI with Ahmad, a free learning community.',
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#verdictrx', label: 'VerdictRx' },
  { href: '#roadmaps', label: 'Roadmaps' },
  { href: '#projects', label: 'Projects' },
  { href: '#huggingface', label: 'Hugging Face' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  primaryCta: platform.cta,
  secondaryCta: 'See my work',
  whatsappLink: 'or message me on WhatsApp',
  platformBadge: 'New',
};

export const stats = [
  { value: '5+', label: 'years in data science', icon: 'CalendarCheck' },
  { value: '1,500+', label: 'live teaching hours', icon: 'Presentation' },
  { value: '100+', label: 'students mentored', icon: 'Users' },
  { value: '30+', label: 'end-to-end ML projects', icon: 'FolderGit2' },
] as const;

export const about = {
  eyebrow: 'About me',
  title: 'About Ahmad',
  story: [
    'I trained as a pharmacist at Quaid-i-Azam University, and midway through my PharmD I discovered data science. I taught myself machine learning in the evenings, then took on freelance data science work on Fiverr and Upwork.',
    'After graduating with a 3.9 cGPA I moved fully into AI: consulting on ML projects, tutoring data science on Superprof, and interning in AIOps at Al Nafi, where I completed an RQF Level 6 Diploma in AIOps with an A*.',
    "My route into AI was the one any CS student takes: programming, computer systems and the mathematical foundations of machine learning, so I teach the fundamentals properly, not just the tools. Today I build production AI and MLOps systems, and I've mentored 100+ students, most of them from medicine, business, engineering and the arts, into data and AI roles.",
    "Next, I'm heading for a Master's and PhD in computational biology and bioinformatics, with one goal: AI-assisted drug discovery and development. It brings my training in medicine together with AI engineering and operations, and it is where my specialisation and my future lie.",
  ],
  quickInfo: [
    { icon: 'MapPin', text: 'Rawalpindi, Pakistan' },
    { icon: 'GraduationCap', text: 'PharmD · QAU · 3.9 / 4.0 cGPA' },
    { icon: 'Award', text: 'RQF Level 6 Diploma in AIOps · Al Nafi · A*' },
    { icon: 'Presentation', text: 'Data science tutor · Superprof' },
    { icon: 'Mail', text: 'ahmad.hds393@gmail.com', href: 'mailto:ahmad.hds393@gmail.com' },
    { icon: 'MessageCircle', text: '+92 316 5193665', href: 'https://wa.me/923165193665' },
  ],
  focusTitle: 'Current focus',
  focus: ['MLOps / AIOps', 'Kubernetes (CKA/CKAD)', 'Generative AI', 'Cloud Security', 'n8n Automation', 'AWS / Azure'],
} as const;

export const journey = {
  title: 'The path I took',
  intro: 'From a pharmacy degree to production AI, one deliberate step at a time, and on towards AI for drug discovery.',
  credentialsTitle: 'Education & credentials',
  nextLabel: 'Future goal',
  timeline: [
    { year: '2020', title: 'Discovered data science', text: 'Started teaching myself ML midway through the PharmD, then worked through the same foundations a CS student does: programming, computer systems and the maths behind AI.', icon: 'Sparkles' },
    { year: '2022', title: 'Freelance data scientist', text: 'Client projects on Fiverr and Upwork.', icon: 'Briefcase' },
    { year: '2024', title: 'PharmD, 3.9 cGPA', text: 'Graduated from Quaid-i-Azam University.', icon: 'GraduationCap' },
    { year: '2024', title: 'AI/ML consultant & tutor', text: 'Independent consulting, data science tutor on Superprof and AIOps intern at Al Nafi.', icon: 'Presentation' },
    { year: '2026', title: 'RQF Level 6 Diploma in AIOps, A*', text: 'Cloud, DevOps, security and AI systems.', icon: 'Award' },
    { year: 'Next', title: 'Computational biology & bioinformatics', text: "A Master's and PhD towards AI-assisted drug discovery and development, bringing medicine and AI together.", icon: 'Dna', future: true },
  ],
  // In-progress and planned items must never read as earned.
  credentials: [
    { title: 'PharmD', org: 'Quaid-i-Azam University', detail: '3.9 / 4.0 cGPA · 2024', inProgress: false, icon: 'GraduationCap' },
    { title: 'RQF Level 6 Diploma in AIOps (EduQual)', org: 'Al Nafi International College', detail: 'Grade A* · 2024–2026', inProgress: false, icon: 'Award' },
    { title: 'Kubestronaut, AWS & Azure certifications', org: 'Cloud and Kubernetes certifications for AI engineering', detail: 'In progress', inProgress: true, icon: 'Cloud' },
    { title: "Master's & PhD: computational biology and bioinformatics", org: 'Towards AI-assisted drug discovery and development', detail: 'Next goal', inProgress: true, icon: 'Dna' },
  ],
};

export const skills = {
  eyebrow: 'Skills',
  title: 'What I work with',
  intro: 'The stack I build with and teach, from the first notebook to monitored systems in production.',
  groups: [
    {
      title: 'Data science & ML',
      icon: 'ChartColumn',
      tools: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib / Seaborn', 'XGBoost / LightGBM', 'Statistics & Probability', 'Feature Engineering', 'SQL', 'Power BI', 'Tableau', 'Time Series Analysis'],
    },
    {
      title: 'Deep learning & GenAI',
      icon: 'BrainCircuit',
      tools: ['TensorFlow / Keras', 'PyTorch', 'ANN / CNN', 'RNN / LSTM', 'Transformers', 'Computer Vision (OpenCV)', 'NLP / Text Processing', 'Hugging Face', 'LLM Fine-tuning', 'Stable Diffusion', 'LangChain', 'Prompt Engineering'],
    },
    {
      title: 'DevOps & MLOps',
      icon: 'Workflow',
      tools: ['Docker', 'Kubernetes (K8s)', 'Jenkins / CI-CD', 'Ansible', 'Terraform', 'Git / GitHub', 'ArgoCD', 'Prometheus / Grafana', 'AWS (EC2, S3, ECR, ECS)', 'Azure', 'Python Flask', 'n8n Automation'],
    },
    {
      title: 'Cloud & security',
      icon: 'ShieldCheck',
      tools: ['Linux / RHEL', 'Bash Scripting', 'Network Security', 'CISSP (studying)', 'CCSP (studying)', 'SIEM / SOC', 'Penetration Testing', 'ISO 27001 / NIST', 'SCADA Security', 'Zero Trust Frameworks', 'Vulnerability Assessment', 'PCI-DSS / CIS Controls'],
    },
  ],
};

export const verdictrx = {
  eyebrow: 'Flagship product',
  title: 'Where PharmD meets production AI engineering',
  intro: 'Translating clinical domain knowledge into a full-stack AI system: the kind of depth that comes from understanding both the medicine and the machine.',
  name: 'VerdictRx',
  status: 'Ongoing work',
  domain: 'AI clinical decision support',
  outcome:
    'My flagship product: clinical decision support that helps physicians make the right prescribing choice by weighing the complete patient profile, with every recommendation backed by documented proof from clinical guidelines and rules.',
  note: 'Details shared selectively. Happy to discuss it in interviews and collaborations.',
  stackLabel: 'Tech stack',
  stack: ['FastAPI', 'PostgreSQL', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RAG pipeline', 'ChromaDB', 'Groq LLM', 'JWT auth', 'RxNorm', 'OpenFDA', 'Docker', 'Pytest'],
  signals: [
    { label: 'Production-grade', icon: 'Rocket' },
    { label: 'Deterministic & auditable', icon: 'ScrollText' },
    { label: 'Test coverage', icon: 'FlaskConical' },
    { label: 'Regulatory aware', icon: 'ShieldCheck' },
  ],
};

/** Names only, as on the platform (same order and accents); every card opens the roadmap there. */
export const roadmaps = {
  eyebrow: 'Learning roadmaps',
  title: 'Six roadmaps, one career path',
  intro:
    'AI Engineering is the flagship; the other five feed into it. Every roadmap lives on AI with Ahmad, free, with its lessons, notebooks, projects and progress tracking.',
  flagshipBadge: 'Flagship roadmap',
  openLabel: 'Open on AI with Ahmad',
  list: [
    { slug: 'ai-engineering', title: 'AI Engineering', accent: { light: '#1d4ed8', dark: '#6b93ff' }, flagship: true },
    { slug: 'data-science', title: 'Data Science', accent: { light: '#0e7490', dark: '#22d3ee' } },
    { slug: 'data-analytics', title: 'Data Analytics', accent: { light: '#be185d', dark: '#f472b6' } },
    { slug: 'devops', title: 'DevOps Engineering', accent: { light: '#6d28d9', dark: '#a78bfa' } },
    { slug: 'sysops', title: 'SysOps & Cloud Administration', accent: { light: '#c2410c', dark: '#fb923c' } },
    { slug: 'cloud-security', title: 'Cloud & Cyber Security', accent: { light: '#a16207', dark: '#facc15' } },
  ],
};

export type ProjectCategory = 'analysis' | 'ml' | 'dl' | 'cv-nlp' | 'genai' | 'sql-bi';

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: ProjectCategory;
  healthcare?: boolean;
  featured?: boolean;
  githubUrl: string;
  /** A public Hugging Face Space, where one exists. */
  liveUrl?: string;
}

const repo = (path: string) => `${socials.portfolioProjects}/tree/main/${path}`;

export const projectsSection = {
  eyebrow: 'Portfolio',
  title: 'Projects that speak for themselves',
  intro: 'Over 30 projects spanning data analysis, machine learning, generative AI and BI, each built to solve a real problem. Healthcare is where I started, so it is where much of my work lives.',
  featuredBadge: 'Featured',
  empty: 'No projects in this category yet.',
  codeLink: 'All project code on GitHub',
  appsLink: 'Live apps on Hugging Face',
};

export const categories: { id: 'all' | 'healthcare' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'healthcare', label: 'Healthcare & medical AI' },
  { id: 'analysis', label: 'Data analysis' },
  { id: 'ml', label: 'Machine learning' },
  { id: 'dl', label: 'Deep learning' },
  { id: 'cv-nlp', label: 'CV & NLP' },
  { id: 'genai', label: 'Generative AI' },
  { id: 'sql-bi', label: 'SQL & BI' },
];

export const projects: Project[] = [
  // Data analysis
  { title: 'Instacart Customer Behavior Analysis', desc: 'Deep EDA on grocery ordering patterns, repeat purchases, order timing, product affinities and customer segmentation.', tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Instacart-Analysis') },
  { title: 'Megaline Telecom Usage Analysis', desc: 'Statistical analysis of two prepaid plans (Surf vs. Ultimate) to determine which generates more revenue for the business.', tags: ['Python', 'Statistics', 'Hypothesis Testing', 'Seaborn'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Megaline%20Analysis') },
  { title: 'Microsoft SaaS Products Analysis', desc: 'Multi-dimensional analysis of SaaS product usage, customer segments and retention patterns across Microsoft product lines.', tags: ['Pandas', 'EDA', 'Business Intelligence'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Microsift%20SaaS%20products%20Analysis') },
  { title: 'San Francisco Housing Rental Analysis', desc: 'Geographic and temporal analysis of rental markets in SF, uncovering pricing trends, neighborhood patterns and investment opportunities.', tags: ['Python', 'GeoPandas', 'Visualization', 'Real Estate'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/San%20Francisco%20housing%20rental%20analysis') },
  { title: 'Taxi Company Revenue Analysis', desc: 'Analysis of ride patterns, peak hours, driver efficiency and revenue optimization strategies for a taxi service.', tags: ['Pandas', 'Time Series', 'Matplotlib'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Taxi%20Company%20Analysis') },
  { title: 'Video Games Console Sale Analysis', desc: 'Sales trend analysis across gaming platforms, genres and regions to identify the most profitable market segments.', tags: ['Python', 'EDA', 'Statistical Testing'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Video%20Games%20Console%20Sale%20Analysis') },
  { title: 'Stroke Risk Exploratory Analysis', desc: 'Clinical data analysis identifying key risk factors for stroke, including hypertension, BMI, glucose levels and age correlations.', tags: ['Medical Data', 'Seaborn', 'Correlation Analysis'], category: 'analysis', healthcare: true, githubUrl: repo('1.%20Data-analysis-with-python-Projects/Stroke%20Analysis') },
  // Machine learning
  { title: 'Bank Customer Churn Prediction', desc: 'Ensemble model (XGBoost + Random Forest) to predict which customers are likely to leave Beta Bank, achieving 85%+ F1-score.', tags: ['XGBoost', 'scikit-learn', 'SMOTE', 'Feature Engineering'], category: 'ml', featured: true, githubUrl: repo('2.%20Machine%20Learning%20Projects/customer%20attrition%20at%20Beta%20Bank%20using%20ML') },
  { title: 'Gold Recovery Prediction (Mining)', desc: 'Multi-stage regression model predicting gold recovery rate at rougher and final purification stages to optimize extraction.', tags: ['Regression', 'Pipeline', 'Cross-validation', 'sMAPE'], category: 'ml', featured: true, githubUrl: repo('2.%20Machine%20Learning%20Projects/Predict%20recovery%20of%20gold%20during%20mining%20proces%20using%20ML') },
  { title: 'Optimal Oil Well Location (Bootstrapping)', desc: 'Geospatial ML model using bootstrapping to identify the most profitable oil well locations, balancing risk and expected return.', tags: ['Linear Regression', 'Bootstrapping', 'Risk Analysis'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/optimal%20oil%20well%20location%20selection%20using%20ML') },
  { title: 'Rusty Bargain, Used Car Price Model', desc: 'Gradient boosting model for a used car marketplace to predict fair market prices, compared across LightGBM, XGBoost and Random Forest.', tags: ['LightGBM', 'XGBoost', 'RMSE Optimization'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Rusty%20Bargain%20Company%20ML%20Model%20To%20Attract%20New%20Buyers%20For%20The%20Used%20Cars') },
  { title: 'Sweet Lift Taxi Demand Forecasting', desc: 'Time series forecasting of hourly taxi demand at airports using ARIMA, LightGBM and feature engineering on lag and window features.', tags: ['Time Series', 'LightGBM', 'ARIMA', 'Feature Engineering'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Forecasting%20Orders%20of%20Sweet%20Lift%20Taxi%20Company%20Using%20ML') },
  { title: 'Insurance Benefit Regression', desc: 'Linear regression and obfuscation-safe model for predicting insurance payouts while protecting customer data privacy.', tags: ['Linear Regression', 'Data Masking', 'Similarity Analysis'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Regression%20Analysis%20on%20Insurance%20Benifits%20Data') },
  { title: 'Mobile User Plan Classification', desc: 'Decision tree and random forest classifier to recommend the optimal mobile plan (Smart/Ultra) based on user behavior.', tags: ['Classification', 'Decision Tree', 'Random Forest'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Mobile%20company%20users%20classification%20model') },
  { title: 'Bank Loan Default Prediction', desc: 'End-to-end ML pipeline predicting the probability of loan default, with model explainability using SHAP values.', tags: ['XGBoost', 'SHAP', 'Class Imbalance', 'Pipeline'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/ML%20project%20(Bank%20Loan%20Model)') },
  { title: 'Predictive Maintenance Cost Reduction', desc: 'ML model predicting equipment failure probability to shift from reactive to proactive maintenance, reducing operational costs.', tags: ['Classification', 'Cost-benefit Analysis', 'Reliability'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Maintenance%20cost%20reduction%20through%20predictive%20techniques') },
  { title: 'Stroke Prediction', desc: 'Predicts stroke risk from patient health records, handling heavy class imbalance with resampling and boosted trees.', tags: ['scikit-learn', 'XGBoost', 'Imbalanced data', 'Medical Data'], category: 'ml', healthcare: true, githubUrl: repo('2.%20Machine%20Learning%20Projects/Stroke%20Prediction') },
  { title: 'Lung Cancer Prediction App', desc: 'A multiclass lung cancer risk model served as a Dockerised Flask web app that generates a PDF report.', tags: ['XGBoost', 'Flask', 'Docker', 'Medical AI'], category: 'ml', healthcare: true, featured: true, githubUrl: repo('2.%20Machine%20Learning%20Projects/Lungs%20cancer%20Prediction%20App'), liveUrl: 'https://huggingface.co/spaces/myhuggingface333/lung_cancer_prediction' },
  { title: 'RUL Jet Engine Prediction App', desc: 'Remaining Useful Life (RUL) prediction for jet engines using the NASA CMAPSS dataset, deployed as a Flask safety application that alerts maintenance teams before critical failure.', tags: ['Random Forest', 'Time Series', 'Flask', 'Docker', 'Predictive Maintenance'], category: 'ml', featured: true, githubUrl: repo('2.%20Machine%20Learning%20Projects/RLU%20jet%20prediction') },
  // Deep learning
  { title: 'Churn Prediction via Neural Network', desc: 'Deep learning approach to customer churn: an ANN with dropout regularization outperforming classical ML baselines.', tags: ['Keras', 'ANN', 'Dropout', 'Binary Classification'], category: 'dl', featured: true, githubUrl: repo('3.%20Deep%20Learning%20Projects/Churn%20prediction%20using%20neural%20network') },
  { title: "Alzheimer's Disease Detection", desc: 'A deep learning image classifier that grades MRI brain scans across four stages of dementia.', tags: ['Deep learning', 'CNN', 'TensorFlow', 'Medical AI'], category: 'dl', healthcare: true, githubUrl: repo('3.%20Deep%20Learning%20Projects/alzheimer%20Disease%20Detection') },
  // Computer vision & NLP
  { title: 'Computer Vision Classification', desc: 'CNN-based image classification pipeline with transfer learning (ResNet), data augmentation and production-ready inference.', tags: ['CNN', 'ResNet', 'Transfer Learning', 'OpenCV'], category: 'cv-nlp', featured: true, githubUrl: repo('4.%20Computer%20Vision%20Projects/5.%20CV%20Project') },
  { title: 'Bank Customer Complaints Summarization', desc: 'NLP pipeline using transformer-based models to automatically summarize customer complaints, reducing support team workload.', tags: ['Transformers', 'Hugging Face', 'NLP', 'Text Summarization'], category: 'cv-nlp', githubUrl: repo('5.%20Natural%20Languague%20Projects/Bank%20customers%20complain%20Summarization%20task') },
  // Generative AI
  { title: 'MedGuide: Medical Assistant RAG Bot', desc: "An LLM assistant that explains a patient's prescribed medicines, nutrition and lifestyle plan against international clinical guidelines.", tags: ['RAG', 'LLMs', 'Streamlit', 'Medical AI'], category: 'genai', healthcare: true, featured: true, githubUrl: 'https://github.com/ahmadhassan-aiops/medical-assistant-chatbot' },
  { title: 'Complaints Classification, Fine-tuned LLM', desc: 'Fine-tuned DistilBERT for multi-class complaint categorization, achieving >92% accuracy vs. a zero-shot baseline.', tags: ['LoRA', 'Hugging Face', 'Fine-tuning', 'NLP'], category: 'genai', featured: true, githubUrl: repo('6.%20Gen%20AI%20Projects/Gen%20AI%20(Cmplaints%20classification%20with%20fine%20tuning)') },
  { title: 'Nutritional Bot', desc: 'A nutrition-disorder specialist chatbot that answers from a medical reference library with retrieval-augmented generation.', tags: ['RAG', 'LangChain', 'ChromaDB', 'Hugging Face'], category: 'genai', healthcare: true, githubUrl: repo('6.%20Gen%20AI%20Projects/GEN%20AI%20(Nutritional%20Bot)'), liveUrl: 'https://huggingface.co/spaces/myhuggingface333/Nutritional_assistant' },
  { title: 'Text-to-Image with Stable Diffusion', desc: 'DreamBooth fine-tuning pipeline to generate personalized images with Stable Diffusion, including custom artist style training.', tags: ['Stable Diffusion', 'DreamBooth', 'LoRA', 'Diffusers'], category: 'genai', featured: true, githubUrl: repo('6.%20Gen%20AI%20Projects/Text%20To%20image%20using%20Stable%20Diffusion') },
  // SQL & BI
  { title: 'AdventureHubs SQL Analysis', desc: 'Complex SQL queries on the AdventureWorks database: joins, window functions, CTEs and performance optimization.', tags: ['SQL', 'Window Functions', 'CTEs', 'Query Optimization'], category: 'sql-bi', githubUrl: repo('7.%20SQL%20Projects/AdventureHubs') },
  { title: 'SQL + Python + Power BI ETL Pipeline', desc: 'Full ETL pipeline extracting from SQL Server, transforming with Python and Pandas, and loading to Power BI for executive dashboards.', tags: ['SQL', 'Python', 'Power BI', 'ETL'], category: 'sql-bi', featured: true, githubUrl: repo('8.%20SQL%2BPython%2BPowerBI%20Combined%20ETL%20Project') },
  { title: 'HR Attrition Dashboard (Tableau)', desc: 'Interactive Tableau dashboard visualizing employee attrition patterns, satisfaction scores and retention risk factors.', tags: ['Tableau', 'HR Analytics', 'Dashboard Design'], category: 'sql-bi', githubUrl: repo('Tableau/HR-Employee-Attrition%20Project') },
  { title: 'Medical Settings Comparative Analysis', desc: 'Tableau analysis comparing performance across medical settings: patient outcomes, treatment efficacy and resource utilization.', tags: ['Tableau', 'Healthcare Analytics', 'KPI Visualization'], category: 'sql-bi', healthcare: true, githubUrl: repo('Tableau/Medical%20seetings%20comparative%20Analysis') },
];

export const huggingface = {
  eyebrow: 'Open source',
  title: 'Models & experiments on Hugging Face',
  intro:
    'Fine-tuned models, experiment checkpoints and research artifacts published openly, from NLP and generative AI projects to domain-specific adaptations in the clinical and analytical space.',
  cta: 'View my Hugging Face profile',
  cardFooter: 'Explore models & spaces',
  stats: ['Models & Spaces', 'Open source'],
  tags: ['NLP', 'Fine-tuning', 'Transformers', 'GenAI', 'Medical AI'],
};

export const achievements = {
  eyebrow: 'Milestones',
  title: 'Achievements & recognition',
  intro: 'A track record built through years of consistent learning, teaching and building.',
  inProgressLabel: 'In progress',
  watchLabel: 'Watch the defense',
  items: [
    { icon: 'GraduationCap', title: 'PharmD, Quaid-i-Azam University', subtitle: '3.9 / 4.0 cGPA · Graduated 2024', year: '2024', desc: "Top-performing graduate in one of Pakistan's most rigorous pharmaceutical programs, building a foundation in scientific research, data interpretation and analytical thinking.", tags: ['Research', 'Analytical Chemistry', 'Clinical Data'] },
    { icon: 'Award', title: 'RQF Level 6 Diploma in AIOps (EduQual)', subtitle: 'Al Nafi International College · Grade A*', year: '2024–2026', desc: 'An AIOps diploma covering cyber security, DevOps, cloud architecture, system administration and AI systems: the complete operational stack for modern AI deployment.', tags: ['DevOps', 'Cloud', 'Cyber Security', 'AI Systems'] },
    { icon: 'Presentation', title: '1,500+ live teaching hours', subtitle: 'Superprof · Top tutor', year: '2022–now', desc: 'Over 1,500 hours of live one-to-one and group instruction in data science, ML and AI, making complex topics accessible to complete beginners.', tags: ['Superprof', 'Online Teaching', 'Mentoring'] },
    { icon: 'Users', title: '100+ students mentored', subtitle: 'Cross-domain · Career transitions', year: '2022–now', desc: 'Worked with over 100 students from medicine, business, engineering and liberal arts backgrounds, guiding them through career transitions into data science and MLOps roles.', tags: ['Career Coaching', 'Curriculum Design', 'DS/ML'] },
    { icon: 'Cloud', title: 'Kubernetes certification path', subtitle: 'KCNA · CKAD · CKA · CKS · KCSA', year: 'In progress', inProgress: true, desc: 'Pursuing the full Kubestronaut certification stack, from cloud native associate through security specialist, as part of the Golden Kubestronaut program.', tags: ['Kubernetes', 'CNCF', 'Cloud Native'] },
    { icon: 'ShieldCheck', title: 'Security certifications path', subtitle: 'CISSP · CCSP · CCSK · ISSAP', year: 'In progress', inProgress: true, desc: 'Studying toward top-tier security certifications covering enterprise security architecture, cloud security and identity management at the advanced practitioner level.', tags: ['CISSP', 'CCSP', 'Cloud Security'] },
    { icon: 'FolderGit2', title: '30+ end-to-end ML projects', subtitle: 'Production-grade · Multi-domain', year: '2020–now', desc: 'Delivered 30+ complete ML projects spanning data analysis, machine learning, deep learning, NLP, computer vision, GenAI and business intelligence.', tags: ['Python', 'ML/DL', 'GenAI', 'BI'] },
    { icon: 'Video', title: 'Final year project defense, RQF Level 6', subtitle: 'Al Nafi International College · Presented to Mohammad Faisal', year: '2026', desc: 'Live-streamed final year project defense for the EduQual RQF Level 6 AIOps programme: "Orchestrating a Precision Agriculture Platform with Drone Analytics, IoT Sensors, and Machine Learning for Sustainable Farming", delivered before an examination panel.', tags: ['Precision Agriculture', 'Drone Analytics', 'IoT', 'ML'], link: 'https://www.youtube.com/live/ogLCyzB_Dl0?si=9yeLTRNwGrpe1QpW' },
    { icon: 'Zap', title: '5+ years in data science', subtitle: 'Self-taught → industry practitioner', year: '2020–now', desc: 'Built expertise from zero in 2020 through deliberate practice, real projects and hands-on teaching.', tags: ['ML', 'Deep Learning', 'MLOps', 'GenAI'] },
  ],
};

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Ready to build something remarkable?',
  text: "Whether you're looking to hire an AI engineer, collaborate on an AI project or research, or want guidance on your own path, I'd love to hear from you.",
  email: 'Send an email',
  whatsapp: 'WhatsApp',
};

export const footer = {
  tagline: 'AI Engineer · Data Scientist · AI Educator',
  portfolioTitle: 'Portfolio',
  learnTitle: 'Learn',
  contactTitle: 'Contact',
  learn: [
    { href: platform.url, label: 'AI with Ahmad' },
    { href: `${platform.url}/roadmaps`, label: 'Roadmaps' },
    { href: `${platform.url}/map`, label: 'Interdisciplinary map' },
    { href: `${platform.url}/join`, label: 'How to join' },
  ],
};
