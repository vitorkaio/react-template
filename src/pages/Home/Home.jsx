import React, { useEffect } from 'react';

import { Container } from './HomeStyle';

const Home = () => {
  useEffect(() => {
    console.log('Home');
  }, []);

  return (
    <Container>
      <h4>Home</h4>
    </Container>
  );
};

export default Home;
