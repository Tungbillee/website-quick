<template>
  <div class="dashboard">
    <div style="display: flex" v-if="menu">
      <div class="menu">
        <div class="menu__function">
          <div class="menu__function--logo">
            <div>
              <img src="./img/siderbar/logo.svg" alt="" />
            </div>
            <div style="position: absolute; bottom: 0px; left: 2px">
              <img src="./img/siderbar/2.png" alt="" />
            </div>
            <div style="position: absolute; bottom: 233px; left: 2px">
              <img src="./img/siderbar/2.png" alt="" />
            </div>
          </div>

          <div class="menu__function--selection">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 6px;
              "
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img src="./img/siderbar/icon_gach_menu.svg" alt="" />
              </div>
              <div
                style="
                  padding-bottom: 18px;
                  opacity: 0.6;
                  color: #f1f2f4;
                  font-size: 12px;
                "
              >
                MENU
              </div>
            </div>
            <div
              class="menu__function--selection--active"
              :class="{ active: activeComponent === 'Management' }"
              @click="management"
            >
              <div>
                <img src="./img/siderbar/icon_manage.svg" alt="" />
              </div>
              <div>Nội dung</div>
            </div>
            <div
              class="menu__function--selection--active"
              @click="dowvideoVisible"
              :class="{ active: activeComponent === 'Dowvideo' }"
            >
              <div>
                <img src="./img/siderbar/icon_dow_video.svg" alt="" />
              </div>
              <div>Tải video</div>
            </div>
            <div
              class="menu__function--selection--active"
              @click="fordel"
              :class="{ active: activeComponent === 'Folder' }"
            >
              <div>
                <img src="./img/siderbar/icon_folder_siderbar.svg" alt="" />
              </div>
              <div>Thư mục</div>
            </div>
            <div
              class="menu__function--selection--active"
              @click="toolCreator"
              :class="{ active: activeComponent === 'ToolCreator' }"
            >
              <div>
                <img src="./img/siderbar/icon_dow_video.svg" alt="" />
              </div>
              <div>Content Creator Tools</div>
            </div>
            <div
              class="menu__function--selection--active"
              @click="toolSeller"
              :class="{ active: activeComponent === 'ToolSeller' }"
            >
              <div>
                <img src="./img/siderbar/icon_dow_video.svg" alt="" />
              </div>
              <div>Tools For Sellers</div>
            </div>
          </div>
        </div>
        <div class="menu__settings">
          <div
            style="
              width: 30.5px;
              height: 1px;
              background: rgba(255, 255, 255, 0.25);
            "
          ></div>
          <div style="cursor: pointer; z-index: 2">
            <img src="./img/siderbar/icon_settings.svg" alt="" />
          </div>
          <div @click="logout" style="cursor: pointer; z-index: 2">
            <img src="./img/siderbar/icon_people.svg" alt="" />
          </div>
          <div style="cursor: pointer; z-index: 2">
            <img src="./img/siderbar/icon_Advanced.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="component">
        <Dowvideo v-if="isDowvideoVisible" />
        <ToolSeller v-if="isToolSeller" />
        <Folder v-if="isFolder" />
        <Management v-if="isManagement" />
        <ToolCreator v-if="isToolCreator" />
      </div>
    </div>
    <div v-if="login" class="login">
      <div class="login__img">
        <div class="login__img-bg">
          <img class="bg1" src="./img/Siderbar/icon-bg1.svg" alt="" />
          <img class="bg2" src="./img/Siderbar/icon_bg2.svg" alt="" />
          <img class="bg3" src="./img/Siderbar/icon_bg3.svg" alt="" />
          <img class="bg4" src="./img/Siderbar/icon_bg4.svg" alt="" />
          <div class="login__img-bg-text">
            <img class="bg5" src="./img/Siderbar/icon_bg5.svg" alt="" />
            <div class="conten">Tối ưu quản lý nội dung mạng xã hội...</div>
            <div class="conten2">
              <div class="ex">Bảo mật</div>
              <div class="ex">Tiện lợi</div>
              <div class="ex">Giải phóng thời gian</div>
            </div>
            <div style="color: rgba(255, 255, 255, 0.42)">
              ------------------------------------------------
            </div>
            <div style="color: #fff; font-size: 15px">
              Đăng ký ngay nhận miễn phí 7 ngày sử dụng đầy đủ tính năng !!
            </div>
          </div>
        </div>
      </div>
      <div class="login__info">
        <div class="login__info__all">
          <div class="login__info__all-logo">
            <img src="./img/Siderbar/icon_logo_login.svg" alt="" />
            <div
              @click="popupGeolocation = !popupGeolocation"
              class="click-glct"
            >
              <div class="img">
                <template v-if="geolocationVn">
                  <img src="./img/Siderbar/icon_laco_vn.svg" alt="" />
                </template>
                <template v-else>
                  <img src="./img/Siderbar/icon_laco_usa.svg" alt="" />
                </template>
                <img
                  :style="{
                    transform: popupGeolocation ? 'rotate(180deg)' : 'none',
                  }"
                  src="./img/Siderbar/icon_down.svg"
                  alt=""
                />
              </div>

              <transition name="slide">
                <div v-if="popupGeolocation" class="glct-sl">
                  <div class="flag" @click="setLanguageVN">
                    <img src="./img/Siderbar/icon_laco_vn_max.svg" alt="" />
                  </div>
                  <div class="flag" @click="setLanguageUS">
                    <img src="./img/Siderbar/icon_laco_usa_max.svg" alt="" />
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <div class="login__info__all__txt">
            <div v-if="login_if" class="login__info__all__txt__rg">
              <div style="color: #1f2937; font-size: 24px; font-weight: 700">
                Đăng nhập
              </div>
              <div style="display: flex; gap: 5px; padding-top: 6px">
                <p>Chưa có tài khoản?</p>
                <p
                  @click="transferRegister"
                  style="color: #0077f0; cursor: pointer"
                >
                  Đăng ký
                </p>
              </div>
              <div style="padding-top: 30px">
                <div class="input-wrapper">
                  <img
                    class="icon-start"
                    v-if="email_login"
                    src="./img/Siderbar/icon_lg_ip_acc_active.svg"
                    alt=""
                  />
                  <img
                    class="icon-start"
                    v-else
                    src="./img/Siderbar/icon_input_login.svg"
                    alt=""
                  />
                  <img
                    class="icon-end"
                    v-if="email_login"
                    @click="clearIpacc"
                    src="./img/Siderbar/icon_input_login_dl.svg"
                    alt=""
                  />
                  <input
                    v-model="email_login"
                    type="text"
                    class="ac"
                    placeholder="Email hoặc tài khoản..."
                  />
                </div>
                <div class="input-wrapper" style="padding-top: 15px">
                  <input
                    v-model="password_login"
                    :type="showPassword ? 'text' : 'password'"
                    class="ac"
                    placeholder="Mật khẩu..."
                  />
                  <img
                    style="transform: translateY(-20%)"
                    class="icon-start"
                    v-if="password_login"
                    src="./img/Siderbar/icon_lg_ip_pass_active.svg"
                    alt=""
                  />
                  <img
                    class="icon-start"
                    src="./img/Siderbar/icon_lg_ip-pass.svg"
                    alt=""
                    v-else
                    style="transform: translateY(-20%)"
                  />
                  <img
                    class="icon-end"
                    src="./img/Siderbar/icon_input_pass_dl.svg"
                    alt=""
                    v-if="password_login"
                    @click="showpass"
                    style="transform: translateY(-20%)"
                  />
                </div>
                <div
                  style="padding-top: 10px; color: red; font-size: 14px"
                  v-if="error_login"
                >
                  {{ error_login }}
                </div>
              </div>
              <div
                class="remember"
                style="    display: flex;
    justify-content: space-between;
     padding-top: 20px;
}"
              >
                <div style="display: flex; gap: 7px">
                  <input
                    class="checkbox"
                    style="width: 16px; height: 16px"
                    type="checkbox"
                    name="remember"
                    id="rememberCheckbox"
                  />
                  <label
                    for="rememberCheckbox"
                    style="color: #a0aec0; font-size: 15px; font-weight: 400"
                    >Nhớ mật khẩu</label
                  >
                </div>
                <div style="color: #248ef0; font-size: 15px; cursor: pointer">
                  Quên mật khẩu
                </div>
              </div>
              <div @click="loginDashboard" class="bt-login">Đăng nhập</div>
              <div style="display: flex; margin-top: 30px; align-items: center">
                <div
                  style="height: 1.5px; background: #f1f2f4; width: 100%"
                ></div>
                <div
                  style="padding-inline: 20px; color: #a0aec0; font-weight: 500"
                >
                  hoặc
                </div>
                <div
                  style="height: 1.5px; background: #f1f2f4; width: 100%"
                ></div>
              </div>
              <div class="bt-login-gg">
                <img src="./img/Siderbar/icon_google.svg" alt="" />
                <div style="font-weight: 500">Đăng nhập bằng Google</div>
              </div>
            </div>
            <div v-if="register" class="login__info__all__txt__rg">
              <div style="color: #1f2937; font-size: 24px; font-weight: 700">
                Đăng ký tài khoản
              </div>
              <div style="display: flex; gap: 5px; padding-top: 6px">
                <p>Đã có tài khoản?</p>
                <p
                  @click="transferLogin"
                  style="color: #0077f0; cursor: pointer"
                >
                  Đăng nhập
                </p>
              </div>
              <div style="padding-top: 30px">
                <div class="input-wrapper">
                  <img
                    class="icon-start"
                    v-if="email_register"
                    src="./img/Siderbar/icon_ip_rg_active.svg"
                    alt=""
                  />
                  <img
                    class="icon-start"
                    v-else
                    src="./img/Siderbar/icon_input_rg.svg"
                    alt=""
                  />
                  <img
                    class="icon-end"
                    v-if="email_register"
                    @click="clearemailRegister"
                    src="./img/Siderbar/icon_input_login_dl.svg"
                    alt=""
                  />
                  <input
                    @input="validateEmail"
                    v-model="email_register"
                    type="text"
                    class="ac"
                    placeholder="Email tài khoản..."
                  />
                </div>
              </div>
              <div class="input-wrapper" style="padding-top: 15px">
                <input
                  v-model="password_rg"
                  :type="showPassword ? 'text' : 'password'"
                  class="ac"
                  placeholder="Mật khẩu..."
                />
                <img
                  style="transform: translateY(-20%)"
                  class="icon-start"
                  v-if="password_rg"
                  src="./img/Siderbar/icon_lg_ip_pass_active.svg"
                  alt=""
                />
                <img
                  class="icon-start"
                  src="./img/Siderbar/icon_lg_ip-pass.svg"
                  alt=""
                  v-else
                  style="transform: translateY(-20%)"
                />
                <img
                  class="icon-end"
                  src="./img/Siderbar/icon_input_pass_dl.svg"
                  alt=""
                  v-if="password_rg"
                  @click="showpass"
                  style="transform: translateY(-20%)"
                />
              </div>
              <div class="input-wrapper" style="padding-top: 15px">
                <input
                  v-model="password_comfirm"
                  :type="showPasscf ? 'text' : 'password'"
                  class="ac"
                  placeholder="Xác nhận mật khẩu..."
                />
                <img
                  style="transform: translateY(-20%)"
                  class="icon-start"
                  v-if="password_comfirm"
                  src="./img/Siderbar/icon_lg_ip_pass_active.svg"
                  alt=""
                />
                <img
                  class="icon-start"
                  src="./img/Siderbar/icon_lg_ip-pass.svg"
                  alt=""
                  v-else
                  style="transform: translateY(-20%)"
                />
                <img
                  class="icon-end"
                  src="./img/Siderbar/icon_input_pass_dl.svg"
                  alt=""
                  v-if="password_comfirm"
                  @click="showpassComfirm"
                  style="transform: translateY(-20%)"
                />
              </div>
              <div
                style="padding-top: 12px; font-size: 14px; color: red"
                v-if="isPasswordMismatch"
              >
                Mật khẩu và mật khẩu xác nhận không giống nhau.
              </div>
              <div
                v-if="!isValidEmail"
                style="padding-top: 12px; color: red; font-size: 14px"
              >
                Địa chỉ email không hợp lệ.
              </div>
              <div
                v-if="error_register"
                style="padding-top: 12px; color: red; font-size: 14px"
              >
                {{ error_register }}
              </div>
              <div
                @click="registerAccount"
                :class="[
                  'bt-rg',
                  {
                    disabled:
                      isPasswordMismatch ||
                      !email_register.trim() ||
                      !isValidEmail ||
                      !password_rg.trim(),
                  },
                ]"
              >
                Đăng ký
              </div>
              <div style="font-size: 13px; color: #718096; padding-top: 15px">
                Khi bấm vào đăng ký, bạn đã đọc và đồng ý với
                <a href="">điều khoản &amp; chính sách</a> của Adwizard
              </div>
            </div>
            <div v-if="comfirm_email" style="padding-top: 100px">
              <div>
                <div style="font-size: 24px; font-weight: 700">
                  Nhập mã xác nhận
                </div>
                <div>
                  <div
                    style="
                      color: var(--B500, #1f2937);
                      font-size: 15px;
                      letter-spacing: -0.06px;
                      padding-top: 6px;
                    "
                  >
                    Mã xác nhận đã được gửi về email:
                    {{ email_register ? email_register : email_login }}.
                    <a
                      style="color: #4a44dd; font-weight: 600; cursor: pointer"
                      @click="backEmail"
                      >Đổi email</a
                    >
                  </div>
                </div>
              </div>
              <div
                style="
                  padding-top: 30px;
                  display: flex;
                  gap: 17px;
                  min-width: 535px;
                "
              >
                <input
                  class="input_rg"
                  ref="input0"
                  v-model="inputs[0]"
                  type="text"
                  @input="moveFocus(1)"
                  @keypress="isNumber($event)"
                />
                <input
                  class="input_rg"
                  ref="input1"
                  v-model="inputs[1]"
                  type="text"
                  @input="moveFocus(2)"
                  @keypress="isNumber($event)"
                />
                <input
                  class="input_rg"
                  ref="input2"
                  v-model="inputs[2]"
                  type="text"
                  @input="moveFocus(3)"
                  @keypress="isNumber($event)"
                />
                <input
                  class="input_rg"
                  ref="input3"
                  v-model="inputs[3]"
                  type="text"
                  @input="moveFocus(4)"
                  @keypress="isNumber($event)"
                />
                <input
                  class="input_rg"
                  ref="input4"
                  v-model="inputs[4]"
                  type="text"
                  @input="moveFocus(5)"
                  @keypress="isNumber($event)"
                />
                <input
                  class="input_rg"
                  ref="input5"
                  v-model="inputs[5]"
                  type="text"
                  @input="moveFocus(6)"
                  @keypress="isNumber($event)"
                />
              </div>
              <div @click="comfirmEmail" class="bt-comfirm">Xác nhận</div>
            </div>
            <div
              v-if="register_succes"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              "
            >
              <img src="./img/siderbar/icon_reister_succes.svg" alt="" />
              <div style="font-size: 20px; font-weight: 700; padding-top: 17px">
                Đăng ký thành công
              </div>
              <div
                style="
                  font-size: 15px;
                  font-weight: 400;
                  line-height: 21px;
                  letter-spacing: -0.06px;
                  padding-top: 8px;
                "
              >
                Chúc mừng bạn đã đăng ký thành công tài khoản
              </div>
              <div @click="loginNow" class="bt-comfirm">Sử dụng ngay</div>
            </div>
          </div>
        </div>
        <div class="login__info-version">Powered by Adwizard @2023</div>
      </div>
    </div>
    <div v-if="start" class="before-login">
      <div
        style="
          display: flex;
          gap: 15px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <div>
          <img src="./img/Siderbar/icon_logo_before_login.svg" alt="" />
        </div>
        <div style="color: #fff; font-size: 16px; line-height: 20px">
          Phiên bản 1.1.0
        </div>
        <div class="progress-bar">
          <div class="progress" ref="progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import axios from "axios-https-proxy-fix";
import Dowvideo from "./components/Dowvideo.vue";
import ToolSeller from "./components/ToolsSeller.vue";
import Management from "./components/Management.vue";
import ToolCreator from "./components/ToolCreator.vue";
import Folder from "./components/Folder.vue";

export default {
  data() {
    return {
      isDowvideoVisible: false,
      isToolSeller: false,
      isManagement: true,
      isToolCreator: false,
      isFolder: false,
      activeComponent: null,
      menu: false,
      login: false,
      inputNotpass: false,
      inputNotacc: false,
      popupGeolocation: false,
      geolocationVn: true,
      email_login: "tungadsteam@gmail.com",
      password_login: "maimai123",
      email_register: "",
      password_register: "",
      password_rg: "",
      password_comfirm: "",
      isPasswordMismatch: false,
      start: true,
      login_if: true,
      register: false,
      inputNotEmail_rg: false,
      showPassword: false,
      showPasscf: false,
      comfirm_email: false,
      inputs: ["", "", "", "", "", ""],
      register_succes: false,
      isValidEmail: true,
      error_register: "",
      error_login: "",
      accessToken: "",
    };
  },
  components: {
    Dowvideo,
    ToolSeller,
    Management,
    ToolCreator,
    Folder,
  },
  watch: {
    password_rg(newVal) {
      if (newVal && this.password_comfirm) {
        this.passwordsEntered = true;
      }
      this.checkPasswordMismatch();
    },
    password_comfirm(newVal) {
      if (newVal && this.password_rg) {
        this.passwordsEntered = true;
      }
      this.checkPasswordMismatch();
    },
  },
  created() {
    const lastActiveComponent = localStorage.getItem("lastActiveComponent");

    if (!this.auth.isLogin) {
      this.menu = false;
      this.login = true;
      this.start = false;
      // return this
    } else {
      this.menu = true;
      this.start = false;
      this.login = false;
    }

    switch (lastActiveComponent) {
      case "Management":
        this.management();
        break;
      case "ToolSeller":
        this.toolSeller();
        break;
      case "Dowvideo":
        this.dowvideoVisible();
        break;
      case "Folder":
        this.fordel();
        break;
      case "ToolCreator":
        this.toolCreator();
        break;
      default:
        break;
    }
  },
  async mounted() {},
  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isValidEmail = emailPattern.test(this.email_register);
    },
    checkPasswordMismatch() {
      if (this.passwordsEntered) {
        this.isPasswordMismatch = this.password_rg !== this.password_comfirm;
      }
    },
    management() {
      this.isFolder = false;
      this.isDowvideoVisible = false;
      this.isManagement = true;
      this.isToolSeller = false;
      this.isToolCreator = false;
      this.activeComponent = "Management";
      localStorage.setItem("lastActiveComponent", "Management");
    },
    toolSeller() {
      this.isFolder = false;
      this.isDowvideoVisible = false;
      this.isManagement = false;
      this.isToolSeller = true;
      this.isToolCreator = false;
      this.activeComponent = "ToolSeller";
      localStorage.setItem("lastActiveComponent", "ToolSeller");
    },
    dowvideoVisible() {
      this.isFolder = false;
      this.isDowvideoVisible = true;
      this.isManagement = false;
      this.isToolSeller = false;
      this.isToolCreator = false;
      this.activeComponent = "Dowvideo";
      localStorage.setItem("lastActiveComponent", "Dowvideo");
    },
    fordel() {
      this.isFolder = true;
      this.isDowvideoVisible = false;
      this.isManagement = false;
      this.isToolSeller = false;
      this.isToolCreator = false;
      this.activeComponent = "Folder";
      localStorage.setItem("lastActiveComponent", "Folder");
    },
    toolCreator() {
      this.isFolder = false;
      this.isDowvideoVisible = false;
      this.isManagement = false;
      this.isToolSeller = false;
      this.isToolCreator = true;
      this.activeComponent = "ToolCreator";
      localStorage.setItem("lastActiveComponent", "ToolCreator");
    },
    showpass() {
      this.showPassword = !this.showPassword;
      this.inputNotpass = false;
    },
    showpassComfirm() {
      this.showPasscf = !this.showPasscf;
    },
    clearIpacc() {
      this.email_login = "";
      this.inputNotacc = false;
    },
    clearemailRegister() {
      this.email_register = "";
      this.inputNotEmail_rg = false;
    },
    setLanguageVN() {
      this.geolocationVn = true;
    },
    setLanguageUS() {
      this.geolocationVn = false;
    },
    moveFocus(index) {
      if (this.inputs[index - 1].length === 1) {
        this.$refs["input" + index]?.focus();
      }
    },
    isNumber(event) {
      let charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      }
    },
    logout() {
      localStorage.removeItem("isLoggedIn");
      this.menu = false;
      this.login = true;
    },
    async loginDashboard() {
      console.log("Email:", this.account);
      let email = this.email_login;
      let pass = this.password_login;
      this.email_register = "";
      this.accessToken = "";
      console.log({ email, pass });
      let res = await this.api({
        path: "/auth/signin",
        data: {
          email: email,
          password: pass,
        },
      });

      if (res.success) {
        localStorage.accessToken = res.accessToken;
        // this.login = false;
        // this.menu = true;
        return location.reload();
      }

      if (res.code == "email-not-verify") {
        this.login_if = false;
        this.comfirm_email = true;

        return;
      }

      return (this.error_login = res.message);

      // if (login.success) {
      //   console.log("succes");
      //   this.login = false;
      //   this.menu = true;

      //   localStorage.setItem("isLoggedIn", "true");
      // } else if (login.code === "email-not-verify") {
      //   console.log("notmail");
      //   this.login_if = false;
      //   this.comfirm_email = true;
      // } else if (login.code === "wrong-password") {
      //   this.error_login = login.message;
      // } else if (login.code === "account-not-exist") {
      //   this.error_login = login.message;
      // } else {
      //   this.accessToken = login.accessToken;
      //   this.comfirm_email = true;
      //   this.login_if = false;
      // }
    },
    transferRegister() {
      this.login_if = false;
      this.register = true;
    },
    transferLogin() {
      this.login_if = true;
      this.register = false;
    },
    async registerAccount() {
      let email = this.email_register;
      let pass_rg = this.password_rg;
      let register = await this.api({
        path: "/auth/signup",
        data: {
          email: email,
          password: pass_rg,
        },
      });
      console.log(register);
      if (register.success) {
        this.comfirm_email = true;
        this.register = false;
        this.accessToken = register.accessToken;
      } else {
        this.error_register = register.message;
      }
    },
    backEmail() {
      this.comfirm_email = false;
      this.register = true;
    },
    async comfirmEmail() {
      const result = this.inputs.join("");
      console.log(result);
      let confirm_email = await this.api({
        path: "/service/verify-email",
        headers: {
          Authorization: this.accessToken,
        },
        data: {
          verified_code: result,
        },
      });
      console.log(confirm_email);
      if (confirm_email.success) {
        this.comfirm_email = false;
        this.register_succes = true;
      } else {
        console.log("lỗi");
      }
    },
    loginNow() {
      location.reload();
    },
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login {
  background: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;

  &__img {
    padding: 15px 0 15px 15px;

    height: 100%;
    width: 60%;
    &-bg {
      // padding: 354px 254px 440px 278px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: linear-gradient(
        318deg,
        #9d32d8 -13.49%,
        #6c4ee2 34.33%,
        #5247d0 82.44%,
        #2f5fd5 119.98%
      );
      border-radius: 8px;
      position: relative;

      .bg1 {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .bg2 {
        position: absolute;
        top: 0;
        right: 0;
      }
      .bg3 {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .bg4 {
        position: absolute;
        top: -70px;
        left: -100px;
      }
      &-text {
        display: flex;
        z-index: 10;
        flex-direction: column;
        position: relative;
        gap: 34px;
        // width: 100%;
        .bg5 {
          position: absolute;
          top: -70px;
          left: -20px;
        }

        .conten {
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          color: #fff;
          font-size: 58px;
          width: 465px;
        }
        .conten2 {
          display: flex;
          gap: 12px;
          .ex {
            color: #f1f2f4;
            padding: 10px;
            border-radius: 6px;
            border: 0.5px solid rgba(255, 255, 255, 0.5);
            background: rgba(255, 255, 255, 0.12);
          }
        }
      }
    }
  }
  &__info {
    width: 50%;
    height: 100%;
    padding: 160px 130px 30px 170px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__all {
      height: 80%;
      width: 100%;
      &-logo {
        display: flex;
        justify-content: space-between;
        .click-glct {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 54px;
          height: 24px;
          border-radius: 5px;
          background: #f1f2f4;
          cursor: pointer;
          position: relative;
          .img {
            display: flex;
            gap: 3px;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
          }
        }
        .glct-sl {
          position: absolute;
          top: 25px;
          width: 54px;
          height: 77px;
          padding: 5px;
          border-radius: 5px;
          background: #f1f2f4;
          box-shadow: 0px 3px 3px 0px rgba(146, 146, 146, 0.25);
          .flag {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
          }
          .flag:hover {
            background: #cbd5e0;
            border-radius: 4px;
          }
        }
        .slide-enter-active,
        .slide-leave-active {
          transition: transform 200ms;
        }
        .slide-enter {
          transform: translateY(-10%);
        }
        .slide-enter-to {
          transform: translateY(0);
        }
        .slide-leave {
          transform: translateY(0);
        }
        .slide-leave-to {
          transform: translateY(-8%);
        }
      }
      &__txt {
        padding-top: 100px;
        .input_rg {
          width: 74.533px;
          height: 59.431px;
          border-radius: 10px;
          border: 0.5px solid #a0aec0;
          text-align: center;
        }
        .bt-comfirm {
          min-width: 535px;
          width: 100%;
          margin-top: 30px;
          height: 56px;
          background: #4a44dd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }
        .bt-comfirm:hover {
          background: #3b36ce;
        }
        &__rg {
          .input-wrapper {
            position: relative;
            .icon-start {
              position: absolute;
              top: 50%;
              left: 20px;
              transform: translateY(-50%);
            }

            .icon-end {
              position: absolute;
              top: 50%;
              right: 20px;
              transform: translateY(-50%);
              cursor: pointer;
            }
            .ac {
              width: 100%;
              height: 56px;
              border-radius: 10px;
              border: 0.5px solid #cbd5e0;
              padding-left: 50px;
              padding-right: 55px;
            }
            .ac:focus {
              border-color: var(--P500, #4a44dd);
              outline: none;
            }
          }
          .bt-rg {
            margin-top: 30px;
            height: 56px;
            background: #4a44dd;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            cursor: pointer;
          }
          .bt-rg:hover {
            background: #3b36ce;
          }
          .bt-rg.disabled {
            cursor: not-allowed;
            opacity: 0.6;
          }
          .bt-login {
            margin-top: 30px;
            height: 56px;
            background: #4a44dd;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-weight: 700;
            cursor: pointer;
          }
          .bt-login:hover {
            background: #3b36ce;
          }
          .bt-login-gg {
            display: flex;
            gap: 8px;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            height: 56px;
            border: 1px solid rgba(203, 213, 224, 0.5);
            border-radius: 10px;
            cursor: pointer;
          }
          .bt-login-gg:hover {
            background: rgb(238, 238, 238);
          }
        }
      }
    }
    &-version {
      color: #a0aec0;
      font-family: Inter;
      font-size: 15px;
      font-style: normal;
      line-height: normal;
    }
  }
}
.dashboard {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(119deg, #463ebb 0.71%, #513ebb 67.92%);
}
body,
button,
input,
textarea,
select {
  font-family: "Inter", sans-serif;
}

.menu {
  width: 83px;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  &__function {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &--logo {
      padding-top: 8px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    &--selection {
      &--active {
        margin-top: 10px;
        font-weight: 600;
        height: 83px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 6px;
        color: #fff;
        text-align: center;
        font-size: 11px;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background: rgba(255, 255, 255, 0.27);

          box-shadow: 0px 1px 19px 0px rgba(0, 0, 0, 0.15);
        }
        &.active {
          background: rgba(255, 255, 255, 0.27);
        }
      }
    }
  }
  &__settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}

.component {
  width: calc(100% - 83px);
  height: 100%;
  transition: width 0.3s;
  overflow: hidden;
  color: #1f2937;
  font-size: 14px;
  font-family: Inter;
}
.before-login {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
      318deg,
      #9d32d8 -13.49%,
      #6c4ee2 34.33%,
      #5247d0 82.44%,
      #2f5fd5 119.98%
    ),
    linear-gradient(
      105deg,
      #7c42e5 -2.97%,
      #614fef 37.07%,
      #4c45de 74.68%,
      #2464d7 113.51%
    ),
    #7c42e5;

  .progress-bar {
    width: 100%;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.58);
  }

  .progress {
    width: 0;
    height: 100%;
    background-color: #fff;
    animation: progressAnimation 4s linear forwards;
  }

  @keyframes progressAnimation {
    to {
      width: 100%;
    }
  }
}

input[type="checkbox"] {
  cursor: pointer;
  height: 16px;
  width: 16px;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex-shrink: 0;
  &:after {
    content: "";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 5px;
    border: 1.5px solid #a0aec0;
    padding-bottom: 2px;
  }
  &:checked {
    &:after {
      border: transparent;
      background: #007fff;
      content: url("./img/Siderbar/icon_tich.svg");
    }
    &:disabled {
      cursor: not-allowed !important;
      &:after {
        background: #ccc;
        border: 0.5px solid #ccc;
      }
    }
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed !important;
  }

  &.nen_tim {
    &:checked {
      &:after {
        background: #4a44dd;
      }
    }
  }

  &.border-white {
    &:after {
      border-color: #fff;
    }
  }
}
input[type="text"] {
  border-radius: 8px;
  border: 0.5px solid var(--B200, #cbd5e0);
  &:hover {
    border: 0.5px solid #4a44dd;
  }
}
</style>
