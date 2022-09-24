const data = {
  name: "Mojeeb Rahman Sedeqi",
  city: "Berlin",
  profession: {
    role: "Senior Web Developer",
    institution: "HZB",
  },
  works: {
    projects: [
      {
        name: "Statistical and Reporting System",
        location: "Ministry of Higher Education of Afghanistan",
        photo: [{ path: "statistical_system.jpg" }],
        technologies: {
          "front-end": [
            "HTML",
            "CSS",
            "Vue.js",
            "HighCharts.js",
            "Bootstrap",
            "socket.io",
          ],
          "back-end": ["PHP", "Laravel", "Laravel Echo Server"],
          Database: ["MySQL"],
        },
      },
    ],
  },
};

exports.data = data;
