
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import otp from "../../assets/otp pic.png";


export default function VerifyWithOTP() {
    return (
        <section
            className="flex flex-col-reverse md:flex-row justify-content items-center max-w-7xl mx-auto shadow-md rounded-md p-2 mt-8">
            <div className="flex w-1/2 items-center justify-center">
                <img src={otp} alt="main-pic" className="w-3/4 h-auto" />
            </div>

            <div className="flex flex-col justify-start p-8 gap-6">

                <div className="flex flex-col items-center gap-1">
                    <div className="h-full">
                        <img src={logo} alt="logo" className="w-20 lg:w-32" />
                    </div>

                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl">Verify With OTP</h1>
                    <p className="text-xs lg:text-sm text-gray-400 text-center">To ensure your security. please enter the one-Time
                        password <br /> (OTP) sent to your registerd mobile number/email below
                    </p>
                </div>

                <form className="flex flex-col items-center gap-6">

                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-primary">Enter Your Verification Code</h1>
                    <div className="flex gap-4">
                        {/* 4-digit OTP */}
                        <input type="text" maxLength="1"
                            className="w-8 md:w-14 lg:w-20 h-12 text-center text-xl border-b-2 border-gray-400 focus:border-primary focus:outline-none" />
                        <input type="text" maxLength="1"
                            className="w-8 md:w-14 lg:w-20 h-12 text-center text-xl border-b-2 border-gray-400 focus:border-primary focus:outline-none" />
                        <input type="text" maxLength="1"
                            className="w-8 md:w-14 lg:w-20 h-12 text-center text-xl border-b-2 border-gray-400 focus:border-primary focus:outline-none" />
                        <input type="text" maxLength="1"
                            className="w-8 md:w-14 lg:w-20h-12 text-center text-xl border-b-2 border-gray-400 focus:border-primary focus:outline-none" />
                    </div>

                    <div className="w-full flex justify-between">
                        <p className="text-sm lg:text-md">Didn’t receive the OTP? Resend</p>
                        <a className="text-xs lg:text-sm font-bold text-primary">Resend </a>
                    </div>
                    <Link to={"/user/service"}>
                        <button className="w-48 bg-primary px-3 py-2 rounded text-white">Continue</button>
                    </Link>

                </form>
            </div>
        </section>

    )
}