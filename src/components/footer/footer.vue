<template>
    <footer class="ion-footer" :class="[modeClass,{'hide-bar':isHide}]" :style="style">
        <slot></slot>
    </footer>
</template>
<script type="text/javascript">
  /**
   * @component Footer
   * @description
   *
   * ## 基础组件 / Footer组件
   *
   * Header和Footer组件结构类似, 都是提供一个包裹容器, 不同的是一个固定在上面, 一个固定在下面.
   *
   * Header组件是Vimo页面的的三个主要构成之一, 主要是为Toolbar/Navbar/自定义结构提供一个容器,
   * 该组件将始终固定在页面顶部, Content组件会根据Header的高度自动设定`margin`值, 或者`padding`值.
   *
   * ### 可用的样式属性
   * - [no-border] - 无边框
   *
   * @demo #/content
   *
   * */
  export default {
    name: 'Footer',
    inject: {
      pageComponent: {
        from: 'pageComponent',
        default: null
      }
    },
    provide () {
      let _this = this
      return {
        footerComponent: _this
      }
    },
    props: {
      mode: {
        type: String,
        default () {
          return (this.$config && this.$config.get('mode', 'ios')) || 'ios'
        }
      }
    },
    data () {
      return {
        // -------- public --------
        isHide: false,
        style: {}
      }
    },
    computed: {
      modeClass () {
        return `footer-${this.mode}`
      }
    },
    methods: {
      // -------- public --------
      /**
       * @function hide
       * @description
       * 隐藏Footer
       * */
      hide () {
        this.isHide = true
      },

      /**
       * @function show
       * @description
       * 显示Footer
       * */
      show () {
        this.isHide = false
      },

      /**
       * @function toggle
       * @description
       * Toggle显示Footer
       * */
      toggle () {
        this.isHide = !this.isHide
      },

      /**
       * @function setStyle
       * @param {object} style - 传入的样式对象
       * @see https://cn.vuejs.org/v2/guide/class-and-style.html#对象语法-1
       * @description
       * 设置Footer的样式
       * */
      setStyle (style) {
        this.style = style
      }
    },
    created () {
      if (this.pageComponent) {
        this.pageComponent.footerComponent = this
      }

      this.$root.$on('onMenuOpen', () => {
        this.hide()
      })
      this.$root.$on('onMenuClosing', () => {
        this.show()
      })
      this.$root.$emit('footer:created', this)
    },
    mounted () {
      this.$root.$emit('footer:mounted', this)
    }
  }
</script>
