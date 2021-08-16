let logins = [
    { id: '1', name: 'nbid', status: 'ssss' },
    { id: '2', name: 'Google Cloud', status: 'working' },
    { id: '3', name: 'Yandex Cloud', status: 'working' },
    { id: '4', name: 'Microsoft', status: 'working' },
]

export const login = (req, res) => {
    res.status(200).json(logins)
}