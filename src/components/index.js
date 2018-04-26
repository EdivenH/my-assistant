import myMenu from './global/slidebar/my-menu.vue';
import menuItem from './global/slidebar/menu-item.vue';
import mySubmenu from './global/slidebar/my-submenu.vue';
const components = [
    myMenu,
    menuItem,
    mySubmenu
];

const install = (Vue, Opts) => {
    components.map(component => {
        Vue.component(component.name, component)
    })
};

export default {
    version: '0.0.1',
    author: 'ediven',
    install,
    myMenu,
    menuItem,
    mySubmenu
}
