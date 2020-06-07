import React from 'react';
import PropTypes from "prop-types";

import './style.scss';

const Container = ({ children }) => {
  return (
    <div className="layout-container">
      <section className="container">
        { children }
      </section>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
};

export const withLayout = Page => props => (
  <Container>
    <Page {...props} />
  </Container>
);

export default Container
