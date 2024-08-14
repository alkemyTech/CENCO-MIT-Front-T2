import { useState } from 'react';
import { User } from '../interfaces/User';

export function useDashborad() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = (word: string) => {
        setSearchTerm(word)
    }
    const [users, setUsers] = useState<User[]>([]);

    const getAllUsers = async (searchTerm: string) => {

        const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/${import.meta.env.VITE_DASHBOARD_ADMIN_URL}`;
        const url = searchTerm ? `${baseUrl}?search=${encodeURIComponent(searchTerm)}` : baseUrl;

        try {
            const token = sessionStorage.getItem('accessToken')
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token}`
                },
            })

            if (!response.ok) throw Error('Error fetching')
            const data: Response = await response.json();
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