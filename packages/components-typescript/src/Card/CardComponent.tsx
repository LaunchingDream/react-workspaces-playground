import React from 'react';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';
import './CardComponent.less';

const CardComponent: React.FC<CardProps> = ({ ...restProps }) => {
  return <Card {...restProps} />;
};

export default CardComponent;
