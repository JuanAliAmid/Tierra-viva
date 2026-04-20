
export const getProducts = async () => {

    const response = await fetch('/data/Productos.json')

    const data = await response.json()

    return data

}

export const addProducts = (product) => {

}

export const removeProducts = (id) => {

}

export const updateProducts = (product) => {

}