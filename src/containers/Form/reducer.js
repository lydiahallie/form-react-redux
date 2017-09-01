const initialState = {
  name:"",
  email:"",
  message:""
}

const formReducer = (state = initialState, action) =>  {
  switch (action.type) {
    // case 'UPDATE_NAME'
    //case 'UPDATE_EMAIL'
    //case 'UPDATE_MESSAGE'
    default: {
      return state;
    }
  }
}

export default formReducer;
