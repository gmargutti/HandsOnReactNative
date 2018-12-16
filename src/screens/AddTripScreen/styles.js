import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flex: 1, 
        flexDirection: "row", 
        paddingBottom: 16
    },
    itemName: {
        fontWeight: "bold", 
        fontSize: 18
    },
    wrapperItemPrice: {
        justifyContent: "center", 
        paddingRight: 16
    },
    itemPrice: {
        textAlign: "right",
        color: '#514A9D',
        fontWeight: "bold"
    },
    wrapperInfo: {flex: 1},
    wrapper: {flex: 1, paddingTop: 120},
    header: {
        height: 192,
        backgroundColor: 'grey'
    },
    backButton: {
        position: "absolute",
        top: 36,
        left: 16,
        padding: 10
    },
    tripName: {

        position: "absolute",
        left: 16,
        bottom: 16
    },
    tripPrice: {
        position: "absolute",
        bottom: 16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#514A9D',
        padding: 4,
        color: 'white'
    },
    input: {
        backgroundColor: '#C4C4C4',
        padding: 20,
        marginBottom: 16
    },
    btn: {
        backgroundColor: '#C4C4C4',
        padding: 20,
        marginBottom: 16
    }
})

export default styles