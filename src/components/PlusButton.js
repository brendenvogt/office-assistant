import * as React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native-ui-lib';

import { colors } from '../styles';

export default function PlusButton(props): React.Node {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        right: 20,
        bottom: 20,
      }}
      testID="add-new-notification"
      {...props}
    >
      <View
        centerV
        centerH
        style={{
          backgroundColor: colors.darkBlue,
          height: 50,
          width: 50,
          borderRadius: 25,
        }}
      >
        <Image
          style={{
            width: 14,
            height: 14,
          }}
          assetName="plus"
          assetGroup="icons"
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}
