import React, { use } from 'react';
import Lottiereact from '../../assets/lottie/LottieLogIn.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const SignIn = () => {

    const { signInUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/';

    console.log('location in sign in page .', location)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // login user
        signInUser(email, password)
            .then(result => {
                console.log(result)
                alert('SignIn Successfully')
                navigate(from)

            })
            .catch(error => {
                console.log(error)
                alert('wrong information')
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen -mt-10">
            <div className="hero-content flex-col">

                <Lottie className='w-100' animationData={Lottiereact} loop={true}></Lottie>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl -mt-16">
                    <h1 className="text-5xl text-center font-bold px-8">LogIn now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div className='flex justify-center items-center w-full'>
                                <button className="btn btn-neutral w-full mt-4">LogIn</button>
                            </div>
                        </form>
                        <div className='  w-full text-center'>
                            <SocialLogin from={from}></SocialLogin>
                        </div>
                        <h2 className='mt-2 text-center'>Don't have an Account ! Please - <Link to={'/register'}><span className='text-blue-500 font-semibold'>Register</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;