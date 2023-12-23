import {
  Card,
  Image,
  CardTitle,
  Description,
  Button,
  CardDisctription,
  ImgContainer,
} from "./MeetingRoomCard.styled";

const MeetingRoomCard = ({ room }) => {
  return (
    <Card>
      <ImgContainer>
        <Image src={room.image} alt={room.title} />
      </ImgContainer>
      <CardDisctription>
        {" "}
        <CardTitle>{room.title}</CardTitle>
        <Description>{room.description}</Description>
        <Button>Забронювати</Button>{" "}
      </CardDisctription>
    </Card>
  );
};

export default MeetingRoomCard;
