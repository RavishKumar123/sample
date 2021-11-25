import { combineReducers  } from 'redux';
import authReducer from '../reducers/Auth.Reducer';
import userReducer from '../reducers/User.Reducer';
import jobReducer from '../reducers/Jobs.Reducer';
import settingReducer from '../reducers/Setting.Reducer';

export default combineReducers({
    auth: authReducer,
    userReducer: userReducer,
    jobReducer: jobReducer,
    settingReducer: settingReducer
});
