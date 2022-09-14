import { CreateSessionProvider } from "./CreateSession";
import { PostProvider } from "./Posts";
import { UsersProvider } from "./Users";

export const Providers = ({ children }) => {
  return (
    <CreateSessionProvider>
      <UsersProvider>
        <PostProvider>
          {children}
        </PostProvider>
      </UsersProvider>
     </CreateSessionProvider>
  );
};
