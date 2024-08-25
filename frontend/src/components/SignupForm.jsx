import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../pages/home.css'
import './edit-task.css'



function SignupForm() {
    const endpoint = "http://localhost:3000/api/auth/signup"
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
            const status = response.status;
            (status === 201 ? toast.success('signed up successfully') : toast.error('Signup Failed'))
            navigate('/login')
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='background-image'>
            <div className='container'>
            <form onSubmit={submitForm}>
                <h2>Create New Account</h2>
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
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
                <button type='submit' className="form-button">
                    Signup
                </button>
            </form>
            </div>
            <ToastContainer/>
        </div>

    )
}

export default SignupForm