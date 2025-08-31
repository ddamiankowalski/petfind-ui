import { MaterialCommunityIcons } from "@expo/vector-icons";

export const icon: Record<string, any> = {
  index: (props: any) => (
    <MaterialCommunityIcons
      name="map-marker"
      size={18}
      color={"#222"}
      {...props}
    />
  ),
  "find-pet": (props: any) => (
    <MaterialCommunityIcons
      name="map-marker"
      size={18}
      color={"#222"}
      {...props}
    />
  ),
  about: (props: any) => (
    <MaterialCommunityIcons
      name="information"
      size={18}
      color={"#222"}
      {...props}
    />
  ),
};
