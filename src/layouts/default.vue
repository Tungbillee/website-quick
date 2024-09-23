<template>
  <div class="dashboard">
    <div class="header">
      <div class="menu flex-bw-al">
        <div class="flex-al">
          <div class="logo" @click="toHome">
            <img :src="img('logo.svg')" alt="" />
          </div>
          <div class="options flex-al gap-80">
            <div class="options-text" @click="scrollToSection">Tính năng</div>
            <div class="options-text" @click="helper">Hỗ trợ</div>
            <div class="options-text">Cộng đồng</div>
            <div class="options-text">Tài nguyên</div>
          </div>
        </div>
        <div @click="downloadMacos" v-if="system === 'macos'" class="button">
          Tải xuống
        </div>
        <div @click="downloadWindow" v-if="system === 'windows'" class="button">
          Tải xuống
        </div>
      </div>
    </div>
    <div class="body" ref="features">
      <router-view />
    </div>
    <div class="info flex-cl-al mgt-150">
      <div class="img_download">
        <div class="flex-bw-al gap-6 w-100">
          <img :src="img('logo_info.svg')" alt="" />
          <div class="flex gap-20">
            <div v-for="(item, index) in icon_info" :key="index">
              <img :src="img(item.icon)" alt="" />
            </div>
          </div>
        </div>
        <div class="mgt-70 flex gap-256">
          <div class="flex-cl gap-25">
            <div>Tính năng</div>
            <div class="color_rg fz-15">Text to Speech</div>
            <div class="color_rg fz-15">Speech to Text</div>
            <div class="color_rg fz-15">Video Mixer</div>
            <div class="color_rg fz-15">Ghép & Nối video</div>
            <div class="color_rg fz-15">Download videos</div>
          </div>

          <div class="flex-cl gap-25">
            <div>Chính sách</div>
            <div class="color_rg fz-15">Điều khoản dịch vụ</div>
            <div class="color_rg fz-15">Chính sách affiliate</div>
          </div>
          <div class="flex-cl gap-25">
            <div>Tài nguyên</div>
            <div class="color_rg fz-15">Cộng đồng</div>
            <div class="color_rg fz-15">Blogs</div>
          </div>
          <div class="flex-cl gap-25">
            <div>Liên hệ</div>
            <div class="color_rg fz-15">086 6666 216</div>
            <div class="color_rg fz-15">hotro@smit.vn</div>
          </div>
        </div>
        <div class="dmca">
          <div class="flex-bw-al gap-6 mgt-30">
            <div>
              <div>© Công ty cổ phần giải pháp công nghệ SMIT</div>
              <div class="mgt-5" style="opacity: 0.6">
                Số 9, Ngõ 75 Trần Thái Tông, Phường Dịch Vọng, Quận Cầu Giấy,
                Thành phố Hà Nội
              </div>
            </div>
            <img :src="img('dmca.svg')" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      icon_info: [
        {
          icon: "icon_lk.svg",
          title: "linkedin",
        },
        {
          icon: "icon_youtube.svg",
          title: "youtube",
        },
        {
          icon: "icon_facebook.svg",
          title: "facebook",
        },
        {
          icon: "icon_tiktok.svg",
          title: "tiktok",
        },
      ],
      system: "",
    };
  },
  mounted() {
    this.detectSystem();
  },
  methods: {
    ...mapActions(["fetchUserCount"]),

    downloadWindow() {
      window.open(
        "https://download.quickmagic.vn/Quick%20Magic%20Setup%201.2.3.zip",
        "_blank"
      );
    },
    downloadMacos() {
      window.open(
        "https://download.quickmagic.vn/Quick%20Magic%20Setup%201.2.3.zip",
        "_blank"
      );
    },
    img(data) {
      return "images/default/" + data;
    },
    helper() {
      this.$router.push({ path: "/helper" });
    },
    detectSystem() {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.indexOf("windows nt") !== -1) {
        this.system = "windows";
      } else if (userAgent.indexOf("mac os x") !== -1) {
        this.system = "macos";
      } else {
        this.system = "other";
      }
    },
    scrollToSection() {
      console.log("chạy");
      const currentPath = this.$route.path;
      console.log({ currentPath });
      if (currentPath === "/home") {
        const element = document.getElementById("target-section");
        console.log({ element });
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        this.$router.push({ path: "/home", hash: "#target-section" });
      }
    },
    toHome() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 2px;
  border-radius: 18px;
}
.dashboard {
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  background: #080b18;
}
.header {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  .menu {
    z-index: 100;
    margin-top: 135px;
    padding: 15px 15px 15px 20px;
    position: fixed;
    max-width: 1227px;
    width: 100%;
    height: 69px;
    border-radius: 61px;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(47px);

    .options {
      &-text {
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1); // Phóng to lên 10%
        }
      }
    }
    .logo {
      width: 300px;
      cursor: pointer;
    }
  }
}
.info {
  height: 20%;
  background: #080b18;

  .dmca {
    height: 200px;
    margin-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
}
</style>
