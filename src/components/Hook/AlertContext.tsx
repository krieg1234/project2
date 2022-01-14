import React, { useContext, useState, useReducer } from 'react';

type State =
  | {
      visible: boolean;
      text: string;
    }
  | any; //ВОТ ЭТО ХУЕТА ТУТ БЫТЬ НЕ ДОЛЖНА!!!

type Action = {
  type: 'show' | 'hide';
  text?: string;
};

const AlertContext = React.createContext({
  visible: false,
  show: (text: string) => {},
  hide: () => {},
  text: '',
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'show':
      return { ...state, visible: true, text: action.text };
    case 'hide':
      return { ...state, visible: false };
    default:
      return state;
  }
};

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: '',
  });

  const show = (text: string) => dispatch({ type: 'show', text });
  const hide = () => dispatch({ type: 'hide' });

  return (
    <AlertContext.Provider
      value={{ visible: state.visible, show, hide, text: state.text }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
