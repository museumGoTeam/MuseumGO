import React from "react";
import { StyleSheet, View, Text, Animated} from "react-native";
import { useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

type SnackbarProps = {
  type?: "success" | "error" | "warning" | "information";
  persist?: boolean
};

const renderIcon = (type: "success" | "error" | "warning" | "information") => {
  switch (type) {
    case "success":
      return (
        <MaterialIcons
          name="check-circle"
          size={24}
          style={{ color: "#52c41a" }}
        />
      );
    case "error":
      return (
        <MaterialIcons name="error" size={24} style={{ color: "#ff4d4f" }} />
      );
    case "warning":
      return (
        <MaterialIcons name="warning" size={24} style={{ color: "#faad14" }} />
      );
    case "information":
      return (
        <MaterialIcons name="info" size={24} style={{ color: "#1890ff" }} />
      );
  }
};

class Message extends React.Component<
  SnackbarProps,
  {
    visible: boolean;
    text: string;
    type: "success" | "error" | "warning" | "information";
    persist: boolean;
  }
> {
  static myself: Message;

  constructor(props: SnackbarProps) {
    super(props);
    this.state = {
      visible: false,
      type: "success",
      text: "",
      persist: false
    };
    Message.myself = this;
  }
  


  static success(text: string) {
    Message.myself._show("success", text);
  }

  static error(text: string, persist: boolean = false) {
    Message.myself._show("error", text, persist)
  }

  static info(text: string) {
    Message.myself._show("information", text)
  }

  _show(type: "success" | "error" | "warning" | "information", text: string, persist: boolean = false) {
    this.setState({ visible: true, type, text, persist });
  }

  unMountComponent() {
    this.setState({...this.state, visible: false})
  }

  render() {
    if (this.state.visible) return <Snackbar type={this.state.type} text={this.state.text} unmountComponent={this.unMountComponent.bind(this)} persist={this.state.persist} />;
    return <View></View>
  }
}

const Snackbar: React.FC<SnackbarProps & {text: string, unmountComponent: () => void}> = ({ type = "success",text, unmountComponent, persist }) => {
  const moveAnim = React.useRef(new Animated.Value(0)).current
  const theme = useTheme();
  const style = useStyles(theme);
  
  React.useEffect(() => {
    Animated.timing(moveAnim, {toValue: 64, duration: 100, useNativeDriver: false}).start()
    const timeout = setTimeout(persist ? () => {} : unmountComponent, 3000)
    return () => clearTimeout(timeout)
  }, [moveAnim])


  return (
    <Animated.View style={[style.root, {top: moveAnim}]}>
      <View style={style.container}>
          {renderIcon(type)}
        <Text style={style.message}>{text}</Text>
      </View>
    </Animated.View>
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      position: "absolute",
      width: "100%",
      alignItems: "center",
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      paddingHorizontal: theme.utils.wp2dp(6),
      paddingVertical: theme.utils.hp2dp(2),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    message: {
      fontSize: theme.utils.wp2dp(4),
      fontWeight: "500",
      marginLeft: theme.utils.wp2dp(2),
    },
  });

export default Message;
