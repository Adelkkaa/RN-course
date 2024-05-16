import { useEffect, useRef, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotification.props";
import { Text, StyleSheet, Dimensions, Animated } from "react-native";
import { Colors, Fonts } from "../tokens";

export function ErrorNotification({ error }: ErrorNotificationProps) {
  const [isShown, setIsShown] = useState<boolean>(false);
  const animatedValue = new Animated.Value(-100);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      timerIdRef.current = setTimeout(() => {
        Animated.timing(animatedValue, {
          toValue: -99,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setIsShown(false);
        });
      }, 3000);
    });
  };

  useEffect(() => {
    if (!error) {
      return;
    }
    setIsShown(true);

    return () => {
      if (timerIdRef?.current) clearTimeout(timerIdRef.current);
    };
  }, [error]);

  if (!isShown) {
    return <></>;
  }

  return (
    <Animated.View
      style={{
        ...styles.error,
        transform: [{ translateY: animatedValue }],
      }}
      onLayout={onEnter}
    >
      <Text style={styles.errorText}>{error}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    backgroundColor: Colors.red,
    padding: 15,
    top: 50,
  },
  errorText: {
    fontSize: Fonts.f16,
    color: Colors.white,
    textAlign: "center",
    // fontFamily: Fonts.regular,
  },
});
