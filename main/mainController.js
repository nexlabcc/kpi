let menu = [
    { href: '/', name: 'Главная' },
    { href: '/more', name: 'Вторая' },
]

export const main = (req, res) => {
    res.render('main', { title: 'Главная', active: 'main' })
}

export const getMenu = (req, res) => {
    res.status(200).json(menu)
}