<template>
  <div @click="setcorrectfocus">
    <div class="thingy">
      <div class="elem" v-for="(element,index) in elements" :key="index">
        {{element}}
        <button @click="cross(element)">
          <i class="far fa-times-circle"></i>
        </button>
      </div>
      <input type="text" ref="data" @keyup.enter="addentry" v-model="current">
    </div>
  </div>
</template>

    <script>
export default {
  data: function() {
    return {
      current: "",
      elements: []
    };
  },
  methods: {
    addentry() {
      this.elements.push(this.current);
      this.current = "";
      this.$emit("newitem", this.elements);
    },
    setcorrectfocus() {
      this.$refs.data.focus();
    },
    cross(element) {
      console.log(element);
      this.elements = this.elements.filter(item => item !== element);
      this.$emit("newitem", this.elements);
    }
  },
  props: ["list"],
  mounted() {
    this.elements = this.list || [];
    this.$emit("newitem", this.elements);
  }
};
</script>

<style lang="scss" scoped>
.thingy {
  border: solid 1px #000;
  padding: 5px 8px;
  margin-bottom: 15px;
}
.elem {
  padding: 5px 10px;
  margin: 2px 5px;
  border: solid 1px #000;
  color: #bbb;
  background: #333;

  display: inline-block;

  button {
    background: none;
    border: none;
    color: #aaa;
    margin-left: 5px;
    &:hover {
      color: #fff;
    }
  }
}
input {
  border: none;
  outline: none;
  padding: 8px 10px;
}
</style>
