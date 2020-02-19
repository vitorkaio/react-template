import React, { useEffect, useState } from 'react';

import { Container } from './HomeStyle';

const Home = () => {
  const [name, setName] = useState('amenda');

  useEffect(() => {
    console.log(name);
    setName('Verdana');
  }, [name]);

  return (
    <Container>
      <h4>Home</h4>
    </Container>
  );
};

export default Home;
