<template>
  <div id="postlist">
    <post
      post_data="Hello there deliah. My name is Nirav and even though I have never written a song for you, I'd like you to know that in the many million years of solitude of Colonel Aureliano Buendia, The only thing he thought of while making those little gold fishes with scales of madness and lead and death. Was of you. Cus. It's you its uou its all for you evewryting I do tell you all the time heaven is  aplce on earth for yo."
      post_creator="Jennifer Lopez"
      creator_info="Dances in Local bar"
      post_id="1"
      img="testhead.png"
    />
    <post
      post_data="The Heirs is one of my favourite korean drama and even though this girl in the picure is not the girl who played the girl, I even think that she would have been better. I love girls who are nude and barefoot and Prasamsha. Actually even when they are not nude and barefoot, it's okay if they are Prasamsha. Or some other girl, it's not like I'm in the position to choose. In fact, let me loose and tease me and mock me and kill me for having an awesome personality and brain and madness of a thousand souls and even more thousand madnessess. "
      post_creator="Park Hyun Sang"
      creator_info="Actress in City Hunter"
      post_id="2"
      img="testhead2.jpg"
    />
    <post
      post_data="Hello there deliah. My name is Nirav and even though I have never written a song for you, I'd like you to know that in the many million years of solitude of Colonel Aureliano Buendia, The only thing he thought of while making those little gold fishes with scales of madness and lead and death. Was of you. Cus. It's you its uou its all for you evewryting I do tell you all the time heaven is  aplce on earth for yo."
      post_creator="Mariya Takekuchi"
      creator_info="Sang Plastic Love"
      post_id="3"
      img="testhead4.jpg"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {};
  },
  computed: {},
  components: {
    Post
  }
};
</script>

<style lang="scss" scoped>
#postlist {
  margin-top: 40px;
  margin-left: 50px;
}
</style>

