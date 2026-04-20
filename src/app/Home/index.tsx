import { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import Item from "@/components/Item";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);
  const [items, setItems] = useState<ItemStorage[]>([]);
  const [description, setDescription] = useState("");

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe o que você quer adicionar.");
    }
    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    await itemsByStatus();
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
    } catch (error) {
      console.log(error);
      alert("Não foi possível filtrar os items");
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);
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
