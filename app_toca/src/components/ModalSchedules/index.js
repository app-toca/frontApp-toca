import { useContext, useEffect } from "react";
import { ScheduleContext } from "../../providers/Schedules";
import { Celula, Centered, Column, Container } from "./syles";

const ModalSchedule = ({ area_id }) => {
  const { getSchedulesReport, schedulesReport } = useContext(ScheduleContext);

  useEffect(() => {
    getSchedulesReport(area_id);
  }, []);

  const hours = [
    { "9:00": 0 },
    { "10:00": 0 },
    { "11:00": 0 },
    { "12:00": 0 },
    { "13:00": 0 },
    { "14:00": 0 },
    { "15:00": 0 },
    { "16:00": 0 },
    { "17:00": 0 },
    { "18:00": 0 },
    { "19:00": 0 },
    { "20:00": 0 },
    { "21:00": 0 },
    { "22:00": 0 },
    { "23:00": 0 },
  ];
  const days = [
    { 0: "Dom" },
    { 1: "Seg" },
    { 2: "Ter" },
    { 3: "Qua" },
    { 4: "Qui" },
    { 5: "Sex" },
    { 6: "Sab" },
  ];

  return (
    <Container>
      <Centered>
        <Column>
          <Celula>Hours</Celula>
          <Celula>9:00</Celula>
          <Celula>10:00</Celula>
          <Celula>11:00</Celula>
          <Celula>12:00</Celula>
          <Celula>13:00</Celula>
          <Celula>14:00</Celula>
          <Celula>15:00</Celula>
          <Celula>16:00</Celula>
          <Celula>17:00</Celula>
          <Celula>18:00</Celula>
          <Celula>19:00</Celula>
          <Celula>20:00</Celula>
          <Celula>21:00</Celula>
          <Celula>22:00</Celula>
          <Celula>23:00</Celula>
        </Column>
        {days.map((day, index) => {
          const keysD = Object.keys(day);
          return (
            <Column key={`${index}Day${keysD[0]}`}>
              <Celula>{day[`${index}`]}</Celula>
              {hours.map((hou) => {
                const keysH = Object.keys(hou);
                const qtt = schedulesReport.find(
                  (sch) => sch.day === Number(keysD[0]) && sch.hour === keysH[0]
                );
                const maxQtt = schedulesReport?.reduce(
                  (prev, current) =>
                    prev.qtt_users > current.qtt_users ? prev : current,
                  0
                );
                return (
                  <Celula
                    key={`${keysH[0]}Hour${day[keysD[0]]}`}
                    colorValue={qtt ? qtt.qtt_users / maxQtt.qtt_users : 0}
                    isSchedule={true}
                  >
                    {/* {qtt ? qtt.qtt_users : "-"}  */}
                  </Celula>
                );
              })}
            </Column>
          );
        })}
      </Centered>
    </Container>
  );
};
export default ModalSchedule;
