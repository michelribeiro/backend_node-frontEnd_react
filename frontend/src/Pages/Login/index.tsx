import { Container, FormGroup } from "./styles";

export default function Login() {
  return (
    <>
      <Container>
        <h2>Acesse sua conta</h2>
        <FormGroup>
          <label htmlFor="Usuario">Usuário</label>
          <input type="text" name="user" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Senha</label>
          <input type="text" />
        </FormGroup>
        <FormGroup>
          <button type="submit">Entrar</button>
        </FormGroup>
      </Container>
    </>
  );
}
