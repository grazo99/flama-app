import React from "react";
import { ProfileHeader } from "../components/molecules";
import EventCard from "../components/molecules/EventCard";
import FlatListWithHeader from "../components/templates/FlatListWithHeader";
import { useOrganizerProfile } from "./hooks";
import SafeAreaLayout from "../components/templates/SafeAreaLayout";

type OrganizerProfileProps = {
  navigation: any;
};

const OrganizerProfile = ({ navigation }: OrganizerProfileProps) => {
  const { handleEventPress } = useOrganizerProfile({
    navigation,
    organizer: mock.organizer,
  });

  return (
    <SafeAreaLayout>
      <FlatListWithHeader
        ListData={mock.events}
        listDataRenderer={(item) => (
          <EventCard
            event={item}
            navigation={navigation}
            onPress={handleEventPress(item)}
          />
        )}
        headerRenderer={() => <ProfileHeader profile={mock.organizer} />}
        gap={10}
      />
    </SafeAreaLayout>
  );
};

const mock = {
  organizer: {
    name: "Key Producciones",
    id: 1,
    profilePic:
      "https://yt3.googleusercontent.com/ytc/AGIKgqMMlR9_5ZiI_J5NjAu7w3Tg9b76OsqXTMrYi2_X7A=s900-c-k-c0x00ffffff-no-rj",
  },
  events: [
    {
      id: 1,

      cover:
        "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358684810_756041059653322_2968983966861526950_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHTWXl6f-OcGIM_cHwEFI2Zx9OCEcn4L1nH04IRyfgvWRvup0OVcaf8lNnEB7HuJOw&_nc_ohc=hKug2B3V1S8AX_v0j8G&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfAMZKfjaqJ5zaR7VMpojqlMX2zn7eltu93F5bjXSMujkg&oe=64BF472D",
      name: "Kolombo",
      lineup: ["Kolombo", "Santi Dominguez", "Fran Bortolossi"],
      date: "sab. 08 jul.",
      location: "Montevideo, Uruguay",
      likeCount: 1030,
    },
    {
      id: 2,

      cover:
        "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/359522750_756631039594324_8026693095308444828_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeE2v25dXdeeuufSZsINN2rbk7eQP4auT86Tt5A_hq5PzpcBf0vcNqksO2R8BRPv-e8&_nc_ohc=80Ffm23u45oAX-BL4mT&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfD16WASSQKInla2QS8tk-F6Dxje5g3UedP9-0rqRmw6SA&oe=64BF8F3F",
      name: "Cocoon",
      lineup: ["Sven Vath", "Enrico Sangiuliano", "Phoro"],
      date: "sab. 24 abr.",
      location: "Montevideo, Uruguay",
      likeCount: 2900,
    },
    {
      id: 3,

      cover:
        "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/342028650_5987638464666296_4439304909589375742_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHg4rzvgg2U8LxtWFvGYFS4ZhRkhsCg99pmFGSGwKD32oxK72kJ3_GzAuvetRiw_kE&_nc_ohc=qQzQKudjOj4AX9jsJQp&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfA4BnALQPDDQ2GalLIeD4Sd5NKT2g3oSYBbM5n2DBMUOg&oe=64BEAFDE",
      name: "OffBeat",
      lineup: ["Cuartero", "Sidney Charles", "wAFF", "Seba Rodriguez"],
      date: "vie. 03 mar.",
      location: "Montevideo, Uruguay",
      likeCount: 1400,
    },
    {
      id: 4,

      cover:
        "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/332767247_513594634261207_2305689454951322450_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeE3sjRxQ8u5JyBMKnK895qw8-9F8DjRpSvz70XwONGlKzIlPPqOXg58Pf4wWBHQmBY&_nc_ohc=LMH2ywVZCAcAX-A52FZ&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfAqNosiFE0lxpeAHXu1__5B2-A9g76PYgmVKH-zFT92ZQ&oe=64BF562E",
      name: "NoArt",
      lineup: ["ANOTR", "Mateo Dufour", "Agustín Clark"],
      date: "sab. 11 feb",
      location: "Montevideo, Uruguay",
      likeCount: 3200,
    },
    {
      id: 5,

      cover:
        "https://scontent.fmvd2-1.fna.fbcdn.net/v/t39.30808-6/331174264_575587494447788_4761335131085220357_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGnYzCZZOmYymOPjRPKXJ_iyAqOQbQ4crXICo5BtDhytZ7OpBFdtXr6G_eCPg5SNwQ&_nc_ohc=XsvRh8uGMREAX_bgzmX&_nc_ht=scontent.fmvd2-1.fna&oh=00_AfBPuQ1tudFfpeGkIFXNhmS9gVUmlJpbvGj87S75W8_qGg&oe=64BEF34A",
      name: "Solomun",
      lineup: ["Solomun", "El Bastardo"],
      date: "sab. 27 ene",
      location: "Montevideo, Uruguay",
      likeCount: 1300,
    },
  ],
};

export default OrganizerProfile;
