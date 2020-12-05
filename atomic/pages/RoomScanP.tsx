import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import {onLocateRoom} from '../../store/reducer'
import useClient from '../../hooks/useClient'
import QRCodeScanT from '../templates/QRCodeScanT'
import { useNavigation } from '@react-navigation/native'

const RoomScanP = () => {
    const client = useClient()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    
    const onRoomScan = async (data: string) => {
        const room = await client.getRoom(data)
        if (room) {
            navigation.navigate("PoiList")
            dispatch(onLocateRoom(room))
        }
    }


    return (
        <QRCodeScanT onScanned={onRoomScan} style={styles.root} />
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default RoomScanP
