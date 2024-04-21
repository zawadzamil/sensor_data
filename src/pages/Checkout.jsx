import { Fragment } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/asset";
import MinimalCourseCard from "../components/cards/MinimalCourseCard";
import CartItem from "../components/checkout/CartItem";
import OrderSummary from "../components/checkout/OrderSummary";
import Title from "../components/texts/Title";


export default function Checkout() {
    return (
        <Fragment>
            <section className="myContainer mt-20 mb-20 ">
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

                {/* Suggested */}
                <div className="sugessted mt-20">
                    <h3 className="small_semibold text-lite_blue"> Suggested </h3>
                    <Title className="text-3xl mt-2">You might also like</Title>

                    <div className="cards mt-9">
                        <div className="grid grid-cols-4 gap-6">
                            <Link to='/course-details'>
                                <MinimalCourseCard
                                    title="BCS Exam Prep (2023 Edition)"
                                    img={assets.course1}
                                    price={`$` + `199.00`}
                                ></MinimalCourseCard>
                            </Link>

                            <Link to='/course-details'>
                                <MinimalCourseCard
                                    title="BCS Exam Prep (2023 Edition)"
                                    img={assets.course2}
                                    price={`$` + `199.00`}
                                ></MinimalCourseCard>
                            </Link>

                            <Link to='/course-details'>
                                <MinimalCourseCard
                                    title="BCS Exam Prep (2023 Edition)"
                                    img={assets.course3}
                                    price={`$` + `199.00`}
                                ></MinimalCourseCard>
                            </Link>


                            <Link to='/course-details'>
                                <MinimalCourseCard
                                    title="BCS Exam Prep (2023 Edition)"
                                    img={assets.course4}
                                    price={`$` + `199.00`}
                                ></MinimalCourseCard>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}
