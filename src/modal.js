import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Modal} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false
  }

  handleModal = () => {
    this.setState({
      modal: !this.state.modal ? true : false
    })
  }

  render() {
    return (
      <View style={{width: '100%'}}>
        <Button
          title={"Open Modal"}
          onPress={this.handleModal}
        />

        <Modal
          visible={this.state.modal}
          animationType={"slide"}
          onShow={() => {alert("Showing")}}
        >
          <View style={{marginTop: 50, backgroundColor: 'red'}}>
            <Text>My Modal Content</Text>
          </View>
          <Button
            title={"Close Modal"}
            onPress={this.handleModal}
          />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default ModalComponent;