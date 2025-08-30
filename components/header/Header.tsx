import { fontFamily } from "@/constants/fonts";
import { PropsWithChildren } from "react";
import { Text } from "react-native";

type HeaderProps = {
  title: string;
}

export default function Header({ title }: PropsWithChildren<HeaderProps>) {
  if (title.length) {
    return;
  }
  
  return (
    <Text style={{ fontFamily: fontFamily.bold, fontSize: 24, paddingLeft: 24 }}>{title}</Text>
  )
}