export const signInQuery = (email, password) => {
    return (
        {
            "query":"mutation LoginUser($email:String, $password:String){login(email:$email,password:$password){token}}",
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

export const currentUserQuery = () => {
    return (
        {
            "query":"{currentUser{id email}}",
        }
    )
};
