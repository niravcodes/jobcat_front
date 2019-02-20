<template>
  <div class="resume_page">
    <div class="resume">
      <div class="image">
        <img src="img/testhead2.jpg">
      </div>

      <div class="details">
        <div class="name">Meri Maya</div>
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
<script>
// We use local data and don't overload the Vuex store because it's not frequently needed
let resume = {
  user_id: 0,
  data: "BlaBla",
  registered_at: "blabla"
};
export default {
  mounted() {
    let elements = this.$refs.tag_list.getElementsByTagName("li");
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML =
        "<i class='fas fa-search'></i> &nbsp;" + elements[i].innerHTML;
    }
  }
};
</script>