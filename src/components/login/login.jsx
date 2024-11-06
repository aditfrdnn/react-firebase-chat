import "./login.css";
const login = () => {
  return (
    <div className="login">
        <div className="item">
            <h2>Welcome Back</h2>
            <form>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="seperator"></div>
        <div className="item">
        <h2>Create an Account</h2>
            <form>
                <label htmlFor="file">Upload an Image</label>
                <input type="file" id="file" style={{display:"none"}}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Register</button>
            </form>
        </div>
    </div>
    
  )
}

export default login