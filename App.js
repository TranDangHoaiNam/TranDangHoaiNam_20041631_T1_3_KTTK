// import React, { useEffect, useState } from 'react';
// import { View, Text, Animated } from 'react-native';

// const App = () => {
//   const [opacityValue] = useState(new Animated.Value(0));

//   useEffect(() => {
//     animateText();
//   }, []);

//   const animateText = () => {
//     Animated.sequence([
//       Animated.timing(opacityValue, {
//         toValue: 0,
//         duration: 3000,
//         useNativeDriver: false,
//       }),
//       Animated.timing(opacityValue, {
//         toValue: 1,
//         duration: 3000,
//         useNativeDriver: false,
//       }),
//     ]).start();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Animated.Text
//         style={{
//           fontSize: 20,
//           opacity: opacityValue,
//         }}
//       >
//         Xin chào ! Tôi là Trần Đặng Hoài Nam !!!!!
//       </Animated.Text>
//       <View style={{ height: 20 }} />
//       <Animated.Text
//         style={{
//           fontSize: 20,
//           opacity: opacityValue,
//         }}
//       >
//        <View>Tôi là sinh viên trường Đại Học Công Nghiệp thành Phố Hồ Chí Minh !!!! </View>
//       </Animated.Text>
//     </View>
//   );
// };

// export default App;



//cau 2
// import React, { useRef } from 'react';
// import { View, Text, TouchableOpacity, Animated } from 'react-native';

// const App = () => {
//   const rotation = useRef(new Animated.Value(0)).current;

//   const startAnimation = () => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   };

//   const stopAnimation = () => {
//     rotation.stopAnimation();
//   };

//   const restartAnimation = () => {
//     rotation.setValue(0);
//     startAnimation();
//   };

//   const rotateInterpolation = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const animatedStyle = {
//     width: 50,
//     height: 50,
//     backgroundColor: 'blue',
//     transform: [{ rotate: rotateInterpolation }],
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Animated.View style={animatedStyle} />
//       <View style={{ marginTop: 20 }}>
//         <TouchableOpacity onPress={startAnimation} style={styles.button}>
//           <Text style={styles.buttonText}>Start</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={stopAnimation} style={styles.button}>
//           <Text style={styles.buttonText}>Stop</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={restartAnimation} style={styles.button}>
//           <Text style={styles.buttonText}>Restart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = {
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
  
// };

// export default App;


import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

const App = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // lặp vô hạn
      }
    ).start();
  }, []);

  const interpolatedRotateAnimation = shakeAnimation.interpolate({
    inputRange: [-10, 0, 10],
    outputRange: ['-5deg', '0deg', '5deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/chuong.png')} 
        style={[styles.bellImage, { transform: [{ rotate: interpolatedRotateAnimation }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20, 
    paddingBottom: 20, 
  },
  bellImage: {
    width: 200, 
    height: 200, 
  },
});

export default App;


