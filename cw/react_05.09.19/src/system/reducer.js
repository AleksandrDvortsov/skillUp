import { combineReducers } from 'redux';

import favorite from '../components/pages/Favorite/reducer';
import photos from '../components/pages/Photos/reducer';

export default combineReducers({
    favorite,
    photos,
});







