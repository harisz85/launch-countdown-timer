const clock = () => {

    const end = new Date("October 1,2021, 00:00:00").getTime();  

    const date = new Date().getTime();

    const dif = end - date;  // 5,638,008,873 miliseconds


    const second = 1000 ;  // 1000 miliseconds
    const minute = second * 60;  // 60,000 miliseconds
    const hour = minute * 60 ; // 3,600,000 miliseconds
    const day = hour * 24 ;  // 86,400,000 miliseconds
    

    let TimeToDays = Math.floor(( dif  / day ));
    let TimeToHours = Math.floor((dif % day) / hour );
    let TimeToMinutes = Math.floor((dif % hour) / minute);
    let TimeToSeconds = Math.floor((dif % minute) / second);

    TimeToDays = TimeToDays < 10 ? "0" + TimeToDays : TimeToDays;
    TimeToHours = TimeToHours < 10 ? "0" + TimeToHours : TimeToHours;
    TimeToMinutes = TimeToMinutes < 10 ? "0" + TimeToMinutes : TimeToMinutes;
    TimeToSeconds = TimeToSeconds < 10 ? "0" + TimeToSeconds : TimeToSeconds;


    let days = document.getElementById("days");
    days.innerHTML = TimeToDays;


    let hours = document.getElementById("hours");
    hours.innerHTML = TimeToHours;

    let minutes = document.getElementById("minutes");
    minutes.innerHTML = TimeToMinutes;

    let seconds = document.getElementById("seconds");
    seconds.innerHTML = TimeToSeconds;

    if ( dif <= 0 ) {
        clearInterval(x);
        document.getElementById("launch").innerHTML = "Here We Go!!!"

    }



}

var x = setInterval( clock, 1000 );


