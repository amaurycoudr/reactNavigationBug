import {StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {RootParamList} from '../../routes';

const SettingsScreen: FC<StackScreenProps<typeof RootParamList>> = ({
  navigation,
}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="button"
        onPress={() => {
          navigation.navigate('bug');
        }}
      />
    </View>
  );
};

export default SettingsScreen;
