import Vue from "vue";
import Vuex from "vuex";
import axios from "@/helpers/axios"
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    thisuser: {
      id: 1,
      name: "",
      fullname: "",
      avatar: "generic.png",
      email: "",
      resume: {}
    },
    users: [
      {
        id: 0,
        name: "Prasamsha Sigdel",
        image: "testhead3.jpg",
        description: "Certified Heart Breaker",
        username: ""
      },
    ],
    posts: [
      {
        username: 'persu',
        user_id: 0,
        id: 1,
        post_text:
          "Hello there deliah."
      },
    ],
    notifications: [
      {
        id: 0,
        title: "Someone applied to your job",
        fulltext: "Click here to view the job and it's proposals"
      },
    ],

    todos: [
      {
        id: 0,
        title: "Someone applied to your job",
        fulltext: "Click here to view the job and it's proposals"
      },
    ],
    messages: [
      { from: '', message: '', to: "" }
    ],
    chattingwith: undefined
  },
  getters: {
    notifications: state => state.notifications,
    notification: state => id =>
      state.notifications.filter(val => val.id == id)[0],

    todos: state => state.todos,
    todo: state => id => state.todos.filter(val => val.id == id)[0],

    chat_people: (state, getters) => {
      let chat_people = [];

      state.messages.forEach((msg) => {
        if (!chat_people.includes(msg.from)) {
          if (msg.from !== getters.userInfo.username)
            chat_people.push(msg.from)
        }
        if (!chat_people.includes(msg.to)) {
          if (msg.to !== getters.userInfo.username)
            chat_people.push(msg.to)
        }
      })
      return chat_people
    },
    chat_people_by_sort: state => id =>
      state.chat_people.filter(val => val.sort_id === id)[0],

    get_user_by_id: state => id => state.users.filter(val => val.id === id)[0],

    posts: state => state.posts,
    post_by_id: state => id => state.posts.filter(val => val._id === id)[0],

    userInfo: state => state.thisuser,
    getuserbyname: state => name => {
      return state.users.filter((elem) => { return (elem.username == name) })[0];
    },
    getallusers: state => state.users,
    chatting_with: state => state.chattingwith,
    messages: state => (username) => state.messages.filter((val) => ((val.from == username) || (val.to == username)))
  },
  mutations: {
    updatechattingwith(state, user) { state.chattingwith = user; },
    adduserincache(state, user) {
      state.users.push(user)
    },
    refreshposts(state, newposts) {
      console.log(newposts)
      state.posts = newposts.reverse();
    },
    refreshmessages(state, newposts) {
      console.log(newposts)
      state.messages = newposts.reverse();
    },
    getuserinfo(state) {
      axios
        .post("users/info")
        .then(usr => {
          if (usr == null) return undefined
          state.thisuser.username = usr.data.name;
          state.thisuser.fullname = usr.data.fullname;
          state.thisuser.id = usr.data._id;
          if (usr.data.avatar && usr.data.avatar.length)
            state.thisuser.avatar = usr.data.avatar + "?" + Date.now();
          else
            state.thisuser.avatar = "generic.png"
          if (usr.data.resume)
            state.thisuser.resume = usr.data.resume;
          else state.thisuser.resume = null
        })
        .catch(err => {
          console.log(err)
        });
    }
  },
  actions: {
    downloadUserInfo(context, name) {
      let user = {};
      let state = context.state
      let requireduser = state.users.filter((elem) => (elem.name == name));

      if (requireduser.length == 0) {
        return axios
          .post("users/info", { requested: name })
          .then(usr => {
            if (usr.data === null) return undefined
            user.username = usr.data.name;
            user.fullname = usr.data.fullname;
            user.id = usr.data._id;
            if (usr.data.avatar && usr.data.avatar.length)
              user.avatar = usr.data.avatar + "?" + Date.now();
            else
              user.avatar = "generic.png"
            if (usr.data.resume)
              user.resume = usr.data.resume;
            else user.resume = null

            context.commit('adduserincache', user)
          })
          .catch(err => {
            console.log(err)
          });
      }
    },
    downloadPosts(context) {
      return axios
        .post("posts/getposts")
        .then(usr => {
          context.commit('refreshposts', usr.data)
        })
        .catch(err => {
          console.log(err)
        });
    },

    downloadMessages(context) {
      return axios
        .post("msg/getmessages")
        .then(usr => {
          console.log("reloaded")
          context.commit('refreshmessages', usr.data)
        })
        .catch(err => {
          console.log(err)
        });
    }
  }
});
