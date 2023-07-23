import React from "react";
import MediaGrid from "../components/organisms/MediaGrid";
import { MediaItem } from "../components/organisms/types/MediaGrid.types";
import { StyleSheet } from "react-native";

const TestScreen = ({ route, navigation }: any) => {
  return <MediaGrid items={mediaItems} columns={2} styles={styles} />;
};

export default TestScreen;

const mediaItems: MediaItem[] = [
  {
    id: 1,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358687637_756041986319896_2090138134486446481_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG9v2QjX31gZMcqDTeDZSfCfUkqPFEdXwx9SSo8UR1fDG1rEKCMgcIHdI-j49xzKg4&_nc_ohc=GoDnGZQude0AX9fNfxc&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDDF9IkRJ8NjBb3QtWQTAJ_w86pV4NgEYDUFgx15g7wAQ&oe=64C1AC82",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 2,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358665610_756041299653298_1664128206511544415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGDb1HCUXU7GmE37nGneWs_0pDb2gGEiF_SkNvaAYSIX2wni3NDGJ9kxN-gjzeMxQY&_nc_ohc=tyHmJgkUGJMAX-jw8DU&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDc5VAvRLn_IJuRFW5tGXpVVKUJpVxOB_47o0U86JItVQ&oe=64C1EFBD",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 3,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358680225_756042726319822_7526559004001943809_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH0tLAiqcucliSeG9riVkIFMmPTwcMlin0yY9PBwyWKfZI17Re6svtAHl8KAVmoEfw&_nc_ohc=lPWAJnkRBd4AX9bR68U&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBmasPYXNcf-Cu4_A99RR-ui3TTSBca1Tlwgflubt5FNg&oe=64C209E6",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 4,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358687164_756042986319796_6952471396552081073_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEeicgnVwfwhoKoJZhURqpgPBvXz3wGsCg8G9fPfAawKGRA-88SEx0yJyed7yDxdRM&_nc_ohc=a4EJfk5pHU4AX_DEAhU&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfB_2BpiXLgy3BTtJvVol8aydFtg6R2hErpyhwI5pCyJEg&oe=64C0A1C4",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 5,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/359364615_756043649653063_7464276986032270964_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeF1ywEuKdQit3DyBYUyzfv2h5yrPTwCDkKHnKs9PAIOQsTTHSb1qj7ZcdRYl3JtTLE&_nc_ohc=61h7o505gF8AX9VVDcS&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfA-dnrssWOx4xXpy1we6Umy86-12pUOo5q7cT4L46J4Yg&oe=64C1A780",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 6,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/361084445_756043752986386_2137252912559973873_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEYCsT1NadPW0AYGQqVpzuossInKIwksBmywicojCSwGRYcZqyilpP7LmDeRgbJCCg&_nc_ohc=uujZ-EY3ut4AX_UmIe8&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBuY0r2EHuf5izmMhi3P90j8OSSWSG5kmypExem2hHI0g&oe=64C0AFE8",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 7,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358681632_756042942986467_346624549025904656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHf2yBNeYbrVxZT-H53UJmpK_imOYcnGTgr-KY5hycZOJWOy3eiChZ-afm6kXlQrtw&_nc_ohc=zdZQoCx1N6wAX-1am8p&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBDcFLYJ7qvBtQj2OfladNUZzNhgpcv410AVEE8H-kLMg&oe=64C1ABAC",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 8,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358694390_756043492986412_9201010965982646393_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFHomeVPMWrYzKc7BGsxHAQ2-oyixK_vrTb6jKLEr--tIShqbAMHX4dP32j60CIprI&_nc_ohc=JprKo4BiEbcAX9hyPp_&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfAItN6OnECjbal3MFlUWV-orUvdnG_WX6om-HjlvgJDiw&oe=64C19FBF",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 9,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358680933_756044406319654_931076335221977078_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEW2ZI3hTeZiEn74UTdVbD99jscTSS-H_n2OxxNJL4f-Rtkf6jyLxWsQwi_5nqdBuU&_nc_ohc=1CGo1shbGsoAX-iyDX2&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfAd5K992Idp8YgeK-hqxm7oI8dv6XUI1DMlgae7iCWuhg&oe=64C1AC1E",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 10,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358691078_756043942986367_2225745131533811352_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG7MWtEFRW7prVxBrdt_Ntt1KUnLYmF6bfUpSctiYXptyj-OeoSC7DaJxFXVvQH2Uc&_nc_ohc=HC4SBC1O1TsAX86oxIp&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfCjIOrCoeiMVVVeOlh17THXlhLHuuGQRhBL_jPWf-GxdQ&oe=64C20D0D",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 11,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/361107132_756044202986341_3858431990849467863_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEm5o-dcf8t_UxygnkvSkG3KmnBJuJRrbkqacEm4lGtuYuUgf0Yq4WS2R3OyTeGgvk&_nc_ohc=2g4frBJbt6UAX_mGUw7&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBS85hMrM4InNMRc7SM7PPveXCYFqiYaATSLhPjscVmZw&oe=64C087F9",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 12,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/359396148_756045149652913_1317718310769614463_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHH0C2xolaV0iNlYn6lBx3tY3rzeq4Q-HFjevN6rhD4cUc3uKV7K2gU7IyAIg45hxw&_nc_ohc=_Oiv_-5yquoAX8-iHRv&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfCHkoOSSaadj4Fu9AE8ln9zzvrn7DwO1gCU2uDy2J9ZlQ&oe=64C0AA37",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 13,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/360093703_756045406319554_8676054745686918464_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeE_9HXp1OjWsAEFATfkkWP22zMSsfS9F_LbMxKx9L0X8g00RfEAWYVsIGDtDMqN_t0&_nc_ohc=pGwSoaQ0XW0AX8hrERy&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDSSBBvVlsTchiAjbaR6ejjw9RLz4M3ZFENhIShxmtl2A&oe=64C07EA5",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 14,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358660347_756045312986230_3352395794557133451_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHmBk7nGNO5MT1FpnJPRplR_le5b_Cp3ub-V7lv8Kne5i6K29gq8FNf6ZNSO2VFFcc&_nc_ohc=Iki5RuxTbl8AX8rPleC&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfCmh2bznEPn4LPEEjsHm3pKRjjDWx8AFJGLAgCBc7TWlw&oe=64C1C409",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 15,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/359705291_756045479652880_2201800466757437944_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH2CxknixaKxMvYZHVvWm8Z3XYrjWJ8u13ddiuNYny7XestkHMyUpXQn7ozu9kgC6Q&_nc_ohc=jlfg8n_JU6IAX9_o7MF&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfCqHxXCDBYvhFkcliGhw-Q_fCSyaDPTOtND5qnXyFXmig&oe=64C16A85",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 16,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358681632_756040372986724_7896677717576152116_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeH1dYSyRMKmhraBS2ZB1p7Xh8gB-1U3jJiHyAH7VTeMmBrXHr6fgiNSKiOgNe5M_XM&_nc_ohc=C4SEqs_jJ-4AX_KzoON&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDHYMBFcSPF6e-Vb-awGEisCRt-IAfz09KBpxtOTH7GvQ&oe=64C1D79C",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 17,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358682926_756040409653387_8465621777628974116_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGl_pLbfRqeg3UkgVftIM-rBcjqsf-sax0FyOqx_6xrHark70gSsS5ZPnYyH2i_W4Y&_nc_ohc=1SGiz7yMh7gAX9G8zV_&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfBYS5ZCPqK7YUKAxq-JcRzZnBr1ZRBZJe8YqIbg8Pr8fQ&oe=64C1C510",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 18,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/359817882_756040536320041_3362882009417451142_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGfyJjiobINHT4uXc4qSNSM-h6r1i7dNaT6HqvWLt01pPVc2m5rIcAK5ckae_u6xWQ&_nc_ohc=7ahx2BMQ5xMAX-N1ugk&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfAbrbCRyXjCmMvcvk2MwepD2f9J4cQlVxh1-dm30cMWyQ&oe=64C1CE0A",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 19,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/360080784_756040752986686_8765291661850652449_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG19c9W6of-B1LKKAXHz6aPf0BJc1HxIB1_QElzUfEgHThDPb25ClkEmCSLolSff64&_nc_ohc=kD-WTzjl58kAX_EG9Uf&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDyyd7kfFd8PeyIlzOiuNZj4-ENRKienBbli9cd0St-4A&oe=64C0C479",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 20,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358681561_756040876320007_6732783729837429137_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEtALze2L7HirZT6LVJ9J8Jw58uen7Uox3Dny56ftSjHa4-_r9a_IS9bjNdzNBrtFI&_nc_ohc=nLGUqC7BXqsAX9_Ij9i&_nc_oc=AQlwi8uYJVlIi0Pwzi_KAeazxXzDEvAUr0XMHvcxuPNR1vamJwpkHBiWeKrEauCOeWQ&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDLEBKnOc-FWtUj1TYHBokA2gYVIZ1qnwJqAbtCmXjYNQ&oe=64C11A24",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 21,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/360087433_756040839653344_8427007259161198596_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGgm_HYI7o-wkdLYz4G63g67nH6O_Wz95nucfo79bP3mSa4yu87YaEFNTmm8Orl9U0&_nc_ohc=e1Kw4cEawW0AX9NrZqV&_nc_oc=AQkYrMku0kW1imul7AsD5WvYm9fF5y4I2-_llmYKHIVzyL2oW_jQgwxd_pS9xcBEbnA&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDSTZR7ooNwaB1iFkysuq0Gjvp1okPWS1jeqI8yxxcstQ&oe=64C1FFFD",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 22,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358684810_756041059653322_2968983966861526950_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHTWXl6f-OcGIM_cHwEFI2Zx9OCEcn4L1nH04IRyfgvWRvup0OVcaf8lNnEB7HuJOw&_nc_ohc=-vbak71NsLUAX_k4V-R&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfB79pVjEaNcaF6LGlP1JrfTDv4fYdr5ZUaQSzCIc21ohg&oe=64C1416D",
    type: "image",
    aspectRatio: 9 / 14,
  },
  {
    id: 23,
    source:
      "https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/358674671_756041356319959_7402822514944712513_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeF3WAFrDhcG69nGfdJbg0iZJv4QkFFCTd8m_hCQUUJN30bVLGnGeTYdX8YHDklbElc&_nc_ohc=ToyLwmkjZGUAX_ZTjje&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfAL4FzHGZMgpadd51Zx-DttIxwRDkLEIAgr-TDha1g72g&oe=64C08329",
    type: "image",
    aspectRatio: 9 / 14,
  },
];

const styles = StyleSheet.create({
  gridContainer: {
    padding: 8,
  },
  gridItem: {
    margin: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
});
