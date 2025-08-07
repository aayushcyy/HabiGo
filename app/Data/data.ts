import { Habits } from "../types/next-pwa";
import Person1 from "../../public/images/person1.webp";
import Person2 from "../../public/images/person2.webp";
import Person3 from "../../public/images/person3.webp";
import Person4 from "../../public/images/person4.webp";
import Person5 from "../../public/images/person5.webp";
import Person6 from "../../public/images/person6.webp";

const habits: Habits[] = [
  {
    title: "Drink Water",
    emoji: "💧",
    subTitle: "500/2000 ML",
    peopleFollow: [Person1, Person4],
    completed: false,
  },
  {
    title: "Walk",
    emoji: "🚶‍♂️",
    subTitle: "10000/10000 Steps",
    peopleFollow: [Person2, Person4, Person3],
    completed: true,
  },
  {
    title: "Water Plans",
    emoji: "🌱",
    subTitle: "0/1 Times",
    peopleFollow: [Person5, Person3],
    completed: false,
  },
  {
    title: "Meditate",
    emoji: "🧘‍♂️",
    subTitle: "10/10 Min",
    peopleFollow: [Person6],
    completed: true,
  },
  {
    title: "Workout",
    emoji: "🏋️‍♂️",
    subTitle: "45/45 Min",
    peopleFollow: [Person2, Person3, Person4, Person5],
    completed: true,
  },
  {
    title: "Learn Python",
    emoji: "📔",
    subTitle: "120/120 Min",
    peopleFollow: [Person5],
    completed: false,
  },
];

export { habits };
