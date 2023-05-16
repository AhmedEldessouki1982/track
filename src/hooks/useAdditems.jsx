import React from 'react';

const itemsContext = React.createContext();

const useAdditemsHandler = () => {
    console.log("inside add items context");
}

const value = {
    useAdditemsHandler,
}


function AdditemsProvider({ children }) {

  return (
    <itemsContext.Provider value = {value}>
    { children }
    </itemsContext.Provider>
  )
}


export const useAdditems = () => {
    return React.useContext(
        itemsContext
    )
}
export default AdditemsProvider;