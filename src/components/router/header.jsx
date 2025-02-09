import {Text, View} from 'react-native';
import {MYNOTES} from '../../utils/router';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import {HambergerMenu, More, SearchNormal} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={screenStyle.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={{fontSize: 35, color: AppColors.SECONDARY}}>
          {MYNOTES}
        </Text>
      </View>

      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <View style={{padding: 5, flex: 1, justifyContent: 'center'}}>
          <HambergerMenu size="24" color={AppColors.SECONDARY} />
        </View>
        <View
          style={{
            padding: 15,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <SearchNormal size="24" color={AppColors.SECONDARY} />
          <More size="24" color={AppColors.SECONDARY} />
        </View>
      </View>
    </View>
  );
};

export default Header;
