var now = new Date();

function getCurrentDay() {
    let getDay = document.getElementById('day');
    const weekDayName = [
        "sun",
        "mon",
        "tues",
        "wed",
        "thur",
        "fri",
        "sat"
    ]
    var currentDay = weekDayName[now.getDay()]
    getDay.textContent = currentDay
}

getCurrentDay()

function getCurrentTime() {
    let getHour = document.getElementById('hours');
    let getMinute = document.getElementById('mintues');
    let getSecond = document.getElementById('seconds');

    let hour = now.getHours()
    let min = now.getMinutes()
    let second = now.getSeconds()

    console.log(hour, min, second);
}
getCurrentTime()