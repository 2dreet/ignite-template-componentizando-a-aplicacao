import { createContext, useContext, useState } from "react";

interface GenerePayload {
  genereId: number;
  setGenereId(genereId: number): void;
}

const GenereContext = createContext<GenerePayload>({} as GenerePayload);

export function GenereProvider({children}: any) {
  const [genereId, setGenereId] = useState(0);
  return (
    <GenereContext.Provider value={{genereId, setGenereId}}>
      {children}
    </GenereContext.Provider>
  )  
}

export function useGenereContext(): GenerePayload  {
  const context = useContext(GenereContext);
  if (!context) {
    throw new Error('useGenereContext must be used within an GenereContext');
  }
  return context;
}