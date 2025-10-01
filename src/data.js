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
  {
    slug: 'adishop',
    title: 'AdiShop',
    subtitle: 'Full-Stack E-Commerce Platform',
    description: 'A complete MERN stack e-commerce solution with advanced features including AI-powered chatbot, secure payment integration, admin dashboard, real-time inventory management, and responsive design for seamless shopping experience.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'JWT', 'Stripe'],
    links: [
      { label: 'Live Demo', url: 'https://adi-shop-nine.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/Aditya7015/AdiShop' }
    ]
  },
  {
    slug: 'quickstay',
    title: 'QuickStay',
    subtitle: 'Full-Stack Hotel Booking Platform',
    description: 'QuickStay is a fully functional hotel booking platform built using the MERN stack. It provides users with a seamless experience to search, book, and manage hotel stays, while incorporating secure authentication, payment integration, and automated email confirmations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Clerk', 'Stripe', 'Brevo'],
    links: [
      { label: 'Live Demo', url: 'https://quickstay-omega-brown.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/Aditya7015/hotel-booking' }
    ]
  },
  {
    slug:'ecommerce-webapp', 
    title:'E-Commerce Web Application', 
    subtitle:'MERN Stack',
    description:'Responsive, mobile-first e-commerce platform with secure JWT authentication, product search, filtering, cart, and admin dashboard.',
    tech:['MongoDB','Express.js','React.js','Node.js','Tailwind CSS','JWT'],
    links:[
      {label:'Live Demo', url:'https://e-commerce-frontend-mu-flax.vercel.app'},
      {label:'Frontend Repo', url:'https://github.com/Aditya7015/E-commerce-frontend'},
      {label:'Backend Repo', url:'https://github.com/Aditya7015/E-commerce-backend'}
    ]
  },
  {
    slug:'task-manager-pro', 
    title:'Task Manager Pro', 
    subtitle:'MERN Stack',
    description:'Real-time task manager with WebSocket updates, role-based access, file upload support, and responsive UI.',
    tech:['MongoDB','Express.js','React.js','Node.js','WebSockets','JWT'],
    links:[
      {label:'Live Demo', url:'https://task-manager-client-orpin.vercel.app'},
      {label:'Frontend Repo', url:'https://github.com/Aditya7015/task-manager-client'},
      {label:'Backend Repo', url:'https://github.com/Aditya7015/task-manager-server'}
    ]
  },
  {
    slug:'quickshow', 
    title:'QuickShow', 
    subtitle:'Ticket Booking Web App',
    description:'Dynamic ticket booking system with smooth frontend-backend integration, interactive booking flow, and clean UI.',
    tech:['MongoDB','Express.js','React.js','Node.js','Axios','CORS'],
    links:[
      {label:'Live Demo', url:'https://quickshow-aditya-fcml.vercel.app/'},
      {label:'Repo', url:'https://github.com/Aditya7015/quickshow-aditya.git'}
    ]
  },
  {
    slug:'job-portal', 
    title:'Job Portal Web Application', 
    subtitle:'MERN Stack',
    description:'Full-stack job portal enabling users to create profiles, search and apply for jobs, with recruiter dashboards for posting and managing openings.',
    tech:['MongoDB','Express.js','React.js','Node.js','JWT','Tailwind CSS'],
    links:[
      {label:'Live Demo', url:'https://aditya-job-portal-frontend.vercel.app'},
      {label:'Backend API', url:'https://aditya-job-portal-backend.onrender.com'},
      {label:'Frontend Repo', url:'https://github.com/Aditya7015/aditya-job-portal-frontend'},
      {label:'Backend Repo', url:'https://github.com/Aditya7015/aditya-job-portal-backend'}
    ]
  }
];


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
  {
    company: 'Synomtech Solutions Pvt Ltd',
    title: 'MERN Stack Development Intern',
    start: '2025-08',
    end: null, // Present
    location: 'Visakhapatnam',
    highlights: [
      'Building and deploying scalable applications using MongoDB, Express.js, React.js, and Node.js.',
      'Designing and integrating REST APIs for real-time functionality.',
      'Managing and optimizing MongoDB databases.',
      'Deploying applications on AWS, Heroku, and Vercel.',
      'Collaborating in an Agile team environment with version control using Git/GitHub.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'Heroku', 'Vercel', 'Git']
  }
];


