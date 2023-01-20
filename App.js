import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { Card } from "react-native-paper";

import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { db } from "./firebase-config";
import { onValue, ref } from "firebase/database";
const favorites = [];
export default function App() {
  const [food, setFood] = useState({});

  useEffect(() => {
    return onValue(ref(db, "/food"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let foodItems = { ...data };
      setFood(foodItems);
    });
  });
  const foodKeys = Object.keys(food);

  return (
    <ScrollView>
      <View style={styles.container}>
        {foodKeys.map((key) => {
          return (
            <Card key={key} style={styles.card}>
              <Card.Cover source={{ uri: food[key].imageUrl }} />
              <Card.Content>
                <Text style={styles.cardContent}>{food[key].name}</Text>

                {/* {food.grainfree ? (
                  <Text style={styles.cardContent}>Grain free option</Text>
                ) : null}
                {food.grain ? (
                  <Text style={styles.cardContent}>Grain inclusive option</Text>
                ) : null} */}
                <Button
                  title="Favorite"
                  onPress={() => {
                    favorites.push(food);
                    console.log("favorites", favorites);
                  }}
                />
              </Card.Content>
            </Card>
          );
        })}

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  card: {
    width: 300,
    align: "center",
    marginTop: 20,
  },
  cardContent: {
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
