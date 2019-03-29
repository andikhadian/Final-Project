window.onload = function() { 
    var answer = document.getElementById('answer');
    var clear = document.querySelector('.clear');
    var deleteButton = document.querySelector('.delete');
    var digits = document.querySelectorAll('.digit');
    var enter = document.querySelector('.enter');
    var digitsArray = []; 


    //Clear
    clear.addEventListener('click', function() {
        digitsArray = [];
        answer.innerHTML = '';
    });

    //input Digits
    digits.forEach(function(elem) {
        elem.addEventListener('click', function() {
            digitsArray.push(elem.innerHTML);
            answer.innerHTML = '';
            for (var i = 0; i < digitsArray.length; i++) {
                answer.innerHTML += digitsArray[i];
            }
        });
    });

    //enter
    enter.addEventListener('click', function() {
        try {
            var result = eval(answer.innerHTML);
            answer.innerHTML = result;
            digitsArray = [];
            digitsArray.push(result);
        } catch (error) {
            answer.innerHTML = error;
        }
    });

    //delete
    deleteButton.addEventListener('click', function() {
        if (digitsArray.length > 0) {
            digitsArray.splice(-1, 1);
            answer.innerHTML = '';
            for (var i = 0; i < digitsArray.length; i++) {
                answer.innerHTML += digitsArray[i];
            }
        }
    });
}




