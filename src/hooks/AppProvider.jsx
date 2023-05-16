import React from 'react';
import AdditemsProvider from './useAdditems';

function AppProvider({ children }) {
  return (
    <AdditemsProvider>
    { children }
    </AdditemsProvider>
  )
}

export default AppProvider