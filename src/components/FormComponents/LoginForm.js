import "./FormComponents.css";

export default function LoginForm() {
  return (
    <>
      {/*=================  Login Form Section Start Here ================= */}
     
      <div className="react-login-page react-signup-page pt---120 pb---120">
        <div className="container">
          <div className="row">                            
            <div className="col-lg-12">
              <div className="login-right-form">
                <form>
                  <div className="login-top">
                    <h3>Login</h3>
                    <p>Don't have an account yet? <a href="signup.html">Sign up for free</a></p>
                  </div>
                  <p>
                    <label>Email</label>
                    <input placeholder="Email" type="email" id="email" name="email" />
                  </p>
                  <p>
                    <label>Password</label>
                    <input placeholder="Password" type="password" id="pass" name="pass" />
                  </p>
                  <div className="back-check-box">
                    <input type="checkbox" id="box-1" /> Remember me
                    <p>Forget password?</p>
                  </div>
                  <button type="submit" id="button" name="submit">LogIn <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></button>
                  <span className="back-or"> ........ or Login with ........ </span>
                  <ul className="social-links">
                    <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                    <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                  </ul>                                        
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Login Form Section End Here ================= */}
    </>
  );
}
