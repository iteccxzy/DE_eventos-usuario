<template src="./templates/tsComponent.html"></template>

<script>
import { Global } from "../global.js";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import _ from 'lodash'; 

export default {
  name: "tsComponent",
  data() {
    return {
      ts: [],
      isLoading: false,
      fullPage: true,
    };
  },
  mounted() {
    this.getSolicitudes();
    // this.doAjax();
  },
  components: {
    Loading,
  },
  computed: {
    orderedTs: function () {
      return _.orderBy(this.ts, ["dia", "horario"]);
    },
  },

  methods: {
    getSolicitudes() {
      this.isLoading = true;
      // simulate AJAX
      axios
        .get(Global.url + "ts/")
        .then((response) => {
          this.ts = response.data;
          // console.log(response.data);

          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script>