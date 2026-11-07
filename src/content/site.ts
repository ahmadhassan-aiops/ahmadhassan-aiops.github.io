/*
 * All portfolio copy and facts live here, never in components. The facts (stats, dates, credentials
 * and roadmap names and taglines) match the AI with Ahmad platform; the wording is the portfolio's own.
 *
 * Style: first person, sentence case, British spelling, no em dashes, no exclamation marks, " · " as the
 * separator in meta lines, and no result metrics on projects (those stay on the CV).
 */

export const platform = {
  name: 'AI with Ahmad',
  url: 'https://learn.ahmadhassanrx.com',
  pitch:
    'Six stage-by-stage roadmaps, from your first line of Python to deployed AI products, with lessons, notebooks, portfolio projects and progress tracking. Free for everyone.',
  cta: 'Visit AI with Ahmad',
  navCta: 'AI with Ahmad',
  sub: 'Free learning platform',
  roadmapsCta: 'Explore the roadmaps',
  joinCta: 'How to join',
};

export const person = {
  name: 'Ahmad Hassan',
  jobTitle: 'AI Engineer',
  location: 'Rawalpindi, Pakistan',
  availability: 'Open to collaboration and research',
  photoAlt: 'Ahmad Hassan',
  /** The two credential cards under the hero photo. */
  credentials: [
    { title: 'PharmD', meta: '3.9 / 4.0 cGPA · Quaid-i-Azam University', icon: 'GraduationCap' },
    { title: 'Level 6 Diploma in AIOps', meta: 'Grade A* · EduQual', icon: 'Award' },
  ],
} as const;

export const socials = {
  email: 'ahmad.hds393@gmail.com',
  whatsapp: '+92 316 5193665',
  whatsappUrl: 'https://wa.me/923165193665',
  linkedin: 'https://www.linkedin.com/in/ahmad-hassan-79a44b1a3',
  github: 'https://github.com/ahmadhassan-aiops',
  huggingface: 'https://huggingface.co/myhuggingface333',
  portfolioProjects: 'https://github.com/ahmadhassan-aiops/AIOPS-Portfolio-Projects',
  superprof:
    'https://www.superprof.com/tutor-data-science-devops-mlops-cloud-cybersecurity-python-machine-learning-automation-lessons.html',
};

