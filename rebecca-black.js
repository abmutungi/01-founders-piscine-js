const isFriday = (day) => (new Date(day).getDay() === 5 ? true : false);
const isWeekend = (day) => (new Date(day).getDay() === 0 || new Date(day).getDay() === 6 ? true : false);
const isLeapYear = (year) => new Date(year).getFullYear() % 4 === 0 ? true : false;
function isLastDayOfMonth(date){
    var test = new Date(date.getTime()),
        month = test.getMonth();

    test.setDate(test.getDate() + 1);
    return test.getMonth() !== month;
}
console.log(isLastDayOfMonth(new Date("2020-02-29")));
