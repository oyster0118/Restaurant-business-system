import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Member from '@/components/page/Member'
import Raw from '@/components/page/Raw'
import Setting from '@/components/page/Setting'
import Shop from '@/components/page/Shop'
import Statistics from '@/components/page/Statistics'
import Error from '@/components/page/Error'


Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            redirect: '/pos'
        },
        {
            path: '/pos',
            name: 'Pos',
            component: Pos
        },
        {
            path: '/member',
            name: 'Member',
            component: Member
        },
        {
            path: '/raw',
            name: 'Raw',
            component: Raw
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/statistics',
            name: 'Statistics',
            component: Statistics
        },
        {
            path: '*',
            component: Error
        }
    ]
})