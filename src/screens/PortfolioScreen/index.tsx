import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify';
import { getUserPortfolio } from './queries';
import PortfolioCoin from '../../components/PortfolioCoin';
import styles from './styles'
import AppContext from '../../utils/AppContext';

const image = require('../../../assets/images/Saly-10.png');

const PortfolioScreen = () => {
    const [balance, setBalance] = useState(0);
    const [portfolioCoins, setPortfolioCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const { userId } = useContext(AppContext);

    const fetchPorfolio = async () => {
        setLoading(true);
        try {
            const response = await API.graphql(
                graphqlOperation(
                    getUserPortfolio,
                    { id: userId },
                )
            )
            setBalance(response.data.getUser.networth)
            setPortfolioCoins(response.data.getUser.portfolioCoins.items)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPorfolio();
    }, [])

    return (
        <View style={styles.root}>
            <FlatList
                style={{ width: '100%' }}
                data={portfolioCoins}
                renderItem={({item}) => <PortfolioCoin portfolioCoin={item} />}
                onRefresh={fetchPorfolio}
                refreshing={loading}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <View style={styles.balanceContainer}>
                            <Text style={styles.label}>Portfolio balance</Text>
                            <Text style={styles.balance}>${balance}</Text>
                        </View>
                    </>
                )}
            />
        </View>
    )
}

export default PortfolioScreen
