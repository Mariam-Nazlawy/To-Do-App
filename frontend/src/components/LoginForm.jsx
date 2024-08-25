import { useNavigate } from 'react-router-dom'
import '../pages/home.css'
import './edit-task.css'



function LoginForm() {
    const endpoint = "http://localhost:3000/api/auth/login" 
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()
        const userData = new FormData(e.target)
        const payload = Object.fromEntries(userData)
        console.log(payload)
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            localStorage.setItem("token", data.token) 
            console.log(data.token);
            //const token = data.token
            navigate("/task")
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='background-image'>
            <div className='container'>
            <form onSubmit={submitForm}>
                <h2>Login to your account</h2>
                
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        className="form-input"
                        name="email"
                        type="text"
                        required
                    />
                </div>  
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        className="form-input"
                        name="password"
                        type="password"
                        required
                    />
                </div> 
                <div className="switch-link">
                    <p>Do not have an account? <a href="/signup">Sign Up</a></p> 
                </div>
                <button type='submit' className="form-button">
                    Login
                </button>
            </form>
            </div>
        </div>

    )
}


export default LoginForm