import React from 'react'
import { StyleSheet, View } from 'react-native'
import useClient from '../../hooks/useClient'
import QRCodeScanT from '../templates/QRCodeScanT'

const RoomScanP = () => {
    const client = useClient()

    const onRoomScan = async (data: string) => {
        const room = await client.getRoom(data)
        console.log(room)
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
