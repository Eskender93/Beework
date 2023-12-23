import { Title, Subtitle } from "../Common/Common.styled";
import { Container } from "./MeetingRoomCard.styled";
import MeetingRoomsSlider from "./MeetingRoomsSlider";
import meetingRoomsData from "../Data/meetingRoomsData";

const MeetingRoom = () => (
  <Container>
    <Title>Переговорні кімнати від 2 до 14 осіб</Title>
    <Subtitle>
      {" "}
      Наші переговорні кімнати та інфраструктура коворкінгу допоможуть вивести
      ваші робочі зустрічі на якісно новий рівень. А під час перерв на вас
      чекатимуть кава, снеки та фрукти у наших Lounge zone.
    </Subtitle>{" "}
    <MeetingRoomsSlider rooms={meetingRoomsData} />
  </Container>
);

export default MeetingRoom;
