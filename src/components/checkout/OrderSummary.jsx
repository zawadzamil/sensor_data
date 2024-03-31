import { Fragment } from "react";
import GreenButton from "../buttons/GreenButton";

export default function OrderSummary() {
    return (
        <Fragment>
            <div className="order_summary p-6 bg-natural_bg_green mt-6 h-fit">
                <h3 className="small_semibold border-b-2">Order Summary</h3>
                <div className="pricing mt-9 flex justify-between">
                    <h3 className="base_normal text-natural">Total :</h3>
                    <h3 className="base_normal text-natural">$ 690.00</h3>
                </div>
                <div className="mt-16">
                    <GreenButton className="h-fit text-md font-400">Proceed to Checkout</GreenButton>
                </div>
            </div>
        </Fragment>
    )
}
