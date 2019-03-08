<template>
  <div class="imageuploader">
    <form v-if="!showDone && !showUploading">
      <label class="imageuploadbutton" :class="{ highlighted : highlighted }">
        <input type="file" @change="select" ref="file">
        <span>Select</span>
      </label>
      <label
        class="imageuploadbutton"
        @click="upload"
        :class="{ highlighted : !highlighted }"
      >Upload</label>
    </form>

    <div v-if="showUploading">Uploading
      <div class="progressbar">
        <div class="bar" :style="{ width : uploadProgress + '%'}">a</div>
      </div>
    </div>
    <div v-if="showDone">Uploaded</div>
  </div>
</template>

<script>
import axios from "@/helpers/axios";
export default {
  data: function() {
    return {
      file: "",
      highlighted: true,
      showDone: false,
      showUploading: false,
      uploadProgress: 0
    };
  },
  methods: {
    select() {
      this.file = this.$refs.file.files[0];
      this.highlighted = false;
    },
    upload() {
      let formData = new FormData();
      formData.append("file", this.file);
      this.showUploading = true;

      axios
        .post("users/avatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: function(progressEvent) {
            this.uploadProgress = parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            );
            console.log(this.uploadProgress);
          }.bind(this)
        })
        .then(
          function() {
            this.showDone = true;
            console.log("SUCCESS!!");
            this.showUploading = false;
            this.$store.commit("getuserinfo");
          }.bind(this)
        )
        .catch(
          function(err) {
            console.log(err);
            console.log("FAILURE!!");
          }.bind(this)
        );
    }
  }
};
</script>

<style lang="scss">
.progressbar {
  border: solid 1px #fff;
  padding: 3px 4px;
  margin-top: 6px;
  .bar {
    overflow: hidden;
    color: #f00;
    background: #f00;
    height: 2px;
    width: 100%;
  }
}
.highlighted {
  background: #fff;
  color: #000 !important;
  &:hover {
    background: #aaa;
  }
}
.imageuploader {
  color: #fff;
  .imageuploadbutton {
    color: #ddd;
    border: solid 1px #ddd;
    padding: 10px 15px;
    margin-top: 10px;
    display: block;
    text-align: center;
  }
  input {
    position: absolute;
    top: -1000px;
  }
}
</style>