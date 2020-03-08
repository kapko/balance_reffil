import React from 'react';
import LoaderComponent from './loader';

export default function ImageComponent(props) {
  const [loader, setLoader] = React.useState(true);

  return <React.Fragment>
    <LoaderComponent size={60} showLoader={loader} />

    <img
      width={props.width ? `${props.width}px` : '80px'}
      height={props.height ? `${props.height}px` : '80px'}
      src={props.src}
      hidden={loader}
      onLoad={() => setLoader(false)}
      alt={props.alt || 'image'}/>

  </React.Fragment>
}