import { Fragment } from "react";
import { Link } from "react-router-dom";
import GreenButton from "../buttons/GreenButton";
import Subtitle from "../../shared/typography/SubHeading";

export default function PurchaseBundle(props) {
    return (
        <Fragment>
            <div className="bundle p-6 grid grid-cols-12 gap-6 shadow-lg">
                <div className="image col-span-3">
                    <figure>
                        <img src={props.img} alt="" className="w-full h-40 rounded-md" />
                    </figure>
                </div>

                {/* Details */}
                <div className="details col-span-6">
                    <Subtitle className="text-2xl font-bold">{props.title}</Subtitle>

                    <p className="base_thin py-4">
                        {props.details}
                    </p>

                    {props.progress === 100 ? (
                        <h3 className="base_normal">
                            Exam Progress (Completed)
                        </h3>
                    ) : (
                        <h3 className="base_normal">
                            Exam Progress
                        </h3>
                    )}

                    <div className="progress_bar flex items-center gap-2">
                        <progress className="progress progress-success h-1 w-full" value={props.progress} max="100"></progress>
                        <Subtitle className="text-[0.75rem] font-600">{props.progress + `%`}</Subtitle>
                    </div>
                </div>

                <div className="buttons col-span-3">
                    <Link to='/purchased-details-course'>
                        <GreenButton className="flex w-full max-w-[20rem] justify-center  items-center gap-1">Give Test
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7002 7.29023L9.70023 2.29023C9.52023 2.10023 9.27023 1.99023 8.99023 1.99023C8.44023 1.99023 7.99023 2.44023 7.99023 2.99023C7.99023 3.27023 8.10023 3.52023 8.28023 3.70023L11.5702 6.99023H1.99023C1.44023 6.99023 0.990234 7.44023 0.990234 7.99023C0.990234 8.54023 1.44023 8.99023 1.99023 8.99023H11.5802L8.29023 12.2802C8.11023 12.4602 8.00023 12.7102 8.00023 12.9902C8.00023 13.5402 8.45023 13.9902 9.00023 13.9902C9.28023 13.9902 9.53023 13.8802 9.71023 13.7002L14.7102 8.70023C14.8902 8.52023 15.0002 8.27023 15.0002 7.99023C15.0002 7.71023 14.8802 7.47023 14.7002 7.29023Z" fill="white" />
                            </svg>
                        </GreenButton>
                    </Link>
                </div>

            </div>
        </Fragment>
    )
}
