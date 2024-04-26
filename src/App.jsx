import Button from "./buttons/App";

const baseURL = 'https://ranekapi.origamid.dev/json/api/produto';

const App = () => {
  return(
    <>
      <Button baseURL={baseURL} object={"smartphone"}/>
      <Button baseURL={baseURL} object={"notebook"}/>
      <Button baseURL={baseURL} object={"tablet"}/>
    </>
  )
}

export default App
