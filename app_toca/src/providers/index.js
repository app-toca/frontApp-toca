import { CreateSessionProvider } from "./CreateSession";
import { PostProvider } from "./Posts";
import { UsersProvider } from "./Users";

export const Providers = ({ children }) => {
  return (
    <PostProvider>
      <CreateSessionProvider>
        <UsersProvider>{children}</UsersProvider>
      </CreateSessionProvider>
    </PostProvider>
  );
};
