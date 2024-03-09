import { useState } from "react";
import { Signup } from "../components/Signup";
import signImg from '../assets/mobile-login-animate.svg'
import signTeach from '../assets/sign-up-animate.svg'


export const SignupPage = () => {
    const [isTeacher, setIsTeacher] = useState(false);

    const handleRadioChange = (event) => {
        setIsTeacher(event.target.value === "teacher");
    };

    return (
        <div className="flex flex-col justify-center h-dvh items-center">
            <div className="shadow-md rounded-md mt-5 w-[50rem]">
                <div className="flex justify-evenly p-5">
                    <div className="flex items-center">
                        <input
                            checked={!isTeacher}
                            onChange={handleRadioChange}
                            id="student"
                            type="radio"
                            value="student"
                            name="user-type"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="student"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Student
                        </label>
                    </div>
                    <div className="flex items-center ">
                        <input
                            checked={isTeacher}
                            onChange={handleRadioChange}
                            id="teacher"
                            type="radio"
                            value="teacher"
                            name="user-type"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="teacher"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Teacher
                        </label>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex">
                {isTeacher ? (
                    <Signup label={"Teacher"} svgg={signTeach} />
                ) : (
                    <Signup label={"Student"} svgg={signImg} />
                )}
            </div>
        </div>
    );
};
