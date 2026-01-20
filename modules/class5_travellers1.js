// Ensure global registry exists
window.REAL_MODULES = window.REAL_MODULES || {};

// Register chapter if not exists
if (!window.REAL_MODULES["travellers1"]) {
  window.REAL_MODULES["travellers1"] = {
    title: "We the Travellers – I",
    modules: []
  };
}

// Add Module 1
window.REAL_MODULES["travellers1"].modules.push({
  id: "module1",
  name: "Module 1: Discovering Numbers",
  lessons: [
    {
      title: "Lesson 1: Numbers Are Everywhere",
      text: `
Numbers help us:
• count objects
• measure things
• identify places

Look around your home, classroom, or street.
      `,
      question: "Write any THREE numbers you see in one day.",
      points: 10,
      check: answer => answer.trim().split(/\s+/).length >= 3
    },
    {
      title: "Lesson 2: Types of Numbers",
      text: `
Numbers are used in different ways:
• Counting → number of students
• Measuring → distance, weight
• Naming → bus number, house number
      `,
      question: "Is '45 students' counting, measuring, or naming?",
      points: 10,
      check: answer => answer.toLowerCase().includes("count")
    }
  ]
});
