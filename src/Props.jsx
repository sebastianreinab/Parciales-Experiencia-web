import PropTypes from 'prop-types';

const Props = ({title, sum}) => {

    return(
        <>
            <h1>{title}</h1>
            <h2>{sum}</h2>
        </>
    )
}

Props.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

Props.defaultProps = {
    title: "no hay titulo",
    sum: 300
}

export default Props;