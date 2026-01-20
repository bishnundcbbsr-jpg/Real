// Ensure global registry exists
window.REAL_MODULES = window.REAL_MODULES || {};

// Register chapter if not exists
if (!window.REAL_MODULES["travellers1"]) {
  window.REAL_MODULES["travellers1"] = {
    title: "We the Travellers – I",
    modules: []
  };
}

// Add Module 2: Measurements in Daily Life
window.REAL_MODULES["travellers1"].modules.push({
  id: "module2",
  name: "Module 2: Measurements in Daily Life",
  lessons: [
    {
      title: "Lesson 1: Measuring Length",
      text: "We measure lengths of objects in the classroom, home, or playground using rulers, tape measures, or steps.",
      question: "Measure the length of your desk in centimeters and write it.",
      points: 10,
      check: answer => !isNaN(parseFloat(answer)) && parseFloat(answer) > 0
    },
    {
      title: "Lesson 2: Measuring Weight",
      text: "Weights can be measured in kilograms, grams, or by comparison with known objects.",
      question: "Write the weight of a book or bag you have.",
      points: 10,
      check: answer => !isNaN(parseFloat(answer)) && parseFloat(answer) > 0
    },
    {
      title: "Lesson 3: Measuring Capacity",
      text: "Capacity is the amount a container can hold. We use liters, milliliters, or cups.",
      question: "Estimate the capacity of a water bottle in liters.",
      points: 10,
      check: answer => !isNaN(parseFloat(answer)) && parseFloat(answer) > 0
    },
    {
      title: "Lesson 4: Time Measurement",
      text: "We measure time in hours, minutes, and seconds. Everyday activities follow time schedules.",
      question: "Write the current time in HH:MM format.",
      points: 10,
      check: answer => /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(answer.trim())
    },
    {
      title: "Lesson 5: Using Distance in Travel",
      text: "Distance tells how far one place is from another. We use meters, kilometers, or steps to measure distance.",
      question: "Estimate the distance from your classroom to your playground in meters.",
      points: 10,
      check: answer => !isNaN(parseFloat(answer)) && parseFloat(answer) > 0
    },
    {
      title: "Lesson 6: Comparing Quantities",
      text: "We often compare two quantities to find which is greater or smaller, for example weight of two bags, or height of two friends.",
      question: "Compare the height of two objects and write which is taller.",
      points: 10,
      check: answer => answer.trim().length > 0
    },
    {
      title: "Lesson 7: Real-life Measurement Summary",
      text: "Measurements are all around us – in classrooms, playgrounds, kitchens, streets, and shops. Observing and recording them helps us understand numbers practically.",
      question: "Write any THREE measurements you observed today (length, weight, or capacity).",
      points: 10,
      check: answer => answer.trim().split(/\s+/).length >= 3
    }
  ]
});
