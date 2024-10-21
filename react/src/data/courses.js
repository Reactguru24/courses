// src/data/courses.js

// Importing images from assets folder
import image1 from "../assets/upcomingcourse6.png";
import image2 from "../assets/upcomingcourse1.png";
import image3 from "../assets/upcomingcourse2.png";
import image4 from "../assets/upcomingcourse2.png";
import image5 from "../assets/upcomingcourse3.png";
import image6 from "../assets/upcomingcourse4.png";
import image7 from "../assets/upcomingcourse3.png";
import image8 from "../assets/upcomingcourse5.png";
import image9 from "../assets/upcomingcourse6.png";
import image10 from "../assets/upcomingcourse6.png";
import image11 from "../assets/upcomingcourse5.png";
import image12 from "../assets/upcomingcourse3.png";
import image13 from "../assets/upcomingcourse5.png";
import image14 from "../assets/upcomingcourse2.png";
import image15 from "../assets/upcomingcourse1.png"; // New image imports
import image16 from "../assets/upcomingcourse4.png"; // New image imports
import image17 from "../assets/upcomingcourse2.png"; // New image imports
import image18 from "../assets/upcomingcourse5.png"; // New image imports
import image19 from "../assets/upcomingcourse3.png"; // New image imports
import image20 from "../assets/upcomingcourse6.png"; // New image imports
import image21 from "../assets/upcomingcourse1.png"; // New image imports
import image22 from "../assets/upcomingcourse4.png"; // New image imports
import image23 from "../assets/upcomingcourse2.png"; // New image imports
import image24 from "../assets/upcomingcourse5.png"; // New image imports
import image25 from "../assets/upcomingcourse3.png"; // New image imports
import image26 from "../assets/upcomingcourse6.png"; // New image imports
import image27 from "../assets/upcomingcourse1.png"; // New image imports
import image28 from "../assets/upcomingcourse4.png"; // New image imports
import image29 from "../assets/upcomingcourse2.png"; // New image imports
import image30 from "../assets/upcomingcourse5.png"; // New image imports

// List of categories
const categories = [
  "Digital Literacy & IT Skills",
  "Business and Enterprise",
  "Diploma Courses",
  "Health Literacy",
];

