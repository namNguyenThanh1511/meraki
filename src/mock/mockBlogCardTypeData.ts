import { blogFour, blogOne, blogThree, blogTwo } from "../assets/constant";
import { BlogCardType } from "../model/blog";

export const mockBlogCardTypeData: BlogCardType[] = [
  {
    id: 1,
    title: "Understanding React Lifecycle Methods",
    author: "John Doe",
    date: new Date(2023, 11, 1),
    backdrop: blogOne,
  },
  {
    id: 2,
    title: "A Comprehensive Guide to JavaScript ES6+ Features",
    author: "Jane Smith",
    date: new Date(2023, 10, 25),
    backdrop: blogTwo,
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox: When to Use Which",
    author: "Alice Johnson",
    date: new Date(2023, 9, 15),
    backdrop: blogThree,
  },
  {
    id: 4,
    title: "The Basics of TypeScript for JavaScript Developers",
    author: "Bob Brown",
    date: new Date(2023, 8, 5),
    backdrop: blogThree,
  },
  {
    id: 5,
    title: "10 Tips for Writing Clean and Maintainable Code",
    author: "Chris Evans",
    date: new Date(2023, 7, 10),
    backdrop: blogFour,
  },
  {
    id: 6,
    title: "Exploring Node.js and Its Ecosystem",
    author: "Sophia Green",
    date: new Date(2023, 6, 20),
    backdrop: blogOne,
  },
  {
    id: 7,
    title: "How to Build a REST API with Express.js",
    author: "Ethan White",
    date: new Date(2023, 5, 30),
    backdrop: blogTwo,
  },
  {
    id: 8,
    title: "Top 5 Frontend Frameworks in 2024",
    author: "Olivia Black",
    date: new Date(2023, 4, 12),
    backdrop: blogThree,
  },
  {
    id: 9,
    title: "Understanding the Virtual DOM in React",
    author: "Liam Wilson",
    date: new Date(2023, 3, 18),
    backdrop: blogFour,
  },
  {
    id: 10,
    title: "Using Git Like a Pro: Best Practices for Version Control",
    author: "Emily Davis",
    date: new Date(2023, 2, 27),
    backdrop: blogOne,
  },
];
