import { Theme } from '../../components/Theme';
import { Container } from './styles';

export const FormStep1 = () => {
  return (
    <Theme>
      <Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label htmlFor="">
          Seu nome completo
          <input type="text" autoFocus />
        </label>

        <button /* onClick={handleNextStep} */>Próximo</button>
      </Container>
    </Theme>
  );
};
