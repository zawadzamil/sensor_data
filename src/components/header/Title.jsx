import PropTypes from 'prop-types';

export default function Title(props) {
  return (
    <p className='px-2 py-2 font-title leading-24 text-natural hover:opacity-75'>
        {props.title}
    </p>
  )
}

Title.propTypes = {
    title: PropTypes.string.isRequired  
} 
