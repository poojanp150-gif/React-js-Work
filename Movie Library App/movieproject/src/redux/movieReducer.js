const initialState={
    movies:[],
      users: null
}

const CreateReducerMovie=((state=initialState,action)=>{
        switch (action.type) {
            case "SET_MOVIE":
            return{
                ...state,
                movies:action.payload
            } 
             case "LOGIN":
            return { ...state, user: action.payload };

        case "LOGOUT":
            return { ...state, user: null };   

            default:
               return state
        }
})

export default CreateReducerMovie