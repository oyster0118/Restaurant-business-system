import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
    oftenGoods: []
}
const getters = {

}
const mutations = {
    getOftenGoods(state, obj) {
        state.oftenGoods = obj;
    },
}
const actions = {
    getOftenGoodsAction(context) {
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
            .then(response => {
                console.log(response);
                context.commit('getOftenGoods', response.data)
            })
            .catch(error => {
                console.log(error);
                alert('网络错误，不能访问');
            })
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})