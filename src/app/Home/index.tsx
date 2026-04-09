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
const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "1 pacote de café" },
  { id: "2", status: FilterStatus.PENDING, description: "2 caixas de leite" },
  {
    id: "3",
    status: FilterStatus.DONE,
    description: "1 Pacote de Pão integral",
  },
  { id: "4", status: FilterStatus.PENDING, description: "Ovos" },
  { id: "5", status: FilterStatus.DONE, description: "Queijo" },
  { id: "6", status: FilterStatus.PENDING, description: "Tomate" },
  { id: "7", status: FilterStatus.PENDING, description: "Alface" },
  { id: "8", status: FilterStatus.DONE, description: "Frango" },
  { id: "9", status: FilterStatus.PENDING, description: "Arroz" },
  { id: "10", status: FilterStatus.PENDING, description: "Feijão" },
];

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
