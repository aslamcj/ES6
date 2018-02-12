let student = {
  name: "Tony",
  courses: {
    english: {
      id: 1,
      score: 7
    },
    math: {
      id: 2,
      score: 9
    }
  },
  scoreRange: [0, 10]
};

let {
  courses: { english },
  scoreRange: [ minScore ]
 } = student;

console.log(english.id); // 1
console.log(english.score); // 7
console.log(minScore); // 0

