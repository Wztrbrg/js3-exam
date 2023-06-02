import { createContext } from "react";

/*
Till för att lagra användaren så att rätt behörigheter ges
*/
const UserContext = createContext({
  user: {},
  setUser: () => {},
});

export { UserContext };
