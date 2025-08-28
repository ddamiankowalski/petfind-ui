import React from "react";
import { StyleSheet, View } from "react-native";
import {
  useLinkBuilder,
} from "@react-navigation/native";
import {
  Text,
  PlatformPressable,
} from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Feather } from '@react-native-vector-icons/feather';

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  const icon: Record<string, any> = {
    index: (props: any) => <Feather name="list" size={18} color={'#222'} {...props} />,
    'find-pet': (props: any) => <Feather name="search" size={18} color={'#222'} {...props} />,
    about: (props: any) => <Feather name="info" size={18} color={'#222'} {...props} />
  }

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel as React.ReactNode
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            android_ripple={{ color: 'transparent' }}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {icon[route.name]({
              color: isFocused ? '#673ab7' : '#222'
            })}

            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 10
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})