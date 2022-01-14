import React, { useState } from 'react';
import Alert from './Alert';
import { AlertProvider } from './AlertContext';
import UseCallbackLesson from './UseCallbackLesson';
import UseContextLesson from './UseContextLesson';
import UseEfectHook from './useEfectLesson';
import UseMemoLesson from './UseMemoLesson';
import UseRefLesson from './UseRefLesson';
import UseStateHook from './useStateLesson';

// export const AlertContext=React.createContext(false);

function Hook() {
  // const [alert,setAlert]=useState(false)

  // const toggleAlert=()=>{
  //   setAlert((prev)=>!prev)
  //   console.log(`alert: ${alert}`)
  // }

  return (
    // <AlertContext.Provider value={alert}>
    //   <UseContextLesson toggle={toggleAlert}/>
    //   <Alert />
    // </AlertContext.Provider>

    <AlertProvider>
      <Alert />
      <UseContextLesson />
    </AlertProvider>
  );
}

export default Hook;
