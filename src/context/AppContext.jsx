import { createContext, useContext, useState } from 'react'; // Import necessary React hooks
import { useNavigate } from 'react-router-dom';               // Import useNavigate for navigation

export const AppContext = createContext();                    // Create a new context

export const AppContextProvider = ({ children }) => {         // Context Provider component to wrap the app
  const navigate = useNavigate();                             // Hook for programmatic navigation
  const [user, setUser] = useState(null);                     // State to hold user info
  const [IsSeller, setIsSeller] = useState(false);            // State to check if user is a seller
  const [showUserLogin, setShowUserLogin] = useState(false);
  const value = { navigate, user, setUser, setIsSeller, IsSeller,showUserLogin, setShowUserLogin}; // Object containing all global values

  return (
    <AppContext.Provider value={value}>                       {/* Provide context value to children */}
      {children}                                              {/* Render all nested components */}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);    // Custom hook to access context easily
