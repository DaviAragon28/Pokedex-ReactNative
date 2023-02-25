import { API_URL } from "../utils/constansts";

export async function getPokemonsAPI(urlNext) {
    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`
        const response = await fetch(urlNext || url)
        const data = await response.json()
        return data
    } catch (e) {
        throw e
    }
}

export async function getPokemonDetailsByUrlAPI(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (e) {
        throw e
    }
}

export async function getPokemonDetailsAPI(id) {
    try {
        const response = await fetch(`${API_URL}/pokemon/${id}`)
        const result = await response.json()
        return result
    } catch (e) {
        throw e
    }
}