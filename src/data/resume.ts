export const name = "Shaheen Nawaf Zayed";
export const pronouns = "he/him";
export const shortBio = "Full-stack Software Engineer & Creator Partnerships Specialist.";
export const introParagraph = "I'm a Product Engineer and Marketing Specialist based in Davao, Philippines. I bridge the gap between technical infrastructure and high-scale digital advertising. With four years of experience in the creator economy, I've managed B2B relationships and scaled creator contracts that delivered $355K in transaction volume. Currently pursuing a B.S. in Computer Science at Ateneo de Davao University, I focus on building the systems that drive measurable user acquisition.";
export const contact = {
  email: "contact.shaheenaladwani@gmail.com",
  phone: "+63 917 786 5315",
  location: "Davao, Philippines",
  linkedin: "linkedin.com/in/aladwani",
  profileImage: "/og-image.jpg",
};

export const softwareSkills = [
  'Astro', 'Flutter', 'JavaScript', 'TypeScript', 'React',
  'Node.js', 'Python', 'Git', 'Data Infrastructure', 'API Integration', 'Project Management'
];

export const marketingSkills = [
  'B2B and B2C Sales', 'Creator Partnerships', 'Growth Marketer',
  'Influencer Marketing Specialist', 'Community Building',
  'CPA/CML Modeling', 'Performance Analytics'
];

export const projects = [
    {
    id: 'proj-gymeasy',
    title: 'GymEasy: A Full-Service Gym Management Software',
    date: '2025-',
    role: 'Back-End Developer & Project Manager',
    color: '#3b82f6',
    tags: ['Next.JS', 'Spring Boot', 'Desktop/Mobile'],
    description: 'A Full-Service Gym Management Software that provides MSME Gym Owners complete control of the business without breaking the bank',
    media: {
      type: 'image' as const,
      url: '/gymeasy/attend1.png',
    },
    liveUrl: 'https://staging.gymeasy.app',
    repoUrl: '',
  },
  {
    id: 'proj-agripinoy',
    title: 'Agri-Pinoy: AI-Power Philippine Agri-Chatbot',
    date: 'Feb 2026',
    role: 'Lead Front-End Developer',
    color: '#3b82f6',
    tags: ['Flutter', 'Dart', 'Mobile'],
    description: 'A Flutter-based AI chatbot that helps Filipino farmers with practical advice on growing common Pinoy crops. Built with a RAG (Retrieval-Augmented Generation) backend, real-time evaluation pipeline, and Supabase data logging.',
    media: {
      type: 'image' as const,
      url: '/agripinoy/desk.png',
    },
    liveUrl: 'https://agri-pinoy-web.netlify.app/',
    repoUrl: 'https://github.com/shaheenNawaf/chatbot_ui_agribot',
  },
  {
    id: 'proj-staysafe',
    title: 'StaySafe: AirBNB Clone via Flutter',
    date: 'Dec 2024',
    role: 'Full Stack Developer',
    color: '#ec4899',
    tags: ['Flutter', 'UI/UX', 'Full-Stack'],
    description: 'A Full end-to-end clone of AirBNB done natively via Flutter.',
    media: {
      type: 'image' as const,
      url: '/staysafe/home.png',
    },
    liveUrl: 'https://safe-stay-exer.netlify.app/',
    repoUrl: 'https://github.com/shaheenNawaf/StaySafe',
  },
  {
    id: 'proj-JCSD',
    title: 'JCSD: A Full-Service Booking Management System',
    date: 'Aug 2024',
    role: 'Full Stack Developer',
    color: '#ec4899',
    tags: ['Flutter', 'UI/UX', 'Full-Stack'],
    description: 'A Full-service booking management application completely done via Flutter',
    media: {
      type: 'image' as const,
      url: '/jcsd/dash.png',
    },
    liveUrl: '',
    repoUrl: 'https://github.com/shaheenNawaf/JCSD_Flutter',
  },
] as const;

