// import logo from '../assets/newLogo.png'
import { Link } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


export const Signup = ({label, svgg}) => {

    // const [fullName, setFullName] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    return <div class="w-full flex bg-white rounded-lg shadow-md dark:border md:mt-0 sm:w-[50rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className='w-96 flex justify-center'>
                <img src={svgg} alt='jojo' />
            </div>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-96">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {label} SignUp
                </h1>

                <div 
                    class="space-y-4 md:space-y-6" 
                    
                >
                    <div>
                        <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input onChange={(e) => {
                            setFullName(e.target.value);
                        }} type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required="" />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input onChange={(e) => {
                            setUsername(e.target.value);
                        }} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@email.com" required="" />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={(e) => {
                            setPassword(e.target.value);
                        }} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    
                    <button onClick={() => {
                        // axios.post("http://localhost:3000/api/v1/student/signup", { 
                        //     fullName,
                        //     username,
                        //     password
                        // }).then((response) => {
                        //     localStorage.setItem("token", response.data.token)
                        //     // navigate("/dashboard");
                        // }).catch((error) => {
                        //     alert(error.response.data.message);
                        // })
                    }} type="button" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link class="font-medium text-primary-600 hover:underline dark:text-primary-500" to={"/signin"}>Login here</Link>
                    </p>
                </div>
            </div>
        </div>
}