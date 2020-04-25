import homepage from './components/homepage.vue'
import resume from './components/resume.vue'
import page1 from './components/object-1.vue'
import page2 from './components/object-2.vue'
import page3 from './components/object-3.vue'
import page4 from './components/line-project.vue'

const routes = [
  { name:'homepage', path: '/homepage', component: homepage },
  { name:'resume', path: '/resume', component: resume },
  { name:'o1', path: '/object-1', component: page1 },
  { name:'o2', path: '/object-2', component: page2 },
  { name:'o3', path: '/object-3', component: page3 },
  { name:'lp', path: '/line-project', component: page4 }
]

export default routes;
//module.exports = routes;
