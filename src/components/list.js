import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// local files
import { data } from '../data';
import { listStyles } from '../styles/list.styles';
import { getProvider } from '../actions/provider.actions';
import { initProviders } from '../actions/providers.action';
import ItemComponent from './item';
import LoaderComponent from './loader';

function ListComponent(props) {
  const { providers } = props;
  const classes = listStyles();

  const fetchData = () => props.initProviders(data);

  const getProvider = val => {
    props.getProvider(val);
    props.showListEvent(false);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 100);
    return () => clearTimeout(timer);
  }, []);

  return <Grid item lg={12}>
    <Typography variant="h6" className={classes.title}>Refill balance</Typography>
    <div className={classes.demo}>

      <div className="loader"><LoaderComponent showLoader={providers.pending} /></div>

      <List className={classes.root}>
        {providers.items.map(item =>
          <ItemComponent key={item.title} getProvider={getProvider} item={item} />)
        }
      </List>
    </div>
  </Grid>
}

const mapState = ({ providers }) => ({
  providers
});

const mapDispatch = dispatch => ({
  getProvider: value => dispatch(getProvider(value)),
  initProviders: value => dispatch(initProviders(value))
});

export default connect(mapState, mapDispatch)(ListComponent);
