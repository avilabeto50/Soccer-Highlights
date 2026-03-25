// Player Resume Database - Update this file to manage all player data
const PLAYER_DATA = {
  // Basic Player Info
  player: {
    name: "Aaron J. Avila Jimenez",
    school: "John B Alexander High School",
    ClubTeam: "Laredo Heat SC U17 ",
    Area: "South Texas",
    City: "Laredo, Texas",
    classYear: "Sophomore (Class of 2028)",
    gpa: "3.8",
    positions: ["CM", "CAM", "ST"],
    aspiringMajors: ["Kinesiology", "Sports Medicine", "Athletic Trainer"],
    email: "aaron.avilajimenez2010@gmail.com",
    phone: "(956) 558-4129"
  },

  // Hero video - main highlight reel
  heroVideo: {
    url: "videos/goals/100118Goal.mp4", // Replace with actual YouTube ID or local path
    title: "2025-2026 Season Highlight Reel",
    subtitle: "Senior Year Career Showcase"
  },

  // Profile photos for carousel
  profilePhotos: [
    {
      url: "photos/in-action.jpg", // Action shot
      caption: "In Action"
    },
    {
      url: "photos/ingame-portrait.jpg", // Portrait
      caption: "Portrait"
    }
  ],

  // Clip categories with multiple highlights
  clipCategories: [
    {
      name: "Goals",
      icon: "⚽",
      clips: [
        {
          url: "videos/goals/120218Goal.MOV",
          title: "Dribbling Goal from Midfield",
          date: "December 02, 2018"
        },
        {
          url: "videos/goals/100118Goal.mp4",
          title: "Volley Goal from Rebound",
          date: "October 01, 2018"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Header in Penalty Box",
          date: "March 10, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Breakaway Finish",
          date: "March 5, 2026"
        }
      ]
    },
    {
      name: "Assists",
      icon: "🎯",
      clips: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Through Ball Threading",
          date: "February 28, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Cross from Right Wing",
          date: "February 25, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Ping Ball Assist",
          date: "February 20, 2026"
        }
      ]
    },
    {
      name: "Building Play",
      icon: "🏗️",
      clips: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Midfield Control & Distribution",
          date: "February 18, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "One-Touch Play Sequence",
          date: "February 15, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Organizing Attack from Defense",
          date: "February 12, 2026"
        }
      ]
    },
    {
      name: "Switching Play",
      icon: "🔄",
      clips: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Long Ball Switch",
          date: "February 10, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Diagonal Pass to Winger",
          date: "February 8, 2026"
        }
      ]
    },
    {
      name: "Defending",
      icon: "🛡️",
      clips: [
        {
          url: "videos/defending/010226Ball Recovery.mov",
          title: "Recovering and Keeping Possession",
          date: "January 2, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Pressing & Ball Recovery",
          date: "February 3, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Defensive Positioning",
          date: "January 30, 2026"
        }
      ]
    },
    {
      name: "1v1 Situations",
      icon: "👥",
      clips: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Skill Move & Shot",
          date: "January 28, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Dribbling Past Defender",
          date: "January 25, 2026"
        },
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Directional Change",
          date: "January 22, 2026"
        }
      ]
    },
    
      
    {
      name: "Penalty Kicks",
      icon: "🎪",
      clips: [
        {
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Championship Penalty Conversion",
          date: "January 15, 2026"
        }
      ]
    }
  ],

  // Athletic Stats and Achievements
  athleticStats: {
    currentSeason: {
      goals: 24,
      assists: 12,
      appearances: 18,
      minutesPlayed: 1620,
      shotsOnTarget: 32
    },
    careerHighlights: [
      "Team Captain - 2025-2026 Season",
      "Regional All-Star Team - 2 consecutive years",
      "State Championship Finalist - 2024, 2025",
      "League Leading Scorer - 2024-2025 Season (18 goals)",
      "MVP Award - District Tournament 2025"
    ],
    achievements: [
      "All-League Selection - Senior Year",
      "District Player of the Week - 5 times",
      "Scored in championship game",
      "30+ career goals",
      "Academic All-Star - 3.85 GPA varsity athlete"
    ]
  },

  // Academic Resume
  académicResume: {
    gpa: "3.85 / 4.0",
    advancedCourses: [
      "AP Computer Science Principles",
      "AP Calculus BC",
      "AP Economics",
      "Honors English Literature"
    ],
    awards: [
      "National Honor Society",
      "Academic Excellence Award - 2024",
      "STEM Scholarship Finalist"
    ],
    extracurriculars: [
      "Soccer Team - Captain (12 years playing)",
      "Programming Club - President",
      "Community Service - 100+ volunteer hours"
    ]
  },

  // Detailed Resume
  detailedResume: {
    personalStatement: `I am a dedicated athlete and student committed to excellence both on and off the field.
    With 24 goals this season and a 3.85 GPA, I demonstrate the discipline and focus needed to succeed
    at the collegiate level. My leadership as team captain, combined with my technical skills and tactical
    awareness, makes me a valuable asset to any program.`,

    references: [
      {
        name: "Coach James Mitchell",
        title: "Head Coach, Central Valley High School",
        email: "j.mitchell@centralvalley.edu",
        phone: "(555) 987-6543"
      },
      {
        name: "Dr. Sarah Williams",
        title: "Academic Advisor, Central Valley High School",
        email: "s.williams@centralvalley.edu",
        phone: "(555) 654-3210"
      }
    ]
  }
};
