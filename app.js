
// Function to get and display the current day of the week
function getCurrentDay() {

    // Get the current date and time
    var now = new Date();

    // Get the element where the day will be displayed
    let getDay = document.getElementById('day');

    // Array of week day names
    const weekDayName = [
        "sun",    // Sunday
        "mon",    // Monday
        "tues",   // Tuesday
        "wed",    // Wednesday
        "thur",   // Thursday
        "fri",    // Friday
        "sat"     // Saturday
    ]

    // Get the current day index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    var currentDay = weekDayName[now.getDay()];

    // Update the text content of the 'day' element with the current day name
    getDay.textContent = currentDay;
}

// Call the function to display the current day
getCurrentDay();

// Function to get and display the current time
function getCurrentTime() {
    // Get the elements where the time will be displayed
    let getHour = document.getElementById('hours');
    let getMinute = document.getElementById('minutes');
    let getSecond = document.getElementById('seconds');
    

    // Get the current date and time
    var now = new Date();


    // current hours, minutes, and seconds
    let hour = now.getHours();
    let min = now.getMinutes();
    let second = now.getSeconds();

    // if hour is greater than 12 then subtract 12
    hour  = hour > 12 ? hour - 12 :hour;

    // Format the time to have leading zeros if needed
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    second = second < 10 ? '0' + second : second;


    // update hours, minutes, second
    getHour.textContent = hour;
    getMinute.textContent = min;
    getSecond.textContent = second;

    console.log(second);
    
}

// Call the getCurrentTime function every second to update the time display
setInterval(getCurrentTime, 1000);

// call to display the current time immediately when the page loads
getCurrentTime();
