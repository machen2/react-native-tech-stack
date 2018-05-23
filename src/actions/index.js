export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
}; 
// this function is called an action creator, the object with a type is the action
