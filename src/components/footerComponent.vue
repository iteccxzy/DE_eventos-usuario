<template src="./templates/footerComponent.html"></template>

<script>
import moment from "moment";
export default {
  name: "footerComponent",
  data() {
    return {
      fecha_incio: moment("2020-03-19"),
      fecha_actual: moment(),
      count: ""
    };
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.count = this.fecha_actual.diff(this.fecha_incio, "days");
    }
  }
};
</script>