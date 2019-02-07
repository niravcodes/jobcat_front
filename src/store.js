import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        name: "Jennifer Lopez",
        image: "testhead3.jpg",
        description: "Dancer in local bar"
      },
      {
        id: 1,
        name: "Mahima Sharma",
        image: "testhead2.jpg",
        description: "Writer in NY times"
      },
      {
        id: 2,
        name: "Gulabi Aankhen",
        image: "testhead4.jpg",
        description: "Engineer at CNN"
      },
      {
        id: 3,
        name: "Shraddha Aryal",
        image: "testhead.png",
        description: "Nanny in the House of Doom"
      }
    ],
    posts: [
      {
        user_id: 1,
        id: 1,
        post_text:
          "Hello there deliah. My name is Nirav and even though I have never written a song for you, I'd like you to know that in the many million years of solitude of Colonel Aureliano Buendia, The only thing he thought of while making those little gold fishes with scales of madness and lead and death. Was of you. Cus. It's you its uou its all for you evewryting I do tell you all the time heaven is aplce on earth for yo."
      },
      {
        user_id: 2,
        id: 2,
        post_text:
          "The Heirs is one of my favourite korean drama and even though this girl in the picure is not the girl who played the girl, I even think that she would have been better. I love girls who are nude and barefoot and Prasamsha. Actually even when they are not nude and barefoot, it's okay if they are Prasamsha. Or some other girl, it's not like I'm in the position to choose. In fact, let me loose and tease me and mock me and kill me for having an awesome personality and brain and madness of a thousand souls and even more thousand madnessess."
      }
    ],
    notifications: [
      {
        id: 0,
        title: "Someone applied to your job",
        fulltext: "Click here to view the job and it's proposals"
      },
      {
        id: 1,
        title: "Your Job Selected",
        fulltext:
          "Your job has been selected by a prospective freelancer. View more here..."
      },
      {
        id: 2,
        title: "Respond to the Inquiry",
        fulltext:
          "Someone has inquired about a job you posted. Click here to reply"
      }
    ],

    todos: [
      {
        id: 0,
        title: "Someone applied to your job",
        fulltext: "Click here to view the job and it's proposals"
      },
      {
        id: 1,
        title: "Your Job Selected",
        fulltext:
          "Your job has been selected by a prospective freelancer. View more here..."
      }
    ],
    chat_people: [{ sort_id: 1, user_id: 2 }, { sort_id: 2, user_id: 3 }]
  },
  getters: {
    notifications: state => state.notifications,
    notification: state => id =>
      state.notifications.filter(val => val.id == id)[0],

    todos: state => state.todos,
    todo: state => id => state.todos.filter(val => val.id == id)[0],

    chat_people: state => state.chat_people,
    chat_people_by_sort: state => id =>
      state.chat_people.filter(val => val.sort_id === id)[0],

    get_user_by_id: state => id => state.users.filter(val => val.id === id)[0],

    posts: state => state.posts,
    post_by_id: state => id => state.posts.filter(val => val.id === id)[0]
  },
  mutations: {},
  actions: {}
});
