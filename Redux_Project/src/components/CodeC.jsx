import { useState ,useContext} from 'react'
import {UserContext} from '../App'

function CodeC() {
  const user = useContext(UserContext);
  return (
    <>

    <h1>{user.name}</h1>

    </>
  );
}

export default CodeC
