import { AreasProvider } from "./Areas";
import { CreateSessionProvider } from "./CreateSession";
import { PostProvider } from "./Posts";
import { UsersProvider } from "./Users";
import { MeetingsProvider } from "./Meetings";
import { CommentsProvider } from "./Comments";
import { ScheduleProvider } from "./Schedules";

export const Providers = ({ children }) => {
  return (
    <CreateSessionProvider>
      <UsersProvider>
        <AreasProvider>
          <PostProvider>
            <CommentsProvider>
              <ScheduleProvider>
              <MeetingsProvider>{children}</MeetingsProvider>
              </ScheduleProvider>
            </CommentsProvider>
          </PostProvider>
        </AreasProvider>
      </UsersProvider>
    </CreateSessionProvider>
  );
};
