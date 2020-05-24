//tack 1
function Student(name, email){
    let _name = name;
    let _email = email;
    let _homeworkResults=[];
    this.getName = function(){
        return _name;
    }
    this.getEmail = function(){
        return _email;
    }
    this.addHomeworkResult = function(topic, success){
        _homeworkResults.push({
            'topic': topic,
            'success': success
        })
    }
    this.getHomeworkResult = function(){
        return _homeworkResults;
    }
} 

//tack 2
function FrontendLab(students, failedLimit){
    let _failedHomeworksLimit = failedLimit;
    //let _studentsList = students;
    let _studentsList = [];
    students.forEach(el => {
        let stud = new Student(el.name, el.email)
        _studentsList.push(stud);       
    });

    this.printStudentsList = function(){
        _studentsList.forEach( el => {
            console.log('Name: ' + el.getName()+', Email: ' + el.getEmail()); 
            console.log(el.getHomeworkResult());
        });      
    }

    this.addHomeworkResults = function(arg){
        const notFined = -1;
        arg.results.forEach(el => {
            let indexOfEmail= _studentsList.findIndex(item => item.getEmail() === el.email);
            if (indexOfEmail !== notFined) {
                _studentsList[indexOfEmail].addHomeworkResult(arg.topic, el.success);
            }
        });
    }

    this.printStudentsEligibleForTest = function(){
        _studentsList.forEach(el => {
            let homeworkResArray = el.getHomeworkResult();
            let falseResult = 0;
            homeworkResArray.forEach(item => {
                if(!item.success) {
                    falseResult++;
                }
            });
            if (falseResult<=_failedHomeworksLimit){
                console.log('Name: '+ el.getName() + ', Email: ' + el.getEmail());
            } 
        });
    }
}

// let FrontEnd = new FrontendLab(listOfStudents,0);

// FrontEnd.addHomeworkResults(homeworkResults[0]);
// FrontEnd.addHomeworkResults(homeworkResults[1]);
// FrontEnd.addHomeworkResults(homeworkResults[2]);
// FrontEnd.addHomeworkResults(homeworkResults[3]);
// FrontEnd.addHomeworkResults(homeworkResults[4]);

// FrontEnd.printStudentsList();
// FrontEnd.printStudentsEligibleForTest();

