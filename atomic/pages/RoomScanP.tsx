import React from 'react'
import { StyleSheet, View } from 'react-native'
import QRCodeScanT from '../templates/QRCodeScanT'

const RoomScanP = () => {

    const onRoomScan = (data: string) => {
        console.log(data)
    }


    return (
        <View style={styles.root}>
            <QRCodeScanT onScanned={onRoomScan} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default RoomScanP
