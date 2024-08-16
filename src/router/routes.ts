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
    name: 'second',
    component: 'second-page',
    action: async () => {
      await import('../pages/second/second-page.js');
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
