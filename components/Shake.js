import React from "react"
import RNShake from 'react-native-shake';
 
export class ShakeComponent extends React.Component {
  componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      console.log("shaked")
    });
  }
 
  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }
}
export const Shake = ({children}) => {
  return (
    <RNShake onShake={() => console.log("shaked")}>
    {children}
    </RNShake>
  )
}