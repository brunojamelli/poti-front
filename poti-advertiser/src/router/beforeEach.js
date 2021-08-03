import { isSignedIn } from '../utils/auth';

export default async (to, from, next) => {
  if (to.name === 'registro-anunciante' || to.name === 'listagem-publica' || to.name === 'detalhe-publico') {
    next()
  } else {
    if (to.name !== 'entrar' && !isSignedIn()) {
      next('/entrar');
    } else {
      if (to.name === 'entrar' && isSignedIn()) {
        next('/');
      } else {
        next()
        return;
      }
    }
  }

}