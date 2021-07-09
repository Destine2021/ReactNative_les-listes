import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';


function Liste() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    (async () => {
      const reponse = await fetch("http://restcountries.eu/rest/v2/all")
      const pays = await reponse.json()
      setCountries(pays)
      console.log(pays)
    })(); //attention ne jamais oublier d'appeler le fetch avec ()
  }, [setCountries]);

  return (
    <View style={styles.container} >
      <FlatList
        // numColumns={3}
        // KeyExtractor={(item) => item.id}
        data={countries}
        renderItem={({ item }) => (
          <View style={styles.items}>
            <ImageBackground
              style={{ width: '25rem', height: '20rem', alignItems: 'center' }}
              source={item.flag}
            />
            <Text>
              Nom: {item.name} <br />
              Capital: {item.capital}
            </Text>
          </View>
        )}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  items: {
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "pink",
    elevation: 9,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: "black",
    fontSize: 14,
    marginHorizontal: 18,
    marginVertical: 10,
  },

});
export default Liste;
