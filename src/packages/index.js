import Button from './button/button.vue';
import ButtonGroup from './button/button-group.vue';
import Icon from './icon.vue';
import Col from './layout/col.vue'
import Row from './layout/row.vue'
import Aside from './container/aside.vue'
import Container from './container/container.vue'
import Footer from './container/footer.vue'
import Main from './container/main.vue'
import Header from './container/header.vue'
import Input from './input.vue';

const install = (Vue) => {
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Icon.name, Icon);
  Vue.component(Col.name, Col);
  Vue.component(Row.name, Row);
  Vue.component(Aside.name, Aside);
  Vue.component(Container.name, Container);
  Vue.component(Header.name, Header);
  Vue.component(Footer.name, Footer);
  Vue.component(Main.name, Main);
  Vue.component(Input.name, Input);

};

if (typeof window.Vue !== 'undefined') {
  install(Vue);
}

export default {
  install,
};
