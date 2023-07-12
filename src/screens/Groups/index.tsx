import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {

  const [isLoading, setIsLoading] = useState(true);
  // criando estado default para groups
  // const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Inimigos do gol']);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  // função que busca todos os grupos no storage e seta ela em setGroups
  async function fetchGroups() {
    try {

      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    } 
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  // useFocusEffect garante a renderização da informação do componente quando volta para ele
  // useCallback garante a leitura de uma renderização que já aconteceu
  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))

  return (
    <Container>
     <Header/>
     <Highlight
        title='Turmas'
        subtitle='Jogue com sua turma'
     />
     {/* Criando flat list para groups */}
     <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}