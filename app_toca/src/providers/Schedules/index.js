import { useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { CreateSessionContext } from "../CreateSession";

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedulesReport, setSchedulesReport] = useState([]);

  const { userToken } = useContext(CreateSessionContext);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const getSchedulesReport = (area_id) => {
    api
      .get(`/schedules/${area_id}/report`, config)
      .then((res) => {
        setSchedulesReport(res.data);
      })
      .catch((err) => console.log(err));
  };


  return (
    <ScheduleContext.Provider
      value={{
        getSchedulesReport,
        schedulesReport
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
