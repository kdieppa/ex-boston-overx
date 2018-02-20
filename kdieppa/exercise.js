var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){
    var biggerSalaries = [];
    var dataLength = exercise.salaries.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax
        currentSal = Number(exercise.salaries[i][18]);
        compSal = (exercise.salary);
        if(Number(exercise.salaries[i][18]) > Number(exercise.salary)){
            biggerSalaries.push(Number(exercise.salaries[i][18]));
        }
}
    biggerSalaries.sort();
    return biggerSalaries
};

// filter function
exercise.largerSalary = function largerSalary(item){
    if(item>exercise.salary){
        return True
    }
    else{
        return False
    }

};