import React from 'react';
import NumberFormat from 'react-number-format';

export default function BalanceComponent(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      format="####"
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
    />
  );
}