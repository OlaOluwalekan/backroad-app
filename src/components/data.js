import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaWallet,
  FaTree,
  FaSocks
} from "react-icons/fa";

import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

export const navLinks = [
  {
    id: 1,
    text: "home"
  },
  {
    id: 2,
    text: "about"
  },
  {
    id: 3,
    text: "services"
  },
  {
    id: 4,
    text: "tours"
  }
];

export const socialLinks = [
  {
    id: 1,
    icon: function () {
      return <FaFacebook />;
    },
    url: "https://facebook.com"
  },
  {
    id: 2,
    icon: function () {
      return <FaTwitter />;
    },
    url: "https://twitter.com"
  },
  {
    id: 3,
    icon: function () {
      return <FaGithub />;
    },
    url: "https://github.com"
  }
];

export const servicesData = [
  {
    id: 1,
    icon: function () {
      return <FaWallet />;
    },
    name: "Saving Money"
  },
  {
    id: 2,
    icon: function () {
      return <FaTree />;
    },
    name: "Endless Hiking"
  },
  {
    id: 3,
    icon: function () {
      return <FaSocks />;
    },
    name: "Amazing Comfort"
  }
];

export const tourData = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2020",
    name: "Tibet Adventure",
    duration: 6,
    location: "China",
    cost: 2100
  },
  {
    id: 2,
    image: tour2,
    date: "October 1st, 2020",
    name: "Best Of Java",
    duration: 11,
    location: "Indonesia",
    cost: 1400
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2020",
    name: "Explore Hong Kong",
    duration: 8,
    location: "Hong Kong",
    cost: 5000
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2019",
    name: "Kenya Highlights",
    duration: 20,
    location: "Kenya",
    cost: 3300
  },
  {
    id: 5,
    image: tour5,
    date: "May 20th, 2020",
    name: "Visit the Savannah",
    duration: 7,
    location: "Korea",
    cost: 7800
  },
  {
    id: 6,
    image: tour6,
    date: "June 19th, 2018",
    name: "Dome of Freedom",
    duration: 14,
    location: "Iran",
    cost: 2500
  }
];
