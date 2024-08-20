import { RouteDefinition } from '@open-cells/core/types'; 

export const routes: RouteDefinition[] = [
  {
    path: '/',
    name: 'home',
    component: 'home-page',
    action: async () => {
      await import('../pages/home/home-page.js');
    },
  },
  {
    path: '/pokemon/:nombre',
    name: 'evolution',
    component: 'evolution-page',
    action: async () => {
      await import('../pages/evolution/evolution-page.js');
    },
  },
  {
    path: '/pokemon/:nombre/:param',
    name: 'editar',
    component: 'editar-page',
    action: async () => {
      await import('../pages/editar/editar-page.js');
    },
  }
];
