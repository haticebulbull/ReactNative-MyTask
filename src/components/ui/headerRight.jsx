import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Bubble, Share, More} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Bubble size="24" color={AppColors.SECONDARY} style={styles.icon} />
      <Share size="24" color={AppColors.SECONDARY} style={styles.icon} />
      <More size="24" color={AppColors.SECONDARY} style={styles.icon} />
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});
