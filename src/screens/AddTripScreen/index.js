import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native'
import styles from './styles'
import MapView, { Marker } from 'react-native-maps'

class AddTripScreen extends Component{
    static navigationOptions = {
        header: null
    }
    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.itemName}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice}>{item.item.price}</Text>
                </View>
            </View>
        )
    }
    state = {
        trip: ''
    }
    handleSave = async() => {
        const trip = {
            id: new Date().getTime(),
            trip: this.state.trip,
            price: 0,
            latitude: 0,
            longitude: 0
        }
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }
        trips.push(trip)
        await AsyncStorage.setItem('trips', JSON.stringify(trips))
        // this.props.navigation.navigate('AddPoint', { id: trip.id })
        this.props.navigation.state.params.refresh()
        this.props.navigation.goBack()
    }
    render(){
        const trip = {
            name: 'Eurotrip 2019',
            price: 'R$ 5000',
            places: [
                { id: '1', name: 'Amsterdam', description: 'Chegada', price: 100, lat: 0, long: 0 },
                { id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0 },
                { id: '3', name: 'Amsterdam', description: 'Chegada', price: 100, lat: 0, long: 0 },
                { id: '4', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0 },
                { id: '5', name: 'Amsterdam', description: 'Chegada', price: 100, lat: 0, long: 0 },
                { id: '6', name: 'Bruxelas', description: 'Hospedagem', price: 100, lat: 0, long: 0 },
            ]
        }
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <MapView style={{flex: 1}} 
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                        <Marker 
                            draggable
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324
                            }}
                            onDragEnd={(evt) => this.setState({position: evt.nativeEvent.coordinate})}
                        />
                    </MapView>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../../../assets/arrow-left-white.png')} style={styles.backButton}/>
                    </TouchableOpacity>
                    <Text style={styles.tripName}>{trip.name}</Text>
                    <Text style={styles.tripPrice}>{trip.price}</Text>
                </View>
                <TextInput style={styles.input} placeholder='Nome do Ponto' onChangeText={txt => this.setState({trip: txt})} />
                <TouchableOpacity style={styles.btn} onPress={this.handleSave}>
                    <Text>Salvar Viagem</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddTripScreen