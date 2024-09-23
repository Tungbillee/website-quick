<template>
  <div class="flex-cl gap-15">
    <div class="fw-700 fz-20">II. Bắt đầu với Quick Magic</div>
    <div class="text-gr-2 mgl-10">1. Các bước cài đặt Quick Magic</div>
    <div class="lh-25 mgl-15">
      - Truy cập vào Quickmagic.vn và tải xuống phần mềm về rồi cài đặt
    </div>
    <div class="text-gr-2 mgl-10">2. Giới thiệu về cấu trúc giao diện</div>
    <div class="lh-25 mgl-10">2.1 Giao diện trang tìm kiếm và tải video</div>
    <div class="lh-25 mgl-15">- Tổng quản giao diện</div>
    <img :src="img('download.svg')" alt="" />
    <div class="lh-25 mgl-15 mgt-15">
      - Thanh tìm kiếm: Ở phần trên của giao diện, có một thanh tìm kiếm nơi
      người dùng nhập URL của kênh từ các nền tảng mạng xã hội như TikTok,
      Douyin, YouTube, Facebook, Instagram, và Kashou.
    </div>
    <img class="mgt-15" :src="img('search.svg')" alt="" />
    <div class="lh-25 mgl-15 mgt-15">
      - Danh sách kết quả: Dưới thanh tìm kiếm là danh sách kết quả các video từ
      kênh đã nhập. Mỗi video được hiển thị với hình ảnh thu nhỏ, lượt thích, và
      tiêu đề.
    </div>
    <img class="mgt-15" :src="img('info.svg')" alt="" />
    <div class="lh-25 mgl-15 mgt-15">
      - Chọn tất cả: Có nút "Chọn tất cả" để người dùng dễ dàng chọn tất cả
      video hiển thị trong danh sách.
    </div>
    <div class="lh-25 mgl-15 mgt-15">
      - Lịch sử tìm kiếm và tải xuống: Phần bên phải của giao diện là nơi hiển
      thị lịch sử tìm kiếm và lịch sử tải xuống, giúp người dùng dễ dàng theo
      dõi các hoạt động của mình.
    </div>

    <div class="flex gap-20">
      <img class="mgt-15" :src="img('search_link.svg')" alt="" />
      <img class="mgt-15" :src="img('history_download.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-10">
      2.2 Giao diện trang quản lý và chỉnh sửa video
    </div>
    <div class="lh-25 mgl-15 mgt-15">
      - Lịch sử tìm kiếm và tải xuống: Phần bên phải của giao diện là nơi hiển
      thị lịch sử tìm kiếm và lịch sử tải xuống, giúp người dùng dễ dàng theo
      dõi các hoạt động của mình.
    </div>
    <div class="flex-al-jt">
      <img
        style="width: 300px"
        class="mgt-15"
        :src="img('folder.svg')"
        alt=""
      />
    </div>
    <div class="lh-25 mgl-15 mgt-15">
      - Danh sách video trong thư mục: Ở giữa giao diện là danh sách các video
      trong thư mục đã chọn. Mỗi video được hiển thị với tên file, văn bản
      voice, tiêu đề, độ dài video và dung lượng.
    </div>
    <img class="mgt-15" :src="img('info_table.svg')" alt="" />
    <div class="lh-25 mgl-15 mgt-15">
      - Chức năng chỉnh sửa: Phần trên của danh sách video là các nút chức năng
      chỉnh sửa như Upload, Subtitle AI, Video mixer, Ghép video, Nối video,
      Chuyển thư mục, Xóa, và Lịch sử hoạt động. Người dùng có thể sử dụng các
      nút này để thực hiện các thao tác chỉnh sửa và quản lý video.
    </div>
    <img class="mgt-15" :src="img('options.svg')" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    img(data) {
      return "images/helper/" + data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
