export default (state = null, action) => {
    //the first time this runs, state is undefined, so we set it defaulted to null for the first run
    
    switch (action.type) {
        case 'select_library':
            return action.payload;
            // record selected library.id that was clicked on
        default:
            return state;
            //return whatever state we returned last time
    }
};
//return the actions payload
