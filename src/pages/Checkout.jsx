import { Fragment } from "react";
import CartItem from "../components/cards/CartItem";

import GreenButton from "../components/buttons/GreenButton";

export default function Checkout() {
    return (
        <Fragment>
            <section className="myContainer mt-20">
                {/* Checkout List */}
                <div className="checkout_list">
                    <h2 className="large_bold">Checkout List</h2>
                    <div className="list mt-6">
                        <h3 className="base_bold px-2 py-4 border-b-2 w-fit">Cart items (2)</h3>

                        <div className="cart_section grid  grid-cols-4 lg:gap-8 gap-28  ">

                            <div className="cart col-span-3">
                                {/* Cart Items */}
                                <CartItem></CartItem>
                                <CartItem></CartItem>
                            </div>

                            {/* Order Summary */}
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
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
