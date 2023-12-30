/* eslint-disable react/prop-types */


export default function SmallTitle({ children, rest }) {
    return (
        <span className={`text-natural  leading-6 font-lato  font-600 ${rest}`}>{children}</span>
    )
}
