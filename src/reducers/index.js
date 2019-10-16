import pointsReducer from './points';
import {combineReducers} from 'redux';
import nameReducer from './names';

const allReducers = combineReducers(
    {
        points: pointsReducer,
        name: nameReducer
    }
);

export default allReducers;