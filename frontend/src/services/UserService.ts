import axios from 'axios';
import { ENDPOINTS } from '../config/constants';
import { User } from '../models/User';
import UserMapper from '../mappers/UserMapper';

const getAll = async (): Promise<User[]> => {
    const respone = await axios.get(`${ENDPOINTS.USERS}/all`);

    return UserMapper.dtosToModelArray(respone.data);
};

const save = (payload: User): Promise<void> => axios.post(ENDPOINTS.USERS, UserMapper.modelToDto(payload));

const saveAll = (payload: User[]): Promise<void> =>
    axios.post(`${ENDPOINTS.USERS}/all`, UserMapper.modelsToDtoArray(payload));

const UserService = {
    getAll,
    save,
    saveAll,
};

export default UserService;
