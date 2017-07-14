export const signInQuery = (email, password) => {
    return (
        {
            "query":"mutation SignInUser($email:String, $password:String){signin(email:$email,password:$password){token}}",
            "variables": {"email":email, "password":password}
        }
    )
};

export const signUpQuery = (email, password) => {
    return (
        {
            "query":"mutation SignUpUser($email:String, $password:String){signup(email:$email,password:$password){token}}",
            "variables": {"email":email, "password":password}
        }
    )
};
export const signOutQuery = () => {
    return (
        {
            "query":"mutation{signout{id email}}"
        }
    )
};

export const currentUserQuery = () => {
    return (
        {
            "query":"{currentUser{id email}}",
        }
    )
};
