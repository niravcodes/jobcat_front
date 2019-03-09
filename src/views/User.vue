<template>
  <div class="resume_page">
    <div class="resume">
      <div class="image">
        <img :src="userImage">
      </div>

      <div class="details">
        <div class="name">{{ userinquestion.fullname }}</div>
        <div class="namedetail">{{ userinquestion.detail }}</div>
        <div class="data" v-for="(elem,inde) in userinquestion.resume.study" :key="'c' + inde">
          Studied at
          <span class="highlight">{{ elem }}</span>
        </div>
        <div class="data" v-for="(elem,index2) in userinquestion.resume.work" :key="'A' + index2">
          Worked at
          <span class="highlight">{{ elem }}</span>
        </div>
        <div class="data" v-for="(elem,index1) in userinquestion.resume.intern" :key="'b' + index1">
          Interned at
          <span class="highlight">{{ elem }}</span>
        </div>
        <div class="data">Interests:
          <ul ref="tag_list">
            <li v-for="(element, index) in userinquestion.resume.interests" :key="index">
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
    </div>
  </div>
</template>

<script>
// We use local data and don't overload the Vuex store because it's not frequently needed
import axios from "@/helpers/axios";

export default {
  data: function() {
    return {
      userinquestion: { resume: { study: ["", ""] } }
    };
  },
  methods: {
    getdata: function() {
      let name = this.$route.params.username;
      let user = this.$store.getters.getuserbyname(name);
      if (user == undefined) {
        this.$store
          .dispatch("downloadUserInfo", name)
          .then(() => {
            user = this.$store.getters.getuserbyname(name);
            if (user == undefined) {
              this.$router.push("/");
            } else {
              this.userinquestion = user;
            }
          })
          .catch(err => console.log(err));
      } else {
        this.userinquestion = user;
      }
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
        this.userinquestion.avatar +
        "?" +
        Date.now()
      );
    }
  },
  mounted() {
    this.getdata();
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