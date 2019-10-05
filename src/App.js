import React from 'react';
import { withAuth } from './Auth';
import { Auth } from 'aws-amplify';

const signOut = async () => {
  await Auth.signOut();
};

const App = () => {
  return <p>Welcome to the App</p>;
};

export default withAuth(App);
