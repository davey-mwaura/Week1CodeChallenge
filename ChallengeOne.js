function CheckGrade(marks){

console.log("Your Grade is :")

// Grade A
if (marks > 79){
    console.log("A")
}

// Grade B
else if (marks >= 60){
    console.log("B")
}

// Grade C
else if (marks >= 49){
    console.log("C")
}

// Grade D
else if (marks >= 40){
    console.log("D")
}

// Grade E
else if(marks < 40){
    console.log("E")
}

}

// Enter marks to get Grade.
CheckGrade(79)