import PropTypes from "prop-types";

export const Section = ({ title = "Section", children }) => {
return (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};