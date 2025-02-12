document.addEventListener("DOMContentLoaded", () => {
    const legend = [
        { name: "Journals", icon: "📓", color: "#6ee7b7" },
        { name: "Sleeping", icon: "💤", color: "#93c5fd" },
        { name: "Eating", icon: "🍽️", color: "#fcd34d" },
        { name: "Exercise", icon: "🏋️", color: "#fca5a5" },
        { name: "Affirmations", icon: "🌟", color: "#f0abfc" },
      ];
    
      const activities = {
        currentWeek: {
          journals: [
            {
              id: 1,
              date: "2024-09-09",
              time: "07:30 AM",
              title: "Morning Reflections",
              state_of_mind: "Happy",
            },
            {
              id: 2,
              date: "2024-09-10",
              time: "07:35 AM",
              title: "Curious about new day",
              state_of_mind: "Excited",
            },
            {
              id: 3,
              date: "2024-09-11",
              time: "07:15 AM",
              title: "Stressed",
              state_of_mind: "Stressed",
            },
            {
              id: 4,
              date: "2024-09-12",
              time: "07:04 AM",
              title: "Going to bed late last night",
              state_of_mind: "Overwhelmed",
            },
            {
              id: 5,
              date: "2024-09-13",
              time: "07:40 AM",
              title: "Bored",
              state_of_mind: "Bored",
            },
            {
              id: 6,
              date: "2024-09-14",
              time: "07:12 AM",
              title: "Stay at home alone",
              state_of_mind: "Relaxed",
            },
            {
              id: 7,
              date: "2024-09-15",
              time: "07:50 AM",
              title: "Stay at home with my family",
              state_of_mind: "Joyful",
            },
          ],
          sleeping_cycle: [
            {
              id: 1,
              date: "2024-09-09",
              time_bedtime: "10:00 PM",
              time_wake_up: "07:00 AM",
              total_sleep_hours: 9,
            },
            {
              id: 2,
              date: "2024-09-10",
              time_bedtime: "10:00 PM",
              time_wake_up: "07:00 AM",
              total_sleep_hours: 9,
            },
            {
              id: 3,
              date: "2024-09-11",
              time_bedtime: "10:30 PM",
              time_wake_up: "07:00 AM",
              total_sleep_hours: 8.5,
            },
            {
              id: 4,
              date: "2024-09-12",
              time_bedtime: "11:45 PM",
              time_wake_up: "06:45 AM",
              total_sleep_hours: 7,
            },
            {
              id: 5,
              date: "2024-09-13",
              time_bedtime: "10:00 PM",
              time_wake_up: "07:00 AM",
              total_sleep_hours: 9,
            },
            {
              id: 6,
              date: "2024-09-14",
              time_bedtime: "09:30 PM",
              time_wake_up: "06:40 AM",
              total_sleep_hours: 9.17,
            },
            {
              id: 7,
              date: "2024-09-15",
              time_bedtime: "09:00 PM",
              time_wake_up: "07:00 AM",
              total_sleep_hours: 10,
            },
          ],
          eating_habits: [
            {
              id: 1,
              date: "2024-09-09",
              time: "07:30 AM",
              meal_type: "Breakfast",
              meal_description: ["Oatmeal", "Banana", "Green Tea"],
            },
            {
              id: 2,
              date: "2024-09-10",
              time: "12:30 PM",
              meal_type: "Lunch",
              meal_description: [
                "Grilled Chicken Salad",
                "Brown Rice",
                "Water",
              ],
            },
            {
              id: 3,
              date: "2024-09-11",
              time: "06:00 PM",
              meal_type: "Dinner",
              meal_description: ["Salmon", "Quinoa", "Steamed Vegetables"],
            },
            {
              id: 4,
              date: "2024-09-12",
              time: "07:45 AM",
              meal_type: "Breakfast",
              meal_description: ["Greek Yogurt", "Almonds", "Blueberries"],
            },
            {
              id: 5,
              date: "2024-09-13",
              time: "01:00 PM",
              meal_type: "Lunch",
              meal_description: [
                "Turkey Sandwich",
                "Sweet Potato Fries",
                "Iced Tea",
              ],
            },
            {
              id: 6,
              date: "2024-09-14",
              time: "03:00 PM",
              meal_type: "Snack",
              meal_description: ["Apple", "Peanut Butter"],
            },
            {
              id: 7,
              date: "2024-09-15",
              time: "08:00 PM",
              meal_type: "Dinner",
              meal_description: [
                "Grilled Chicken",
                "Broccoli",
                "Sweet Potatoes",
              ],
            },
          ],
          exercises: [
            {
              id: 1,
              date: "2024-09-09",
              time: "06:00 AM",
              activity: "Jogging",
              duration: 45,
            },
            {
              id: 2,
              date: "2024-09-10",
              time: "05:00 PM",
              activity: "Cycling",
              duration: 60,
            },
            {
              id: 3,
              date: "2024-09-11",
              time: "07:00 AM",
              activity: "Yoga",
              duration: 30,
            },
            {
              id: 4,
              date: "2024-09-12",
              time: "04:00 PM",
              activity: "Swimming",
              duration: 40,
            },
            {
              id: 5,
              date: "2024-09-13",
              time: "06:30 AM",
              activity: "Strength Training",
              duration: 50,
            },
            {
              id: 6,
              date: "2024-09-14",
              time: "08:00 AM",
              activity: "Jump Rope",
              duration: 20,
            },
            {
              id: 7,
              date: "2024-09-15",
              time: "05:00 PM",
              activity: "Pilates",
              duration: 45,
            },
          ],
          affirmations: [
            {
              id: 1,
              date: "2024-09-09",
              time: "07:40 AM",
              affirmation: "I am capable of achieving my goals.",
            },
            {
              id: 2,
              date: "2024-09-10",
              time: "07:37 AM",
              affirmation: "I am proud of the progress I made today.",
            },
            {
              id: 3,
              date: "2024-09-11",
              time: "07:20 AM",
              affirmation:
                "I am grateful for the opportunities that come my way.",
            },
            {
              id: 4,
              date: "2024-09-12",
              time: "07:10 AM",
              affirmation: "I am at peace with myself and my surroundings.",
            },
            {
              id: 5,
              date: "2024-09-13",
              time: "07:45 AM",
              affirmation: "I am constantly growing and improving.",
            },
            {
              id: 6,
              date: "2024-09-14",
              time: "07:20 AM",
              affirmation: "I believe in my potential to achieve great things.",
            },
            {
              id: 7,
              date: "2024-09-15",
              time: "08:00 AM",
              affirmation: "I trust the process of life.",
            },
          ],
        },
        lastWeek: {
          journals: [
            {
              id: 8,
              date: "2024-09-02",
              time: "07:35 AM",
              title: "Reflection on this morning",
              state_of_mind: "Hopeful",
            },
            {
              id: 9,
              date: "2024-09-03",
              time: "07:00 AM",
              title: "Optimistic",
              state_of_mind: "Optimistic",
            },
            {
              id: 10,
              date: "2024-09-04",
              time: "06:30 AM",
              title: "Frustrated",
              state_of_mind: "Frustrated",
            },
            {
              id: 11,
              date: "2024-09-05",
              time: "07:20 AM",
              title: "Sad",
              state_of_mind: "Sad",
            },
            {
              id: 12,
              date: "2024-09-06",
              time: "07:30 AM",
              title: "Lonely",
              state_of_mind: "Lonely",
            },
            {
              id: 13,
              date: "2024-09-07",
              time: "08:00 AM",
              title: "Relaxed",
              state_of_mind: "Relaxed",
            },
            {
              id: 14,
              date: "2024-09-08",
              time: "08:10 AM",
              title: "Stay calm",
              state_of_mind: "At Peace",
            },
          ],
          sleeping_cycle: [
            {
              id: 1,
              date: "2024-09-02",
              time_bedtime: "10:00 PM",
              time_wake_up: "06:40 AM",
              total_sleep_hours: 8.67,
            },
            {
              id: 2,
              date: "2024-09-03",
              time_bedtime: "09:40 PM",
              time_wake_up: "06:30 AM",
              total_sleep_hours: 8.83,
            },
            {
              id: 3,
              date: "2024-09-04",
              time_bedtime: "10:30 PM",
              time_wake_up: "06:15 AM",
              total_sleep_hours: 7.75,
            },
            {
              id: 4,
              date: "2024-09-05",
              time_bedtime: "10:40 PM",
              time_wake_up: "06:40 AM",
              total_sleep_hours: 8,
            },
            {
              id: 5,
              date: "2024-09-06",
              time_bedtime: "10:00 PM",
              time_wake_up: "07:00 AM",
              total_sleep_hours: 9,
            },
            {
              id: 6,
              date: "2024-09-07",
              time_bedtime: "09:30 PM",
              time_wake_up: "07:30 AM",
              total_sleep_hours: 10,
            },
            {
              id: 7,
              date: "2024-09-08",
              time_bedtime: "09:30 PM",
              time_wake_up: "07:30 AM",
              total_sleep_hours: 10,
            },
          ],
          eating_habits: [
            {
              id: 8,
              date: "2024-09-02",
              time: "06:00 PM",
              meal_type: "Dinner",
              meal_description: [
                "Grilled Steak",
                "Mashed Potatoes",
                "Caesar Salad",
              ],
            },
            {
              id: 9,
              date: "2024-09-03",
              time: "12:30 PM",
              meal_type: "Lunch",
              meal_description: ["Chicken Wrap", "Smoothie", "Fruit Salad"],
            },
            {
              id: 10,
              date: "2024-09-04",
              time: "07:00 AM",
              meal_type: "Breakfast",
              meal_description: [
                "Scrambled Eggs",
                "Avocado Toast",
                "Orange Juice",
              ],
            },
            {
              id: 11,
              date: "2024-09-05",
              time: "01:00 PM",
              meal_type: "Lunch",
              meal_description: ["Beef Stir-fry", "Brown Rice", "Water"],
            },
            {
              id: 12,
              date: "2024-09-06",
              time: "06:30 PM",
              meal_type: "Dinner",
              meal_description: ["Chicken Alfredo", "Garlic Bread", "Water"],
            },
            {
              id: 13,
              date: "2024-09-07",
              time: "08:30 AM",
              meal_type: "Breakfast",
              meal_description: ["Omelette", "Whole Wheat Toast", "Coffee"],
            },
            {
              id: 14,
              date: "2024-09-08",
              time: "08:00 PM",
              meal_type: "Snack",
              meal_description: ["Greek Yogurt", "Nuts", "Honey"],
            },
          ],
          exercises: [
            {
              id: 8,
              date: "2024-09-02",
              time: "06:00 AM",
              activity: "Tennis",
              duration: 60,
            },
            {
              id: 9,
              date: "2024-09-03",
              time: "07:00 PM",
              activity: "Walking",
              duration: 40,
            },
            {
              id: 10,
              date: "2024-09-04",
              time: "05:30 AM",
              activity: "Hiking",
              duration: 120,
            },
            {
              id: 11,
              date: "2024-09-05",
              time: "06:00 PM",
              activity: "Rowing",
              duration: 45,
            },
            {
              id: 12,
              date: "2024-09-06",
              time: "05:00 PM",
              activity: "Running",
              duration: 30,
            },
            {
              id: 13,
              date: "2024-09-07",
              time: "08:00 AM",
              activity: "Jump Rope",
              duration: 15
            },
            {
              id: 14,
              date: "2024-09-08",
              time: "07:00 AM",
              activity: "Yoga",
              duration: 25,
            },
          ],
          affirmations: [
            {
              id: 8,
              date: "2024-09-02",
              time: "08:00 AM",
              affirmation: "I am open to learning from every experience.",
            },
            {
              id: 9,
              date: "2024-09-03",
              time: "08:00 AM",
              affirmation: "I have the strength to overcome any obstacle.",
            },
            {
              id: 10,
              date: "2024-09-04",
              time: "08:00 AM",
              affirmation: "I am becoming the best version of myself.",
            },
            {
              id: 11,
              date: "2024-09-05",
              time: "08:30 AM",
              affirmation: "I am grateful for my journey and where it leads.",
            },
            {
              id: 12,
              date: "2024-09-06",
              time: "08:05 AM",
              affirmation: "I release all doubts and embrace my potential.",
            },
            {
              id: 13,
              date: "2024-09-07",
              time: "08:30 AM",
              affirmation: "I trust myself to make the right decisions.",
            },
            {
              id: 14,
              date: "2024-09-08",
              time: "08:30 AM",
              affirmation: "I approach life with positivity and an open heart.",
            },
          ],
        },
      };
    
      function createCurrentWeekCalendar() {
        activities.currentWeek.sleeping_cycle.forEach((activity, index) => {
          const dayElement = document.getElementById(`cw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[1].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[1].color}">${legend[1].icon}</span>
                    ${activity.time_bedtime}-${activity.time_wake_up}: ${activity.total_sleep_hours} hour(s)
                `;
          dayElement.appendChild(activityElement);
        });
        activities.currentWeek.journals.forEach((activity, index) => {
          const dayElement = document.getElementById(`cw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[0].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[0].color}">${legend[0].icon}</span>
                    ${activity.time}: ${activity.state_of_mind}
                `;
          dayElement.appendChild(activityElement);
        });
        activities.currentWeek.eating_habits.forEach((activity, index) => {
          const dayElement = document.getElementById(`cw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[2].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[2].color}">${legend[2].icon}</span>
                    ${activity.time}: ${activity.meal_type}
                `;
          dayElement.appendChild(activityElement);
        });
        activities.currentWeek.exercises.forEach((activity, index) => {
          const dayElement = document.getElementById(`cw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[3].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[3].color}">${legend[3].icon}</span>
                    ${activity.time}: ${activity.activity}
                `;
          dayElement.appendChild(activityElement);
        });
        activities.currentWeek.affirmations.forEach((activity, index) => {
          let dayElement = document.getElementById(`cw-day-${index + 1}`);
          let activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[4].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[4].color}">${legend[4].icon}</span>
                    ${activity.time}: ${activity.affirmation}
                `;
          dayElement.appendChild(activityElement);
        });
      }
      function createLastWeekCalendar() {
        activities.lastWeek.sleeping_cycle.forEach((activity, index) => {
          const dayElement = document.getElementById(`lw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[1].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[1].color}">${legend[1].icon}</span>
                    ${activity.time_bedtime}-${activity.time_wake_up}: ${activity.total_sleep_hours} hour(s)
                `;
          dayElement.appendChild(activityElement);
        });
        activities.lastWeek.journals.forEach((activity, index) => {
          const dayElement = document.getElementById(`lw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[0].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[0].color}">${legend[0].icon}</span>
                    ${activity.time}: ${activity.state_of_mind}
                `;
          dayElement.appendChild(activityElement);
        });
        activities.currentWeek.eating_habits.forEach((activity, index) => {
          const dayElement = document.getElementById(`lw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[2].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[2].color}">${legend[2].icon}</span>
                    ${activity.time}: ${activity.meal_type}
                `;
          dayElement.appendChild(activityElement);
        });
        activities.lastWeek.exercises.forEach((activity, index) => {
          const dayElement = document.getElementById(`lw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[3].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[3].color}">${legend[3].icon}</span>
                    ${activity.time}: ${activity.activity}
                `;
          dayElement.appendChild(activityElement);
        });
        activities.lastWeek.affirmations.forEach((activity, index) => {
          const dayElement = document.getElementById(`lw-day-${index + 1}`);
          const activityElement = document.createElement("div");
          activityElement.className = "activity";
          activityElement.style.backgroundColor = `${legend[4].color}`;
          activityElement.innerHTML = `
                    <span class="activity-icon" style="background-color: ${legend[4].color}">${legend[4].icon}</span>
                    ${activity.time}: ${activity.affirmation}
                `;
          dayElement.appendChild(activityElement);
        });
      }
      createCurrentWeekCalendar();
      createLastWeekCalendar();
});