export const meta = {
  title: 'Ahmad Hassan · AI engineer, data scientist and AI educator',
  description:
    'Ahmad Hassan is a PharmD turned AI engineer who builds production AI for health and medicine and teaches the next generation of AI engineers through AI with Ahmad, a free learning platform.',
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#verdictrx', label: 'VerdictRx' },
  { href: '#projects', label: 'Projects' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#contact', label: 'Contact' },
];

export const navLabels = {
  contactCta: 'Get in touch',
  home: 'Ahmad Hassan, back to top',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  menu: 'Menu',
  theme: 'Theme',
  toggleTheme: 'Toggle dark mode',
  skip: 'Skip to content',
};

export const hero = {
  eyebrow: 'PharmD · AI engineer · Educator',
  roles: 'AI engineer · Data scientist · MLOps engineer',
  statement: 'I build production AI for health and medicine, and teach the next generation of AI engineers.',
  intro: 'A PharmD graduate turned AI engineer, designing machine learning, GenAI and MLOps systems end to end.',
  primaryCta: 'See my work',
  socialsLabel: 'Find me on',
  toolsLabel: 'Tools I build with',
  tools: [
    ['python', 'Python'],
    ['pytorch', 'PyTorch'],
    ['tensorflow', 'TensorFlow'],
    ['scikitlearn', 'scikit-learn'],
    ['pandas', 'Pandas'],
    ['huggingface', 'Hugging Face'],
    ['langchain', 'LangChain'],
    ['opencv', 'OpenCV'],
    ['fastapi', 'FastAPI'],
    ['docker', 'Docker'],
    ['kubernetes', 'Kubernetes'],
    ['terraform', 'Terraform'],
    ['ansible', 'Ansible'],
    ['githubactions', 'GitHub Actions'],
    ['argo', 'Argo CD'],
    ['prometheus', 'Prometheus'],
    ['grafana', 'Grafana'],
    ['postgresql', 'PostgreSQL'],
    ['linux', 'Linux'],
    ['n8n', 'n8n'],
  ] as [string, string][],
};

/** The headline numbers: shown once, in the stats band under the hero. */
export const stats = [
  { value: '5+', label: 'years in data science' },
  { value: '1,500+', label: 'hours of live teaching' },
  { value: '100+', label: 'students mentored' },
  { value: '30+', label: 'end-to-end ML projects' },
] as const;

export const about = {
  eyebrow: 'About',
  title: 'A pharmacist who builds AI',
  story: [
    'I trained as a pharmacist at Quaid-i-Azam University, and midway through my PharmD I discovered data science. I taught myself machine learning in the evenings, then took on freelance data science work on Fiverr and Upwork.',
    'After graduating I moved fully into AI: consulting on machine learning projects, tutoring data science on Superprof and interning in AIOps at Al Nafi International College, where I went on to complete a Level 6 Diploma in AIOps.',
    'I learned AI the way a computer science student does: programming, computer systems and the mathematics behind machine learning. That is why I teach the fundamentals properly, not just the tools. Today I build AI and MLOps systems and mentor students from medicine, business, engineering and the arts as they move into data and AI roles.',
    "I want to excel at the intersection of AI and medicine, and I'm eager to learn AI-assisted drug discovery and development. That is why I'm heading for a Master's and PhD in computational biology and bioinformatics: it brings my training in medicine together with AI engineering and operations, and it is where my specialisation and my future lie.",
  ],
  pullQuote: 'From drug molecules to neural networks.',
  factsTitle: 'Quick facts',
  facts: [
    { icon: 'MapPin', text: 'Rawalpindi, Pakistan' },
    { icon: 'GraduationCap', text: 'PharmD, Quaid-i-Azam University' },
    { icon: 'Award', text: 'Level 6 Diploma in AIOps' },
    { icon: 'Presentation', text: 'Superprof Ambassador · Data science tutor' },
  ],
  nextGoal: {
    label: 'Next goal',
    text: "A Master's and PhD in computational biology and bioinformatics, towards AI-assisted drug discovery and development.",
  },
  focusTitle: 'Current focus',
  focus: ['MLOps and AIOps', 'Kubernetes (CKA/CKAD track)', 'Generative AI', 'Cloud security', 'n8n automation', 'AWS and Azure'],
} as const;

export const journey = {
  eyebrow: 'Journey',
  title: 'From pharmacy to production AI',
  nextLabel: 'Next goal',
  timeline: [
    { year: '2020', title: 'Discovered data science', text: 'I taught myself machine learning midway through my PharmD, then worked through the foundations a computer science student learns.', icon: 'Sparkles' },
    { year: '2022', title: 'Freelance data scientist', text: 'Client projects on Fiverr and Upwork.', icon: 'Briefcase' },
    { year: '2024', title: 'PharmD, Quaid-i-Azam University', text: 'Graduated with a 3.9 / 4.0 cGPA.', icon: 'GraduationCap' },
    { year: '2024', title: 'AI consultant and tutor', text: 'Machine learning consulting, data science tutoring on Superprof and an AIOps internship at Al Nafi.', icon: 'Presentation' },
    { year: '2026', title: 'Level 6 Diploma in AIOps', text: 'Graduated with Grade A*, covering cloud, DevOps, security and AI systems.', icon: 'Award' },
    { year: 'Next', title: 'Computational biology and bioinformatics', text: "A Master's and PhD towards AI-assisted drug discovery and development.", icon: 'Dna', future: true },
  ],
  educationTitle: 'Education and credentials',
  education: [
    {
      title: 'PharmD, Quaid-i-Azam University',
      org: 'Doctor of Pharmacy',
      grade: '3.9 / 4.0 cGPA',
      years: '2024',
      text: 'A base in research, clinical data and analytical thinking.',
      icon: 'GraduationCap',
    },
    {
      title: 'RQF Level 6 Diploma in AIOps (EduQual)',
      org: 'Al Nafi International College',
      grade: 'Grade A*',
      years: '2024–2026',
      text: 'Cyber security, DevOps, cloud architecture, system administration and AI systems.',
      icon: 'Award',
    },
  ],
};

export const expertise = {
  eyebrow: 'Expertise',
  title: 'What I build with',
  intro: 'The stack I use and teach, from the first notebook to monitored systems in production.',
  moreLabel: (n: number) => `+${n} more`,
  lessLabel: 'Show fewer',
  groups: [
    {
      title: 'Data science and ML',
      desc: 'Turning raw data into models and decisions.',
      icon: 'ChartColumn',
      tools: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'XGBoost / LightGBM', 'SQL', 'Statistics and probability', 'Feature engineering', 'Matplotlib / Seaborn', 'Time series analysis', 'Power BI', 'Tableau'],
    },
    {
      title: 'Deep learning and GenAI',
      desc: 'Neural networks, LLMs and retrieval systems.',
      icon: 'BrainCircuit',
      tools: ['PyTorch', 'TensorFlow / Keras', 'Hugging Face', 'LangChain', 'Transformers', 'LLM fine-tuning', 'Prompt engineering', 'Computer vision (OpenCV)', 'ANN / CNN', 'RNN / LSTM', 'NLP and text processing', 'Stable Diffusion'],
    },
    {
      title: 'DevOps and MLOps',
      desc: 'Shipping, scaling and monitoring models.',
      icon: 'Workflow',
      tools: ['Docker', 'Kubernetes', 'Jenkins CI/CD', 'Terraform', 'Ansible', 'Git / GitHub', 'Argo CD', 'Prometheus / Grafana', 'AWS (EC2, S3, ECR, ECS)', 'Azure', 'Python Flask', 'n8n automation'],
    },
    {
      title: 'Cloud and security',
      desc: 'Running and protecting systems in the cloud.',
      icon: 'ShieldCheck',
      tools: ['Linux / RHEL', 'Bash scripting', 'Network security', 'SIEM / SOC', 'Penetration testing', 'Vulnerability assessment', 'Zero trust frameworks', 'ISO 27001 / NIST', 'SCADA security', 'PCI-DSS / CIS controls'],
    },
  ],
};

