import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledRegularButton, StyledInlineButton } from './Button.css';

const Button = ({ primary, type, children, ...props }) => {
  const { to } = props;
  const Component = useMemo(() => {
    switch (type) {
      case 'inline':
        return StyledInlineButton;

      case 'regular':
        return StyledRegularButton;

      default:
        return StyledRegularButton;
    }
  });
  const content = (
    <Component primary={primary} {...props}>
      {children}
    </Component>
  );

  return to ? (
    <Link {...props}>
      {content}
    </Link>
  ) : (
    <Fragment>
      {content}
    </Fragment>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['inline', 'regular']).isRequired,
};

export default Button;
