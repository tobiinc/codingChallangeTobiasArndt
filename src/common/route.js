import Catalog from '../components/Catalog/';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'catalog',
      name: 'Catalog',
      component: Catalog,
      isIndex: true
    }
  ]
};