export const verdictrx = {
  eyebrow: 'Flagship product',
  title: 'VerdictRx: clinical decision support',
  intro: 'Clinical knowledge turned into a full-stack AI system, built by someone who understands both the medicine and the machine.',
  name: 'VerdictRx',
  status: 'Ongoing work',
  domain: 'AI clinical decision support',
  outcome:
    'My flagship product: clinical decision support that helps physicians make the right prescribing choice by weighing the complete patient profile, with every recommendation backed by documented proof from clinical guidelines and rules.',
  note: 'Details shared selectively. Happy to discuss it in interviews and collaborations.',
  stackLabel: 'Tech stack',
  stack: [
    { label: 'Backend', items: ['FastAPI', 'PostgreSQL', 'Pytest', 'JWT auth', 'Docker'] },
    { label: 'AI', items: ['RAG pipeline', 'ChromaDB', 'Groq LLM', 'RxNorm', 'OpenFDA'] },
    { label: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  ],
  principles: [
    { label: 'Deterministic and auditable', text: 'Every recommendation cites the guideline or rule behind it.', icon: 'ScrollText' },
    { label: 'Production-grade', text: 'Typed API, auth, containers and CI.', icon: 'Rocket' },
    { label: 'Tested', text: 'Pytest coverage on clinical rules.', icon: 'FlaskConical' },
    { label: 'Regulation-aware', text: 'Built with clinical safety and data protection in mind.', icon: 'ShieldCheck' },
  ],
};

export type ProjectCategory = 'analysis' | 'ml' | 'dl' | 'cv-nlp' | 'genai' | 'sql-bi';

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: ProjectCategory;
  healthcare?: boolean;
  /** Position in the featured row (VerdictRx is always first, so these start at 2). */
  featured?: number;
  githubUrl: string;
  /** A public Hugging Face Space, where one exists. */
  liveUrl?: string;
}

const repo = (path: string) => `${socials.portfolioProjects}/tree/main/${path}`;
const space = (id: string) => `${socials.huggingface.replace('huggingface.co/', 'huggingface.co/spaces/')}/${id}`;

/** The four public Spaces (verified live on 2026-11-08). */
const spaces = {
  turbofan: space('turbofan_RUL_prediction_App'),
  lungCancer: space('lung_cancer_prediction'),
  forecasting: space('email_and_calls_forecasting'),
  nutritional: space('Nutritional_assistant'),
};

