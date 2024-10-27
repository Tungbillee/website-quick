<template>
  <div class="helper">
    <div class="flex-cl-jt mgt-150">
      <div class="flex-al-jt ps-rl">
        <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
        <div class="feature flex gap-6">
          <div style="opacity: 0.7" class="fz-13">Help Center</div>
        </div>
      </div>
      <div class="flex-al-jt">
        <div class="flex-cl-al">
          <div class="fw-700 fz-40">
            <span class="text-gradien"> Tìm kiếm </span> nội dung bạn cần
          </div>
          <!-- <div class="mgt-10">Quick magic là gì?</div> -->
          <div class="flex gap-25 mgt-40">
            <div
              v-for="(item, index) in popupItems"
              :key="index"
              class="popup-search"
            >
              <img class="icon" :src="img(item.icon)" alt="" />
              <div style="padding: 0 29px 48px 29px">
                <div class="text">{{ item.title }}</div>
                <div class="text2" :style="{ width: item.textWidth }">
                  {{ item.description }}
                </div>
                <div
                  style="width: 140px"
                  class="button flex-al-jt mgt-30"
                  @click="item.action"
                >
                  {{ item.text_button }}
                </div>
              </div>
            </div>
          </div>
          <div class="mgt-150 fw-700 fz-24">Các đề mục phổ biến</div>
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="popular"
            @click="toggleInfo(index)"
          >
            <div class="flex-bw-al">
              <div class="flex-al gap-10">
                <img :src="img('icon_asks.svg')" alt="" />
                <div>{{ item.question }}</div>
              </div>
              <img
                :src="img('icon_down.svg')"
                alt=""
                :class="['user-sl', { rotate: activeIndex === index }]"
              />
            </div>
            <div v-if="activeIndex === index" class="info">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="star-2"><img :src="img('Frame13820.png')" alt="" /></div>
    <div class="star-3">
      <img
        style="width: 500px; height: 600px"
        :src="img('Frame13821.png')"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info_text: false,
      info_text2: false,
      popupItems: [
        {
          icon: "icon_overview.svg",
          title: "Tổng quan Quick Magic",
          description:
            "Tìm hiểu xem QM là phần mềm gì? Sẽ giúp gì cho công việc của bạn",
          textWidth: "auto",
          action: () => this.overView(),
          text_button: "Tìm hiểu",
        },
        {
          icon: "icon_helper.svg",
          title: "Hướng dẫn sử dụng",
          description: "Xem video hướng dẫn sử dụng của từng chức năng",
          textWidth: "167px",
          action: () => this.helper(),
          text_button: "Xem video",
        },
        {
          icon: "icon_options.svg",
          title: "Các chức năng chính",
          description:
            "Tìm hiểu xem QM là phần mềm gì? Sẽ giúp gì cho công việc của bạn",
          textWidth: "auto",
          action: () => this.options(),
          text_button: "Tìm hiểu",
        },
      ],
      faqItems: [
        {
          question:
            "Vì sao 01 tài khoản chỉ được đăng nhập trên một thiết bị duy nhất?",
          answer: `Chúng tôi cũng thu thập thông tin về cách Dịch Vụ được truy cập và
            sử dụng ("Dữ Liệu Sử Dụng"). Dữ liệu này có thể bao gồm thông tin
            như địa chỉ Internet Protocol của máy tính bạn (ví dụ: IP
            address), loại trình duyệt, phiên bản trình duyệt, trang của Dịch
            Vụ mà bạn truy cập, thời gian và ngày bạn truy cập, thời lượng ở
            trên những trang đó, unique device identifiers và other diagnostic
            data.`,
        },
        {
          question: "QuickMagic là gì?",
          answer: `QuickMagic là một công cụ phần mềm mạnh mẽ, được tích hợp công nghệ trí tuệ nhân tạo (AI), giúp người dùng khám phá các xu hướng từ các nền tảng video nổi tiếng, đồng thời tải xuống, quản lý và chỉnh sửa video từ nhiều nền tảng mạng xã hội khác nhau. Sản phẩm này cung cấp một loạt các tính năng sử dụng AI nhằm tối ưu hóa quá trình tải xuống và chỉnh sửa video, giúp người dùng tiết kiệm thời gian và nâng cao hiệu quả công việc.`,
        },
        {
          question: "Tôi có phải trả phí để sử dụng Quick Magic không?",
          answer:
            "Hiện tại chúng tôi đang cung cấp dịch vụ miễn phí cho tất cả người dùng. Bạn có thể sử dụng các tính năng cơ bản của Quick Magic mà không cần trả bất kỳ khoản phí nào. Tuy nhiên, chúng tôi cũng cung cấp các gói dịch vụ cao cấp với nhiều tính năng mở rộng, giúp bạn tận dụng tối đa công cụ của chúng tôi.",
        },
        {
          question: "Quick Magic hỗ trợ bao nhiêu nền tảng?",
          answer:
            "Hiện tại Quick Magic hỗ trợ tải xuống video từ các nền tảng phổ biến như Youtube, Facebook, Instagram, Tiktok, Douyin, Kuashou, và nhiều nền tảng khác. Chúng tôi đang không ngừng cập nhật và mở rộng danh sách các nền tảng hỗ trợ, giúp người dùng trải nghiệm tốt nhất khi sử dụng Quick Magic.",
        },
        {
          question:
            "Tại sao khi tải xuống tôi phải chọn  cả thư mục trên máy và trên phần mềm ? ",
          answer:
            "Khi bạn tải xuống video hoặc chỉnh sửa video trên Quick Magic,chúng tôi sẽ có hai lựa chọn là lưu ở thư mục trên máy của bạn và lưu trên phần mềm.Mục đích lưu ở phần mềm để bạn dễ dang quản lý thông tin của video mà không cần nhớ bạn đã lưu ở thư mục nào trên máy",
        },
      ],
      activeIndex: null,
    };
  },
  methods: {
    toggleInfo(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    overView() {
      this.$router.push("/overview");
    },
    img(data) {
      return "images/helper/" + data;
    },
  },
};
</script>

<style lang="scss" scoped>
.helper {
  height: 100%;
  position: relative;
  z-index: 2;
}
.star-2 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
.star-3 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.popup-search {
  width: 254px;
  height: 362px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  .icon {
    pointer-events: none;
    user-select: none;
  }
  .text {
    font-weight: 600;
    font-size: 16px;
  }
  .text2 {
    margin-top: 10px;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px; /* 150% */
    color: rgba(255, 255, 255, 0.7);
  }
}
.popular {
  cursor: pointer;
  margin-top: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
  padding: 20px 26px;
  width: 810px;
  .rotate {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
  }
  .info {
    font-size: 14px;
    padding-top: 15px;
    margin-top: 10px;
    opacity: 0.7;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
}
</style>
