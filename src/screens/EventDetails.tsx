import React from "react";

import FlatListWithHeader from "../components/templates/FlatListWithHeader";
import { View } from "react-native";
import { Text } from "../components/atoms";
import { Fonts } from "../theme";

const EventDetails = ({ route }: any) => {
  const { event } = route.params;
  return (
    <View>
      <Text variant={Fonts.B1}>{event.name}</Text>
    </View>
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
  ],
};

export default EventDetails;
