# countdown-app

TODO
[ ] readme: include CD into other directories too. actually just do a fresh pull from github and create the instructions..





[ ] add unit tests
[ ] figure out alias! paths are so messy omg
[ ] fetch loading status

IF TIME
[ ] shorturl
[ ] sharing

BUGS



notes on countdown code using dayjs
/*
    * Code below:
    * If we were only doing days, hours, minutes, and seconds...sure!
    * However, anything further than that is a WHOLE lot of logic that we can
    * simply use a library for, like yeap years.. different days in months.. etc. DayJS to the rescue!
    * You can uncomment this and comment out the duration logic with dayJS to test it out if you'd like.
    */
// let delta = difference;

// let days = Math.floor(delta / 86400);
// delta -= days * 86400;
// let hours = Math.floor(delta / 3600);
// delta -= hours * 3600;
// let minutes = Math.floor(delta / 60);
// delta -= minutes * 60;
// let seconds = delta;

// setRemainingTime({
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
// });