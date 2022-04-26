function reverseStr(str){
  var listOfChars = str.split('');
  var reversedListOfChar = listOfChars.reverse();
  var reversedString = reversedListOfChar.join('');
  return reversedString;
    // return str.split('').reverse().join('')
}
function isPalindrome(str){
    if (str==reverseStr(str)) {
        return true;
    }
    else{
        return false;
    }
} 
function convertDateToStr(date){
    var dateStr={day:'',month:'',year:''}
    if (date.day<10){
        dateStr.day='0'+date.day;
    }
    else{
        dateStr.day=date.day.toString();
    }
    if (date.month<10){
        dateStr.month='0'+date.month;
    }
    else{
        dateStr.month=date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr
}
function getAllDateFormats(date){
    var dateStr=convertDateToStr(date);
    var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year;
    var mmddyyyy=dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var yymmdd=dateStr.year.slice(-2)+dateStr.month+dateStr.day;
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,yymmdd];
}
var date={ day: 4, month: 9, year: 2020 };
console.log(getAllDateFormats(date));