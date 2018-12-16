import React from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import styles from './styles'

const trip = props => {
    const dim = Dimensions.get('window');

    return(
        <View>
            <TouchableOpacity onPress={props.onPress}  style={styles.wrapperTrip}>
                <Text style={[styles.image, { width: dim.width - 32 }]}>Image</Text>
                <Text>{props.title}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default trip