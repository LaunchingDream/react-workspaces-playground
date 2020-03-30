import React from 'react';
import { Form } from 'antd';

const FormComponent: React.FC<Form> = ({ ...restProps }) => {
  return <Form {...restProps} />;
};

export default FormComponent;
