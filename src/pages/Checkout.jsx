import { Fragment } from "react";
import CartItem from "../components/checkout/CartItem";
import OrderSummary from "../components/checkout/OrderSummary";


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
                            <OrderSummary></OrderSummary>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
