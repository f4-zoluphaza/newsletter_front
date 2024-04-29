import React from 'react';

function Button(props) {
  const { title, onClick } = props;

  return <Button onClick={onClick}>{title || 'button'}</Button>;
}

export default Button;
