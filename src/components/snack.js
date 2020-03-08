import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function SnackComponent(props) {
  const [open, setOpen] = React.useState(props.show);
  const hideSnack = () => {
    setOpen(false);
    props.hideSnack();
  };

  useEffect(() => {
    setOpen(props.show);
  }, [props.show]);

  return <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <MuiAlert
      onClose={hideSnack}
      severity={props.type}
      elevation={6}
      variant="filled">{props.message}</MuiAlert>
  </Snackbar>

}
