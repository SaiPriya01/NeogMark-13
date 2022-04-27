var dateInput=document.querySelector('#bday-input');
var showBtn=document.querySelector('#show-btn');
var outputEl=document.querySelector('#result');
function clickHandler(e){
    var bdayStr=dateInput.value;
    if (bdayStr!=''){
        var listOfDate=bdayStr.split('-');
        var date={
            day:Number(listOfDate[2]),
            month:Number(listOfDate[1]),
            year:Number(listOfDate[0]),
        }
        console.log(date.day,date.month,date.year);
        var isPalindrome=checkPalindromeForAllFormats(date);
        if(isPalindrome){
            outputEl.innerText='yay! your birthday is palindrome';
        }
        else{
            var [ctr,nextDate]=getNextPalindromeDate(date);
            outputEl.innerText=`The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days!` 
        }
    }
    else
    {
        outputEl.innerText='please enter your birthday to check'
    }
}
showBtn.addEventListener('click',clickHandler);


function reverseStr(str) {
    var listOfChars = str.split('');
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join('');
    return reversedString;
    // return str.split('').reverse().join('')
}

function isPalindrome(str) {
    if (str == reverseStr(str)) {
        return true;
    } else {
        return false;
    }
}

function convertDateToStr(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    }
    if (date.day < 10) {
        dateStr.day = '0' + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr
}

function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllFormats(date) {
    var listOfPalindromes = getAllDateFormats(date);
    var flag = false;
    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (isPalindrome(listOfPalindromes[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}
function isLeapYear(year){
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        return true;
    }
    return false;
}
function getNextDate(date){
    var day=date.day+1;
    var month=date.month;
    var year=date.year;
    var dayInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    if (month==2){
        if(isLeapYear(year)){
            if(day>29){
                day=1;
                month++;
            }
        }
        else{
            if (day>28){
                day=1;
                month++;
            }
        }
    }
    else{
        if(day>dayInMonth[month-1]){
            day=1;
            month++;
        }
    }
    if(month>12){
        month=1;
        year++;
    }
    return {day:day,month:month,year:year};
}
function getNextPalindromeDate(date){
    var ctr=0;
    var nextDate=getNextDate(date);
    while(1){
        ctr++;
        var isPalindrome=checkPalindromeForAllFormats(nextDate);
        if (isPalindrome){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [ctr,nextDate];
}
var date = {
    day: 31,
    month: 12,
    year: 2020
};
