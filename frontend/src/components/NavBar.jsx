import PropTypes from 'prop-types'
import './nav-bar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = ({ page }) => {
    const navigate = useNavigate()

    const handelLogout = () => {
        try {
            const logoutEndpoint = 'http://localhost:3000/api/auth/logout'
            fetch(logoutEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                },
            }).then(res => {
                console.log(res.status)
                res.json()
            } ).then()
        }
        catch (error)
        {
            console.log(error)
        }
        
       navigate('/login') 
    }

    const handelTasks = () => {
        navigate('/Task')
    }
    const handelHome = () => {
        navigate('/home')
    }

    if (page === 'home') {
        return (
            <nav className="navbar">
                <div className="app-name" onClick={handelHome}>RapidTask</div>
                <div className="buttons">
                    <button className="login-button"><a href="/login">Login</a></button>
                    <button className="signup-button"><a href="/signup">Sign Up</a></button>
                </div>
            </nav>
        )
    }
    if (page === 'task') {
        return (
            <nav className="navbar">
                <div className="app-name" onClick={handelHome}>RapidTask</div>
                <div className="buttons">
                    <button className="logout-button" onClick={handelLogout}>Logout</button>
                    <button className="reset-password-button"><a href="/reset-password">Reset Password</a></button>
                </div>
            </nav>
        )
    }
    if (page === 'reset-password') {
        return (
            <nav className="navbar">
            <div className="app-name" onClick={handelHome}>RapidTask</div>
            <div className="buttons">
                <button className="tasks-button" onClick={handelTasks}>Tasks</button>
            </div>
            </nav>
        )
    }
        
}

NavBar.propTypes = {
    page: PropTypes.string,
}
export default NavBar