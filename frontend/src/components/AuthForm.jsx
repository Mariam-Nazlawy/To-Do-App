//import boot from'bootstrap' 
import PropTypes from 'prop-types'
//import axios from 'axios'


function AuthForm({ formType }) {
    const endpoint = formType === 'Login' ? "http://localhost:3000/api/auth/login" : "http://localhost:3000/api/auth/signup"
    
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
            console.log(data.token);
            //const token = data.token
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='container'>
            
            <form onSubmit={submitForm}>
                {formType === 'Login' ? <h2>Login to your account</h2> : <h2>Create New Account</h2>}
                
                <div className="form-group">
                    <label className="form-label" label>Email</label>
                    <input
                        className="form-input"
                        name="email"
                        type="text"
                        required
                    />
                </div>  
                <div className="form-group">
                    <label className="form-label" label>Password</label>
                    <input
                        className="form-input"
                        name="password"
                        type="password"
                        required
                    />
                </div> 
                <div className="switch-link">
                    {formType === 'Login' ? (
                    <p>Do not have an account? <a href="/signup">Sign Up</a></p>) :
                    (<p>Already have an account? <a href="/login">Login</a></p>)}
                </div>
                <button type='submit' className="form-button">
                    {formType}
                </button>
            </form>
        </div>

    )
}

// Define prop types
AuthForm.propTypes = {
  formType: PropTypes.oneOf(['Login', 'Signup']).isRequired
};
export default AuthForm