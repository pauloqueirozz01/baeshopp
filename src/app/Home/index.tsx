import { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import Item from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState<any>("");

  function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "informe a descrição para adicionar.");
    }
    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };
    console.log(newItem);
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input
          placeholder="O que você precisa comprar hoje?"
          onChangeText={setDescription}
        />

        <Button title="Adicionar" onPress={handleAddItem} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => {
                setFilter(status);
              }}
            />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView>
          {ITEMS.map((value) => (
            <Item
              key={value}
              data={{ status: FilterStatus.DONE, description: "Café" }}
              onStatus={() => console.log("Status alterado")}
              onRemove={() => console.log("Item Removido")}
            />
          ))}
        </ScrollView> */}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Status alterado")}
              onRemove={() => console.log("Item Removido")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyContent}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}
