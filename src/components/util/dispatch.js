export default {
    methods: {
      dispatch (componentName, eventName, params = []) {
        let parent = this.$parent || this.$root
        let name = parent.$options._componentTag
  
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent
          if (parent) {
            name = parent.$options._componentTag
          }
        }
        if (parent) {
          parent.$emit(eventName, params)
        }
      }
    }
  }
  