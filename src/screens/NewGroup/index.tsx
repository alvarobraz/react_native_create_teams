import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { AppError } from "@utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {

  // estate de group
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
 
      // Verifica se existe algo digitado excluindo os espaços em branco
      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group })
    } catch (error) {
      console.log(error)
      // se erro da intâmcia exibe o error.message
      if(error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input 
          placeholder="Nome da turma"
          // setando group
          onChangeText={setGroup}
        />
        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}