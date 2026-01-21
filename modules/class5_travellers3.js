// Ensure global registry exists
window.REAL_MODULES = window.REAL_MODULES || {};

// Ensure chapter exists
if (!window.REAL_MODULES["travellers1"]) {
  window.REAL_MODULES["travellers1"] = {
    title: "We the Travellers – I",
    modules: []
  };
}

window.REAL_MODULES["travellers1"].modules.push({
  id: "module3",
  name: "Module 3: Counting Systems & Number Sense",
  lessons: [

    {
      title: "Lesson 1: Indian System of Counting",
      text:
        "In the Indian system, numbers are written using Ones, Tens, Hundreds, Thousands, Lakhs, and Crores. Commas are placed after three digits from the right, then every two digits.",
      question:
        "Write 1250000 in the Indian system using commas.",
      points: 10,
      check: a => a.replace(/\s/g, "") === "12,50,000"
    },

    {
      title: "Lesson 2: Western System of Counting",
      text:
        "In the western system, numbers are grouped into Ones, Tens, Hundreds, Thousands, Millions, etc. Commas are placed after every three digits.",
      question:
        "Write 1250000 in the western system using commas.",
      points: 10,
      check: a => a.replace(/\s/g, "") === "1,250,000"
    },

    {
      title: "Lesson 3: Indian vs Western System",
      text:
        "The value of a number does not change when written in different systems. Only the naming and comma placement change.",
      question:
        "Does 12,50,000 represent the same value as 1,250,000? (yes/no)",
      points: 10,
      check: a => a.trim().toLowerCase() === "yes"
    },

    {
      title: "Lesson 4: Number Line – Position of Numbers",
      text:
        "A number line shows numbers in order from left to right. Smaller numbers are on the left and bigger numbers are on the right.\n\nExample:\n450 ---- 460 ---- 470 ---- 480 ---- 490 ---- 500",
      question:
        "On the number line above, which number is closer to 500: 470 or 490?",
      points: 10,
      check: a => a.trim() === "490"
    },

    {
      title: "Lesson 5: Rounding on a Number Line",
      text:
        "Rounding can be understood using a number line. A number is rounded to the nearest 10, 100, or 1000 based on which it is closer to.",
      question:
        "Using a number line, round 764 to the nearest 100.",
      points: 10,
      check: a => a.trim() === "800"
    },

    {
      title: "Lesson 6: Ascending and Descending Order",
      text:
        "Numbers increase from left to right on a number line. This helps us arrange numbers in ascending and descending order.",
      question:
        "Arrange 340, 120, 560 in ascending order.",
      points: 10,
      check: a => a.replace(/\s/g, "") === "120,340,560"
    },

    {
      title: "Lesson 7: Tens, Hundreds and Thousands Conversion",
      text:
        "10 tens make 1 hundred and 10 hundreds make 1 thousand. These relationships help in solving word problems.",
      question:
        "How many tens are there in 300?",
      points: 10,
      check: a => a.trim() === "30"
    }

  ]
});
