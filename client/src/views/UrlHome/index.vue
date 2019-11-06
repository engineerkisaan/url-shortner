<template>
  <div @click="shuffle">
    <h1 @mouseover="hover = true" ref="h1">Url Shortener</h1>
    <div class="movingBox" ref="section2">
      <div v-for="m in 3" :key="m" class="animateme2" ref="animateme2">&nbsp;</div>
    </div>
    <div class="input-box input-box1" ref="inputBox">
      <input type="text" v-model="url" class="form__field form__field1" placeholder="Enter url" />
      <input
        :disabled="disabled"
        type="button"
        value="shorten"
        class="btn btn--primary btn--inside uppercase"
        :class="{ 'cursor-not': disabled}"
        @click="onClick"
        autofocus
      />
      <h6 v-if="error">uh ohh enter valid url please!!</h6>
      <h6>{{message}}</h6>
    </div>
    <div class="input-box input-box2" v-if="shortUrl">
      <span ref="moveup" class="moveup" v-if="shortUrl">{{shortUrl}} &nbsp; copied!!</span>
      <input ref="text" type="text" v-model="shortUrl" disabled class="form__field form__field2" />
      <input
        :disabled="disabled"
        type="button"
        value="copy"
        class="btn btn--primary btn--inside uppercase"
        :class="{ 'cursor-not': disabled}"
        @click="copy"
      />
    </div>
    <section ref="section">
      <div v-for="n in 10" :key="n" ref="animateme"></div>
    </section>
    <div class="footer">
      <p>
        Backend:
        <svg
          width="12"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github-square"
          class="svg-inline--fa fa-github-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
          />
        </svg>
        <a href="https://github.com/engineerkisaan" target="_blank">EngineerKisaan</a>
        Frontend:
        <svg
          width="12"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github-square"
          class="svg-inline--fa fa-github-square fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
          />
        </svg>
        <a href="https://github.com/webclidev" target="_blank">WebCliDev</a>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "@/axios";
export default {
  name: "UrlHome",
  data() {
    return {
      secDivs: "",
      heading1: "",
      hover: false,
      url: "",
      error: false,
      shortUrl: "",
      message: ""
    };
  },
  mounted() {
    (this.secDivs = this.$refs.animateme), (this.heading1 = this.$refs.h1);
    this.bganimate();
    this.shuffle();
  },
  watch: {
    hover(newValue, oldValue) {
      if (newValue === true) {
        this.rotateMe();
      }
    }
  },
  computed: {
    disabled() {
      if (this.url.length >= 10) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    bganimate() {
      let t1 = this.$anime.timeline({
        easing: "easeOutExpo",
        duration: 750
      });
      t1.add({
        targets: this.secDivs,
        width: "100%",
        backgroundColor: "rgb( 197,197,255 )",
        delay: this.$anime.stagger(100)
      });
      t1.add({
        targets: this.secDivs,
        width: "90%",
        backgroundColor: "rgb( 235,235,255 )"
      });
      t1.add({
        targets: this.heading1,
        top: "5%",
        opacity: 1,
        duration: 4000
      });
      t1.add(
        {
          targets: this.$refs.inputBox,
          top: "230px",
          opacity: 1,
          duration: 4000
        },
        "-=4000"
      );
      t1.add(
        {
          targets: this.$refs.section2,
          opacity: 1,
          duration: 100
        },
        "-=2000"
      );
    },
    rotateMe() {
      let rotate = this.$anime({
        targets: this.$refs.section,
        scaleY: 2,
        scaleX: 2,
        translateX: "40%",
        rotate: "45deg",
        duration: 5000,
        autoplay: true
      });
    },
    shuffle() {
      this.$anime.set(this.$refs.animateme2, {
        translateX: () => {
          return this.$anime.random(50, 250);
        },
        rotate: () => {
          return this.$anime.random(0, 360);
        }
      });
    },
    textCopied() {
      this.$anime({
        targets: this.$refs.moveup,
        keyframes: [
          {
            translateY: -70,
            opacity: 1,
            easing: "easeOutExpo",
            duration: 1000
          },
          { opacity: 0, duration: 500 },
          { translateY: 0 }
        ],
        duration: 1000,
        easing: "easeOutElastic(1, .9)",
        loop: false
      });
    },
    async onClick() {
      this.shortUrl = "";
      this.message = "";
      var myVar = setInterval(() => {
        this.shuffle();
      }, 100);
      const res = await axios.post("/url/toShort", { url: this.url });
      if (res) {
        clearTimeout(myVar);
        this.shortUrl = res.data.data ? res.data.data.shortUrl : "";
        this.message = res.data.message;
      } else {
        clearTimeout(myVar);
        console.log("error");
      }
      // clear message
      setTimeout(() => {
        this.message = "";
      }, 1200);
    },
    copy() {
      const element = this.$refs.text;
      this.textCopied();
      var range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    }
  }
};
</script>
<style lang="scss" src="./urlHome.scss">
</style>