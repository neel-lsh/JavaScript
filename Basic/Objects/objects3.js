const course = {
    courseName: "JavaScript",
    courseDuration: 3,
    courseLevel: "Intermediate",
}
const {courseDuration}=course; 
// Destructuring assignment
console.log(courseDuration); // 3
const {courseName:name} = course;
console.log(name); // JavaScript




