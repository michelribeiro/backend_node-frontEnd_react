import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, FormGroup } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await signIn({ username, password });
    },
    [username, password, signIn]
  );

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <h2>Acesse sua conta...</h2>
        <FormGroup>
          <label htmlFor="Usuario">Usuário</label>
          <input
            type="text"
            name="user"
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <button type="submit">Entrar</button>
        </FormGroup>
      </Container>
    </>
  );
}
