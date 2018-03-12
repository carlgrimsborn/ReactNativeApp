import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Progress = ({amount}: IProps) => {
  return (
    <View>
      <ActivityIndicator size='small' color='#0000ff' />
      <Text>Progress: {amount}</Text>
    </View>
  );
};

interface IProps {
  amount: number;
}

export default Progress;
