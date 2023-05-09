import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption {
  icon: string;
  label: string;
  path: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOption: IDrawerOption[]) => void;
}

interface IDrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};

export const AppDrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleDrawerOptions = useCallback((newDrawerOption: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOption);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};
