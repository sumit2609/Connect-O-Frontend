export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START",
});

export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    //passing to reducer
    payload: user,
});

export const LoginFaliure = (error) =>({
    type:"LOGIN_FALIURE",
    //passing to reducer
    payload:error,
});

export const Follow = (userId)=>({
    type:"FOLLOW",
    payload: userId,
});

export const Unfollow = (userId)=>({
    type:"UNFOLLOW",
    payload: userId,
})

