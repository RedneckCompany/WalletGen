import React, { useState } from 'react';
import { Animated, View } from 'react-native';
import useInterval from '../hooks/useInterval'

interface SkeletonProps {
  readonly children?;
  readonly minOpacity?: number;
  readonly maxOpacity?: number;
  readonly backgroundColor?: string;
}

function Skeleton({ children, minOpacity = 0.3, maxOpacity = 1, backgroundColor = '#eee' }: SkeletonProps): JSX.Element {
  const animatedOpacity = new Animated.Value(0);
  const [opacityValue, setOpacityValue] = useState(0);

  const getAnimated = () => {
    return Animated.timing(animatedOpacity, {
      toValue: opacityValue,
      duration: 500,
      useNativeDriver: true
    }).start(() => setOpacityValue(opacityValue === 0 ? 1 : 0));
  };

  const getChildren = (element) => {
    return React.Children.map(element, (child, index) => {
      if (child && child.props) {
        const { style } = child.props;
        if (child.props.children) {
          return (<View key={index} style={{ ...style}}>{getChildren(child.props.children)}</View>);
        } else {
          return (<View key={index} style={[style, { backgroundColor }]} />);
        }
      }
      return (<View key={index} style={{ backgroundColor }} />);
    });
  }

  useInterval(() => getAnimated(), 800);

  return (
    <Animated.View style={{
        opacity: animatedOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: [maxOpacity, minOpacity]
        })
      }}
    >
      {getChildren(children)}
    </Animated.View>
  );
}

export default Skeleton;
