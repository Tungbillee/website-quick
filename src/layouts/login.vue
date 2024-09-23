<template>
  <div style="height: 100vh; width: 100vw">
    <div class="login">
      <div class="login__img">
        <div class="login__img-bg">
          <img class="bg1" src="../img/Siderbar/icon-bg1.svg" alt="" />
          <img class="bg2" src="../img/Siderbar/icon_bg2.svg" alt="" />
          <img class="bg3" src="../img/Siderbar/icon_bg3.svg" alt="" />
          <img class="bg4" src="../img/Siderbar/icon_bg4.svg" alt="" />
          <div class="login__img-bg-text">
            <img class="bg5" src="../img/Siderbar/icon_bg5.svg" alt="" />
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
            <img src="../img/Siderbar/icon_logo_login.svg" alt="" />
            <div
              @click="popupGeolocation = !popupGeolocation"
              class="click-glct"
            >
              <div class="img">
                <template v-if="geolocationVn">
                  <img src="../img/Siderbar/icon_laco_vn.svg" alt="" />
                </template>
                <template v-else>
                  <img src="../img/Siderbar/icon_laco_usa.svg" alt="" />
                </template>
                <img
                  :style="{
                    transform: popupGeolocation ? 'rotate(180deg)' : 'none',
                  }"
                  src="../img/Siderbar/icon_down.svg"
                  alt=""
                />
              </div>

              <transition name="slide">
                <div v-if="popupGeolocation" class="glct-sl">
                  <div class="flag" @click="setLanguageVN">
                    <img src="../img/Siderbar/icon_laco_vn_max.svg" alt="" />
                  </div>
                  <div class="flag" @click="setLanguageUS">
                    <img src="../img/Siderbar/icon_laco_usa_max.svg" alt="" />
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <router-view />
        </div>
        <div class="login__info-version">Powered by Adwizard @2023</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupGeolocation: false,
      geolocationVn: true,
    };
  },
  methods: {
    transferRegister() {
      this.$router.push("/register");
    },
    setLanguageVN() {
      this.geolocationVn = true;
    },
    setLanguageUS() {
      this.geolocationVn = false;
    },
  },
};
</script>

<style lang="scss">
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
          font-weight: 700;
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
</style>
