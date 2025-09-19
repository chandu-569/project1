const SignIn = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-15 gap-5">
                <form action="" className="flex flex-col rounded-2xl gap-5  w-1/4 shadow-2xl shadow-purple-500 py-7 items-center">
                    <div>
                    <h1 className="items-center text-2xl font-semibold p-1.5">Sign in</h1>
                    </div>
                    <div>
                    <p className="items-center p-1.5">Access your account</p>
                    </div>
                    <div className="w-[90%]">
                    <h3>Email Adress</h3>
                    <input type="text" placeholder="sample@gmail.com" className="w-full p-3 border-1 rounded-2xl"/>
                    </div>
                    <div className="w-[90%]">
                    <h3>Password</h3>
                    <input type="text" placeholder="sample123" className="w-full p-3 border-1 rounded-2xl"/>
                    </div>
                    <div className="flex gap-48">
                    <div className="flex relative">
                    <input type="checkbox"/>&nbsp;<p>Remember me</p>
                    </div>
                    
                    <p className="text-blue-700">Forgot password?</p>
                    </div>
                    <button className="bg-blue-700 w-[90%] p-3 rounded-2xl">Sign In</button>
                    <div className="border-b-gray-100 border-1 w-[90%]"></div>
                    <div className="flex">
                    <p className="flex">Don't have an account?</p><p className="text-blue-700">Create one here</p>
                    </div>
                </form>
                
            </div>
        </div>
    )
}
export default SignIn;