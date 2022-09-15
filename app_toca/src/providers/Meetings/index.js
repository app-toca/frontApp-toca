import { createContext, useState } from "react";
import { api } from "../../services/api";
import { useContext } from "react";
import { CreateSessionContext } from "../CreateSession";

export const MeetingsContext = createContext();

export const MeetingsProvider = ({ children }) => {
  const [meetings, setMeetings] = useState([]);
  const { userToken } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const meetingsPerArea = (area_id) => {
    api
      .get(`/meetings/areas/${area_id}`, config)
      .then((res) => {
        setMeetings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createMeeting = (area_id, data) => {
    api
      .post(`/meetings/${area_id}`, data, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  const updateMeeting = (area_id, data) => {
    api
      .patch(`/meetings/${area_id}`, data, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };
  const deletemeeting = (area_id) => {
    api
      .delete(`/meetings/${area_id}`, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  return (
    <MeetingsContext.Provider
      value={{
        meetingsPerArea,
        createMeeting,
        updateMeeting,
        deletemeeting,
        meetings,
        setMeetings,
      }}
    >
      {children}
    </MeetingsContext.Provider>
  );
};
