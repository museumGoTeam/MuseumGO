import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typography from '../atoms/Typography'
import { BarCodeScanner, BarCodeScannerResult, PermissionStatus } from 'expo-barcode-scanner'

type QRCodeScanprops = {
    onScanned: (data: string) => void
}

const QRCodeScanT: React.FC<QRCodeScanprops> = ({onScanned}) => {
    const [permission, setPermission] = React.useState<PermissionStatus>(PermissionStatus.UNDETERMINED)
    const [scaned, setScanned] = React.useState<boolean>(false)

    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setPermission(status === "granted" ? PermissionStatus.GRANTED : PermissionStatus.DENIED);
        }
        )();
    }, [])

    const handleScan = ({type, data, cornerPoints}: BarCodeScannerResult) => {
        if (scaned) return
        console.log(data)
        setScanned(true)
        onScanned(data)
    }


    if (permission === PermissionStatus.UNDETERMINED) {
       return  <View></View>
    }

    if (permission === PermissionStatus.DENIED) {
        return <Typography variant="h4">Vous avez refusz l'accès à l'appareil photo</Typography>
    }

   
    return (
        <View style={styles.root}>
            <BarCodeScanner  onBarCodeScanned={handleScan} style={StyleSheet.absoluteFillObject} />
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
})

export default QRCodeScanT
