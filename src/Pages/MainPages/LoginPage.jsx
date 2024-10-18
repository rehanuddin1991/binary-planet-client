import React, { useContext, useState } from 'react'
 
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';

const LoginPage = () => {
  const [error,setError]=useState(null);
  const { signInWithGoogle, signIn, signInWithFacebook, signInWithGithub, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleNormalSignIn =async (e) => {
    e.preventDefault();  
    //alert(23);
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    try {
      await signIn(email, password); // Try to log in
      navigate("/dashboard"); // If successful, navigate to dashboard
    } catch (err) {
      setError(err.message); // Set error message if login fails
      console.error(err.message);
    }

    // //console.log(email,password)
    // signIn(email, password)
    //   .then((res) => {
    //     //console.log(res)
    //     navigate('/dashboard');
    //   })
    //   .catch((err) => { setError(err.message) })


  }

  const handleGoogleSignIn = () => {

    signInWithGoogle().then((res) => {
      //console.log(res.user)

      if (res.user) {
        navigate("/dashboard")
      }

    })
      .catch((err) => { setError(err.message) })
  }

  const handleFacebookSignIn = () => {

    signInWithFacebook().then((res) => {
      //console.log(res.user)

      if (res.user) {
        navigate("/course")
      }

    })
      .catch((err) => { setError(err.message) })
  }


  const handleGithubSignIn = () => {

    signInWithGithub().then((res) => {
      //console.log(res.user)

      if (res.user) {
        Navigate("/course")
      }

    })
      .catch((err) => { setError(err.message) })
  }

  return (
    <div>
      <div className="hero bg-base-200  ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-64 md:w-[400px] sm:w-[400px] lg:w-[500px] text-[green]    shadow-2xl">
            <form className="card-body" onSubmit={handleNormalSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered input-info w-full max-w-xs" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered input-info w-full max-w-xs" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">

                <input type="submit" value="Login" className="text-[whitesmoke] bg-[darkcyan] font-bold w-32 md:ml-24 btn btn-primary" /> <br />
                <br />
                {
                  error? error : ""
                }

              </div>
            </form>
            {/* <button onClick={handleGoogleSignIn} className="btn btn-info">Login with Google</button> <br />
            <button onClick={handleFacebookSignIn} className="btn btn-success">Login with Facebook</button> <br />
            <button onClick={handleGithubSignIn} className="btn btn-primary">Login with Github</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage