import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  filtro: string
  pesquisa: string
  setFiltro: (value: string) => void
  setPesquisa: (value: string) => void
}

const initialValue: UserContextType = {
  filtro: 'relevante',
  pesquisa: '',
  setFiltro: () => {},
  setPesquisa: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [filtro, setFiltro] = useState(initialValue.filtro)
  const [pesquisa, setPesquisa] = useState(initialValue.pesquisa)

  return (
    <UserContext.Provider value={{ filtro, setFiltro, pesquisa, setPesquisa }}>
      {children}
    </UserContext.Provider>
  )
}

/**
 * TODO implementar contexto de usuário contendo
 * a opção de ordenação dos resultados por mais
 * recentes ou mais relevantes e a última consulta
 * realizada pelo usuário.
 */
