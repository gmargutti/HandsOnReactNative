import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableWithoutFeedback} from 'react-native';
import assets from './assets'
import styles from './styles'
import isIphoneX from '../../utils/isIphoneX'

class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
    state = {
        show: false
    };
    handleCounter = () => {
        this.setState({show: !this.state.show})
    };
    render(){
        return(
            <ImageBackground 
                source={assets.background}
                imageStyle={{resizeMode: 'stretch'}}
                style={styles.background}
            >
                <View style={styles.wrapperLogoTripPlanner}>
                    <Image source={assets.logoTripPlanner} />
                </View>
                <View style={styles.wrapperLogoDevPleno}>
                    <Image source={assets.logoDevPleno} />
                </View>
                {
                    !this.state.show ?
                        <TouchableWithoutFeedback onPress={this.handleCounter}>
                            <View style={styles.buttonBackground}>
                                <Text style={[styles.buttonText, isIphoneX() ? { marginBottom: 10 } : null]}>COMEÇAR!</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    : 
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
                        <View style={styles.buttonEmptyStateBackground}>
                            <Image source={assets.pin} style={styles.pin} />
                            <Text style={styles.buttonEmptyStateText}>Vamos planejar sua primeira viagem?</Text>
                            <Image source={assets.arrowRight} style={[styles.arrowRight, isIphoneX() ? { marginBottom: 10 } : null]} />
                        </View>
                    </TouchableWithoutFeedback>
                }
            </ImageBackground>
        )
    }
}

export default HomeScreen