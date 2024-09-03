import React, { Fragment } from 'react'
import GreenButton from '../ui/buttons/GreenButton'
import Subtitle from '../shared/typography/SubHeading'
import Title from '../shared/typography/Title'

export default function CustomerLogin() {
    return (
        <Fragment>
            <section className="bg-gray-50 login-section ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Title className={'text-3xl font-bold'}>Welcome Back!</Title>
                    <Subtitle className='text-center mt-4'>
                        ModelTest gives you the resources and tests you need to prepare for your exams.
                    </Subtitle>
                    <div className="w-full bg-white rounded-lg ">
                        <div className="mt-6">
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium ">Phone Number</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-3  " placeholder="+880xxxxxxxxxx" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-title_green hover:underline ">forgot password?</a>
                                </div>
                                <GreenButton className='w-full'>Login</GreenButton>
                                <p className="text-sm font-light text-natural">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
