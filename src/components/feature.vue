<template>
  <div class="flex-cl gap-15">
    <div class="fw-700 fz-20">III. Các tính năng chính Quick Magic</div>
    <div class="fw-600 mgl-10 text-gr-2">
      1. Get thông tin và tải xuống video
    </div>
    <div class="lh-25 mgl-15">
      - Get toàn bộ thông tin của một kênh: QuickMagic có thể lấy toàn bộ thông
      tin của một kênh trên các nền tảng mạng xã hội và hiển thị chi tiết cho
      người dùng.
    </div>
    <div class="lh-25 mgl-15">
      - Tải xuống video của cả kênh: Người dùng có thể tải xuống tất cả video từ
      các kênh trên TikTok, Douyin, YouTube, Facebook, Instagram, và Kashou.
    </div>
    <div class="lh-25 mgl-15">
      - Lưu video và quản lý thư mục: Sau khi hiển thị thông tin video đã lấy
      về, người dùng có thể chọn một hoặc tất cả video để lưu vào thư mục trên
      tool hoặc trên máy tính cá nhân.
    </div>
    <div class="lh-25 mgl-15">
      - Lưu lịch sử: Sau khi bấm chạy tải xuống video, QuickMagic sẽ lưu lại
      lịch sử URL vừa tìm kiếm và lịch sử những video đã tải xuống thành công
      hoặc thất bại. Lịch sử sẽ được reset mỗi 3 ngày
    </div>
    <div class="fw-600 mgl-10 text-gr-2">2. Quản lý và chỉnh sửa video</div>
    <div class="mgl-10">2.1. Quản lý thư mục video</div>
    <div class="lh-25 mgl-15">
      - Quản lý thư mục video: QuickMagic cho phép quản lý thư mục video đã tải
      xuống hoặc chỉnh sửa trên tool.
    </div>
    <div class="lh-25 mgl-15">
      - Bảng hiển thị thông tin video: Hiển thị toàn bộ video trong một thư mục
      với khả năng sửa toàn bộ văn bản hoặc tiêu đề của video.
    </div>
    <div class="flex gap-20">
      <img style="width: 270px" :src="img('table_folder.svg')" alt="" />
      <img style="width: 500px" :src="img('table_info.svg')" alt="" />
    </div>
    <div class="mgl-10">2.2. subtitle</div>
    <div class="lh-25 mgl-15">
      - Subtitle: Chuyển giọng nói thành văn bản (speech to text), dịch sang
      ngôn ngữ khác, và thêm voice theo text sub đã dịch.
    </div>
    <div class="lh-25 mgl-15">
      - Cỡ chữ: Điều chỉnh kích thước chữ của subtitle.
    </div>
    <div class="lh-25 mgl-15">
      - Vị trí sub: Điều chỉnh vị trí của subtitle trên video.
    </div>
    <div class="lh-25 mgl-15">
      - Màu chữ và Viền chữ: Chọn màu chữ và viền chữ cho subtitle.
    </div>
    <div class="lh-25 mgl-15">
      - Background chữ: Bật hoặc tắt background chữ, và chọn màu nếu bật.
    </div>
    <div class="lh-25 mgl-15">
      - Ngôn ngữ subtitle: Chọn ngôn ngữ của subtitle.
    </div>
    <div class="lh-25 mgl-15">
      - Âm lượng video: Điều chỉnh âm lượng video khi thêm subtitle.
    </div>
    <div class="lh-25 mgl-15">
      - Lồng tiếng giọng nói: Sử dụng AI của FPT hoặc Vbee để lồng tiếng cho
      subtitle.
    </div>
    <div class="lh-25 mgl-15">
      - API Key Voice: Nhập API key để sử dụng các dịch vụ AI text to speach.
    </div>
    <div class="lh-25 mgl-15">
      - Người đọc: Chọn người đọc và tùy chỉnh tốc độ đọc.
    </div>
    <img style="width: 500px" :src="img('subtitle.svg')" alt="" />
    <div class="mgl-10">2.3. Video mixer</div>
    <div class="lh-25 mgl-15">
      - Ghép backdrop vào video: Người dùng có thể upload backdrop hoặc chọn từ
      hệ thống có sẵn, điều chỉnh kiểu và màu sắc backdrop, và thiết lập thời
      gian xuất hiện.
    </div>
    <img style="width: 500px" :src="img('graf_backdrop.svg')" alt="" />
    <div class="lh-25 mgl-15">
      - Ghép logo vào video: Chọn logo từ máy tính, tải lên và thiết lập thời
      gian xuất hiện cho logo.
    </div>
    <div class="lh-25 mgl-15">
      - Giới hạn thời gian xuất hiện: Thiết lập thời gian bắt đầu và kết thúc
      cho logo.
    </div>
    <img style="width: 500px" :src="img('graf_logo.svg')" alt="" />
    <div class="lh-25 mgl-15">- Ghép tiêu đề:</div>
    <div class="lh-25 mgl-20">
      + Nhập tiêu đề sẽ áp dụng cho tất cả video hoặc giữ nguyên tiêu đề gốc.
    </div>
    <div class="lh-25 mgl-20">
      + Chọn font chữ, kiểu chữ, cỡ chữ, màu chữ và viền chữ, cùng với vị trí và
      thời gian xuất hiện.
    </div>
    <div class="lh-25 mgl-20">
      + Dùng 1 tiêu đề cho tất cả video: Người dùng có thể nhập tiêu đề sẽ áp
      dụng cho tất cả video.
    </div>
    <div class="lh-25 mgl-20">
      + Sử dụng tiêu đề gốc: Giữ nguyên tiêu đề gốc của video.
    </div>
    <div class="lh-25 mgl-20">
      + Font chữ: Chọn font chữ từ danh sách có sẵn.
    </div>
    <div class="lh-25 mgl-20">
      + Kiểu chữ: Chọn kiểu chữ (Mặc định, Gạch chân, In đậm, In nghiêng).
    </div>
    <div class="lh-25 mgl-20">+ Cỡ chữ: Điều chỉnh cỡ chữ.</div>
    <div class="lh-25 mgl-20">
      + Vị trí sub: Điều chỉnh vị trí của tiêu đề theo trục Y.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_title.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-20">
      - Ghép voice over vào video: Sử dụng API text to speech của FPT hoặc Vbee,
      tùy chỉnh thời gian xuất hiện voice over và sử dụng văn bản đã cài sẵn
      hoặc mới.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_overvoice.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-20">
      - Ghép nhạc nền: Chọn và upload file âm thanh, điều chỉnh âm lượng video
      gốc.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_audio.svg')" alt="" />
    </div>
    <div class="mgl-10">2.4. Chức năng ghép video</div>
    <div class="lh-25 mgl-20">
      - Chọn video ghép: Người dùng có thể chọn video để ghép vào video hiện
      tại.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_video.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-20">
      - Kiểu backdrop: Chọn kiểu ghép (Góc trên, Góc dưới, Bên dưới).
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_type.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-20">
      - Kích cỡ video ghép: Chọn tỷ lệ video ghép (15%, 35%, 45%).
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_size.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-20">
      - Âm lượng: Điều chỉnh âm lượng của video ghép và video gốc.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_volum.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-15">- Tùy chỉnh:</div>
    <div class="lh-25 mgl-20">
      + Khi thời lượng video ghép &lt; video gốc: Nhân bản video ghép hoặc để
      video ghép mặc định.
    </div>
    <div class="lh-25 mgl-20">
      + Khi thời lượng video ghép &gt; video gốc: Cắt video ghép hoặc để video
      ghép mặc định.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('graf_time.svg')" alt="" />
    </div>
    <div class="mgl-10">2.5. Chức năng nối video</div>
    <div class="lh-25 mgl-20">
      - Tùy chọn nối: Người dùng có thể chọn nối video đã chọn với video mới tải
      lên hoặc từ thư mục.
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('connect_type.svg')" alt="" />
    </div>
    <div class="lh-25 mgl-20">
      - Vị trí nối: Chọn vị trí nối (Đầu video, Cuối video, Đầu & cuối video).
    </div>
    <div class="flex-al-jt mgt-10">
      <img style="width: 300px" :src="img('connect.svg')" alt="" />
    </div>
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

<style></style>
