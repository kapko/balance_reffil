import React from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// local files
import PhoneNumberComponent from './phone.number';
import BalanceComponent from './balance';
import TextComponent from './text';
import ImageComponent from './image';
import ButtonComponent from './button';
import SnackComponent from './snack';
import { snackTypes } from '../common/string.types';

function RefillComponent(props) {
  const {provider} = props;
  const [snack, setSnackValues] = React.useState({
    show: false,
    type: 'success',
    message: 'null',
    isErrorNumber: false,
  });

  const [values, setValues] = React.useState({
    phone: null,
    amount: null,
    showLoader: false
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ showLoader: true });

    setTimeout(() => {
      const isErrorNumber = Math.round((Math.random(1, 9) * (1, 9))) % 2;

      setSnackValues({
        show: true,
        isErrorNumber,
        type: isErrorNumber ? snackTypes.error : snackTypes.success,
        message: isErrorNumber ? 'Oops some error' : 'Uploaded successfully!',
      });

      setValues({ showLoader: false });

    }, 1000);
  }

  const hideSnack = () => {
    setSnackValues({ show: false });

    if (!snack.isErrorNumber) {
      props.showListEvent(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="refill">
      <SnackComponent
        hideSnack={hideSnack}
        show={snack.show}
        type={snack.type} message={snack.message} />

      <TextComponent align="center" text="Refill balance form" />

      <ImageComponent src={provider.image} />

      <TextComponent tag="h6" align="center" text={provider.title} />

      <FormControl className="input">
        <InputLabel htmlFor="formatted-text-mask-input">Phone number</InputLabel>
        <Input
          required
          value={values.phone}
          onChange={handleChange('phone')}
          id="formatted-text-mask-input"
          inputComponent={PhoneNumberComponent}
        />
      </FormControl>

      <TextField
        required
        className="input"
        label="Amount"
        value={values.numberformat}
        placeholder=""
        onChange={handleChange('amount')}
        id="formatted-numberformat-input"
        InputProps={{ inputComponent: BalanceComponent }}
      />

      <div className="button">
        <ButtonComponent showLoader={values.showLoader} type="submit" text="Submit" />
        <ButtonComponent onClick={() => props.showListEvent(true)} color="inherit" text="Cancel" />
      </div>

    </form>
  );
}

const mapState = ({ provider }) => ({
  provider
});

export default connect(mapState, null)(RefillComponent);
