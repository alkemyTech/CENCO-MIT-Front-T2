const backendUrl = import.meta.env.VITE_BACKEND_URL;


export async function registerUser(formData: any): Promise<void> {
    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('Falta el token de acceso. Por favor, inicia sesión nuevamente.');
    }

    const response = await fetch(`${backendUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al registrar el usuario');
    }
}
