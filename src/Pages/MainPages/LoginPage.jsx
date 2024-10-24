import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  const [error,setError]=useState(null);
  const { signInWithGoogle, signIn, signInWithFacebook, signInWithGithub, setUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {  email: '',password:'' }
});
  const handleNormalSignIn =async (form_data ) => {
    //e.preventDefault();  
    //alert(23);
    //const form = new FormData(e.currentTarget);

    const email = form_data.email;
    const password = form_data.password;
     
    try {
      const userCurr=await signIn(email, password); // Try to log in
     // console.log('first ccccc',userCurr.user.uid);
     //localStorage.setItem("uid", userCurr.user.uid);


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
      <Helmet>
    <title>Login Page</title>

    </Helmet>
      <div className="hero bg-base-200 mt-14 ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-64 md:w-[400px] xs:w-[17rem] xs:-ml-12 sm:w-[400px] lg:w-[500px] text-[green]    shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(handleNormalSignIn)}   >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" {...register("email", {
                                    required: "Email is Required"
                                })} placeholder="email" className="input input-bordered input-info w-full max-w-xs"   />
                <br/> {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password"   placeholder="password" className="input input-bordered 
                input-info w-full max-w-xs" {...register("password", {
                  required: "Password is Required"
              })} />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                </label>
                <br/> {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
                <br />
                <span className='text-[red] text-xs'>
                {
                  error? error : ""
                }

                </span>
               
              </div>
              <div className="form-control mt-6">

                <input type="submit" value="Login" className="text-[whitesmoke] bg-[darkcyan] font-bold w-32 md:ml-24 btn btn-primary" /> <br />
                

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