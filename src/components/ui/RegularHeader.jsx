/* eslint-disable react/prop-types */
import { Fragment } from "react";
import Heading from "./headings/Heading";
import Navigation from "../shared/typography/Navigation";
import assets from "../../assets/asset";

export default function RegularHeader(props) {
    return (
        <Fragment>
            <section className="  bg-natural_bg_green">
                <div className="myContainer flex justify-between items-center">
                    <div className="title flex flex-col gap-4">
                        <div className="justify-start items-start gap-2.5 flex">
                            <div>
                                <Navigation link='/' text='Home /'> </Navigation>
                                <Navigation link={props.pageLink} text={props.page}>/ </Navigation>
                            </div>

                        </div>
                        <div >
                            <Heading text={props.title} style={`text-5xl text-natural`} ></Heading>
                        </div>
                    </div>
                    <div className="icon m-2">
                        <figure>
                            <img src={assets.Globe} alt="Globe" className=" w-[9.0625rem] h-[11.5rem]" />
                        </figure>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
