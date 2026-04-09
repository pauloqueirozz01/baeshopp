import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from "react-native";

import { styles } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import Item from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];
const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index));

export function Home() {
  console.log("ITEMS: ", ITEMS);
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
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
          data={ITEMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Item
              data={{ status: FilterStatus.DONE, description: item }}
              onStatus={() => console.log("Status alterado")}
              onRemove={() => console.log("Item Removido")}
            />
          )}
        />
      </View>
    </View>
  );
}
