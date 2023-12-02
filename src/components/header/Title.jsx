import PropTypes from 'prop-types';

export default function Title(props) {
  return (
    <p className='flex font-title text-[1rem] leading-24 text-natural hover:opacity-75'>
        {props.title}
    </p>
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired  
} 
