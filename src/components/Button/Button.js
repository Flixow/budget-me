import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledRegularButton, StyledInlineButton } from './Button.css';

const Button = ({ primary, variant, children, ...props }) => {
  const { to } = props;
  const Component = useMemo(() => {
    switch (variant) {
      case 'inline':
        return StyledInlineButton;

      case 'regular':
        return StyledRegularButton;

      default:
        return StyledRegularButton;
    }
  }, [variant]);
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
  variant: PropTypes.oneOf(['inline', 'regular']).isRequired,
};

export default Button;
