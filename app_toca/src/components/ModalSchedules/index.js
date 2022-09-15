import { useEffect } from "react";
import { Celula, Centered, Column, Container } from "./syles";

const ModalSchedule = ({}) => {
  const schedule = [
    { day: 0, hour: "20:00", qtt_users: 3 },
    { day: 1, hour: "20:00", qtt_users: 3 },
    { day: 2, hour: "20:00", qtt_users: 3 },
    { day: 2, hour: "14:00", qtt_users: 2 },
    { day: 3, hour: "20:00", qtt_users: 3 },
    { day: 4, hour: "20:00", qtt_users: 3 },
    { day: 5, hour: "20:00", qtt_users: 3 },
    { day: 6, hour: "20:00", qtt_users: 3 },
  ];
  let dom = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };
  let seg = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };
  let ter = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };
  let quar = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };
  let quin = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };
  let sex = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };
  let sab = {
    "9:00": 0,
    "10:00": 0,
    "11:00": 0,
    "12:00": 0,
    "13:00": 0,
    "14:00": 0,
    "15:00": 0,
    "16:00": 0,
    "17:00": 0,
    "18:00": 0,
    "19:00": 0,
    "20:00": 0,
    "21:00": 0,
    "22:00": 0,
    "23:00": 0,
  };

  const newSchedule = (schedule) => {
    schedule.map((s) => {
      if (s.day === 0) {
        dom[s.hour] = s.qtt_users;
      }
      if (s.day === 1) {
        seg[s.hour] = s.qtt_users;
      }
      if (s.day === 2) {
        ter[s.hour] = s.qtt_users;
      }
      if (s.day === 3) {
        quar[s.hour] = s.qtt_users;
      }
      if (s.day === 4) {
        quin[s.hour] = s.qtt_users;
      }
      if (s.day === 5) {
        sex[s.hour] = s.qtt_users;
      }
      if (s.day === 6) {
        sab[s.hour] = s.qtt_users;
      }
    });
  };

  newSchedule();

  return (
    <Container>
      <Centered>
        {/*horários*/}
        <Column>
          <Celula></Celula>
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
        {/*domingo*/}
        <Column>
          <Celula>Dom</Celula>
          {Object.keys(dom).map((d) => {
            return <Celula>{dom[d]}</Celula>;
          })}
          {/* <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula> */}
        </Column>
        {/*segunda*/}
        <Column>
          <Celula>Seg</Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
        </Column>
        {/*Terça*/}
        <Column>
          <Celula>Ter</Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
        </Column>
        {/*quarta*/}
        <Column>
          <Celula>Quar</Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
        </Column>
        {/*quinta*/}
        <Column>
          <Celula>Quin</Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
        </Column>
        {/*sexta*/}
        <Column>
          <Celula>Sex</Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
        </Column>
        {/*sabado*/}
        <Column>
          <Celula>Sab</Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
          <Celula></Celula>
        </Column>
      </Centered>
    </Container>
  );
};
export default ModalSchedule;
