import { useState } from 'react';
import { User } from '../interfaces/User';
import { userServices } from './../services'

export function useDashboard() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = (word: string) => {
        setSearchTerm(word)
    }
    const [users, setUsers] = useState<User[]>([]);

    const getAllUsers = async (searchTerm: string) => {
        try {
            const token = sessionStorage.getItem('accessToken')
            const response = await userServices.getAll(token!, searchTerm)
            const data = await response.json();
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }
    return {
        searchTerm,
        users,
        handleSearchClick,
        getAllUsers
    }
}