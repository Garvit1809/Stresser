import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { registerRoute } from '../Utils/APIRoutes'

import "@fontsource/amita"

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
background-color: #131324;

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    color: white;
    text-transform: uppercase;
    font-family: "Amita", cursive; 
    letter-spacing: 1.8px;
  }
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
}
 
input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
}

button {
    background-color: #997af0;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.1);
        background-color: #4e0eff;
    }
    
    &:active{
        transform: scale(0.9);
        background-color: #4e0eff;
    }
}

span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
}
`;


const Register = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    useEffect(() => {
        if(localStorage.getItem('chat-app-user')) {
          navigate('/');
        }
      }, [navigate]);

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("password and confirm password should be same.", toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error("Username should be greater than 3 characters", toastOptions);
            return false;
        } else if (password.length < 3) {
            toast.error("Password should be equal or greater than 3 characters", toastOptions);
            return false;
        } else if (email==="") {
            toast.error("Email is required", toastOptions);
            return false;
        }
        return true;
    }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(handleValidation()){
        const { password, username, email } = values;
        const { data } = await axios.post(registerRoute, {
            username,email,password
        });
        if (data.status === false) {
            toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
            localStorage.setItem("chat-app-user", JSON.stringify(data.user));
            navigate("/setAvatar");
        }
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  return (
    <>
    <FormContainer>
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <h1>Stresser</h1>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <input
        type="password"
        name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create User</button>
        <span>Already have an account?  <Link to="/login">Login</Link></span>
      </form>
    </FormContainer>
    <ToastContainer/>
    </>
  );
};

export default Register;
