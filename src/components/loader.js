import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoaderComponent(props) {
  if (props.showLoader) {
    return <CircularProgress color={props.color || 'primary'} size={props.size || 40} />
  } else {
    return null;
  }
}