function cleanLine(grades){
    return grade.trim().toUpperCase();
}

function getGrades(){
    //get grades from input
    const gradesElement = document.querySelector('#grades')
    //split grades on comma
    let grades = gradesElement.value.split(',');
    //clean up whitespaces
    grades = grades.map(cleanLine());
    //convert all grades to uppercase
    //return grade list
}

function gradeToPoints(grade){}

function caculateGpa(gpaPoints){
}

function outputGpa(){}

function caculateHandler(e){
    //get grades
    const grades = getGrades();
    const gpaPoints = grades.map(gradeToPoints);
    //caculate gpa
    const gpa = caculateGpa(gpaPoints)
    //output the gpa to browser
    outputGpa(gpa, '#output');
}

document.querySelector('#submitButton').addEventListener('click', caculateHandler)