const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description: "Fundamental concepts of computer science and programming.",
    image: image1, // Use imported image
    startingTime: "2024-10-15 09:00 AM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 2,
    title: "Microsoft Office Suite Mastery",
    description:
      "Learn the ins and outs of Microsoft Word, Excel, and PowerPoint.",
    image: image2, // Use imported image
    startingTime: "2024-11-05 11:00 AM",
    period: "2 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 3,
    title: "Web Development Basics",
    description: "Build websites using HTML, CSS, and JavaScript.",
    image: image3, // Use imported image
    startingTime: "2024-12-01 01:00 PM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description: "Learn how to protect systems and data from cyber threats.",
    image: image4, // Use imported image
    startingTime: "2024-10-20 02:00 PM",
    period: "5 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 5,
    title: "Entrepreneurship 101",
    description: "Discover how to turn ideas into successful businesses.",
    image: image5, // Use imported image
    startingTime: "2024-11-01 10:00 AM",
    period: "6 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 6,
    title: "Marketing Strategy",
    description: "Create impactful marketing strategies to grow your business.",
    image: image6, // Use imported image
    startingTime: "2024-11-15 01:00 PM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 7,
    title: "Financial Literacy for Entrepreneurs",
    description: "Understand key financial principles for running a business.",
    image: image7, // Use imported image
    startingTime: "2024-12-10 09:00 AM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 8,
    title: "Diploma in Business Administration",
    description: "Acquire management and business operation skills.",
    image: image8, // Use imported image
    startingTime: "2024-10-25 10:00 AM",
    period: "1 year",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 9,
    title: "Diploma in Project Management",
    description: "Learn how to manage projects from inception to completion.",
    image: image9, // Use imported image
    startingTime: "2024-11-05 03:00 PM",
    period: "1 year",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 10,
    title: "Diploma in Human Resource Management",
    description:
      "Master the essentials of HR management in modern organizations.",
    image: image10, // Use imported image
    startingTime: "2024-11-20 12:00 PM",
    period: "1 year",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 11,
    title: "Diploma in Supply Chain Management",
    description: "Learn logistics, procurement, and supply chain essentials.",
    image: image11, // Use imported image
    startingTime: "2024-12-01 11:00 AM",
    period: "1 year",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 12,
    title: "Nutrition and Health",
    description: "Understand the impact of nutrition on overall health.",
    image: image12, // Use imported image
    startingTime: "2024-10-18 09:00 AM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 13,
    title: "Mental Health Awareness",
    description: "Gain knowledge about mental health and wellness.",
    image: image13, // Use imported image
    startingTime: "2024-11-10 02:00 PM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 14,
    title: "First Aid and CPR",
    description: "Learn life-saving first aid and CPR techniques.",
    image: image14, // Use imported image
    startingTime: "2024-12-01 01:00 PM",
    period: "2 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  // New Course Objects
  {
    id: 15,
    title: "Data Science Foundations",
    description: "Introduction to data science concepts and tools.",
    image: image15, // New image
    startingTime: "2024-10-30 09:00 AM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 16,
    title: "Graphic Design Basics",
    description:
      "Learn the fundamentals of graphic design and visual communication.",
    image: image16, // New image
    startingTime: "2024-11-15 11:00 AM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 17,
    title: "Introduction to Artificial Intelligence",
    description: "Explore the basics of AI and its applications.",
    image: image17, // New image
    startingTime: "2024-11-25 01:00 PM",
    period: "5 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 18,
    title: "Public Speaking and Presentation Skills",
    description:
      "Master the art of public speaking and effective presentations.",
    image: image18, // New image
    startingTime: "2024-12-05 10:00 AM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 19,
    title: "Digital Marketing Essentials",
    description: "Learn the fundamentals of digital marketing strategies.",
    image: image19, // New image
    startingTime: "2024-12-15 02:00 PM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 20,
    title: "Blockchain Basics",
    description: "An introduction to blockchain technology and its use cases.",
    image: image20, // New image
    startingTime: "2024-10-28 01:00 PM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 21,
    title: "Photography and Videography",
    description: "Learn techniques for capturing stunning photos and videos.",
    image: image21, // New image
    startingTime: "2024-11-01 03:00 PM",
    period: "6 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 22,
    title: "Ethical Hacking",
    description: "Learn how to identify and mitigate security threats.",
    image: image22, // New image
    startingTime: "2024-11-12 10:00 AM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 23,
    title: "Social Media Management",
    description: "Master strategies for effective social media marketing.",
    image: image23, // New image
    startingTime: "2024-12-20 09:00 AM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 24,
    title: "App Development Basics",
    description: "Learn how to create mobile applications from scratch.",
    image: image24, // New image
    startingTime: "2024-11-20 01:00 PM",
    period: "6 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 25,
    title: "Creative Writing Workshop",
    description: "Explore techniques for effective creative writing.",
    image: image25, // New image
    startingTime: "2024-10-22 11:00 AM",
    period: "2 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 26,
    title: "Data Analysis with Excel",
    description: "Learn data analysis techniques using Excel.",
    image: image26, // New image
    startingTime: "2024-12-15 10:00 AM",
    period: "3 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 27,
    title: "Introduction to Philosophy",
    description: "Explore fundamental philosophical questions and concepts.",
    image: image27, // New image
    startingTime: "2024-11-05 03:00 PM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 28,
    title: "Language Learning: Spanish",
    description: "Start your journey to learn Spanish effectively.",
    image: image28, // New image
    startingTime: "2024-12-01 09:00 AM",
    period: "5 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
  {
    id: 29,
    title: "Introduction to Robotics",
    description: "Learn the basics of robotics and automation.",
    image: image29, // New image
    startingTime: "2024-11-30 12:00 PM",
    period: "4 months",
    category: categories[Math.floor(Math.random() * categories.length)], // Random category
  },
];

export default courses;
