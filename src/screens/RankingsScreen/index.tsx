import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import UserRankingItem from '../../components/UserRankingItem';
import styles from './styles'

const image = require('../../../assets/images/Saly-20.png');

const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    netWorth: 69420,
    image: 'http://pngimg.com/uploads/dollar_sign/dollar_sign_PNG6.png'
}, {
    id: '2',
    name: 'Bitcoin',
    netWorth: 69420,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png'
}, {
    id: '3',
    name: 'Etherium',
    netWorth: 30120,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png'
}];

const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
                style={{ width: '100%' }}
                data={portfolioCoins}
                renderItem={({item, index}) => <UserRankingItem user={item} place={index+1} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.label}>Rankings</Text>
                    </>
                )}
            />
        </View>
    )
}

export default PortfolioScreen
