
//Welcome student to School application

var studentName = prompt("Welcome to Matec Secondary School","what's your name");

//Ask readiness to grade score
if(studentName){

    var readyToGradeScore = confirm( studentName +"!, Are you ready to grade your score")

    if(readyToGradeScore){
        //Collect student score for Mathematics, physics and chemistry

        let mathsScore =prompt(studentName +"! input your maths score");

        let physicsScore  =prompt(studentName + "! input your physics score");

        let chemistryScore  =prompt(studentName + "! input your chemistry score");

        
        let numberisedMathsScore = +mathsScore;

        let numberisedPhysicsScore = +physicsScore;

        let numberisedChemistryScore= +chemistryScore;



        //Maths Score Remarks
        if(numberisedMathsScore >= 89 && numberisedMathsScore <=100){
            alert("Mathematics : Excellent")
        }
        else if(numberisedMathsScore >= 60 && numberisedMathsScore <=89){
            alert("Mathematics : Very Good")
        }
        else if(numberisedMathsScore >= 50 && numberisedMathsScore <=60){
            alert("Mathematics :  Good")
        }
        else if(numberisedMathsScore >= 40 && numberisedMathsScore <=50){
            alert("Mathematics :  Fair")
        }
        else if(numberisedMathsScore < 40){
            alert("Mathematics :  Poor")
        }

        //Ends

        //Physics Score Remarks
        if(numberisedPhysicsScore >= 89 && numberisedPhysicsScore <=100){
            alert("Physics : Excellent")
        }
        else if(numberisedPhysicsScore >= 60 && numberisedPhysicsScore <=89){
            alert("Physics : Very Good")
        }
        else if(numberisedPhysicsScore >= 50 && numberisedPhysicsScore <=60){
            alert("Physics :  Good")
        }
        else if(numberisedPhysicsScore >= 40 && numberisedPhysicsScore <=50){
            alert("Physics :  Fair")
        }
        else if(numberisedPhysicsScore < 40){
            alert("Physics :  Poor")
        }
        //Ends

        //Chemistry Score Remarks
        if(numberisedChemistryScore >= 89 && numberisedChemistryScore <=100){
            alert("Chemistry : Excellent")
        }
        else if(numberisedChemistryScore >= 60 && numberisedChemistryScore <=89){
            alert("Chemistry : Very Good")
        }
        else if(numberisedChemistryScore >= 50 && numberisedChemistryScore <=60){
            alert("Chemistry :  Good")
        }
        else if(numberisedChemistryScore >= 40 && numberisedChemistryScore <=50){
            alert("Chemistry :  Fair")
        }
        else if(numberisedChemistryScore < 40){
            alert("Chemistry :  Poor")
        }
        //Ends

        //Gets HighestScore
        if(numberisedMathsScore  > numberisedPhysicsScore){
                if(numberisedMathsScore > numberisedChemistryScore){
                    alert("Score  highest mark in Mathematics")
                }
                else{
                    alert("Score highest mark in Chemistry")
                }
        }
        else if((numberisedChemistryScore == numberisedMathsScore) && (numberisedMathsScore == numberisedPhysicsScore) && (numberisedChemistryScore == numberisedPhysicsScore)){
            alert("Score highest mark in Chemistry , Physics and  Maths")
        }
        else if(numberisedPhysicsScore == numberisedMathsScore ){
            alert("Score highest mark in Physics and  Maths")
        }

        else if(numberisedChemistryScore == numberisedMathsScore ){
            alert("Score highest mark in Chemistry and  Maths")
        }
        else if(numberisedChemistryScore == numberisedPhysicsScore ){
            alert("Score highest mark in Chemistry and  Physics")
        }
        else if(numberisedPhysicsScore > numberisedChemistryScore){
            alert("Score highest mark in Physics")
        }
        else{
            alert("Score highest mark in Chemistry")
        }

        alert(studentName  + "! Thanks for using our application")
    }
    else{
        alert("Application exited");
    }

}
else{
    alert("Application exited");
}


console