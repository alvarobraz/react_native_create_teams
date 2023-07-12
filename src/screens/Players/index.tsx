import { useState, useEffect, useRef } from 'react';
import { FlatList, Alert, TextInput, Keyboard } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { PlayerCard } from '@components/PlayerCard';
import { Filter } from "@components/Filter";
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

// tipando props que vem via navigation
type RouteParams = {
  group: string;
}


export function Players() {
  const [isLoading, setIsLoading] = useState(true);

  //estados
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const navigation = useNavigation();

  // use route
  const route = useRoute()

  // desestruturando group que vem de params como props 
  const { group } = route.params as RouteParams

  // usando useRef, passando como parâmetro <TextInput>, no caso dizendo qeu tipod e elemento é
  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {

    // verifica se está vazio
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', `Informe um nome para poder adicionar ao time ${team}`);
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {

      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      Keyboard.dismiss()

      // resetando o valor após ser salvo
      setNewPlayerName('');

      fetchPlayersByTeam();

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true);
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);

      fetchPlayersByTeam()

    } catch (error) {
      console.log(error);

      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate('groups');

    } catch (error) {
      console.log(error);
      Alert.alert('Remover Grupo', 'Não foi posível remover o grupo');
    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover',
      'Deseja remover o grupo?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => groupRemove() }
      ]
    )
  }


  useEffect(() => {
    fetchPlayersByTeam();
  },[team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        // recebendo group
        title={group}
        subtitle="adicione a galera e separe os times"
      />
     <Form>
        <Input 
          // Passando o ref para o input que foi tipado lá no componente Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          // value recebendo o estado de newPlayerName
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon 
          icon="add" 
          onPress={handleAddPlayer} 
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name} 
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button 
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />    
    </Container>
  )
}