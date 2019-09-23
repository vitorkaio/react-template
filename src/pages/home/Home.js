import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'store/modules/user/actions';

import { Container } from './HomeStyled';

const Home = ({ userReducer, userRequest }) => {

  useEffect(() => {
    userRequest()
  }, [userRequest])

  const { load, fail, user } = userReducer

  return (
    <Container>
      {
        load
        ?
        <h3>Carregando...</h3>
        :
        <h3>{user.login}</h3>
      }
      <span>{fail ? 'Error' : null}</span>
    </Container>
  );
}


const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
