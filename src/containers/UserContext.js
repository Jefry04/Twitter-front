import React, { useState } from 'react';

const UserContext = React.createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (user === null && localStorage.getItem('user')) {
  //     const storedUser = JSON.parse(localStorage.getItem('user'))
  //     setUser(storedUser)
  //   }
  // }, [user])

  // function updateUser(updatedUser) {
  //   localStorage.setItem('user', JSON.stringify(user))
  //   setUser(updatedUser)
  // }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

const UserConsumer = UserContext.Consumer;

export { UserConsumer };

export default UserContext;
