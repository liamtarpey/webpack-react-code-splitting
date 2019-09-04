export default {
    HomeComponent: () => import(/* webpackChunkName: 'home/HomeComponent' */ '../HomeComponent.jsx'),
    AboutComponent: () => import(/* webpackChunkName: 'about/AboutComponent' */ '../AboutComponent.jsx'),
    SettingsComponent: () => import(/* webpackChunkName: 'settings/SettingsComponent' */ '../SettingsComponent.jsx')
};
