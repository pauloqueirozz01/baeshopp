import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  placeholder: string;
};
export function Input({ placeholder, ...rest }: Props) {
  return (
    <TextInput style={styles.container} placeholder={placeholder} {...rest} />
  );
}
