/* eslint-disable react/prop-types */


export default function Title({children, ...rest}) {
  return (
   <span className={`font-bold font-lato text-[2.25rem] text-natural`}{...rest}>
    {children}
   </span>
  )
}
