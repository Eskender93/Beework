import { Section, Heading, List, ListItem, Text } from "./Features.styled";
import { Title } from "../Common/Common.styled";
import { IoPersonCircleOutline } from "react-icons/io5";

import { GiWorld } from "react-icons/gi";
import { LiaConnectdevelop, LiaCheckCircleSolid } from "react-icons/lia";

const FeaturesList = () => {
  return (
    <Section>
      <Title>BeeWorking Holosiiv – це</Title>

      <List>
        <ListItem>
          <Heading>
            {" "}
            <GiWorld />
            Атмосфера
          </Heading>
          <Text>
            Зануртеся в атмосферу творчості та комфорту. Наші робочі простори
            відрізняються унікальним дизайном, повним набором послуг які
            задовольнять усі ваші запити.
          </Text>
        </ListItem>
        <ListItem>
          <Heading>
            {" "}
            <LiaConnectdevelop />
            Інфраструктура
          </Heading>
          <Text>
            Повний доступ 24/7 до інфраструктури коворкінгу: кімната для сну,
            спортзал із душем, skype кімнати, ігрові зони та PS5, переговорні
            кімнати, зали для ваших івентів, затишна тераса.
          </Text>
        </ListItem>
        <ListItem>
          <Heading>
            {" "}
            <LiaCheckCircleSolid />
            Без складних умов
          </Heading>
          <Text>
            Оренда коворкінгу - ваш шлях до ефективності: забудьте про клопоти з
            облаштуванням, ремонтом та закупівлею необхідного обладнання. Не
            витрачайте час на мікроменеджмент. Отримайте всі переваги офісу
            площею понад 4 800 м2, не витрачаючи нерви та час.
          </Text>
        </ListItem>
        <ListItem>
          <Heading>
            {" "}
            <IoPersonCircleOutline />
            Спільнота{" "}
          </Heading>
          <Text>
            Коворкінг - це екосистема можливостей: тут ви знайдете не лише
            робоче місце, а й багато нових знайомств, захоплюючих інсайтів,
            можливостей для професійного зростання, надійних партнерів та
            клієнтів.
          </Text>
        </ListItem>
      </List>
    </Section>
  );
};

export default FeaturesList;
