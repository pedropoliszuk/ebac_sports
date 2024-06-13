import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((f) => f.id === favoritos.id)) {
        state.itens = state.itens.filter((f) => f.id !== favoritos.id)
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { adicionarFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