export const projectsSection = {
  eyebrow: 'Projects',
  title: 'Selected work',
  intro:
    'Over 30 projects across data analysis, machine learning, deep learning, generative AI and BI. Healthcare is where I started, so much of my work lives there.',
  featuredTitle: 'Featured',
  allTitle: 'All projects',
  filterLabel: 'Filter projects',
  healthcareBadge: 'Healthcare',
  columns: { title: 'Project', category: 'Category', tools: 'Tools', links: 'Links' },
  showAll: (n: number) => `Show all ${n} projects`,
  showFewer: 'Show fewer projects',
  empty: 'No projects in this category yet.',
  readMore: 'Read more',
  liveLabel: 'Live app',
  codeLabel: 'Code',
  codeLink: 'All project code on GitHub',
  appsLink: 'Live apps on Hugging Face',
};

/** VerdictRx leads the featured row; it is not one of the filterable projects. */
export const featuredFlagship = {
  title: 'VerdictRx',
  desc: 'My flagship product: clinical decision support that helps physicians make the right prescribing choice by weighing the complete patient profile, with every recommendation backed by documented proof from clinical guidelines and rules.',
  badges: ['Flagship product', 'Ongoing work'],
  tags: ['Clinical AI', 'LLMs', 'Healthcare'],
  href: '#verdictrx',
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
  { title: 'Instacart customer behaviour analysis', desc: 'Explores grocery ordering patterns, repeat purchases, order timing and product affinities to segment Instacart customers.', tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Instacart-Analysis') },
  { title: 'Megaline telecom usage analysis', desc: 'Compares two prepaid plans with statistical tests to find which one earns Megaline more revenue.', tags: ['Python', 'Statistics', 'Hypothesis testing', 'Seaborn'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Megaline%20Analysis') },
  { title: 'Microsoft SaaS products analysis', desc: 'Analyses product usage, customer segments and retention across Microsoft SaaS product lines to guide business decisions.', tags: ['Pandas', 'EDA', 'Business intelligence'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Microsift%20SaaS%20products%20Analysis') },
  { title: 'San Francisco housing rental analysis', desc: 'Maps rental prices across San Francisco over time to reveal pricing trends, neighbourhood patterns and investment opportunities.', tags: ['Python', 'GeoPandas', 'Visualisation', 'Real estate'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/San%20Francisco%20housing%20rental%20analysis') },
  { title: 'Taxi company revenue analysis', desc: 'Studies ride patterns, peak hours and driver efficiency to suggest ways a taxi company can optimise revenue.', tags: ['Pandas', 'Time series', 'Matplotlib'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Taxi%20Company%20Analysis') },
  { title: 'Video game console sales analysis', desc: 'Tracks sales across platforms, genres and regions to identify the most profitable segments for a games retailer.', tags: ['Python', 'EDA', 'Statistical testing'], category: 'analysis', githubUrl: repo('1.%20Data-analysis-with-python-Projects/Video%20Games%20Console%20Sale%20Analysis') },
  { title: 'Stroke risk exploratory analysis', desc: 'Explores clinical records to identify stroke risk factors such as hypertension, BMI, glucose level and age.', tags: ['Medical data', 'Seaborn', 'Correlation analysis'], category: 'analysis', healthcare: true, githubUrl: repo('1.%20Data-analysis-with-python-Projects/Stroke%20Analysis') },
  // Machine learning
  { title: 'Bank customer churn prediction', desc: 'Predicts which Beta Bank customers are likely to leave, using an XGBoost and random forest ensemble.', tags: ['XGBoost', 'scikit-learn', 'SMOTE', 'Feature engineering'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/customer%20attrition%20at%20Beta%20Bank%20using%20ML') },
  { title: 'Gold recovery prediction', desc: 'Predicts gold recovery at the rougher and final purification stages with a multi-stage regression model to optimise extraction.', tags: ['Regression', 'Pipeline', 'Cross-validation', 'sMAPE'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Predict%20recovery%20of%20gold%20during%20mining%20proces%20using%20ML') },
  { title: 'Optimal oil well location', desc: 'Uses bootstrapped regression to choose the most profitable oil well region while balancing risk and expected return.', tags: ['Linear regression', 'Bootstrapping', 'Risk analysis'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/optimal%20oil%20well%20location%20selection%20using%20ML') },
  { title: 'Rusty Bargain used car price model', desc: 'Predicts fair market prices for a used car marketplace, comparing LightGBM, XGBoost and random forest models.', tags: ['LightGBM', 'XGBoost', 'RMSE'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Rusty%20Bargain%20Company%20ML%20Model%20To%20Attract%20New%20Buyers%20For%20The%20Used%20Cars') },
  { title: 'Sweet Lift taxi demand forecasting', desc: 'Forecasts hourly airport taxi demand with ARIMA and LightGBM, using lag and rolling-window features.', tags: ['Time series', 'LightGBM', 'ARIMA', 'Feature engineering'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Forecasting%20Orders%20of%20Sweet%20Lift%20Taxi%20Company%20Using%20ML') },
  { title: 'Insurance benefit regression', desc: 'Predicts insurance payouts with linear regression while masking customer data to protect privacy.', tags: ['Linear regression', 'Data masking', 'Similarity analysis'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Regression%20Analysis%20on%20Insurance%20Benifits%20Data') },
  { title: 'Mobile user plan classification', desc: 'Recommends the right mobile plan, Smart or Ultra, from user behaviour with decision tree and random forest classifiers.', tags: ['Classification', 'Decision tree', 'Random forest'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Mobile%20company%20users%20classification%20model') },
  { title: 'Bank loan default prediction', desc: 'Predicts the probability of loan default in an end-to-end pipeline, with SHAP values explaining each decision.', tags: ['XGBoost', 'SHAP', 'Class imbalance', 'Pipeline'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/ML%20project%20(Bank%20Loan%20Model)') },
  { title: 'Predictive maintenance cost reduction', desc: 'Predicts equipment failure so maintenance can move from reactive to proactive, reducing operating costs.', tags: ['Classification', 'Cost-benefit analysis', 'Reliability'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/Maintenance%20cost%20reduction%20through%20predictive%20techniques') },
  { title: 'Stroke prediction', desc: 'Predicts stroke risk from patient health records, handling heavy class imbalance with resampling and boosted trees.', tags: ['scikit-learn', 'XGBoost', 'Imbalanced data'], category: 'ml', healthcare: true, featured: 4, githubUrl: repo('2.%20Machine%20Learning%20Projects/Stroke%20Prediction') },
  { title: 'Lung cancer prediction app', desc: 'A multiclass lung cancer risk model served as a Dockerised Flask web app that generates a PDF report.', tags: ['XGBoost', 'Flask', 'Docker'], category: 'ml', healthcare: true, featured: 5, githubUrl: repo('2.%20Machine%20Learning%20Projects/Lungs%20cancer%20Prediction%20App'), liveUrl: spaces.lungCancer },
  { title: 'Jet engine RUL prediction app', desc: "Predicts the remaining useful life of jet engines on NASA's turbofan data, served as a Flask app that alerts maintenance teams.", tags: ['Random forest', 'Time series', 'Flask', 'Docker', 'Predictive maintenance'], category: 'ml', githubUrl: repo('2.%20Machine%20Learning%20Projects/RLU%20jet%20prediction'), liveUrl: spaces.turbofan },
  // Deep learning
  { title: 'Churn prediction with a neural network', desc: 'Predicts customer churn with a Keras neural network using dropout regularisation, compared against classical machine learning baselines.', tags: ['Keras', 'ANN', 'Dropout', 'Binary classification'], category: 'dl', githubUrl: repo('3.%20Deep%20Learning%20Projects/Churn%20prediction%20using%20neural%20network') },
  { title: "Alzheimer's disease detection", desc: 'A deep learning image classifier that grades MRI brain scans across four stages of dementia.', tags: ['Deep learning', 'CNN', 'TensorFlow'], category: 'dl', healthcare: true, featured: 6, githubUrl: repo('3.%20Deep%20Learning%20Projects/alzheimer%20Disease%20Detection') },
  // Computer vision and NLP
  { title: 'Computer vision image classification', desc: 'Classifies images with a CNN pipeline using ResNet transfer learning and data augmentation, ready for inference.', tags: ['CNN', 'ResNet', 'Transfer learning', 'OpenCV'], category: 'cv-nlp', githubUrl: repo('4.%20Computer%20Vision%20Projects/5.%20CV%20Project') },
  { title: 'Bank complaint summarisation', desc: "Summarises bank customer complaints automatically with transformer models to cut support teams' reading time.", tags: ['Transformers', 'Hugging Face', 'NLP', 'Summarisation'], category: 'cv-nlp', githubUrl: repo('5.%20Natural%20Languague%20Projects/Bank%20customers%20complain%20Summarization%20task') },
  // Generative AI
  { title: 'MedGuide: medical assistant RAG bot', desc: "An LLM assistant that explains a patient's prescribed medicines, nutrition and lifestyle plan against international clinical guidelines.", tags: ['RAG', 'LLMs', 'Streamlit'], category: 'genai', healthcare: true, featured: 2, githubUrl: 'https://github.com/ahmadhassan-aiops/medical-assistant-chatbot' },
  { title: 'Complaint classification with a fine-tuned LLM', desc: 'Classifies customer complaints into categories with a fine-tuned DistilBERT model, compared against a zero-shot baseline.', tags: ['LoRA', 'Hugging Face', 'Fine-tuning', 'NLP'], category: 'genai', githubUrl: repo('6.%20Gen%20AI%20Projects/Gen%20AI%20(Cmplaints%20classification%20with%20fine%20tuning)') },
  { title: 'Nutritional bot', desc: 'A nutrition-disorder specialist chatbot that answers from a medical reference library with retrieval-augmented generation.', tags: ['RAG', 'LangChain', 'ChromaDB'], category: 'genai', healthcare: true, featured: 3, githubUrl: repo('6.%20Gen%20AI%20Projects/GEN%20AI%20(Nutritional%20Bot)'), liveUrl: spaces.nutritional },
  { title: 'Text-to-image with Stable Diffusion', desc: 'Generates personalised images with Stable Diffusion, fine-tuned with DreamBooth to learn a custom subject and artist style.', tags: ['Stable Diffusion', 'DreamBooth', 'LoRA', 'Diffusers'], category: 'genai', githubUrl: repo('6.%20Gen%20AI%20Projects/Text%20To%20image%20using%20Stable%20Diffusion') },
  // SQL and BI
  { title: 'AdventureHubs SQL analysis', desc: 'Answers business questions on the AdventureWorks database with joins, window functions and CTEs, tuned for performance.', tags: ['SQL', 'Window functions', 'CTEs', 'Query optimisation'], category: 'sql-bi', githubUrl: repo('7.%20SQL%20Projects/AdventureHubs') },
  { title: 'SQL, Python and Power BI ETL pipeline', desc: 'Extracts data from SQL Server, transforms it with Python and Pandas, and loads it into Power BI for executive dashboards.', tags: ['SQL', 'Python', 'Power BI', 'ETL'], category: 'sql-bi', githubUrl: repo('8.%20SQL%2BPython%2BPowerBI%20Combined%20ETL%20Project') },
  { title: 'HR attrition dashboard in Tableau', desc: 'An interactive Tableau dashboard showing employee attrition patterns, satisfaction scores and retention risk factors for HR teams.', tags: ['Tableau', 'HR analytics', 'Dashboard design'], category: 'sql-bi', githubUrl: repo('Tableau/HR-Employee-Attrition%20Project') },
  { title: 'Medical settings comparative analysis', desc: 'Compares patient outcomes, treatment efficacy and resource use across medical settings in Tableau.', tags: ['Tableau', 'Healthcare analytics', 'KPI visualisation'], category: 'sql-bi', healthcare: true, githubUrl: repo('Tableau/Medical%20seetings%20comparative%20Analysis') },
];

export const openSource = {
  eyebrow: 'Open source',
  title: 'Live apps on Hugging Face',
  intro: 'Some of my projects run as live apps on Hugging Face Spaces, so you can try them in your browser without installing anything.',
  cta: 'View my Hugging Face profile',
  spaceBadge: 'Space',
  spaces: [
    { name: 'Turbofan RUL prediction app', desc: "Predicts the remaining useful life of jet engines on NASA's turbofan data.", url: spaces.turbofan },
    { name: 'Lung cancer prediction', desc: 'Estimates lung cancer risk and explains the result.', url: spaces.lungCancer },
    { name: 'Email and calls forecasting', desc: 'Forecasts daily email and call volumes from 27 features.', url: spaces.forecasting },
    { name: 'Nutritional bot', desc: 'A nutrition-disorder specialist chatbot built on RAG.', url: spaces.nutritional },
  ],
};

/** The six roadmaps, with taglines copied word for word from the AI with Ahmad platform. */
export const teaching = {
  eyebrow: 'Teaching',
  title: 'Six free roadmaps on AI with Ahmad',
  intro:
    '1,500+ hours of teaching turned into stage-by-stage paths, with the lessons, notebooks, projects and progress tracking included. Free for everyone.',
  flagshipBadge: 'Flagship',
  openLabel: (title: string) => `${title} roadmap on AI with Ahmad (opens in a new tab)`,
  list: [
    { slug: 'ai-engineering', title: 'AI Engineering', tagline: 'From data to deployed, secure AI products', flagship: true },
    { slug: 'data-science', title: 'Data Science', tagline: 'Analyse data, then model it' },
    { slug: 'data-analytics', title: 'Data Analytics', tagline: 'Turn raw data into decisions' },
    { slug: 'devops', title: 'DevOps Engineering', tagline: 'From a blank VM to a monitored platform on AWS' },
    { slug: 'sysops', title: 'SysOps & Cloud Administration', tagline: 'Run Linux and the cloud reliably' },
    { slug: 'cloud-security', title: 'Cloud & Cyber Security', tagline: 'Keep AI products confidential, intact and available' },
  ],
};

export const milestones = {
  eyebrow: 'Milestones',
  title: 'Milestones and recognition',
  inProgressLabel: 'In progress',
  watchLabel: 'Watch the defence',
  items: [
    {
      icon: 'GraduationCap',
      title: 'PharmD, Quaid-i-Azam University',
      meta: '3.9 / 4.0 cGPA · Graduated 2024',
      date: '2024',
      desc: 'I graduated with a 3.9 / 4.0 cGPA, building a base in research, clinical data and analytical thinking.',
      tags: ['Research', 'Clinical data', 'Analytical chemistry'],
    },
    {
      icon: 'Award',
      title: 'RQF Level 6 Diploma in AIOps (EduQual)',
      meta: 'Al Nafi International College · Grade A*',
      date: '2024–2026',
      desc: 'I completed the full operational stack behind AI: cyber security, DevOps, cloud architecture, system administration and AI systems.',
      tags: ['DevOps', 'Cloud', 'Cyber security'],
    },
    {
      icon: 'Video',
      title: 'Final year project defence',
      meta: 'Al Nafi International College · Presented to Mohammad Faisal',
      date: '2026',
      desc: 'I defended a precision agriculture platform that orchestrates drone analytics, IoT sensors and machine learning for sustainable farming, live before an examination panel.',
      tags: ['Precision agriculture', 'Drone analytics', 'IoT'],
      link: 'https://www.youtube.com/live/ogLCyzB_Dl0?si=9yeLTRNwGrpe1QpW',
    },
    {
      icon: 'Cloud',
      title: 'Kubernetes certification track',
      meta: 'KCNA · CKAD · CKA · CKS · KCSA',
      inProgress: true,
      desc: "I'm working through the full Kubestronaut stack, from cloud native associate to security specialist, towards Golden Kubestronaut.",
      tags: ['Kubernetes', 'CNCF', 'Cloud native'],
    },
    {
      icon: 'ShieldCheck',
      title: 'Security certification track',
      meta: 'CISSP · CCSP · CCSK · ISSAP',
      inProgress: true,
      desc: "I'm studying for advanced security certifications in enterprise security architecture, cloud security and identity management.",
      tags: ['CISSP', 'CCSP', 'Cloud security'],
    },
    {
      icon: 'Presentation',
      title: 'Superprof Ambassador',
      meta: 'Superprof Ambassador · Data science tutor since 2024',
      date: '2024–present',
      desc: 'I teach data science, machine learning and AI one to one and in groups, making hard topics clear for complete beginners.',
      tags: ['Teaching', 'Mentoring', 'Data science'],
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: "Let's work together",
  text: "Hiring an AI engineer, planning a research collaboration, or looking for guidance on your own path? I'd love to hear from you.",
  email: 'Send an email',
  whatsapp: 'WhatsApp',
};

export const footer = {
  tagline: 'AI engineer · Data scientist · AI educator',
  portfolioTitle: 'Portfolio',
  learnTitle: 'Learn',
  contactTitle: 'Contact',
  builtWith: 'Built with Astro',
  learn: [
    { href: platform.url, label: 'AI with Ahmad' },
    { href: `${platform.url}/roadmaps`, label: 'Roadmaps' },
    { href: `${platform.url}/map`, label: 'Interdisciplinary map' },
    { href: `${platform.url}/join`, label: 'How to join' },
  ],
  contact: [
    { key: 'email', label: 'Email' },
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'github', label: 'GitHub' },
    { key: 'huggingface', label: 'Hugging Face' },
    { key: 'superprof', label: 'Superprof profile' },
  ],
};
