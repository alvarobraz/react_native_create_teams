import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {

  // estate de group
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleNew() {
    // passando paramêtro de group
    navigation.navigate('players', { group })
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