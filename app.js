function reverseStr(str) {
    var listOfChars = str.split("");
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join("");

    return reversedStr;
}

function isPalindrome(str) {
    var reverse = reverseStr(str);
    returnSt = reverse;
}

function convertDateToStr(date) {
    var dateStr = {day: '', month: '', year: ''};
        if(date.day < 10) {
            dateStr.day = "0" + date.day;
        }
        else {
            dateStr.day = date.day.toString();
        }

        if(date.month < 10) {
            dateStr.month = "0" + date.month;
        }
        else {
            dateStr.month = dateStr.month.toString();
        }

        dateStr.year = date.year.toString();

        return dateStr;
}


var date={
    day: 16,
    month: 5,
    year: 2020
}

console.log(convertDateToStr(date));