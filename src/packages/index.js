import Button from './button/button.vue';
import ButtonGroup from './button/button-group.vue';
import Icon from './icon.vue';
import Col from './layout/col.vue'
import Row from './layout/row.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Icon.name, Icon);
  Vue.component(Col.name, Col);
  Vue.component(Row.name, Row);
};

if (typeof window.Vue !== 'undefined') {
  install(Vue);
}

export default {
  install,
};
