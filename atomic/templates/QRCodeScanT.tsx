import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Typography from "../atoms/Typography";
import {
  BarCodeScanner,
  BarCodeScannerResult,
  PermissionStatus,
} from "expo-barcode-scanner";

type QRCodeScanprops = {
  onScanned: (data: string) => void;
  style?: StyleProp<ViewStyle>;
};

const QRCodeScanT: React.FC<QRCodeScanprops> = ({ onScanned, style}) => {
  const [permission, setPermission] = React.useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED
  );
  const [dataScanned, setDataScanned] = React.useState<string | undefined>("");

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(
        status === "granted"
          ? PermissionStatus.GRANTED
          : PermissionStatus.DENIED
      );
    })();
  }, []);

  const handleScan = ({ type, data, cornerPoints }: BarCodeScannerResult) => {
    if (dataScanned !== data) {
      setDataScanned(data);
      onScanned(data);
    }
  };

  if (permission === PermissionStatus.UNDETERMINED) {
    return <View></View>;
  }

  if (permission === PermissionStatus.DENIED) {
    return (
      <Typography variant="h4">
        Vous avez refusz l'accès à l'appareil photo
      </Typography>
    );
  }

  return (
    <BarCodeScanner onBarCodeScanned={handleScan} style={style} />

  );
};

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  root: {
    flex: 1,

  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
  },
});

export default QRCodeScanT;
