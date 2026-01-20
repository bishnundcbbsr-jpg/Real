// Ensure global registry exists
window.REAL_MODULES = window.REAL_MODULES || {};

// Register chapter if not exists
if (!window.REAL_MODULES["travellers1"]) {
  window.REAL_MODULES["travellers1"] = {
    title: "We the Travellers – I",
    modules: []
  };
}

// Add Module 1: Discovering Numbers
window.REAL_MODULES["travellers1"].modules.push({
  id: "module1",
  name: "Module 1: Discovering Numbers",
  lessons: [
    {
      title: "Lesson 1: Numbers Are Everywhere",
      text: "Numbers help us count, measure, and identify places. Look around your home, classroom, playground, or street to see numbers in daily life.",
      question: "Write any THREE numbers you saw today.",
      points: 10,
      check: answer => answer.trim().split(/\s+/).length >= 3
    },
    {
      title: "Lesson 2: Types of Numbers",
      text: "Numbers are used in different ways:\n• Counting → number of students\n• Measuring → distance, weight\n• Naming → bus number, house number",
      question: "Is '45 students' counting, measuring, or naming?",
      points: 10,
      check: answer => answer.toLowerCase().includes("count")
    },
    {
      title: "Lesson 3: Ones in Ten",
      text: "Ten ones make a ten. Every digit has a place value, starting from ones, tens, hundreds, thousands, etc.",
      question: "How many ones are there in 30?",
      points: 10,
      check: answer => parseInt(answer) === 30
    },
    {
      title: "Lesson 4: Tens in Hundred",
      text: "Ten tens make a hundred. Place value is important to understand large numbers.",
      question: "How many tens are in 80?",
      points: 10,
      check: answer => parseInt(answer) === 8
    },
    {
      title: "Lesson 5: Hundreds in Thousand",
      text: "Ten hundreds make a thousand. This helps us read and write large numbers easily.",
      question: "How many hundreds are in 900?",
      points: 10,
      check: answer => parseInt(answer) === 9
    },
    {
      title: "Lesson 6: Figures to Words",
      text: "We can write numbers in words. For example, 42 is written as 'forty-two'.",
      question: "Write 56 in words.",
      points: 10,
      check: answer => answer.trim().toLowerCase() === "fifty-six"
    },
    {
      title: "Lesson 7: Words to Figures",
      text: "We can also write words as numbers. For example, 'thirty-four' is 34.",
      question: "Write 'seventy-one' in numbers.",
      points: 10,
      check: answer => parseInt(answer) === 71
    }
  ]
});
