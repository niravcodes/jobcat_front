<template>
  <div class="resume_page">
    <div class="resume">
      <div class="image" @click="changeimg">
        <div class="changeimg" v-if="displayImageUploader">
          <button class="closebutton" @click="exitupload">
            <i class="far fa-times-circle"></i>
          </button>
          <image-upload/>
        </div>
        <img :src="userImage">
      </div>

      <div class="details" v-if="!resEditMode">
        <div class="name">{{ thisuser.fullname }}</div>
        <button class="highlight but" @click="resEditMode=!resEditMode">Edit</button>
        <div class="namedetail">{{ thisuser.resume.detail }}</div>
        <div class="data" v-for="(elem,inde) in thisuser.resume.study" :key="'c' + inde">
          Studied at
          <span class="highlight">{{ elem }}</span>
        </div>
        <div class="data" v-for="(elem,index2) in thisuser.resume.work" :key="'A' + index2">
          Worked at
          <span class="highlight">{{ elem }}</span>
        </div>
        <div class="data" v-for="(elem,index1) in thisuser.resume.intern" :key="'b' + index1">
          Interned at
          <span class="highlight">{{ elem }}</span>
        </div>
        <div class="data">Interests:
          <ul ref="tag_list">
            <li v-for="(element, index) in thisuser.resume.interests" :key="index">
              <i class="fas fa-heart"></i>
              &nbsp;
              {{ element }}
            </li>
          </ul>
        </div>
        <div class="data">
          Has successfully delivered
          <span class="highlight">20 out of 22 jobs</span>
        </div>

        <div class="data rating">Rating: **** (20 users rated)</div>
      </div>
      <div class="details resumeedit" v-if="resEditMode">
        Your Description:
        <input v-model="resume.detail" class="descinput">
        <br>Studies:
        <tag-entry :list="thisuser.resume.study" @newitem="updatestudy"/>Internships:
        <tag-entry :list="thisuser.resume.intern" @newitem="updateintern"/>Interests:
        <tag-entry :list="thisuser.resume.interests" @newitem="updateinterest"/>Employments:
        <tag-entry :list="thisuser.resume.work" @newitem="updatework"/>
        <button @click="updateresume" class="resumebutton">Update</button>
        <button @click="resEditMode = false" class="resumebutton">Exit without updating</button>
      </div>
    </div>
  </div>
</template>

<script>
// We use local data and don't overload the Vuex store because it's not frequently needed
import imageUpload from "@/components/imageUpload";
import tagEntry from "@/components/tagEntry";
import axios from "@/helpers/axios";

export default {
  data: function() {
    return {
      displayImageUploader: false,
      resEditMode: false,
      projEditMode: false,
      resume: {}
    };
  },
  methods: {
    changeimg: function() {
      this.displayImageUploader = true;
    },
    exitupload: function() {
      setTimeout(() => {
        this.displayImageUploader = false;
      }, 10);
    },
    updateresume: function() {
      console.log(this.resume);
      axios
        .post("users/resume", { resume: this.resume })
        .then(() => {
          console.log("done");
          this.$store.commit("getuserinfo");
          this.resEditMode = false;
        })
        .catch(err => console.log(err));
    },
    updateintern: function(elem) {
      this.resume.intern = elem;
    },
    updatework: function(elem) {
      this.resume.work = elem;
    },
    updateinterest: function(elem) {
      this.resume.interests = elem;
    },
    updatestudy: function(elem) {
      this.resume.study = elem;
    },
    updatedetail: function(elem) {
      this.resume.detail = elem;
    }
  },
  computed: {
    userImage: function() {
      return (
        window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        "3000" +
        "/images/" +
        this.$store.getters.userInfo.avatar +
        "?" +
        Date.now()
      );
    },

    thisuser: function() {
      return this.$store.getters.userInfo;
    }
  },
  mounted() {
    this.resume = this.thisuser.resume;
    console.log(this.resume);
  },
  components: {
    imageUpload,
    tagEntry
  }
};
</script>

<style lang="scss" scoped>
.resume_page {
  margin-top: 40px;
  .resume {
    display: grid;
    grid-template-columns: 200px 1fr;
    .details {
      padding: 23px 0 0 30px;
      .name {
        font-size: 33px;
        display: inline-block;
      }
      .data {
        font-size: 18px;
      }
      .namedetail {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    ul {
      margin-left: 30px;
      margin-bottom: 8px;
      li {
        display: inline-block;
        border: solid 1px black;
        border-radius: 5px;
        padding: 7px 16px;
        margin: 3px 5px;
        width: auto;
      }
    }
  }
}
.highlight {
  display: inline-block;
  padding: 4px 6px;
  margin: 2px 2px;
  font-size: 16px;

  border: solid 1px black;
  border-radius: 5px;
}
.but {
  background: #fff;
  padding: inherit 5px;
  margin-left: 15px;
  display: block;
  float: right;
  &:hover {
    background: #333;
    color: #fff;
  }
}

.image {
  width: 200px;
  height: 200px;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  img {
    width: 100%;
    min-height: 100%;
  }

  .closebutton {
    position: absolute;
    color: #ccc;
    background: 0;
    top: 20px;
    right: 20px;
    font-size: 20px;
    border: none;
    width: 25px;
    height: 25px;
    &:hover {
      color: #fff;
    }
  }

  & > .changeimg {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #333;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    & > .button {
      background: #fff;
    }
  }
  img {
    width: 200px;
  }
}
.resumeedit {
  .resumebutton {
    background: none;
    border: solid 1px black;
    padding: 10px 20px;
    margin: 20px 20px 0 0;
    &:hover {
      background: #333;
      color: #fff;
    }
  }
  .descinput {
    padding: 5px 20px;
    width: 100%;
    display: block;
  }
}

.projects {
  margin: 60px 0 0 0;
  .image {
    width: 150px;
    height: 150px;
    img {
      width: 150px;
    }
  }

  & > .title {
    font-size: 28px;
    display: inline-block;
    margin-bottom: 20px;
  }

  & > .project {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-top: 25px;
    margin-left: 30px;
    .grid_right_text {
      padding: 0 20px;
    }
    .title {
      font-size: 22px;
      margin-bottom: 12px;
    }
  }
}
</style>