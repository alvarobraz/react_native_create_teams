import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';
// importando groupsGetAll
import { groupsGetAll } from './groupsGetAll';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupCreate(newGroup: string) {
  try {

    // recebendo groupsGetAll
    const storedGroups = await groupsGetAll();

    // funcionalidade que verifica se já existe algum grupo
    const groupAlreadyExists = storedGroups.includes(newGroup);

    if(groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }


    // recebendo e incrementando
    const storage = JSON.stringify([...storedGroups, newGroup])
    // setando no storage a info nova com => key(GROUP_COLLECTION), valor(storage) 
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}