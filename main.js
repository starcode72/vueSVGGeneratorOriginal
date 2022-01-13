const app = ({
  data() {
    return {
      width: '720',
      height: '450',
      cx: '740',
      cy: '450',
      r: '150',
      red: 0,
      green: 0,
      blue: 0,
      strokeRed:0,
      strokeGreen: 0,
      strokeBlue: 0,
      strokeWidth: 0,
      stroke: false
    }
  },
  methods: {
    strokeClick() {
      return this.strokeRed =  250,
      this.strokeWidth = 5
    },
    strokeZero() {
      return this.strokeRed = 0
      this.strokeWidth = 0
    }
  },
  computed: {
    panelColor() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`
    },
    strokeColor() {
      return `rgb(${this.strokeRed}, ${this.strokeGreen}, ${this.strokeBlue})`
    }
  }
})
Vue.createApp(app).mount("#app")