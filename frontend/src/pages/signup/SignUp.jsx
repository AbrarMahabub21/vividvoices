import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
  return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
          sign up  
          <span className="text-black"> VividVoices</span>
            </h1>
        
        <form >
        <div> 
        <label className="label p-2">
            <span className="text-base label-text text-black">Full Name</span>
        </label>     
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
        </div>   
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-black">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                  </div> 

                  <div>
                      <label className="label"> 
                            <span className="text-base label-text text-black">Password</span>
                      </label>  
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />   
                  </div> 
                  <div>
                      <label className="label"> 
                            <span className="text-base label-text text-black">Confirm Password</span>
                      </label>  
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />   
                  </div>  

                  <GenderCheckBox />
                  
                  <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already Have an account?</a>
        <div>
          <button className="btn btn-block btn-sm mt-2 border bordder-slate-700">SignUp</button>
          </div>
        </form>
              
        </div>
      </div>
  )
}

export default SignUp




// SignUp page

/*import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
  return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
          sign up  
          <span className="text-black"> VividVoices</span>
            </h1>
        
        <form >
        <div> 
        <label className="label p-2">
            <span className="text-base label-text text-black">Full Name</span>
        </label>     
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
        </div>   
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-black">Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                  </div> 

                  <div>
                      <label className="label"> 
                            <span className="text-base label-text text-black">Password</span>
                      </label>  
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />   
                  </div> 
                  <div>
                      <label className="label"> 
                            <span className="text-base label-text text-black">Confirm Password</span>
                      </label>  
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />   
                  </div>  

                  <GenderCheckBox />
                  
                  <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already Have an account?</a>
        <div>
          <button className="btn btn-block btn-sm mt-2 border bordder-slate-700">SignUp</button>
          </div>
        </form>
              
        </div>
      </div>
  )
}

export default SignUp */