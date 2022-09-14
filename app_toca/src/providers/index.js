import { AreasProvider } from "./Areas";
import { CreateSessionProvider } from "./CreateSession";
import { PostProvider } from "./Posts";
import { UsersProvider } from "./Users";
import { MeetingsProvider } from "./Meetings";
import { CommentsProvider } from "./Comments";

export const Providers = ({ children }) => {
  return (
    <CreateSessionProvider>
      <UsersProvider>
        <AreasProvider>
          <PostProvider>
            <CommentsProvider>
              <MeetingsProvider>{children}</MeetingsProvider>
            </CommentsProvider>
          </PostProvider>
        </AreasProvider>
      </UsersProvider>
    </CreateSessionProvider>
  );
};
