import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styled } from 'styled-components';

const Container = styled.View`
  background: #8fcbbc;
  flex: 1;
`;

// const Text = styled.Text``;

const ScrollView = styled.ScrollView`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
`;

const CardSmall = styled.TouchableOpacity`
    height: 60px;
    background: #FFF;
    border-radius: 8px;
    margin-bottom:5px;
    margin-top:5px;
    padding: 15px;
`;

export default class Education extends Component {
  render() {
    return (
      <>
      <Container>
        <ScrollView>
          <CardSmall>
            <Text>Screen four</Text>
          </CardSmall>
        </ScrollView>
      </Container>
      </>
    )
  }
}
