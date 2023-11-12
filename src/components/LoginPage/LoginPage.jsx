import { useState } from "react";
import "./loginpage.css"



export default function LoginPage() {
    // create new array to push user data
    const [users, setUsers] = useState([])
    console.log(users)
    // create user object
    const [newUser, setNewUser] = useState({
        id: 0,
        Username: '', 
        Password: '',
    })

    // set variable to emtpy state of input
    const [usernameInputValue, setUsernameInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    console.log(`The username is: ${usernameInputValue}`)
    console.log(`The password is: ${passwordInputValue}`)

    // handler to update state when input value changes
    const handleUsernameInputChange = (event) => {
        setUsernameInputValue(event.target.value)
    }

    const handlePasswordInputChange = (event) => {
        setPasswordInputValue(event.target.value)
    }


    // grab input value when button clicked
    function handleClick() {
        console.log('the button has been clicked!')
         let username = usernameInputValue
         let password = passwordInputValue
         console.log(`The username is: ${username} and the password is: ${password}`)
         setNewUser()
    }
   



    return (
        <section className="login-section">
            <h1>stock</h1>
            <div className="input-section">
                <h4>Log In to Stock</h4>
                <div className="input-group">
                    <label htmlFor="" className="input-group-title">Username</label>
                    <input value={usernameInputValue} type="text" onChange={handleUsernameInputChange}/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="" className="input-group-title">Password</label>
                    <input value={passwordInputValue} type="password" onChange={handlePasswordInputChange}/>
                </div>
                
                <button onClick={handleClick}>Log In</button>
            </div>
        </section>
    );
};