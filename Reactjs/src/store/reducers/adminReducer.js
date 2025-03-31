import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  isLoadingPosition: false,
  isLoadingRole: false,
  genders: [],
  roles: [],
  positions: [],

  users: [],
  topDoctors: [],
  allDoctors: [],
  allScheduleTime: [],
  allRequiredDoctorInfor: [],
};

const adminReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    // gender
    case actionTypes.FETCH_GENDER_START:
      copyState.isLoadingGender = true;
      console.log("fire fetch gender start: ", action);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      copyState.genders = action.data;
      copyState.isLoadingGender = false;
      console.log("fire fetch gender success: ", copyState);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      copyState.isLoadingGender = false;
      copyState.genders = [];
      return {
        ...copyState,
      };

    // position
    case actionTypes.FETCH_POSITION_START:
      copyState.isLoadingPosition = true;
      console.log("fire fetch position start: ", action);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      copyState.positions = action.data;
      copyState.isLoadingPosition = false;
      console.log("fire fetch position success: ", copyState);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      copyState.isLoadingPosition = false;
      copyState.positions = [];
      return {
        ...copyState,
      };

    // role
    case actionTypes.FETCH_ROLE_START:
      copyState.isLoadingRole = true;
      console.log("fire fetch role start: ", action);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      copyState.roles = action.data;
      copyState.isLoadingRole = false;
      console.log("fire fetch role success: ", copyState);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      copyState.isLoadingRole = false;
      copyState.roles = [];
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ALL_USERS_SUCCESS:
      state.users = action.users;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USERS_FAILED:
      state.users = [];
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
      state.topDoctors = action.dataDoctors;
      return {
        ...state,
      };
    case actionTypes.FETCH_TOP_DOCTORS_FAILED:
      state.topDoctors = [];
      return {
        ...state,
      };
    // action get all doctors
    case actionTypes.FETCH_ALL_DOCTORS_SUCCESS:
      state.allDoctors = action.dataDoctors;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_DOCTORS_FAILED:
      state.allDoctors = [];
      return {
        ...state,
      };

    // action get schedule doctor
    case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS:
      state.allScheduleTime = action.dataTime;
      return {
        ...state,
      };
    case actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED:
      state.allScheduleTime = [];
      return {
        ...state,
      };

    // action get required doctor infor
    case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS:
      state.allRequiredDoctorInfor = action.data;
      return {
        ...state,
      };
    case actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED:
      state.allRequiredDoctorInfor = [];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
