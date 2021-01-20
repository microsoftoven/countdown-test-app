# countdown-app

TODO
[ ] need action to clear notification state, also remember auto clear (timeout)
[ ] will I need to remove error from fetch_[]_errors?
[ ] should I be fetching the list again or just updating the data? probably just fetch the list
[ ] if we update a deadline on the single page, take the user back to /deadlines or swipe to next deadline...?
[ ] maybe add some sort of trigger that indicates to update single deadline if we're on the single deadline view?
[ ] accessibility!
[ ] error boundaries 
[ ] readme: include CD into other directories too. actually just do a fresh pull from github and create the instructions..
[ ] better define types
    https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/
[ ] provide default theme in case it doesn't load
[ ] rethink notification structure.. where t f should i put these???? constants?? idk
[ ] stack notifications. hmm. dispatch the creation of a notification?
[ ] or do we do silent notifications with movement and a 'new' indicator..
[ ] if time maybe do a little onboarding on 'get started'
[ ] clean up unused packages
[ ] probably add notes on using a library for time calculation because of days/months/years 




[ ] react drag on deadline card
[ ] react drag on modal
[ ] alphabetize styles
[ ] add unit tests
[ ] figure out alias! paths are so messy omg
[ ] memos & callbacks
[ ] what do I do with past deadlines? maybe show a checkmark or something, or click a button to view past deadlines
[ ] handle errors
[ ] delete deadline & redirect from single view
[ ] no deadline message on single/archive

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