const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
};

sections:[
    { 
        sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'},
    { 
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
    }
]

enrollStudent: function(sectionNum){
    const section = sections.find(
        (section) => section.sectionNum ==sectionNum
    );
}

function setNameAndNum(course){
    const nameEl = document.querySelector('#courseName');
    const codeEl = document.querySelector('#courseCode');
    nameEl.textContent = course.name;
    codeEl.textContent = course.code;
}

function renderSection(section){
    const sectionEl = document.querySelector('#sections')
}

setNameAndNum(aCourse);