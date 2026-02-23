import API from "../api/movieApi"

export const Showmovies=(()=>{
    return async(dispatch)=>{
        const res = await API.get("?s=Batman&apikey=ec605895")
        dispatch({
            type:"SET_MOVIE",
             payload: res.data.Search 
        })
    }
})
export const loginUser = (data) => {
  return (dispatch) => {

    const fixedEmail = "admin@gmail.com";
    const fixedPassword = "123456";

    if (data.email === fixedEmail && data.password === fixedPassword) {
      
      const user = {
        email: fixedEmail,
        password: fixedPassword
      };
      dispatch({ type: "LOGIN", payload: user });

    } else {
      alert("Invalid");
    }
  }
}
