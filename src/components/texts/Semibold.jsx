/* eslint-disable react/prop-types */


export default function Semibold({ children, rest }) {
    return (
        <span className={`text-natural  leading-6 font-lato  font-bold ${rest}`}>{children}</span>
    )
}
