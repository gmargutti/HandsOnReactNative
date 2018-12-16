import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import styles from './styles'

class TripScreen extends Component{
    static navigationOptions = {
        header: null
    }

    state = {
        points: [],
        trip: []
    }

    renderItem = item => {
        return(
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.itemName}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice}>R$ {item.item.price.toFixed(2)}</Text>
                </View>
            </View>
        )
    }
    componentDidMount()
    {
        this.loadData()
    }
    
    loadData = async() => {
        const id = this.props.navigation.state.params.id
        const tripsAS = await AsyncStorage.getItem('trips')
        let trips = []
        if(tripsAS){
            trips = JSON.parse(tripsAS)
        }

        const pointsAS = await AsyncStorage.getItem('trip-' + id)
        let points = []
        if(pointsAS){
            points = JSON.parse(pointsAS)
        }

        let trip = {
            trip: '',
            price: 0
        }
        trips.forEach(t => {
            if(t.id === id){
                trip.trip = t.trip
                trip.price = t.price ? t.price : 0
            }
        })

        this.setState({ 
            trip: trip,
            points: points
        })
    }

    render(){
        const id = this.props.navigation.state.params.id
        const { points, trip } = this.state
        return(
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.state.params.refresh()
                        this.props.navigation.goBack()
                    }}>
                        <Image source={require('../../../assets/arrow-left-white.png')} style={styles.backButton}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPoint', { id: id, refresh: this.loadData})} 
                        style={{
                            position: "absolute",
                            bottom: 40,
                            right: 20
                        }}
                    >
                        <Image source={require('../../../assets/add.png')} />
                    </TouchableOpacity>
                    <Text style={styles.tripName}>{trip.trip}</Text>
                    <Text style={styles.tripPrice}>R$ {parseFloat(trip.price).toFixed(2)}</Text>
                </View>
                    <FlatList style={{flex: 1}}
                        contentContainerStyle={{
                            paddingTop: 16,
                            paddingLeft: 16,
                        }}
                        data={points}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View>
                </View>
            </View>
        )
    }
}

export default TripScreen