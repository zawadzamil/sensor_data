import { Fragment } from "react";
import { Link } from "react-router-dom";
import GreenButton from "../buttons/GreenButton";
import WhiteButton from "../buttons/WhiteButton";
import Subtitle from "../texts/Subtitle";

export default function Test(props) {
    return (
        <Fragment>
            <div className="test px-6 py-5 shadow-sm">
                {/* Test Info */}
                <div className="test_info flex justify-between">
                    <div className="title w-[60%] ">
                        <div className="flex gap-6 items-center">
                            <div className="icon h-6 w-6">
                                {props.complete ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#429777" />
                                </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M10 16.5L16 12L10 7.5V16.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#474D66" />
                                    </svg>}

                            </div>
                            {/* Image */}
                            <div className="image w-[4.5rem] h-12">
                                <figure>
                                    <img src={props.img} alt={props.title} className="w-full h-full object-cover" />
                                </figure>
                            </div>

                            {/* Title */}
                            {props.complete ? <Subtitle className="text-lg font-bold">{props.title}</Subtitle>
                                : <Subtitle className="text-[1rem] font-semibold">{props.title}</Subtitle>}
                        </div>
                    </div>

                    <div className="buttons flex">
                        {props.complete ?
                            <span className="flex">
                                <Link to='/result'>
                                    <a className="base-normal text-title_green px-6 py-3 underline" >View Answers</a>
                                </Link>

                                <Link to='/test'>
                                    <WhiteButton className="logo_in_btn text-md font-600 tracking-[.5px]" >Retake Exam
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7 7.29023L9.69999 2.29023C9.51999 2.10023 9.26999 1.99023 8.98999 1.99023C8.43999 1.99023 7.98999 2.44023 7.98999 2.99023C7.98999 3.27023 8.09999 3.52023 8.27999 3.70023L11.57 6.99023H1.98999C1.43999 6.99023 0.98999 7.44023 0.98999 7.99023C0.98999 8.54023 1.43999 8.99023 1.98999 8.99023H11.58L8.28999 12.2802C8.10999 12.4602 7.99999 12.7102 7.99999 12.9902C7.99999 13.5402 8.44999 13.9902 8.99999 13.9902C9.27999 13.9902 9.52999 13.8802 9.70999 13.7002L14.71 8.70023C14.89 8.52023 15 8.27023 15 7.99023C15 7.71023 14.88 7.47023 14.7 7.29023Z" fill="#52BD94" />
                                        </svg>
                                    </WhiteButton>
                                </Link>
                            </span>
                            :
                            <Link to='/test'>
                                <GreenButton className="logo_in_btn"  >Give Exam
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7 7.29023L9.69999 2.29023C9.51999 2.10023 9.26999 1.99023 8.98999 1.99023C8.43999 1.99023 7.98999 2.44023 7.98999 2.99023C7.98999 3.27023 8.09999 3.52023 8.27999 3.70023L11.57 6.99023H1.98999C1.43999 6.99023 0.98999 7.44023 0.98999 7.99023C0.98999 8.54023 1.43999 8.99023 1.98999 8.99023H11.58L8.28999 12.2802C8.10999 12.4602 7.99999 12.7102 7.99999 12.9902C7.99999 13.5402 8.44999 13.9902 8.99999 13.9902C9.27999 13.9902 9.52999 13.8802 9.70999 13.7002L14.71 8.70023C14.89 8.52023 15 8.27023 15 7.99023C15 7.71023 14.88 7.47023 14.7 7.29023Z" fill="white" />
                                    </svg>
                                </GreenButton>
                            </Link>
                        }
                    </div>
                </div>

                {/* Test Detailed Info */}
                <div className="detiled_info mt-10">
                    <ul className=" flex self-stretch justify-between">
                        <li className="border-e-2 pr-2">
                            <span className="base-normal text-fade_blue">Total Questions : </span>
                            <span className="base_semibold text-natural ms-1">{props.totalQuestions || 0}</span>
                        </li>

                        <li className="border-e-2 pr-2">
                            <span className="base-normal text-fade_blue">Total Available Points :</span>
                            <span className="base_semibold text-natural ms-1">{props.totalPoints || 0}</span>
                        </li>

                        {props.complete ? <li className="border-e-2 pr-2">
                            <span className="base-normal text-fade_blue">Earned Points :</span>
                            <span className="base_semibold text-title_green ms-1">{props.totalPoints || 0}</span>
                        </li> : ""}

                        {props.complete ? <li className="border-e-2 pr-2">
                            <span className="base-normal text-fade_blue">No of Attempts :</span>
                            <span className="base_semibold text-red_base ms-1">{props.attampts || 0}</span>
                        </li> : ""}

                        {props.complete ? <li className="">
                            <span className="base-normal text-fade_blue">Exam Duration:</span>
                            <span className="base_semibold text-blue-600 ms-1">{props.duration || 0}</span>
                        </li> : ""}

                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
