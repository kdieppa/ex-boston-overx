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
    var dataLength = boston.data.length;
    for (var i = 0; i < dataLength; i++) {
        // update current salary
        // store in currentMax if it is greater than currentMax
        if(Number(boston.data[i][18]) > Number(salary.value)){
            biggerSalaries.push(Number(boston.data[i][18]));
        }
    

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
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
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

};