import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {

  state = {
      authenticated: false,
      loading: true
  }

  componentDidMount(){
      fetch(`/auth/isauthenticated`)
          .then(res => {
              if(res.status === 200){
                  this.setState({authenticated: true, loading: false});
              }else if(res.status === 401){
                  this.setState({authenticated: false, loading: false});
              }
          });
  }

  render() {
      // eslint-disable-next-line react/prop-types
      const { component: Component, ...props } = this.props;
      if(this.state.loading){
          return null;
      }else{
          return (
              <Route 
                  {...props} 
                  render={props => (
                      this.state.authenticated ?
                          <Component {...props} /> :
                          <Redirect to='/auth/login' />
                  )} 
              />
          );
      }
  }
}

export default ProtectedRoute;
