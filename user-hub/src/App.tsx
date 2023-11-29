import { useContext } from "react";
import { Menu } from "./features/Menu/components/Menu";
import { ListOfUsers } from "./features/User/components/ListOfUsers";
import { UserContext } from "./features/User/context/UserContext";

export function App() {

  const { actions: { changePage }, hasNextPage } = useContext(UserContext)

  return (
    <>
      <header>
        <h1>User Hub</h1>
        <Menu />
      </header>
      <main>
        <ListOfUsers />
        {hasNextPage ? <button onClick={changePage}>Cargar mas usuarios</button> : <p>No hay mas resultados</p>}
      </main>
    </>
  )
}