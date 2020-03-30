import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

// import './styles.scss';

interface ButtonInterface extends ButtonProps {
  option?: 'round' | 'square';
}

const ButtonComponent: React.FC<ButtonInterface> = (props: ButtonInterface) => {
  if (props.option === 'round') {
    return <Button shape="round" {...props}></Button>;
  }
  return <Button className={props.option === 'square' ? 'button--square' : 'button--normal'} {...props}></Button>;
};

export default ButtonComponent;
