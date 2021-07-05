<template src="./templates/cargaComponent.html"></template>

<script>
import { Global } from "../global.js";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "cargaComponent",
  data() {
    return {
      docentes: [],
      materias: [],
      dias: [
        { dia: "lunes" },
        { dia: "martes" },
        { dia: "miercoles" },
        { dia: "jueves" },
        { dia: "viernes" },
        { dia: "sabado" }
      ],
      horarios: [],

      // para v-model
      selectedDocente: "",
      selectedMateria: "",
      selectedDia: "",
      selectedHora: "",

      // para guradar

      carrera_id: ""
    };
  },
  mounted() {
    this.getDocentes();
    this.getHorarios();
  },
  methods: {
    getDocentes() {
      axios
        .get(Global.url + "docentes/")
        .then(response => {
          this.docentes = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    },
    getHorarios() {
      axios
        .get(Global.url + "horarios/")
        .then(response => {
          this.horarios = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    },
    tmaterias(event) {
      let carr = event.target.selectedIndex;
      carr = carr - 1;
      console.log(carr);
      this.carrera_id = this.docentes[carr].carrera;

      axios
        .get(Global.url + "smateria/" + this.carrera_id)
        .then(response => {
          this.materias = response.data;
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    },
    save() {
      axios
        .post(Global.url + "solicitudes/", {
          dia: this.selectedDia,
          carrera: this.carrera_id,
          materia: this.selectedMateria,
          horario: this.selectedHora,
          docente: this.selectedDocente
        })
        .then(response => {
          if (response.status == "201") {
            swal({
              title: "ts guardada!",
              text: "La tutoria se ha guardado correctamente!",
              icon: "success"
            });
            this.$router.push("/inicio");
            console.log(response);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>