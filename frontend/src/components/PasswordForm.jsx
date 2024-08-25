import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./NavBar";
import '../authForm.css'
import '../pages/home.css'
useNavigate

export default function PasswordForm() {
    let response
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()
    const handelSubmit = () => {
        
        try {
            if (password === confirmPassword) {
                const resetPasswordEndpoint = 'http://localhost:3000/api/auth/reset-password'
                fetch(resetPasswordEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': 'Bearer ' + localStorage.getItem('token')
                    },
                    body: JSON.stringify({password: password})
                }).then(res => {
                    res.json()
                    console.log(res.status)
                }).then(res => response = res )
               response.status === 200 ? toast.success('password changed successfully') : toast.error('An error has occured')
            }
            else {
                alert('the passwords are not matched')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='background-image'>
            <NavBar page={ 'reset-password' } />
            <div className="container">
            <form onSubmit={handelSubmit}>
                    <div className="form-group">
                    <label className="label">New password</label>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="enter new password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    </div>
                 <div className="form-group">  
                <label className="label">Confirm New password</label>
                    <input
                    type="password"
                    className="form-input"
                    placeholder="confirm new password"
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    /> 
                </div>    
                <button type="submit" className="change-btn">Change Password</button>
                <button type="button" className="cancel-btn" onClick={()=> navigate('/task')}>Cancel</button>
            </form>
            <ToastContainer/>
                </div>
            </div>   
        </>    
    )
}