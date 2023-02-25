import { POKEMON_TYPE_COLORS } from './constansts'

const getColorByType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByType