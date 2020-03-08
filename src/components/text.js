import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function TextComponent(props) {
  return <Typography align={props.align || 'left'} variant={props.tag || 'h4'} gutterBottom>{props.text}</Typography>
}