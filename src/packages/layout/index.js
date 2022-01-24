
import Col from './col.vue'
import Row from './row.vue'


const install = (Vue) => {
  Vue.component(Col.name, Col);
  Vue.component(Row.name, Row);
};

export {
  install
}