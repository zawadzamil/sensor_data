import { Fragment } from "react";
import assets from "../../assets/asset";

export default function CartItem() {
    return (
        <Fragment>
            <div className="cart_items mt-6 px-5 py-4 flex justify-between border-[1px]">
                <div className="item flex" >
                    <div className="course_details flex justify-center gap-6 ">
                        <div className="image">
                            <img src={assets.course1} alt="Course" className="w-36 h-24 rounded-md" />
                        </div>
                        <div className="details">
                            <h2 className="base_normal">BCS Exam Prep for 2023</h2>
                            <p className="small_normal">By: Kevin Perry</p>
                        </div>
                    </div>
                </div>
                <div className="pricing flex items-center">
                    <h3 className="base_bold py-4 px-12">$345</h3>
                    <div className="icon px-4 py-2">
                        <img src={assets.trashIcon} alt="TrashIcon" className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
