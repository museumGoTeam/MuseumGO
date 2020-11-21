import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { IPOI } from "../../types";
import Avatar from "../atoms/Avatar";
import CardA from "../atoms/CardA";
import Skeleton from "../atoms/Skeleton";
import Typography from "../atoms/Typography";
import PoiSelectModal from "./PoiSelectModal";

type PoiItemProps = IPOI | {}

export default function PoiItem(poi: PoiItemProps) {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onOpen = () => setModalOpen(true);
  const onClose = () => setModalOpen(false);

  if (!("_id" in poi)) {
    return (
      <Skeleton variant="rect" style={styles.root}>
        <Skeleton variant="circle" style={styles.image} />
        <Skeleton variant="text" style={styles.name} />
      </Skeleton>
    );
  }

  return (
    <>
      {modalOpen && <PoiSelectModal open={modalOpen} onClose={onClose} poi={poi as IPOI} />}
      <CardA onPress={onOpen}  style={styles.root}>
        <Avatar style={styles.image} src={poi.image} />
        <Typography style={styles.name}>{poi.name}</Typography>
      </CardA>
    </>
  );
}

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    root: {
      position: "relative",
      flexDirection: "row",
      alignItems: "center",
      width: theme.utils.wp2dp(50),
      paddingVertical: theme.utils.hp2dp(5),
      paddingLeft: theme.utils.wp2dp(12),
      paddingRight: theme.utils.wp2dp(4),
      borderTopRightRadius: 32,
      borderBottomRightRadius: 32,
      marginVertical: theme.utils.hp2dp(1),
    },
    image: {
      position: "absolute",
      left: -40,
      width: 80,
      height: 80,
    },
    name: {
      flex: 1,
      fontSize: theme.utils.wp2dp(4),
    },
  });
