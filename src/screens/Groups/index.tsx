import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  // criando estado default para groups
  // const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Inimigos do gol']);
  const [groups, setGroups] = useState<string[]>([]);

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
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button 
        title='Criar nova turma'
      />
    </Container>
  );
}