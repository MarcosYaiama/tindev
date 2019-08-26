import React from 'react';
import {YellowBox} from 'react-native';
// import Login from './pages/Login'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])
import Routes from './routes';

export default function App(){
  return (
    <Routes />
  ); 
}