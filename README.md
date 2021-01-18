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
[ ] if logged in should we redirect to most recent deadline when clicking 'home'?
[ ] some sort of state for a reached deadline
[ ] probably add notes on using a library for time calculation because of days/months/years 




[X] modal
[X] add deadline
    [X] that name is already in use
    [X] form validation
    [X] use same modal, if it already exists adjust actions
[ ] edit deadline
[ ] deadline list
[ ] single deadline
[ ] countdown complete
[ ] react drag on deadline card
[ ] react drag on modal
[ ] alphabetize styles
[ ] add unit tests
[ ] some sort of neat background animation on router change
[ ] figure out alias! paths are so messy omg
[ ] transitions between views
[ ] classes -- go through and use ctdn__ with BEM
[ ] avoid nesting in styled components unless necessary
[ ] loading indicator
[ ] memos & callbacks
[X] back to top on deadline list
[ ] close modal on state change for deadline success?
[ ] move UI actions into UI state like modal and notifications
[ ] modal transition

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