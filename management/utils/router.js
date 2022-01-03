import { h, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
export const routeReplace = (component) => {
  return {
    name: 'routeReplace',
    computed: {
      showChild () {
        const route = useRoute()
        const deepestMatchedRoute = route.matched[route.matched.length - 1]
        return deepestMatchedRoute.instances.default !== this
      }
    },
    render () {
      return !this.showChild ? h('router-view') : h(defineAsyncComponent(component))
    }
  }
}
