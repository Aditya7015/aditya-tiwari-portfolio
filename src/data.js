export const profile = {
  name: 'Aditya Tiwari',
  role: 'MERN Stack Developer',
  location: 'Greater Noida, Uttar Pradesh, India',
  email: 'adityatiwari3105@gmail.com',
  phone: '+91-7015872386',
  links: [
    { label: 'GitHub', url: 'https://github.com/Aditya7015' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/adityatiwari77/' },
    { label: 'Portfolio', url: 'https://e-commerce-frontend-mu-flax.vercel.app' }
  ],
  summary: 'Motivated Computer Science student with strong MERN stack skills, hands-on deployment experience, and proven problem-solving ability (250+ DSA problems solved). Seeking opportunities to build scalable, user-friendly applications.'
}

export const skills = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)',
  'React.js', 'Tailwind CSS', 'Bootstrap',
  'Node.js', 'Express.js', 'RESTful APIs', 'WebSockets',
  'MongoDB', 'Mongoose',
  'JWT', 'Bcrypt', 'CORS',
  'Git', 'GitHub', 'Vercel', 'Render', 'Netlify',
  'Data Structures & Algorithms'
]

export const projects = [
  { slug:'ecommerce-webapp', title:'E-Commerce Web Application', subtitle:'MERN Stack',
    description:'Responsive, mobile-first e-commerce platform with secure JWT authentication, product search, filtering, cart, and admin dashboard.',
    tech:['MongoDB','Express.js','React.js','Node.js','Tailwind CSS','JWT'],
    links:[
      {label:'Live Demo', url:'https://e-commerce-frontend-mu-flax.vercel.app'},
      {label:'Frontend Repo', url:'https://github.com/Aditya7015/E-commerce-frontend'},
      {label:'Backend Repo', url:'https://github.com/Aditya7015/E-commerce-backend'}
    ]
  },
  { slug:'task-manager-pro', title:'Task Manager Pro', subtitle:'MERN Stack',
    description:'Real-time task manager with WebSocket updates, role-based access, file upload support, and responsive UI.',
    tech:['MongoDB','Express.js','React.js','Node.js','WebSockets','JWT'],
    links:[
      {label:'Live Demo', url:'https://task-manager-client-orpin.vercel.app'},
      {label:'Frontend Repo', url:'https://github.com/Aditya7015/task-manager-client'},
      {label:'Backend Repo', url:'https://github.com/Aditya7015/task-manager-server'}
    ]
  },
  { slug:'quickshow', title:'QuickShow', subtitle:'Ticket Booking Web App',
    description:'Dynamic ticket booking system with smooth frontend-backend integration, interactive booking flow, and clean UI.',
    tech:['MongoDB','Express.js','React.js','Node.js','Axios','CORS'],
    links:[
      {label:'Repo', url:'https://github.com/Aditya9671/QuickShow'}
    ]
  },
  { slug:'job-portal', title:'Job Portal Web Application', subtitle:'MERN Stack',
    description:'Full-stack job portal enabling users to create profiles, search and apply for jobs, with recruiter dashboards for posting and managing openings.',
    tech:['MongoDB','Express.js','React.js','Node.js','JWT','Tailwind CSS'],
    links:[
      {label:'Live Demo (Frontend)', url:'https://aditya-job-portal-frontend.vercel.app'},
      {label:'Backend API', url:'https://aditya-job-portal-backend.onrender.com'},
      {label:'Frontend Repo', url:'https://github.com/Aditya7015/aditya-job-portal-frontend'},
      {label:'Backend Repo', url:'https://github.com/Aditya7015/aditya-job-portal-backend'}
    ]
  }
]

export const education = [
  { 
    school:"Galgotia's College of Engineering & Technology", 
    degree:'B.Tech in Computer Science & Engineering – SGPA: 8.96/10', 
    start:'2023-08', 
    end:'2027-06', 
    highlights:[]
  },
  { 
    school:"Vivekanand Sr. Secondary School", 
    degree:'Class XII (CBSE) – 93%', 
    start:'2022-04', 
    end:'2023-03', 
    highlights:[]
  },
  { 
    school:"Vivekanand Sr. Secondary School", 
    degree:'Class X (CBSE) – 97%', 
    start:'2020-04', 
    end:'2021-03', 
    highlights:[]
  }
]

export const experience = [
  { company:'Personal Projects', title:'Full-Stack Developer (MERN)', start:'2024-01', end:null, location:'Remote',
    highlights:[
      'Built and deployed multiple production-ready full-stack applications.',
      'Integrated secure authentication and real-time features with WebSockets and JWT.',
      'Applied responsive design principles for mobile-first interfaces.'
    ],
    tech:['React.js','Node.js','Express.js','MongoDB','Tailwind CSS']
  }
]

export const posts = [
  // No blog posts listed in the resume
]
