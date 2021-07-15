import { createContext, useContext, useState } from 'react';

// import { Container } from './styles';

const ToogleContext = createContext();

function ToogleProvider({ children }) {
  const [estadoPai, setEstadoPai] = useState(false);
  const [estadoFilho, setEstadoFilho] = useState(false);

  const handleClickEstadoPai = () => {
    setEstadoPai(pState => !pState);
  }

  const handleClickEstadoFilho = () => {
    setEstadoFilho(pState => !pState);
  }

  return (
    <ToogleContext.Provider
      value={{
        estadoPai,
        estadoFilho,
        handleClickEstadoPai,
        handleClickEstadoFilho,
      }}
    >
      {children}
    </ToogleContext.Provider>
  );
}

function useToogle() {
  return useContext(ToogleContext);
}

export { ToogleProvider, useToogle };