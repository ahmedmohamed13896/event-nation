const PROJECT_PAGE_URL = "./project-details.html?id=";
const workItems = {
  conference: [
    {
      id: 1,
      name: "International Conference on Occupational Safety and Health 2025",
      link: `${PROJECT_PAGE_URL}1`,
      imgSrc: "./assets/images/project-bg.jpg",
      description:
        "International Conference on Occupational Safety and Health 2025",
      video:
        "./assets/images/project-details/International-Conference-on-Occupational-Safety-and-Health-2025/المؤتمر الدولى لهيئة السلامة والصحة.mp4",
      imageList: [
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
      ],
      type: "conference",
      prevProjectId: 0,
      nextProjectId: 2,
      fullDescription: `Designing and implementing smart and technical booths, managing and installing the booths with the best possible practices, and paying attention to the smallest details to appear in a manner befitting the event.`,
    },
    {
      id: 2,
      name: "Internal Auditors Authority 2025",
      link: `${PROJECT_PAGE_URL}2`,
      imgSrc: "./assets/images/project-details/frame2.jpg",
      description: "Internal Auditors Authority 2025",
      video:
        "./assets/images/project-details/Internal Auditors Authority 2025/الاتحاد العربي.mp4",
      imageList: [
        "./assets/images/project-details/Internal Auditors Authority 2025/photo/MOH06540.jpg",
        "./assets/images/project-details/Internal Auditors Authority 2025/photo/MOH06542.jpg",
        "./assets/images/project-details/Internal Auditors Authority 2025/photo/MOH06635.jpg",
      ],
      type: "conference",
      prevProjectId: 1,
      nextProjectId: 3,
      fullDescription: `Designing and implementing smart and technical booths, managing and installing the booths with the best possible practices, and paying attention to the smallest details to appear in a manner befitting the event.`,
    },
    {
      id: 3,
      name: "Ministry of Investment 2025",
      link: `${PROJECT_PAGE_URL}3`,
      imgSrc: "./assets/images/project-details/frame2.jpg",
      description: "Ministry of Investment 2025",
      video:
        "./assets/images/project-details/Ministry of Investment 2025/leap.mp4",
      imageList: [
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6584.JPG",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6589.jpg",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6591.JPG",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6597.JPG",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6605.jpg",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6650.jpg",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6966.jpg",
        "./assets/images/project-details/Ministry of Investment 2025/photo/DSC_6970.jpg",
      ],
      type: "conference",
      prevProjectId: 2,
      nextProjectId: 4,
      fullDescription: `Designing and implementing smart and technical booths, managing and installing the booths with the best possible practices, and paying attention to the smallest details to appear in a manner befitting the event.`,
    },
  ],
  exhibition: [
    {
      id: 4,
      name: "Local Content Award 2024",
      link: `${PROJECT_PAGE_URL}4`,
      imgSrc: "./assets/images/project-details/frame3.png",
      description: "Local Content Award 2024",
      video:
        "./assets/images/project-details/Local Content Award 2024/المحتوى المحلي.mp4",
      imageList: [
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
      ],
      type: "exhibition",
      prevProjectId: 3,
      nextProjectId: 5,
      fullDescription: `Designing and implementing smart and technical booths, managing and installing the booths with the best possible practices, and paying attention to the smallest details to appear in a manner befitting the event.`,
    },
  ],
  lights: [
    {
      id: 5,
      name: "National Day at Embassies 2023",
      link: `${PROJECT_PAGE_URL}5`,
      imgSrc: "./assets/images/project-bg.jpg",
      description: "Dynamic lighting for concerts and live events.",
      video:
        "./assets/images/project-details/National Day at Embassies 2023/kendy.mp4",
      imageList: [
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
      ],
      type: "lights",
      prevProjectId: 4,
      nextProjectId: 6,
      fullDescription: `we attract our clients through new technology in light that improves the visual experience. As we manage your live event as a timecoded queue, Which improves the timing for each scene.`,
    },
  ],
  "3d mapping": [
    {
      id: 6,
      name: "Authority Beach in Beesh 2025",
      link: `${PROJECT_PAGE_URL}6`,
      imgSrc: "./assets/images/project-bg.jpg",
      description: "Authority Beach in Beesh 2025",
      video:
        "./assets/images/project-details/Authority-Beach-in-Beesh-2025/asmar.mp4",
      imageList: [
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
        "./assets/images/project-details/frame1.jpg",
        "./assets/images/project-details/frame2.jpg",
        "./assets/images/project-details/frame3.png",
        "./assets/images/project-details/frame4.jpg",
      ],
      type: "3d mapping",
      prevProjectId: 5,
      nextProjectId: 7,
      fullDescription: `the leading company in 3D projection mapping and holograms in the middle east We deliver all types of projection also for holograms.`,
    },
  ],
  screens: [
    {
      id: 7,
      name: "akwan 2025",
      link: `${PROJECT_PAGE_URL}7`,
      imgSrc: "./assets/images/project-bg.jpg",
      description: "akwan 2025",
      video: "./assets/images/project-details/akwan 2025/akwan.mp4",
      imageList: [
        "./assets/images/project-details/akwan 2025/photo/1.jpg",
        "./assets/images/project-details/akwan 2025/photo/2.jpg",
        "./assets/images/project-details/akwan 2025/photo/3.jpg",
      ],
      type: "screens",
      prevProjectId: 6,
      nextProjectId: 8,
      fullDescription: `We offer all types of led screens transparent P3, P2, and P1 curves, 90 degrees, flex, and floor with the highest resolution and the newest media server for output content.`,
    },
  ],
};
// all project without filtration key
const allWorksItems = Object.values(workItems).reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

// animation options for image in project details page
const animationOptions = {
  0: {
    type: "fade-right",
    delay: 0,
  },
  4: {
    type: "fade-right",
    delay: 0,
  },
  2: {
    type: "fade-left",
    delay: 0,
  },
  6: {
    type: "fade-left",
    delay: 0,
  },
  1: {
    type: "fade-in",
    delay: 100,
  },
  5: {
    type: "fade-in",
    delay: 100,
  },
  3: {
    type: "zoom-in-up",
    delay: 0,
    className: "full-width",
  },
  7: {
    type: "zoom-in-up",
    delay: 0,
    className: "full-width",
  },
};
