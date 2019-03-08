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

      <div class="details">
        <div class="name">{{ thisuser.fullname }}</div>
        <div class="data">
          Currently studies in
          <span class="highlight">Hotel Management Campus</span>
        </div>
        <div class="data">
          Works as a
          <span class="highlight">Ninja Coder</span> in Santsbury
        </div>
        <div class="data">
          Interned as Heart Breaker in
          <span class="highlight">Nirav's Computer</span>
        </div>
        <div class="data">
          Interned at
          <span class="highlight">Diskotheque</span>
        </div>
        <div class="data">Interests:
          <ul ref="tag_list">
            <li>Heart Breaking</li>
            <li>Betrayal</li>
            <li>Smoking Weed</li>
            <li>Magic</li>
            <li>C++</li>
            <li>Database Engineering</li>
            <li>Magic</li>
          </ul>
        </div>
        <div class="data">
          Has successfully delivered
          <span class="highlight">20 out of 22 jobs</span>
        </div>

        <div class="data rating">Rating: **** (20 users rated)</div>
      </div>
    </div>

    <div class="projects">
      <div class="title">Projects</div>

      <div class="project">
        <div class="image">
          <img src="img/testpic1.jpg">
        </div>
        <div class="grid_right_text">
          <div class="title">The Gutenberg Symposyum</div>
          <div class="text">
            This project involved me taking off my top and flashing by glistening breasts to anyone who would look.
            No, I was actually kidding (I hope they allow you to kid here). I actually worked with convoluted neural
            data sets and sarcophagial insomniac mummies mummified by the soulless egyptian marshdwellers.
          </div>
        </div>
      </div>

      <div class="project">
        <div class="image">
          <img src="img/testpic1.jpg">
        </div>
        <div class="grid_right_text">
          <div class="title">The project of a lonely widow</div>
          <div class="text">
            Here I worked day and night and had millions of tourneys with several fat puce pigs and danced
            with bored contemptible expressions on the destitute dance bars with joy and glee. I think this is the
            way the world ends, not with a bang, but with a whimper.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// We use local data and don't overload the Vuex store because it's not frequently needed
import imageUpload from "@/components/imageUpload";
let resume = {
  user_id: 0,
  data: "BlaBla",
  registered_at: "blabla"
};
export default {
  data: function() {
    return {
      displayImageUploader: false
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
    }
  },
  mounted() {
    let elements = this.$refs.tag_list.getElementsByTagName("li");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML =
        "<i class='fas fa-search'></i> &nbsp;" + elements[i].innerHTML;
    }
  },
  computed: {
    userImage: function() {
      return (
        "http://localhost:3000/images/" +
        this.$store.getters.userInfo.avatar +
        "?" +
        Date.now()
      );
    },

    thisuser: function() {
      return this.$store.getters.userInfo;
    }
  },
  components: {
    imageUpload
  }
};
</script>
<style lang="scss" scoped>
.resume_page {
  margin-top: 40px;
  .resume {
    display: grid;
    grid-template-columns: 200px 1fr;
    .highlight {
      display: inline-block;
      padding: 4px 6px;
      margin: 2px 2px;
      font-size: 16px;

      border: solid 1px black;
      border-radius: 5px;
    }
    .details {
      padding: 23px 0 0 30px;
      .name {
        font-size: 33px;
      }
      .data {
        font-size: 18px;
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