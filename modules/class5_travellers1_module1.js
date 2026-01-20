if (!window.REAL_MODULES["travellers1"]) {
  window.REAL_MODULES["travellers1"] = {
    title: "We the Travellers – I",
    modules: []
  };
}

window.REAL_MODULES["travellers1"].modules.push({
  name: "Module 1: Discovering Numbers",
  lessons: [
    {
      title: "Numbers Are Everywhere",
      text: "Numbers help us count, measure, and identify places.",
      question: "Write any three numbers you see in one day.",
      check: a => a.trim().split(/\s+/).length >= 3
    },
    {
      title: "Types of Numbers",
      text: "Numbers are used for counting, measuring, and naming.",
      question: "Is 45 students counting, measuring, or naming?",
      check: a => a.toLowerCase().includes("count")
    }
  ]
});
