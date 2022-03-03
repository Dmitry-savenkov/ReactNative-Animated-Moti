import { Entypo, Feather } from '@expo/vector-icons';
import * as React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated'
import { MotiView } from 'moti'
const { width, height } = Dimensions.get('screen');

const data = [
  {
    key: 0,
    job: 'Worker'
  },
  {
    key: 1,
    job: 'Worker'
  },
  {
    key: 2,
    job: 'Worker double'
  },
  {
    key: 3,
    job: 'Developer'
  },
  {
    key: 4,
    job: 'Developer Hard'
  },
  {
    key: 5,
    job: 'Hard'
  },
  {
    key: 6,
    job: 'Stonks'
  },
  {
    key: 7,
    job: 'Steel'
  },
  {
    key: 8,
    job: 'Mama use me aaaaaa'
  },
  {
    key: 9,
    job: 'Hahaha'
  },
  {
    key: 10,
    job: '2+2=5000'
  }, {
    key: 11,
    job: 'Cheeeeek'
  }
];

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function UberEats() {

  const ref = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [scrollValue, setScrollValue] = React.useState(0.5);
  React.useEffect(() => {
    ref.current.scrollToIndex({
      index,
      animated: true,
      viewOffset: 10,
      viewPosition: scrollValue
    })
  }, [index, scrollValue])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        ref={ref}
        initialScrollIndex={0}
        style={{ flexGrow: 0 }}
        data={data}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity onPress={() => {
              setIndex(fIndex)
            }}>
              <MotiView
                animate={{
                  backgroundColor: index === fIndex ? _colors.active : _colors.inactive,
                  opacity: index === fIndex ? 1 : 0.6
                }}
                transition={{ duration: 500 }}
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12
                }}>
                <Text style={{ color: '#36303F', fontWeight: '700' }}>
                  {item.job}
                </Text>
              </MotiView>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#36303F',
              fontWeight: '700',
              marginBottom: _spacing,
            }}>
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {
              setScrollValue(0)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo name='align-left' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setScrollValue(0.5)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo
                  name='align-horizontal-middle'
                  size={24}
                  color='#36303F'
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setScrollValue(1)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Entypo name='align-right' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{ color: '#36303F', fontWeight: '700', marginBottom: 10 }}>
            Navigation
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {
              if (index === 0) {
                return;
              }
              setIndex(index - 1)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Feather name='arrow-left' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              if (index === data.length - 1) {
                return;
              }
              setIndex(index + 1)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Feather name='arrow-right' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  );
}