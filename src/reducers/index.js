import { combineReducers } from 'redux';

// Reducer: Static list of songs
// It will never change so no args are needed
// It's overkill to make a reducer for a static array
const songsReducer = () => {
  // fixed value always returned unchanged
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'Macarena', duration: '2:30'},
    { title: 'All star', duration: '3:26'},
    { title: 'I want it that way', duration: '5.45'}
  ];
}

// Takes an action and changes the data store accordingly
// If a SONG_SELECTED action is created, the selected song must change
// '=null' is added to give a default value to the selectedSong before one is selected
const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    // return the new value of the variable
    return action.payload
  }
  // otherwise the variable is returned unchanged
  return selectedSong;
}

// RHS: the keys that are inside the state object, i.e. variable state names
// LHS: reducer names that correspond
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})