export const experiences = [
  {
    id: 'exp-yohoho-lead',
    title: 'Philippines Team Lead',
    company: 'Yohoho.bet',
    date: 'June 2025 - Oct 2025',
    location: 'Remote',
    color: '#f97316',
    description: 'Kept running costs down while ensuring a strict-4:1 ROAS.',
    details: [
      'Built a Telegram community from 0 to 1,000 active members in 2 weeks as a retention channel.',
      'Navigated CICC regulatory changes by pivoting strategy from acquisition to community-building.',
      'Structured macro-influencer contracts with milestone-based payments, maintaining a 4:1 ROAS. (Pictured below)',
    ],
    gallery: [
      '/yohoho/initial-contracts.jpg',
    ], 
    video: '',
  },
  {
    id: 'exp-yohoho-influ',
    title: 'Influencer Specialist',
    company: 'Yohoho.bet',
    date: 'June 2025 - Oct 2025',
    location: 'Remote',
    color: '#B5F916',
    description: 'Directed rapid-scale influencer recruitment and social expansion, driving $355K in bet volume.',
    details: [
      'Applied a strict kill-or-scale framework to audit the existing portfolio, cutting underperforming flat-fee partners and restructuring 23 partnerships (8M+ followers) into hybrid CPA deals. This reallocated spend to pure conversion-focused creators, capping costs at 25% of revenue per partner and sustaining a validated 4:1 ROAS.',
      'Drove a record $133K transaction volume and $46K deposit volume in a single month (September 2025) by launching a Partner Referral Program, scaling the network to 10+ CPA-only micro-influencers to drive down overall Customer Acquisition Cost (CAC).',
      'Engineered an automated onboarding pipeline and centralized document tracking system using templated workflows, cutting administrative bottlenecks and reducing partner activation time from 14 days to 3 days (a 78% reduction).',
    ],
    gallery: [
      '/yohoho/yohoho-1.png'
    ], 
    video: '',
  },
  {
    id: 'exp-rivalry-partnerships',
    title: 'Partnerships & Influencer Specialist',
    company: 'Rivalry.com',
    date: 'Sept 2021 - July 2024',
    location: 'Remote',
    color: '#ef4444',
    description: 'Managed end-to-end lifecycle influencer marketing campaigns and management for 10 VIP influencers (total 37M+ followers) bringing in 10M USD in Monthly Deposits.',
    details: [
      'Spearheaded the B2B pitch for the Tier One Entertainment deal, birthing the "Blacklist Rivalry" Dota 2 team.',
      'Achieved 40% growth in affiliate-driven revenue and 15-20% QoQ growth in FTDs.',
      'Coordinated co-branded activations with agencies like CBZN, achieving 60-70% conversion rates.',
      'Crafted 40+ Content Briefs and Managed day-to-day executions of creator campaigns which covers postings, video content, livestreams, and client-produced content (e.g. PighaTI - our DOTA TI Companion series last 2022; linked below).',
    ],
    gallery: [
      '/rivalry/rivalry-tribe.jpg',
      '/rivalry/pindabali.jpg',
      '/rivalry/bali-1.jpg',
    ], 
    video: [
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D483447207175593&show_text=0'
    ],
  },
  {
    id: 'exp-rivalry-community',
    title: 'Community Marketing Specialist',
    company: 'Rivalry.com',
    date: 'June 2023 - July 2024',
    location: 'Remote',
    color: '#3b82f6',
    description: 'Scaled direct-to-consumer marketing communities through Facebook and Viber',
    details: [
      'Rebuilt a 12,000-member Facebook community with 30-40% active engagement after platform strikes.',
      'Produced weekly tournament shows that pushed betting activity from 2% to 20% during peak LCK/Worlds events.',
      'Launched "Bring Me" activations that accelerated KYC completion through recurring content formats.',
    ],
    gallery: [
      '/rivalry/new-tribe.jpg',
      '/rivalry/viber.jpg',
      '/rivalry/bbc.jpg',
      '/rivalry/nsns.jpg',
      '/rivalry/ttkover.jpg',
    ], 
    video: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fkuyanicwxc%2Fvideos%2F1425324814659531&show_text=0',
  },
  {
    id: 'exp-rivalry-campaigns',
    title: 'Campaign and Affiliates Specialist',
    company: 'Rivalry.com',
    date: 'Sept 2021 - Aug 2022',
    location: 'Remote',
    color: '#643BF6',
    description: "Created a proper lead-generating and end-to-end management pipeline for Rivalry's initial PH Affiliate Network.",
    details: [
      "Built Rivalry's initial Philippine affiliate and micro-influencer network from scratch (20+ partners across Valorant, Dota 2, CS2, and League of Legends), establishing the early-stage user acquisition foundation that subsequent campaigns were layered on top of.",
      'Introduced a CAC-obsessed, performance-based spend allocation model against First-Time Depositor (FTD) and revenue data from the outset, setting the data-first marketing culture that contributed to 15-20% QoQ FTD growth.',
      'Created and ran Rivalry Philippines initial campaigns (e.g. giveaways, local tournaments, livestream events) that bolstered the brands visibility across key influencers and micro-influencers communities. (Pictured below)',
    ],
    gallery: [
      '/rivalry/initial-edits.jpg',
      '/rivalry/initial-campaign.jpg',
      '/rivalry/initial-campaign-2.jpg',
      '/rivalry/initial-affiliates.jpg',
    ], 
    video: '',
  },
];