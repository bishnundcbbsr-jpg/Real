// Ensure global registry exists
window.REAL_MODULES = window.REAL_MODULES || {};

// Ensure chapter exists
if (!window.REAL_MODULES["travellers1"]) {
  window.REAL_MODULES["travellers1"] = {
    title: "We the Travellers – I",
    modules: []
  };
}

// ===============================
// MODULE 3: COUNTING & NUMBER SYSTEMS
// ===============================
window.REAL_MODULES["travellers1"].modules.push({
  id: "module3",
  name: "Module 3: Counting Systems & Number Sense",
  lessons: [

    {
      title: "Lesson 1: Indian System of Counting",
      text:
        "In the Indian system, numbers are grouped as Ones, Tens, Hundreds, Thousands, Lakhs, and Crores. Commas are placed differently compared to the western system.",
      question:
        "Write 1250000 in the Indian system using commas.",
      points: 10,
      check: a => a.replace(/\s/g,"") === "12,50,000"
    },

    {
      title: "Lesson 2: Western System of Counting",
      text:
        "In the western system, numbers are grouped as Ones, Tens, Hundreds, Thousands, Millions, and Billions. Commas are placed after every three digits from the right.",
      question:
        "Write 1250000 in the western system using commas.",
      points: 10,
      check: a => a.replace(/\s/g,"") === "1,250,000"
    },

    {
      title: "Lesson 3: Comparing Indian and Western Systems",
      text:
        "The value of the number remains the same, but the naming and comma placement change between Indian and western systems.",
      question:
        "Does the value of 1,250,000 change when written as 12,50,000? (yes/no)",
      points: 10,
      check: a => a.trim().toLowerCase() === "no"
    },

    {
      title: "Lesson 4: Numbers on a Number Line",
      text:
        "A number line shows numbers in order. Smaller numbers lie to the left, larger numbers to the right.",
      question:
        "Which is greater: 487 or 492?",
      points: 10,
      check: a => a.trim() === "492"
    },

    {
      title: "Lesson 5: Nearest 10, 100, and 1000",
      text:
        "Rounding helps estimate numbers. Look at the digit next to the place value to decide whether to round up or down.",
      question:
        "Round 764 to the nearest 100.",
      points: 10,
      check: a => a.trim() === "800"
    },

    {
      title: "Lesson 6: Ascending and Descending Order",
      text:
        "Ascending order means smallest to largest. Descending order means largest to smallest.",
      question:
        "Write 340, 120, 560 in ascending order.",
      points: 10,
      check: a =>
          a.replace(/\s/g,"") === "120,340,560"
    },

    {
      title: "Lesson 7: Converting Tens, Hundreds, and Thousands",
      text:
        "10 tens make 1 hundred, 10 hundreds make 1 thousand. Understanding these conversions helps solve word problems.",
      question:
        "How many tens are there in 300?",
      points: 10,
      check: a => a.trim() === "30"
    }

  ]
});
