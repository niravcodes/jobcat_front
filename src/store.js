import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    chat_people: [
      { name: "Nirav", id: 1, image: "testhead2.jpg" },
      { name: "sammelan", id: 2, image: "testhead3.jpg" }
    ]
  },
  getters: {
    notifications: state => state.notifications,
    notification: state => id =>
      state.notifications.filter(val => val.id == id)[0],
    todos: state => state.todos,
    todo: state => id => state.todos.filter(val => val.id == id)[0],
    chat_people: state => state.chat_people,
    chat_people_by_id: state => id =>
      state.chat_people.filter(val => val.id === id)[0]
  },
  mutations: {},
  actions: {}
});
