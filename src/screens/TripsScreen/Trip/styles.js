import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapperTrip: {
        paddingTop: 16,
        paddingLeft: 16,
        backgroundColor: 'white',
        paddingRight: 16
    },
    image: {
        backgroundColor: 'green',
        height: 144,
        marginBottom: 6
    },
    price: {
        position: "absolute",
        top: 144 - 16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#514A9D',
        padding: 4,
        color: 'white'
    }
})

export default styles