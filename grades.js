let marks = prompt("Enter your marks:");
// Conditional statements
 if(marks >= 70)
 {
     console.log(`Your marks is ${marks} and your grade is A`);
 }
 else if(marks>=60)
 {
     console.log(`Your marks is ${marks} and your grade is B`);
 }
 else if(marks>=50)
 {
     console.log(`Your marks is ${marks} and your grade is C`)

 }
 else
     {
         console.log(`Your marks is ${marks} and you need to work hard.`)
     }

// switch case

 switch(true)
 {
     case marks >= 70:
         console.log(`Your marks is ${marks} and your grade is A`);
         break;
     case marks>=60:
         console.log(`Your marks is ${marks} and your grade is B`);
         break;
     case marks>=50:
         console.log(`Your marks is ${marks} and your grade is C`)
         break;
     default:
        console.log(`Your marks is ${marks} and you need to work hard.`)
    }

//Ternary operator
var grade = marks>= 70? `Your marks is ${marks} and your grade is A`:`Your marks is ${marks} and your grade is B`;
console.log(grade);