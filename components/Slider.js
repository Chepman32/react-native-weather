import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
//import { Constants } from 'expo';

const { width } = Dimensions.get('window');
const array = [1, 2, 3, 4, 5, 6];
export class Slider extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollTo({ x: -30 });
    }, 1); // scroll view position fix
  }
  //	return <View style={item % 2 === 0 ? styles.view: styles.view2}></View>
  render() {
    return (
      <ScrollView
        ref={scrollView => {
          this.scrollView = scrollView;
        }}
        style={styles.container}
        //pagingEnabled={true}
        horizontal={false}
        decelerationRate={0}
        snapToInterval={width - 60}
        snapToAlignment={'center'}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>
        {this.props.array.map(item => {
          return (
            <ScrollView horizontal={true}>
              {array.map(item => {
                return (
                  <View style={item % 2 === 0 ? styles.view : styles.view2} />
                );
              })}
            </ScrollView>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 3,
  },
  view: {
    marginTop: 100,
    backgroundColor: 'blue',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
});