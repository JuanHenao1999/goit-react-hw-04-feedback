import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback } ) => {
    return <button onClick={options}>{onLeaveFeedback}</button>;
  }

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.func,
  onLeaveFeedback: PropTypes.string
};