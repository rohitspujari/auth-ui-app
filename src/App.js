import React from 'react';
import { withAuth } from './Auth';
import { Auth } from 'aws-amplify';

const signOut = async () => {
  await Auth.signOut();
};

const App = () => {
  return <button onClick={signOut}>Sign Out</button>;
};

export default withAuth(App);
