import React from 'react';
import '../App.css';
import Pools from '../components/pools/Pools';
import useAuth from '../hooks/useAuth';

const ActivePools = () => {
  const { login } = useAuth();

  return (
    <div className="App">
      <div className="gradient__bg">
        <Pools login={login} />
      </div>
    </div>

  );
};

export default ActivePools;
