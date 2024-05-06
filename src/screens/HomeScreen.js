import { useContext, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator, Avatar, List, Text } from 'react-native-paper';

import { ScaledSheet } from 'react-native-size-matters';

import { CharactersContext } from '../contexts/CharactersContext.js';


export default function HomeScreen({ navigation }) {

    const { characters, deleteCharacter, loading, fetchCharacters } = useContext(CharactersContext);

    useEffect(() => {
        fetchCharacters();

    }, []);

    return (
        <View style={styles.container}>
            {/* <Text>Home Screen</Text>
            <Button mode="outlined" onPress={() => navigation.navigate('Details')}>Ir a detalle</Button> */}

            {
                loading && <ActivityIndicator animating={true} color="#000" />
            }

            {
                !loading && <FlatList
                    style={{
                        padding: 10
                    }}

                    contentContainerStyle={{ gap: 10 }}
                    data={characters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <List.Item
                            title={item.name}
                            description={item.status}
                            left={props => <Avatar.Image size={50} source={{ uri: item.image }} />}
                            onPress={() => navigation.navigate('Details', { id: item.id, titleName: item.name ?? 'Detalles' })}
                        />
                    )}

                />
            }


        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
    },
    fontSize: '14@ms',
});
