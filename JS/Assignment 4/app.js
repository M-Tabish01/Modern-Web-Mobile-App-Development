// PART # 1  array

//  Question #1    Print the first color


// var colors = ["Red", "Blue", "Green", "Yellow"];
// console.log(colors[0]);


// Question # 2    Print the last color.


// var colors = ["Red", "Blue", "Green", "Yellow"];
// console.log(colors[colors.length-1]);

// Question # 3    Change "Blue" to "Black".


// var colors = ["Red", "Blue", "Green", "Yellow"];
// colors[1] = "Black";

// Question # 4    Print the updated array.


// console.log(colors);



// PART # 2 object

// Question # 1   Print the student's name

// var student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// console.log(student.name);



// Question # 2   Print the city

//     var student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// console.log(student.city);

// Question # 3    Change the city to "Lahore".

// var student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// student.city = "Lahore"

// Question # 4     Print the updated Object

// console.log(student);


// PART # 3

// Question # 1     Print Ali's marks.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// console.log(students[0].name);


// Question # 2    Print Ahmed's attendance.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// console.log(students[1].atten);


// Question # 3        Change Zubair's marks to 95.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// students[2].marks = 95;


// // Question # 4    Change Ahmed's attendance to true.

// students[1].atten = true;


// Question # 5 Print the updated Array

// console.log(students);


// PART #  4

// Question # 1        Print all student names using a for loop.


// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// for(var i = 0; i < students.length;i++){
//     console.log(students[i].name);

// }


// Question # 2        Print all student marks using a for loop.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

//  for(var i = 0; i < students.length;i++){
//     console.log(students[i].marks);

// }


// Question # 3        Print all student details in this format:
// Ali - 70 - true
// Ahmed - 50 - false
// Zubair - 95 - true


// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i].name + " - " + students[i].marks + " - " + students[i].atten);

// }


// PART # BONUS


// Question # 1        Find the total marks of all students.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// var total = 0;
// for(var i = 0 ; i< students.length;i++){
//     total += students[i].marks

// }
// console.log(total);


// QUESTION # 2    Find the average marks.

// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// var total = 0;
// for(var i = 0 ; i< students.length;i++){
//     total += students[i].marks;

// }
// total = total / students.length;
// console.log(total);


// QUESTION # 3    Increase every student's marks by 5.


// var students = [
//     {
//         name: "Ali",
//         marks: 70,
//         atten: true
//     },
//     {
//         name: "Ahmed",
//         marks: 50,
//         atten: false
//     },
//     {
//         name: "Zubair",
//         marks: 90,
//         atten: true
//     }
// ];

// for(var i = 0; i < students.length; i ++){
//     students[i].marks += 5;

// QUESTION # 4 Print the updated array 

//     console.log(students[i].marks);
// }
