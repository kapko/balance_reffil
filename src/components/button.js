import React from 'react';
import Button from '@material-ui/core/Button';
import LoaderComponent from './loader';

export default function ButtonComponent(props) {
  return <Button
    type={props.type}
    onClick={props.onClick}
    variant="contained"
    color={props.color || 'primary'}>{props.showLoader ?
      <LoaderComponent color="inherit" size={25}  showLoader={true} /> : props.text}</Button>
}