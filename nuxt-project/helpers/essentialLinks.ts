import type { EssentialLinkProps } from '~/components/EssentialLink.vue';

export const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Contato',
    caption: 'Contate-nos para mais informações',
    icon: 'phone',
    link: '/contato',
  },
  {
    title: 'Blog',
    caption: 'Aqui vc fica informado sobre tudo que acontece no mundo da tecnologia',
    icon: 'book',
    link: '/blog',
  },
  {
    title: 'Sobre',
    caption: 'Saiba mais sobre a nossa empresa',
    icon: 'info',
    link: '/sobre',
  },
];
