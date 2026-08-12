const CANTEEN_THUMBNAIL = "/assets/canteen-images/canteenthumbnail.jpeg";
const CANTEEN_GALLERY = [
  "/assets/canteen-images/canteenthumbnail.jpeg",
  "/assets/canteen-images/1.jpeg",
  "/assets/canteen-images/2.jpeg",
  "/assets/canteen-images/3.jpeg",
  "/assets/canteen-images/4.jpeg",
];
const CELESTIAL_THUMBNAIL = "/assets/celestial-thumbnail.jpg";
// Paste your live Celestial app URL here:
const CELESTIAL_LINK = "https://celestial-pc6gkrehw-katey.vercel.app/login";

// Glow Salon
const GLOW_SALON_THUMBNAIL = "/assets/glow-thumbnail.JPG";
const GLOW_SALON_LINK = "https://glow-pied-rho.vercel.app";

const projects = [
  {
    title: "Glow Salon",
    category: "Web",
    academic: "Personal Project",
    desc: "A fully responsive salon website built with Next.js, React, TypeScript, and Tailwind CSS. It includes a sticky navbar, service menu, about page, booking/contact form, and map section. Designed to be easy to revise like client work and ready to deploy on Vercel.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: GLOW_SALON_THUMBNAIL,
    link: GLOW_SALON_LINK,
    linkLabel: "Visit site",
    comingSoon: !GLOW_SALON_LINK,
  },
  {
    title: "Celestial",
    category: "Web",
    academic: "Personal Project",
    desc: "A web inventory system for a clothing business. Users can add, update, and organize items with categories, pricing, and images. It has image previews and live updates through AJAX.",
    technologies: [
      "Laravel 10",
      "PHP 8.1+",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery 3.7",
      "AJAX",
      "JSON",
    ],
    imageUrl: CELESTIAL_THUMBNAIL,
    link: CELESTIAL_LINK || null,
    linkLabel: "Visit site",
  },
  {
    title: "Canteen Ordering System",
    category: "Mobile",
    academic: "Capstone / Thesis",
    desc: "A Flutter app with Firebase where students can browse the menu, place orders, and track canteen items in real time.",
    technologies: ["Flutter", "Dart", "Firebase", "Android Studio"],
    imageUrl: CANTEEN_THUMBNAIL,
    link: null,
    linkLabel: "View previews",
    gallery: {
      images: CANTEEN_GALLERY,
      confidentialNote:
        "Preview images only. Full app details available on request.",
    },
  },
];

export default projects;
