import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>
        Entre e Compartilhe sua Mensagem
      </strong>
      <a href="#" className={styles.signInWithGitHub}>
        <VscGithubInverted />
        Entrar com Git Hub
      </a>
    </div>
  )
}