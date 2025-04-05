import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { ServiceCard } from "../../components/ServiceCard";

import VehicleIcon from "../../assets/icons/vehicle.svg";
import SearchVehicleIcon from "../../assets/icons/search-vehicle.svg";
import VehicleDocument from "../../assets/icons/vehicle-document.svg";
import TrafficTicketIcon from "../../assets/icons/traffic-ticket.svg";
import CalculatorIcon from "../../assets/icons/calculator.svg";
import DocumentIcon from "../../assets/icons/document.svg";
import VehicleCalendarIcon from "../../assets/icons/vehicle-calendar.svg";
import OrdersIcon from "../../assets/icons/orders.svg";
import VehicleDoorIcon from "../../assets/icons/vehicle-door.svg";
import ClipboardIcon from "../../assets/icons/clipboard.svg";

import * as S from "./styles";

export function Home() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <Header title="DetranSP" hideBackIcon />

      <S.Content>
        <S.Title>Nossos serviços</S.Title>

        <S.Row>
          <ServiceCard
            title="Meus veículos"
            icon={VehicleIcon}
            onPress={() => navigation.navigate("MyVehicles" as never)}
          />
          <ServiceCard
            title="Consultar outros veículos"
            icon={SearchVehicleIcon}
          />
        </S.Row>
        <S.Row>
          <ServiceCard
            title="Licenciamento digital (CRLV-e)"
            icon={VehicleDocument}
          />
          <ServiceCard
            title="Consultar multas"
            icon={TrafficTicketIcon}
            onPress={() => navigation.navigate("TraficTicket" as never)}
          />
        </S.Row>
        <S.Row>
          <ServiceCard
            title="Pontos CNH"
            icon={CalculatorIcon}
            onPress={() => navigation.navigate("Points" as never)}
          />
          <ServiceCard title="Pedir 2ª via da CNH" icon={DocumentIcon} />
        </S.Row>
        <S.Row>
          <ServiceCard title="Agenda do carro" icon={VehicleCalendarIcon} />
          <ServiceCard title="Meus pedidos" icon={OrdersIcon} />
        </S.Row>
        <S.Row>
          <ServiceCard
            title="Pesquisa de peças usadas"
            icon={VehicleDoorIcon}
          />
          <ServiceCard title="Pesquisa ECVs" icon={ClipboardIcon} />
        </S.Row>
      </S.Content>
    </S.Container>
  );
}
