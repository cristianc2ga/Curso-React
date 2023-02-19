import PropTypes from 'prop-types';
const HelloWorldApp = ({title, subTitle}) => {
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle}</p>
    </>
  )
}

export default HelloWorldApp

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired
}

HelloWorldApp.defaultProps = {
  title: 'no hay titulo'
}