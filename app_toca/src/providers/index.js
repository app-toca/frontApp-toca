import { CreateSessionProvider } from "./CreateSession";
import { UsersProvider } from "./Users";

export const Providers = ({ children }) => {
  return (
    <CreateSessionProvider>
      <UsersProvider>{children}</UsersProvider>
    </CreateSessionProvider>
  );
};
