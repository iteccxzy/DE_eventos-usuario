<template src="./templates/contactoComponent.html"></template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import swal from "sweetalert";
import emailjs from "emailjs-com";
export default {
  name: "contactoComponent",

  data() {
    return {
      submitStatus: null,
      user: {
        nombre: "",
        email: "",
        mensaje: ""
      }
    };
  },
  validations: {
    user: {
      nombre: { required, minLength: minLength(5) },
      email: { required, minLength: minLength(5), email },
      mensaje: { required, minLength: minLength(15) }
    }
  },
  methods: {
    enviaMail() {
      {
        console.log("enviando!");
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = "ERROR";
        } else {
          // do your submit logic here

          
          emailjs
            .send(
              "", "",
              {
                from_name: this.user.nombre,
                from_email: this.user.email,
                message: this.user.mensaje
              },
              ""
            )
            .then(
              result => {
                console.log("SUCCESS!", result.status);
              },
              error => {
                console.log("FAILED...", error);
              }
            );
          this.submitStatus = "PENDING";
          setTimeout(() => {
            swal({
              title: "enviado!",
              text: "mensaje enviado correctamente!",
              icon: "success"
            });
            this.$router.push("/inicio");
          }, 500);
        }
      }
    }
  }
};
</script>