export const posts = [
  {
    slug: "getting-started-with-react-18",
    title: "Getting Started with React 18",
    date: "2025-09-20",
    excerpt: "A beginner-friendly guide to building modern React applications with React 18 features like concurrent rendering and automatic batching.",
    content: `
# Getting Started with React 18

React 18 introduces several exciting features:

- **Concurrent rendering** improves app responsiveness.
- **Automatic batching** groups state updates efficiently.
- **New hooks** like useId and useTransition.

## Example

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
\`\`\`
`
  },
  {
    slug: "building-restful-apis-with-node-express",
    title: "Building RESTful APIs with Node & Express",
    date: "2025-09-18",
    excerpt: "Step-by-step guide to creating RESTful APIs using Node.js and Express, including routes, middleware, and error handling.",
    content: `
# Building RESTful APIs with Node & Express

1. Initialize Node project:
\`\`\`bash
npm init -y
npm install express
\`\`\`

2. Create basic Express server:

\`\`\`javascript
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api', (req, res) => res.send('Hello API'));
app.listen(5000, () => console.log('Server running'));
\`\`\`

3. Add routes, middleware, and error handling.
`
  },
  {
    slug: "mongodb-best-practices",
    title: "MongoDB Best Practices for Developers",
    date: "2025-09-15",
    excerpt: "Tips for structuring MongoDB collections, indexing, and writing efficient queries in full-stack applications.",
    content: `
# MongoDB Best Practices

- Use indexes for frequently queried fields.
- Keep document size reasonable (max 16MB).
- Validate schemas with Mongoose.
- Use projections to fetch only required fields.

Example:

\`\`\`javascript
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
});
\`\`\`
`
  },
  {
    slug: "auth-with-jwt-and-bcrypt",
    title: "Authentication with JWT and Bcrypt",
    date: "2025-09-12",
    excerpt: "Secure user authentication in MERN applications using JWT tokens and password hashing with Bcrypt.",
    content: `
# Authentication with JWT and Bcrypt

1. Install dependencies:
\`\`\`bash
npm install jsonwebtoken bcrypt
\`\`\`

2. Hash passwords before saving:

\`\`\`javascript
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 10);
\`\`\`

3. Generate JWT token:

\`\`\`javascript
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
\`\`\`
`
  },
  {
    slug: "building-a-mern-ecommerce",
    title: "Building a MERN E-Commerce Application",
    date: "2025-09-10",
    excerpt: "A full-stack guide to creating a modern e-commerce platform using MongoDB, Express, React, and Node.js.",
    content: `
# Building a MERN E-Commerce Application

- **Frontend:** React + Tailwind CSS for responsive design.
- **Backend:** Node + Express APIs for products, cart, orders.
- **Database:** MongoDB with Mongoose schemas.
- **Auth:** JWT-based authentication for users and admins.
- **Deployment:** Vercel for frontend, Render/Heroku for backend.

Example product model:

\`\`\`javascript
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});
\`\`\`
`
  },
  {
    slug: "real-time-chat-with-websockets",
    title: "Real-Time Chat Application with WebSockets",
    date: "2025-09-08",
    excerpt: "Learn how to build a real-time chat app using Node.js and WebSocket libraries for instant messaging.",
    content: `
# Real-Time Chat with WebSockets

- Use **ws** or **socket.io** for WebSocket support.
- Broadcast messages to all connected clients.
- Maintain online/offline status.

Example with Socket.io:

\`\`\`javascript
io.on('connection', socket => {
  socket.on('message', msg => io.emit('message', msg));
});
\`\`\`
`
  },
  {
    slug: "deploying-mern-apps-on-vercel-and-render",
    title: "Deploying MERN Apps on Vercel and Render",
    date: "2025-09-05",
    excerpt: "Step-by-step instructions to deploy MERN stack applications using Vercel (frontend) and Render (backend).",
    content: `
# Deploying MERN Apps

- **Frontend (React)** → Vercel
- **Backend (Node/Express)** → Render
- Configure environment variables in both platforms.
- Use CORS middleware to connect frontend and backend.
`
  },
  {
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips and Tricks",
    date: "2025-09-03",
    excerpt: "Improve your frontend design with these practical Tailwind CSS tips for faster and cleaner UI development.",
    content: `
# Tailwind CSS Tips

- Use **@apply** for reusable classes.
- Leverage **dark mode** for theme switching.
- Combine with **Flex/Grid** for responsive layouts.
- Use **prose** for markdown content styling.
`
  },
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance",
    date: "2025-09-01",
    excerpt: "Techniques to improve the performance of React applications, including memoization, lazy loading, and code splitting.",
    content: `
# Optimizing React Performance

- **React.memo** for pure components.
- **useCallback/useMemo** for expensive computations.
- **React.lazy & Suspense** for code splitting.
- Avoid unnecessary re-renders.
`
  },
  {
    slug: "building-rest-api-with-pagination",
    title: "Building REST API with Pagination",
    date: "2025-08-30",
    excerpt: "Implement efficient pagination in your REST APIs to handle large datasets with Node.js and MongoDB.",
    content: `
# REST API Pagination

- Use **limit** and **skip** in MongoDB queries.
- Accept **page** and **size** as query params.
- Return total count for frontend pagination UI.

\`\`\`javascript
const page = parseInt(req.query.page) || 1;
const size = parseInt(req.query.size) || 10;
const users = await User.find().skip((page-1)*size).limit(size);
\`\`\`
`
  }
];
