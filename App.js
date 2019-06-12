/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, ActivityIndicator, Image, ImageBackground} from 'react-native';
import Nav from './src/nav';
import Generator from './src/generator';
import ListItem from './src/listitem';
import Input from './src/input';
import PickerComponent from './src/picker';
import Mitch from './src/assets/images/mitch.jpg';
import ModalComponent from './src/modal';

class App extends Component {

  state = {
    nameOfApp: "Mitch's App",
    random:[20, 837]
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random:[...prevState.random, random]
      }
    })
  }

  onItemDelete = (position) => {
    const newArray = this.state.random.filter((item, index) => {
      return position != index;
    });

    this.setState({
      random:newArray
    });
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Nav name={this.state.nameOfApp}/>
        {/*<View style={styles.basicView}>
          <Text style={styles.basicText}>Hello!</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello!</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello!</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello!</Text>
        </View>
        <Generator add={this.onAddRandom}/>
        <ListItem items={this.state.random} delete={this.onItemDelete}/>*/}

        <ScrollView 
          style={{width: '100%'}}
          // onContentSizeChange={(width, height) => {alert(height)}}
          // onMomentumScrollBegin={() => {alert("Start")}}
          // onMomentumScrollEnd={() => {alert("End")}}
          // onScroll={() => {alert("scrolling")}}
        >
          {/*<Input/>
          <PickerComponent/>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            animating={true}
          />

          <ImageBackground
            source={{uri: "https://picsum.photos/400"}}
            style={styles.mitch}
            // resizeMode="cover"
            // onLoadEnd={() => {alert("Image Loaded")}}
          >
            <Text>Hello guys!</Text>
          </ImageBackground>*/}

          <ModalComponent/>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  },
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  },
  basicText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  mitch: {
    width: '100%',
    height: 300,
    marginTop: 20
  }
})

export default App;