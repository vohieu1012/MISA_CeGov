<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <div class="container">
      <div class="form-box">
        <div @click.stop="toggleCombo = !toggleCombo" class="combobox-title">
          <span>{{ selected }}</span> <span class="chevron-down"></span>
        </div>
        <ul v-show="toggleCombo" class="combobox">
          <li v-for="item in cities" @click="selectedItem(item)" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="form-box">
        <label for="">Ait Olduğu İlçeler</label>
        <p v-if="getDistrict.length <= 0 && cityId != 0">
          Seçilen Şehire Ait İlçe Bulunamadı!
        </p>
        <ul>
          <li v-for="(item, index) in getDistrict" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div style="display: none" class="form-box">
        <input type="text" @keyup="testmet($event)" :value="name" />
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      selected: "Tất cả",
      cityId: 0,
      cities: [
        { id: 1, name: "Tất cả" },
        { id: 2, name: "Gia đình" },
        { id: 3, name: "Tập thể" },
        { id: 4, name: "Cá nhân" },
        { id: 5, name: "Cá nhân và Tập thể" },
        { id: 6, name: "Burdur" },
      ],
      toggleCombo: false,
      district: [
        { name: "Kartal", cityId: 1 },
        { name: "Maltepe", cityId: 1 },
        { name: "Mamak", cityId: 2 },
        { name: "Kızılay", cityId: 2 },
        { name: "Çeşme", cityId: 3 },
        { name: "Foça", cityId: 3 },
      ],
    };
  },
  mounted() {
    let val;
    document.addEventListener("click", function () {
      val = document.querySelector(".combobox");
      val.style.display = "none";
    });
  },
  methods: {
    selectedItem(value) {
      this.selected = value.name;
      this.cityId = value.id;
      this.toggleCombo = false;
    },
    testmet(event) {
      console.log(event);
      this.name = event.target.value;
    },
  },
  computed: {
    getDistrict() {
      var list = this.district.filter((x) => x.cityId == this.cityId);
      return list;
    },
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
.pointer {
  cursor: pointer;
}
a,
button {
  color: #4fc08d;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}
.container {
  position: relative;
  width: 96%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form-box {
  position: relative;
  width: 100%;
  max-width: 350px;
  text-align: left;
  margin: 20px 0;
}
.combobox-title {
  position: relative;
  margin-top: 10px;
  width: 100%;
  border: 1px solid rgb(221 221 221);
  border-radius: 7px;
  padding: 10px 7px;
  cursor: pointer;
}
.chevron-down::before {
  content: "";
  position: absolute;
  top: 13px;
  right: 24px;
  width: 2px;
  height: 10px;
  transform: rotate(130deg);
  background-color: gray;
  border-radius: 0 0 5px 5px;
}
.chevron-down::after {
  content: "";
  position: absolute;
  top: 13px;
  right: 16px;
  width: 2px;
  height: 10px;
  transform: rotate(-130deg);
  background-color: gray;
  border-radius: 0 0 5px 5px;
}
.combobox {
  position: absolute;
  width: 100%;
  margin: 10px 0;
  border: 1px solid rgb(221 221 221);
  border-radius: 7px;
  background: #fff;
  z-index: 1;
}
.combobox li {
  position: relative;
  width: 100%;
  display: flex;
  padding: 5px 7px;
}
.combobox li:hover {
  background-color: rgb(214, 231, 235);
  color: #fff;
  cursor: pointer;
}
</style>
