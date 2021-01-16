# countdown-app

TODO
[ ] better define my types with actual properties
[ ] look at TS example to reduce the # of action imports
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
[ ] login modal?
[ ] will probably need action reducer
[ ] provide default theme in case it doesn't load
[ ] rethink notification structure.. where t f should i put these???? constants?? idk
[ ] stack notifications. hmm. dispatch the creation of a notification?
[ ] or do we do silent notifications with movement and a 'new' indicator..
[ ] if time maybe do a little onboarding on 'get started'
[ ] clean up unused packages
[ ] if logged in should we redirect to most recent deadline when clicking 'home'?
[ ] some sort of state for a  reached deadline
[ ] probably add notes on using a library for time calculation because of days/months/years 




[X] modal
[ ] add / edit deadline
    [ ] that name is already in use
    [ ] form validation
    [ ] use same modal, if it already exists adjust actions
[ ] deadline list
[ ] single deadline