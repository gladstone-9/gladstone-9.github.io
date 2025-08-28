// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "What I&#39;ve been building",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-was-accepted-into-the-raven-society",
          title: 'I was accepted into the Raven Society.',
          description: "",
          section: "News",},{id: "news-i-completed-the-aws-cloud-practitioner-certification",
          title: 'I completed the AWS Cloud Practitioner certification.',
          description: "",
          section: "News",},{id: "news-i-graduated-from-the-university-of-virginia-with-highest-distinction",
          title: 'I graduated from the University of Virginia with Highest Distinction.',
          description: "",
          section: "News",},{id: "news-i-joined-cavalier-autonomous-racing",
          title: 'I joined Cavalier Autonomous Racing.',
          description: "",
          section: "News",},{id: "news-i-completed-my-security-engineer-internship-at-atlassian-in-sf",
          title: 'I completed my Security Engineer internship at Atlassian in SF!',
          description: "",
          section: "News",},{id: "projects-robotic-gaurd-dog",
          title: 'Robotic Gaurd Dog',
          description: "A real-time autonomous patrol system for securing a bounded environment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amr_robotic_gaurd_dog/";
            },},{id: "projects-beacon-classifier",
          title: 'Beacon Classifier',
          description: "Machine learning pipeline to detect Command and Control (C2) beaconing activity from Zeek network logs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beacon_classifier/";
            },},{id: "projects-inferring-sleep-behavior",
          title: 'Inferring Sleep Behavior',
          description: "A framework for accurate sleep inferencing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bespoke_framework/";
            },},{id: "projects-distributed-mppt-solar-charge-controller",
          title: 'Distributed MPPT Solar Charge Controller',
          description: "Design and implementation of a Module Cascaded Converter charging system for UVA Solar Car.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/capstone/";
            },},{id: "projects-clear-audit",
          title: 'Clear Audit',
          description: "A platform designed to help data publishers create differentially private datasets and data releases.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clear_audit/";
            },},{id: "projects-cube-chaser",
          title: 'Cube Chaser',
          description: "A multithreaded game on the Tiva C microcontroller.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/embedded_cube_chaser/";
            },},{id: "projects-spectrum-analyzer-holiday-light-show",
          title: 'Spectrum Analyzer Holiday Light Show',
          description: "Holiday lights that respond to music based on the measured frequency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fun2_spectrum_analyzer/";
            },},{id: "projects-electrocardiography-ekg-system",
          title: 'Electrocardiography (EKG) System',
          description: "A custom PCB EKG System to measure heartbeats.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fun3_ekg/";
            },},{id: "projects-place-sense",
          title: 'Place Sense',
          description: "A Google Timeline Extension for Location Classification.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/place_sense/";
            },},{id: "projects-automated-gui-testing",
          title: 'Automated GUI Testing',
          description: "The Fuzzingbook extension to support functional GUI fuzz testing on modern web frameworks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/software_analysis_gui_testing/";
            },},{id: "projects-stress-impacts-on-lifestyle-behavior",
          title: 'Stress Impacts On Lifestyle Behavior',
          description: "A scalable online study of work and daily activity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stress_on_lifestyle/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%62%65%6A%67%6C%61%64%73%74%6F%6E%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gladstone-9", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gabriel-gladstone-10ba38223", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
