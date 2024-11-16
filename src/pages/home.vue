<template>
    <div class="conten flex-cl-jt mgbt-20">
        <div class="flex-al-jt ps-rl">
            <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
            <div class="feature flex gap-6">
                <div style="opacity: 0.7" class="fz-13">khả dụng cho</div>
                <img :src="img('icon_mac.svg')" alt="" />
                <img :src="img('icon_windows.svg')" alt="" />
            </div>
        </div>
        <div style="margin-bottom: 160px">
            <div class="fw-700 fz-35 flex-al-jt gap-5 ps-rl">
                <span class="text-gradien"> Chỉnh sửa video </span> miễn phí cho mọi người,

                <img class="background-subb" :src="img('background_sub.svg')" alt="" />
                <img class="background-edit" :src="img('background_edit.svg')" alt="" />
                <img class="background-video" :src="img('background_video.svg')" alt="" />
                <img class="background-ai" :src="img('background_ai.svg')" alt="" />
                <img class="background-connect" :src="img('background_connect.svg')" alt="" />
                <img class="background-time" :src="img('background_time.svg')" alt="" />
            </div>
            <div class="fw-700 fz-40 flex-al-jt">sáng tạo không giới hạn</div>
            <div class="mgt-15">
                <div class="fz-16 flex-al-jt" style="line-height: 25px">Chỉnh sửa linh hoạt, áp dụng AI, lưu trữ và quản lý video</div>
                <div class="fz-16 flex-al-jt" style="line-height: 25px">Hãy sáng tạo những video chưa từng có!</div>
            </div>
            <div class="flex-al-jt mgt-20">
                <div @click="downloadWindow" v-if="system === 'windows'" class="button mgt-30 flex-al gap-6" style="padding: 5px 6px 5px 20px">
                    Tải xuống v2.2.1 cho Windows

                    <img :src="img('icon_download.svg')" alt="" />
                </div>
                <div @click="downloadMacos" v-if="system === 'macos'" class="button mgt-30 flex-al gap-6" style="padding: 5px 6px 5px 20px">
                    Tải xuống v2.2.1 cho MacOs
                    <img :src="img('icon_download.svg')" alt="" />
                </div>
            </div>
            <div class="flex-al-jt mgt-20">
                <div class="flex gap-80">
                    <div class="flex ps-rl">
                        <img :style="{ position: 'absolute', left: `${index * 16}px` }" v-for="(item, index) in avatar_people" :key="index" :src="img(item)" alt="" />
                    </div>
                    <div class="flex-al-jt" style="opacity: 0.5; color: #f1f2f4; height: 30px">{{ currentCount }} người dùng</div>
                </div>
            </div>
        </div>
    </div>

    <div data-aos="fade-up">
        <div class="ps-rl" id="target-section">
            <div class="flex-al-jt ps-rl">
                <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
                <div class="feature flex gap-10">
                    <img v-for="(icon, index) in icon" :key="index" :src="img(icon)" alt="" />
                    <div style="color: rgba(255, 255, 255, 0.51)">more...</div>
                </div>
            </div>
            <div class="fw-700 fz-40 flex-al-jt">Khám phá & tải xuống</div>
            <div class="fw-700 fz-40 flex-al-jt">video từ nhiều nguồn chỉ với 01 click</div>
            <div class="mgt-10">
                <div class="fz-16 flex-al-jt">Quickmagic giúp bạn khám phá, nắm bắt xu hướng mới từ nhiều nguồn nổi tiếng</div>
                <div class="fz-16 flex-al-jt">trên thế giới: Douyin. Tiktok, Facebook... và tải xuống nhanh chóng</div>
            </div>

            <div class="star-4"><img :src="img('Frame13820.png')" alt="" /></div>
        </div>

        <div class="mg_download flex-al-jt mgt-50">
            <div class="ps-rl">
                <video class="tilted-video ps-rl" style="height: 666px; border-radius: 20px" id="v0" tabindex="0" preload="auto" autoplay muted>
                    <source type="video/mp4 " src="/download.mp4" />
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
                <img class="icon-dl-tiktok" :src="img('icon_dl_tiktok.svg')" alt="" />
                <img class="icon-dl-video" :src="img('icon_dl_video.svg')" alt="" />
            </div>
        </div>
    </div>
    <div data-aos="fade-up" class="ps-rl">
        <div class="flex-al-jt ps-rl mgt-250">
            <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
            <div class="feature">Đa dạng tính năng</div>
        </div>
        <div class="fw-700 fz-40 flex-al-jt">Tùy biến linh hoạt theo nhu cầu với</div>
        <div class="fw-700 fz-40 flex-al-jt">Trình chỉnh sửa video</div>

        <div class="star-1"><img :src="img('Frame13821.png')" alt="" /></div>
        <div class="star-2"><img :src="img('Frame13820.png')" alt="" /></div>
        <div class="star-3"><img :src="img('Frame13821.png')" alt="" /></div>
        <div class="star-5"><img :src="img('Frame13821.png')" alt="" /></div>
    </div>
    <div class="flex-cl-al">
        <div class="background mgt-50 flex" @mousemove="updateCursorPosition" @mouseenter="showCursor" @mouseleave="hideCursor" data-aos="fade-up">
            <div class="subtitle" data-aos="fade-up">
                <div class="move">
                    <div class="background-sub">
                        <div class="flex gap-10">
                            <div class="selected w-50 pd-8">
                                <div>
                                    <div class="flex-al gap-6">
                                        <div class="fz-10 fw-700">Chuẩn xác</div>
                                        <div class="tip fz-8">Đề xuất</div>
                                    </div>
                                    <div class="fz-8 mgt-4">Chậm nhưng chuẩn xác hơn</div>
                                </div>
                                <div class="radio">
                                    <div class="item"></div>
                                </div>
                            </div>
                            <div class="selected active w-50 pd-8">
                                <div>
                                    <div class="flex-al gap-6">
                                        <div class="fz-10 fw-700 text-gradien">Nhanh</div>
                                    </div>
                                    <div class="fz-8 mgt-4">Tốc độ tạo sub nhanh</div>
                                </div>
                                <div class="radio-yelow">
                                    <div class="item"></div>
                                </div>
                            </div>
                        </div>
                        <div class="mgt-20">
                            <div class="flex-bw-al">
                                <div class="text-gr-2">GIỌNG NÓI THÀNH VĂN BẢN</div>
                                <div class="togerr">
                                    <div></div>
                                    <div class="item"></div>
                                </div>
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500">Font chữ</div>
                            <div class="select flex-bw-al">
                                <div class="flex-al gap-4">
                                    <img :src="img('icon_font.svg')" alt="" />
                                    <div>Arial</div>
                                </div>
                                <img :src="img('icon_down.svg')" alt="" />
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500">Kiểu căn lề</div>
                            <div class="flex-al gap-10">
                                <div class="sl-item active">
                                    <img :src="img('alignment_left.svg')" alt="" />
                                </div>
                                <div class="sl-item">
                                    <img :src="img('alignment_bw.svg')" alt="" />
                                </div>
                                <div class="sl-item">
                                    <img :src="img('alignment_surco.svg')" alt="" />
                                </div>
                                <div class="sl-item">
                                    <img :src="img('alignment_right.svg')" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500">Cỡ chữ</div>
                            <div class="select flex-bw-al">
                                <div class="flex-al gap-4">
                                    <img :src="img('icon_size_text.svg')" alt="" />
                                    <div>14</div>
                                </div>
                                <img :src="img('icon_down.svg')" alt="" />
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500">Màu chữ</div>
                            <div class="select flex-bw-al">
                                <div class="flex-al gap-4">
                                    <div>FFFFFF0</div>
                                </div>
                                <img :src="img('icon_color.svg')" alt="" />
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500">Viền chữ</div>
                            <div class="select flex-bw-al">
                                <div class="flex-al gap-4">
                                    <div>FFFFFF0</div>
                                </div>
                                <img :src="img('icon_color.svg')" alt="" />
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500 flex-al gap-6">
                                <div>Background chữ</div>
                                <div class="togerr">
                                    <div class="item"></div>
                                </div>
                            </div>
                            <div class="select flex-bw-al">
                                <div class="flex-al gap-4">
                                    <div>FFFFFF0</div>
                                </div>
                                <img :src="img('icon_color.svg')" alt="" />
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500 flex-al gap-6">
                                <div>Vị trí sub</div>
                            </div>
                            <div class="select flex-al pdbl-8 gap-5">
                                Y
                                <div class="volum flex">
                                    <div class="item">
                                        <div class="curco">
                                            <div class="items"></div>
                                        </div>
                                    </div>
                                </div>
                                30%
                            </div>
                        </div>
                        <div class="mgt-10 flex-bw-al">
                            <div class="fw-500">Ngôn ngữ subtitle</div>
                            <div class="select flex-bw-al">
                                <div class="flex-al gap-4">
                                    <img :src="img('icon_language.svg')" alt="" />
                                    <div>Ngôn ngữ gốc</div>
                                </div>
                                <img :src="img('icon_down.svg')" alt="" />
                            </div>
                        </div>
                        <div class="mgt-20">
                            <div class="flex-bw-al">
                                <div class="text-gr-2">LỒNG TIẾNG GIỌNG NÓI</div>
                                <div class="togerr">
                                    <div></div>
                                    <div class="item"></div>
                                </div>
                            </div>
                        </div>
                        <div class="fw-700 mgt-15">Thêm giọng đọc AI cho video</div>
                        <div class="flex gap-10 mgt-10">
                            <div class="selected active pd-6 w-50">
                                <div class="flex-al gap-6 fw-600">
                                    <img :src="img('icon_fpt.svg')" alt="" />
                                    FPT AI
                                </div>
                            </div>
                            <div class="selected pd-6 w-50">
                                <div class="flex-al gap-6 fw-600">
                                    <img :src="img('icon_vbee.svg')" alt="" />
                                    Vbee AI Studio
                                </div>
                            </div>
                        </div>
                        <div class="fw-500 mgt-15">Ngôn ngữ đọc</div>
                        <div class="select-option">
                            <div class="flex-al gap-6">
                                <img :src="img('icon_languega_voice.svg')" alt="" />
                                Tiếng việt
                            </div>
                            <img :src="img('icon_down.svg')" alt="" />
                        </div>
                        <div class="fw-500 mgt-15">Điền API Key</div>
                        <div class="select-option">
                            <div class="flex-al gap-6">
                                <img :src="img('icon_key.svg')" alt="" />
                                <div class="fw-500" style="color: rgba(255, 255, 255, 0.5)">Nhập tại đây...</div>
                            </div>
                            <img :src="img('icon_down.svg')" alt="" />
                        </div>
                        <div class="fw-500 mgt-15">Người đọc</div>
                        <div class="select-option">
                            <div class="flex-al gap-6">
                                <img :src="img('icon_avatar.svg')" alt="" />
                                HN - Thùy Trang - Tốc độ 1.25
                            </div>
                            <div class="text-gr-2">Tuỳ chỉnh</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="backdrop" data-aos="zoom-out"></div>
            <div class="flex-cl gap-40" style="z-index: 20; pointer-events: none" data-aos="fade-left">
                <div>
                    <div class="text-gr-blue fw-500">AI Subtitles</div>
                    <div class="text-gradien mgt-10 w-100 fz-32 fw-700">Biến giọng nói thành văn bản & Ngược lại</div>
                </div>
                <div class="flex gap-6 w-100" v-for="(item, index) in text_sub" :key="index">
                    <div class="icon">
                        <img :src="img(item.icon)" alt="" />
                        <div></div>
                    </div>
                    <div class="text">
                        {{ item.text }}
                    </div>
                </div>
                <div @click="test()" @mouseenter="disableCustomCursor" @mouseleave="enableCustomCursor" style="width: 200px; pointer-events: all" class="button">Trải nghiệm ngay</div>
            </div>
            <div ref="customCursor" class="custom-cursor"></div>
        </div>
        <div class="background mgt-80 flex ps-rl" @mousemove="updateCursorPositionLogo" @mouseenter="showCursorLogo" @mouseleave="hideCursorLogo" data-aos="fade-up">
            <div class="audio-logo" data-aos="fade-up">
                <div class="move">
                    <div class="background-sub">
                        <div class="bd-bt flex-bw-al gap-5">
                            <div class="flex-al gap-4">
                                <img :src="img('icon_backdrop_audio.svg')" alt="" />
                                BACKDROP
                            </div>
                            <img :src="img('icon_down.svg')" alt="" />
                        </div>
                        <div class="flex-al gap-10 mgt-20">
                            <div class="selected pdbl-6 pd-il-10 active w-50">
                                <div class="text-gr-2">Hệ thống</div>
                                <div class="radio-yelow">
                                    <div class="item"></div>
                                </div>
                            </div>
                            <div class="selected pdbl-6 pd-il-10 w-50">
                                <div>Tải lên</div>
                                <div class="radio">
                                    <div class="item"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-al gap-6 mgt-15">
                            Kiểu backdrop
                            <div class="inlined"></div>
                        </div>
                        <div class="flex gap-25 mgt-15">
                            <div v-for="(item, index) in img_backdrop" :key="index">
                                <img :src="img(item.icon)" alt="" />
                                <div class="mgt-5 flex-al-jt" :style="item.style">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                        <div class="flex-al gap-6 mgt-15">
                            Màu backdrop
                            <div class="inlined"></div>
                        </div>
                        <div class="table-color mgt-15">
                            <div v-for="(item, index) in color" :key="index" class="color" :style="{ backgroundColor: item.color }" :class="{ active: item.is_active }" @click="selectColor(index)">
                                <div v-if="item.is_active">
                                    <img :src="img('icon_tich_color.svg')" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="mgt-20 flex-bw-al">
                            Giới hạn thời gian xuất hiện
                            <div class="togerr flex-bw-al">
                                <div></div>
                                <div class="item"></div>
                            </div>
                        </div>
                        <div class="flex-al gap-10 mgt-20">
                            <div class="input-ps">
                                <div class="item">Từ (giây)</div>
                            </div>
                            <div class="input-ps">
                                <div class="item">Đến (giây)</div>
                            </div>
                        </div>
                        <div class="bd-bt flex-bw-al mgt-20 gap-5">
                            <div class="flex-al gap-4">
                                <img :src="img('icon_backdrop_audio.svg')" alt="" />
                                LOGO
                            </div>
                            <img :src="img('icon_down.svg')" alt="" />
                        </div>
                        <div class="bd-bt flex-bw-al mgt-20 gap-5">
                            <div class="flex-al gap-4">
                                <img :src="img('icon_backdrop_logo.svg')" alt="" />
                                TIÊU ĐỀ
                            </div>
                            <img :src="img('icon_down.svg')" alt="" />
                        </div>
                        <div class="bd-bt flex-bw-al mgt-20 gap-5">
                            <div class="flex-al gap-4">
                                <img :src="img('icon_backdrop_sound.svg')" alt="" />
                                GHÉP NHẠC NỀN
                            </div>
                            <img :src="img('icon_down.svg')" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="backdrop-right" data-aos="zoom-out"></div>
            <div class="info-logo" style="z-index: 20; pointer-events: none" data-aos="fade-right">
                <div>
                    <div class="text-gr-blue fw-500">Thêm hình ảnh & âm thanh</div>
                    <div class="text-gradien mgt-10 w-100 fz-32 fw-700">Tăng độ nhận diện cho video của bạn</div>
                </div>
                <div class="text">Tích hợp nhiều tùy chọn giúp bạn chỉnh sửa video dựa theo nhu cầu cá nhân.</div>
                <div class="text flex-al gap-5 mgt-30" v-for="(item, index) in audio_logo" :key="index">
                    <img :src="img(item.icon)" alt="" />
                    <div>{{ item.text }}</div>
                </div>
                <div @click="test()" @mouseenter="disableCustomLogo" @mouseleave="enableCustomLogo" style="width: 200px; pointer-events: all" class="button mgt-50">Trải nghiệm ngay</div>
            </div>

            <div ref="customCursorLogo" class="custom-cursor"></div>
        </div>
        <div class="background mgt-80 flex ps-rl" @mousemove="updateCursorPositionGraf" @mouseenter="showCursorGraf" @mouseleave="hideCursorGraf" data-aos="fade-up">
            <div class="subtitle" data-aos="fade-up">
                <div class="move">
                    <div class="background-sub">
                        <div class="flex-al gap-10 mgt-15">
                            <div class="fz-13">Kiểu ghép</div>
                            <div class="inlined"></div>
                        </div>
                        <div class="flex gap-20 mgt-15">
                            <div v-for="(item, index) in img_graf" :key="index">
                                <img :src="img(item.icon)" alt="" />
                                <div class="mgt-5 flex-al-jt" :style="item.style">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                        <div class="flex-al gap-4 mgt-15">
                            <div class="fz-13">Kích cỡ video</div>
                            <div class="inlined"></div>
                        </div>
                        <div class="flex gap-25 mgt-15">
                            <img :src="img('graf_size.svg')" alt="" />
                            <div class="w-100">
                                <div class="selected active pdbl-8 pd-il-10">
                                    Chiếm 15%
                                    <div class="radio-yelow">
                                        <div class="item"></div>
                                    </div>
                                </div>
                                <div class="selected mgt-15 pdbl-8 pd-il-10">
                                    Chiếm 30%
                                    <div class="radio">
                                        <div class="item"></div>
                                    </div>
                                </div>
                                <div class="selected mgt-15 pdbl-8 pd-il-10">
                                    Chiếm 50%
                                    <div class="radio">
                                        <div class="item"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-al gap-4 mgt-15">
                            <div class="fz-13">Âm lượng</div>
                            <div class="inlined"></div>
                        </div>

                        <div class="select-option mgt-15 pdbl-5 pd-il-10">
                            <div class="flex-al gap-6">
                                <img :src="img('icon_volum.svg')" alt="" />
                                Video ghép
                            </div>
                            <div class="flex-al gap-5">
                                <div class="volum short">
                                    <div class="item">
                                        <div class="curco">
                                            <div class="items"></div>
                                        </div>
                                    </div>
                                </div>
                                30%
                            </div>
                        </div>
                        <div class="select-option pdbl-5 pd-il-10 mgt-15">
                            <div class="flex-al gap-6">
                                <img :src="img('icon_volum.svg')" alt="" />
                                Video gốc
                            </div>
                            <div class="flex-al gap-5">
                                <div class="volum short">
                                    <div class="item">
                                        <div class="curco">
                                            <div class="items"></div>
                                        </div>
                                    </div>
                                </div>
                                30%
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-cl gap-40" style="z-index: 20; pointer-events: none" data-aos="fade-left">
                <div>
                    <div class="text-gr-blue fw-500">Và nhiều hơn nữa</div>
                    <div class="text-gradien mgt-10 w-100 fz-32 fw-700">Tùy biến cá nhân mạnh mẽ với Ghép & Nối video</div>
                </div>
                <div class="flex gap-6 w-100" v-for="(item, index) in text_graf" :key="index">
                    <div class="icon">
                        <img :src="img(item.icon)" alt="" />
                        <div></div>
                    </div>
                    <div class="text">
                        {{ item.text }}
                    </div>
                </div>
                <div @click="test()" @mouseenter="disableCustomGraf" @mouseleave="enableCustomGraf" style="width: 200px; pointer-events: all" class="button">Trải nghiệm ngay</div>
            </div>

            <div class="backdrop" data-aos="zoom-out"></div>
            <div ref="customCursorGraf" class="custom-cursor"></div>
        </div>

        <div class="flex-al-jt mgt-250" data-aos="fade-up">
            <div class="fl-cl-al">
                <div class="flex-al-jt ps-rl mgt-20">
                    <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
                    <div class="feature">Bật mí cho bạn</div>
                </div>
                <div>
                    <div class="fw-700 fz-40 flex-al-jt">Hãy sử dụng Quickmagic như</div>
                    <div class="fw-700 fz-40 flex-al-jt">một chuyên gia</div>
                </div>
            </div>
        </div>
        <div class="img_download flex gap-20 mgt-50">
            <div class="reveal" @mousemove="event => updateCursorPositionReveal(event, index)" @mouseenter="() => showCursorReveal(index)" @mouseleave="() => hideCursorReveal(index)" v-for="(item, index) in reveal_quick" :key="index" data-aos="fade-right" :data-aos-delay="1000 * index">
                <div style="pointer-events: none; z-index: 20; position: absolute">
                    <img :src="img(item.icon)" alt="" />
                    <div class="text-gr-2 fz-14">{{ item.step }}</div>
                    <div style="width: 246px" class="fw-700 fz-20 mgt-10">
                        {{ item.text }}
                    </div>
                    <div class="fz-14 mgt-30" style="line-height: 25px; width: 283px">
                        {{ item.text2 }}
                    </div>
                </div>
                <div :ref="'customCursorReveal' + index" class="custom-cursorr"></div>
            </div>
        </div>

        <div data-aos="fade-up">
            <div class="flex-al-jt mgt-250">
                <div class="flex-al-jt ps-rl mgt-20">
                    <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
                    <div class="feature">Tại sao lại là Quick Magic</div>
                </div>
            </div>
            <div class="fw-700 fz-40 flex-al-jt">Tính năng đột phá, phù hợp mọi</div>
            <div class="fw-700 fz-40 flex-al-jt">nhu cầu sử dụng</div>
        </div>
        <div class="img_download mgt-80 flex gap-20">
            <div class="feature-1 flex-cl-al gap-20">
                <div class="use flex-cl-al gap-10" data-aos="fade-right">
                    <div class="flex gap-80">
                        <div class="flex ps-rl">
                            <img :style="{ position: 'absolute', left: `${index * 16}px` }" v-for="(item, index) in avatar_people" :key="index" :src="img(item)" alt="" />
                        </div>
                        <div class="flex-al-jt" style="opacity: 0.5; color: #f1f2f4; height: 30px">{{ currentCount }} người dùng</div>
                    </div>
                    <div class="text-gr-2 fw-700">Dễ tiếp cận & sử dụng</div>
                </div>
                <div class="edit flex-cl-bw gap-50" data-aos="fade-up">
                    <div class="ps-rl">
                        <img class="icon" :src="img('icon_edit_feature.svg')" alt="" />
                    </div>
                    <div>
                        <div class="text">Chỉnh sửa hàng loạt video cùng lúc</div>
                        <div class="text-2">Loại bỏ hoàn toàn việc tốn thời gian cho các thao tác lặp lại</div>
                    </div>
                </div>
            </div>
            <div class="feature-2 flex-cl-al gap-20">
                <div class="update flex-al gap-50" data-aos="fade-left">
                    <div>
                        <div class="bk-update flex-al-jt">Up-to-date</div>
                        <div class="text mgt-15">Giúp bạn khám phá & cập nhật xu hướng video ngắn</div>
                        <div class="text-2">Luôn luôn đi đầu trong xu hướng video ngắn</div>
                    </div>
                    <div class="ps-rl">
                        <img class="icon" :src="img('icon_update_feature.svg')" alt="" />
                    </div>
                </div>
                <div class="flex-al gap-20" data-aos="zoom-in-up">
                    <div class="time flex-al gap-20">
                        <div class="text">Giảm tối đa thời gian làm việc</div>
                        <div class="ps-rl">
                            <img class="icon" :src="img('icon_time_feature.svg')" alt="" />
                        </div>
                    </div>
                    <div class="ai flex-cl-al gap-15">
                        <div class="text">Tích hợp AI tân tiến</div>
                        <div class="text-2">nhanh chóng & chính xác</div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up">
            <div class="flex-al-jt mgt-250">
                <div class="flex-al-jt ps-rl mgt-20">
                    <img class="user-sl" :src="img('button-yelow.svg')" alt="" />
                    <div class="feature">Phản hồi của người dùng</div>
                </div>
            </div>
            <div class="fw-700 fz-40 flex-al-jt">Mọi người đang nói gì về</div>
            <div class="fw-700 fz-40 flex-al-jt">QuickMagic</div>
        </div>
        <div data-aos="zoom-out" class="img_download mgt-50 flex gap-20" style="z-index: 2">
            <div class="feedback" @mousemove="event => updateCursorPositionFeedback(event, index)" @mouseenter="() => showCursorFeedback(index)" @mouseleave="() => hideCursorFeedback(index)" v-for="(item, index) in feedback" :key="index">
                <div style="pointer-events: none; position: absolute; z-index: 2">
                    <div class="pdl-45">
                        <img :src="img(item.icon)" alt="" />
                        <div class="fw-700 fz-20 mgt-45">{{ item.text }}</div>
                        <div class="fz-14 mgt-4">{{ item.text2 }}</div>
                    </div>
                    <div class="flex mgt-40">
                        <div class="mgt-35">
                            <img :src="img('icon_feedback.svg')" alt="" />
                        </div>
                        <div class="fz-14 mgt-40" style="line-height: 30px; width: 415px">
                            {{ item.feedback }}
                        </div>
                    </div>
                </div>
                <div :ref="'customCursorFeedback' + index" class="custom-cursorfeedback"></div>
            </div>
        </div>
        <div class="img_download mgt-50" style="z-index: 2">
            <div class="review_info flex-bw-al gap-6">
                <div>
                    <div class="fw-700 fz-32"><span class="text-gradien">Chỉnh sửa video</span> miễn phí cho mọi người,</div>
                    <div class="fw-700 fz-32 mgt-5">sáng tạo không giới hạn</div>
                    <div class="mgt-15">Thể hiện sự sáng tạo của bạn ngay bây giờ. Đăng ký sử dụng miễn phí ngay</div>
                    <div class="button mgt-40" style="width: 200px">Trải nghiệm ngay</div>
                </div>
                <img :src="img('logo_experience.svg')" alt="" />
            </div>
        </div>

        <div class="intro mgt-30"></div>
        <div class="backdrop" data-aos="zoom-out"></div>
    </div>
</template>
<route>
  {
      "meta": {
          "both": true
      }
  }
  </route>
<script>
import Axios from "axios-https-proxy-fix"
export default {
    data() {
        return {
            icon: ["icon_facebook.svg", "icon_instagram.svg", "icon_youtube.svg", "icon_tiktok.svg", "icon_kuashou.svg"],
            avatar_people: ["icon_avt_1.svg", "icon_avt_2.svg", "icon_avt_3.svg", "icon_avt_4.svg"],
            text_sub: [
                {
                    icon: "flash.svg",
                    text: "Tự động nhận dạng các ngôn ngữ khác nhau và tạo chú thích có độ chính xác cao"
                },
                {
                    icon: "flash.svg",
                    text: "Chuyển đổi bất kỳ văn bản nào thành giọng nói có âm thanh tự nhiên chỉ bằng một cú nhấp chuột."
                },
                {
                    icon: "flash.svg",
                    text: "Chuyển đổi hàng loạt video cùng lúc"
                }
            ],
            audio_logo: [
                {
                    icon: "icon_backdrop.svg",
                    text: "Thêm backdrop"
                },
                {
                    icon: "icon_logo_audio.svg",
                    text: "Logo"
                },
                {
                    icon: "icon_title.svg",
                    text: "Thêm tiêu đề"
                },
                {
                    icon: "icon_sound.svg",
                    text: "Ghép nhạc nền"
                }
            ],
            text_graf: [
                {
                    icon: "flash.svg",
                    text: "Ghép hàng loạt các video với nhau, tùy chỉnh vị trí và kích thước video ghép..."
                },
                {
                    icon: "flash.svg",
                    text: "Thêm các đoạn video vào đầu và cuối video & ghép tất cả video đã chọn thành một video"
                },
                {
                    icon: "flash.svg",
                    text: "Chuyển đổi hàng loạt video cùng lúc"
                }
            ],
            img_backdrop: [
                {
                    icon: "backdrop_bland.svg",
                    text: "Nhạt",
                    style: "opacity: 0.5"
                },
                {
                    icon: "backdrop_dark.svg",
                    text: "Đậm",
                    style: "opacity: 1"
                },
                {
                    icon: "backdrop_block.svg",
                    text: "Khối",
                    style: "opacity: 0.5"
                }
            ],
            color: [
                { color: "#EF4444", is_active: false },
                { color: "#F97316", is_active: false },
                { color: "#FACC15", is_active: false },
                { color: "#4ADE80", is_active: false },
                { color: "#4ADE80", is_active: true },
                { color: "#2DD4BF", is_active: false },
                { color: "#3B82F6", is_active: false },
                { color: "#0AD7A2", is_active: false },
                { color: "#EC4899", is_active: false },
                { color: "#F43F5E", is_active: false },
                { color: "#D946EF", is_active: false },
                { color: "#8B5CF6", is_active: false },
                { color: "#0EA5E9", is_active: false },
                { color: "#10B981", is_active: false },
                { color: "#A90798", is_active: false },
                { color: "#84CC16", is_active: false }
            ],
            img_graf: [
                {
                    icon: "graf_up.svg",
                    text: "Góc trên",
                    style: "opacity: 1"
                },
                {
                    icon: "graf_down.svg",
                    text: "Góc dưới",
                    style: "opacity: 0.5"
                },
                {
                    icon: "graf_down_all.svg",
                    text: "Bên dưới",
                    style: "opacity: 0.5"
                }
            ],
            reveal_quick: [
                {
                    icon: "step_1.svg",
                    text: "Khám phá và tải xuống video bạn muốn",
                    step: "Bước 1",
                    text2: "Link của cả kênh hoặc chỉ 01 video từ nguồn QuickMagic đang hỗ trợ tải, sau đó tải xuống và lưu trữ trên hệ thống thư mục của QuickMagic"
                },
                {
                    icon: "step_2.svg",
                    text: "Tinh chỉnh video trên QuickMagic",
                    step: "Bước 2",
                    text2: "Tùy chỉnh lại video bằng các chức năng của phần mềm: AI Sub, thêm backdrop, âm thanh hàng loạt"
                },
                {
                    icon: "step_3.svg",
                    text: "Video của bạn đã sẵn sàng rồi đó",
                    step: "Bước 3",
                    text2: "Chỉ với vài thao tác, video của bạn đã sẵn sàng, tận hưởng thành quả thôi"
                }
            ],
            feedback: [
                {
                    icon: "avatar_duymuoi.svg",
                    text: "Mr. Duy Muối",
                    text2: "Chuyên gia nền tảng Tiktok",
                    feedback: "Với mình đây là công cụ để biết các chủ đề video mới, Douyin là cái nôi của video ngắn thương mại điện tử, nếu chỉ xem giải trí là chưa đủ, bạn cần công cụ để tham khảo và học hỏi nó nữa."
                },
                {
                    icon: "avatar_doanky.svg",
                    text: "Mr. Doãn kỷ",
                    text2: "Chuyên gia nền tảng Meta",
                    feedback: "Douyin không chỉ là nền tảng giải trí, mà còn là nơi để nắm bắt xu hướng kinh doanh. Với QuickMagic, bạn có thể dễ dàng tải xuống toàn bộ kênh video từ Douyin để phân tích chiến lược tiếp thị, học hỏi cách mà các thương hiệu lớn tạo nội dung và tương tác với khách hàng. Đây là công cụ không thể thiếu cho những ai muốn khai thác tối đa tiềm năng của video ngắn trong thương mại điện tử."
                }
            ],
            system: "",
            number_user: 0,
            currentCount: 0
        }
    },

    mounted() {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        }

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate")
                    this.scrollElement(entry.target.querySelector(".background-sub"))
                    observer.unobserve(entry.target)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)
        const targets = document.querySelectorAll(".subtitle")
        const targetss = document.querySelectorAll(".audio-logo")
        targetss.forEach(target => observer.observe(target))
        targets.forEach(target => observer.observe(target))
        // this.initializeVideoScroll();
        this.detectSystem()
    },
    created() {
        this.test()
    },
    methods: {
        downloadWindow() {
            window.open("https://download.quickmagic.vn/Quick%20Magic%20Setup%202.2.1.zip", "_blank")
        },
        downloadMacos() {
            window.open("https://download.quickmagic.vn/Quick%20Magic-2.2.1-arm64.pkg", "_blank")
        },
        animateCount() {
            const duration = 10000 // 4 seconds duration
            const frameRate = 62 // 32ms per frame (slower updates)
            const increment = Math.ceil(this.number_user / (duration / frameRate)) // Adjust increment for slower animation
            const interval = setInterval(() => {
                this.currentCount += increment
                if (this.currentCount >= this.number_user) {
                    this.currentCount = this.number_user
                    clearInterval(interval)
                }
            }, frameRate)
        },
        async test() {
            let res = await Axios({
                url: "https://reels.adsteam.xyz/v1/get-users"
            })

            if (res.data.success) {
                this.number_user = res.data.count
                this.animateCount()
            }
        },
        // initializeVideoScroll() {
        //   var frameNumber = 0; // start video at frame 0
        //   var playbackConst = 500;
        //   var setHeight = document.querySelector(".mg_download");
        //   var vid = document.getElementById("v0");
        //   console.log(vid.duration);
        //   var scrollContainer = document.getElementById("scroll-container");

        //   // Check if video is fully loaded
        //   vid.addEventListener("loadedmetadata", function () {
        //     setHeight.style.height =
        //       Math.floor(vid.duration) * playbackConst + 1300 + "px";
        //   });

        //   // Ensure video is preloaded completely
        //   vid.addEventListener("canplaythrough", function () {
        //     // Use requestAnimationFrame for smooth playback
        //     function scrollPlay() {
        //       var frameNumber = scrollContainer.scrollTop / playbackConst;
        //       vid.currentTime = frameNumber;
        //       window.requestAnimationFrame(scrollPlay);
        //     }

        //     window.requestAnimationFrame(scrollPlay);
        //   });

        //   // Optional: Provide a loading indicator while video is buffering
        //   vid.addEventListener("waiting", function () {
        //     console.log("Video is buffering...");
        //     // You can show a loading spinner or message here
        //   });

        //   vid.addEventListener("playing", function () {
        //     console.log("Video is playing");
        //     // Hide the loading spinner or message here
        //   });
        // },
        detectSystem() {
            const userAgent = window.navigator.userAgent.toLowerCase()
            if (userAgent.indexOf("windows nt") !== -1) {
                this.system = "windows"
            } else if (userAgent.indexOf("mac os x") !== -1) {
                this.system = "macos"
            } else {
                this.system = "other"
            }
        },
        img(data) {
            return "images/home/" + data
        },
        scrollElement(element) {
            // Đảm bảo rằng phần tử bắt đầu từ vị trí ban đầu
            element.style.transform = "translateY(0)"

            let scrollAmount = 220
            let direction = 1
            let scrollCount = 0
            let maxScrollCount = 2 // Số lần cuộn xuống

            const scroll = () => {
                if (scrollCount < maxScrollCount) {
                    element.style.transform = `translateY(0)`
                    scrollCount++
                    setTimeout(scroll, 1500) // Đợi 1.5 giây trước khi cuộn tiếp
                } else if (scrollCount === maxScrollCount) {
                    // Cuộn lên sau khi cuộn xuống 2 lần
                    direction = -1
                    element.style.transform = `translateY(${scrollAmount * direction}px)`
                    scrollCount++
                    setTimeout(scroll, 2000) // Đợi 1.5 giây trước khi cuộn tiếp
                } else if (scrollCount > maxScrollCount && scrollCount < maxScrollCount + 3) {
                    // Cuộn lên hoàn toàn
                    element.style.transform = `translateY(0)`
                    scrollCount++
                }
            }
            setTimeout(scroll, 100)
            // Thêm một khoảng thời gian chờ ngắn trước khi bắt đầu cuộn
        },
        updateCursorPosition(event) {
            const x = event.offsetX
            const y = event.offsetY
            const cursor = this.$refs.customCursor

            cursor.style.setProperty("--x", `${x}px`)
            cursor.style.setProperty("--y", `${y}px`)
        },
        updateCursorPositionLogo(event) {
            const x = event.offsetX
            const y = event.offsetY
            const cursor = this.$refs.customCursorLogo
            cursor.style.setProperty("--x", `${x}px`)
            cursor.style.setProperty("--y", `${y}px`)
        },
        updateCursorPositionGraf(event) {
            const x = event.offsetX
            const y = event.offsetY
            const cursor = this.$refs.customCursorGraf
            cursor.style.setProperty("--x", `${x}px`)
            cursor.style.setProperty("--y", `${y}px`)
        },

        updateCursorPositionReveal(event, index) {
            const x = event.offsetX
            const y = event.offsetY
            const cursor = this.$refs[`customCursorReveal${index}`][0]
            cursor.style.setProperty("--x", `${x}px`)
            cursor.style.setProperty("--y", `${y}px`)
        },
        updateCursorPositionFeedback(event, index) {
            const x = event.offsetX
            const y = event.offsetY
            const cursor = this.$refs[`customCursorFeedback${index}`][0]
            cursor.style.setProperty("--x", `${x}px`)
            cursor.style.setProperty("--y", `${y}px`)
        },
        showCursorFeedback(index) {
            const cursor = this.$refs[`customCursorFeedback${index}`][0]
            cursor.style.display = "block"
        },
        hideCursorFeedback(index) {
            const cursor = this.$refs[`customCursorFeedback${index}`][0]
            cursor.style.display = "none"
        },
        showCursor() {
            this.$refs.customCursor.style.display = "block"
        },
        hideCursor() {
            this.$refs.customCursor.style.display = "none"
        },
        showCursorLogo() {
            this.$refs.customCursorLogo.style.display = "block"
        },
        hideCursorLogo() {
            this.$refs.customCursorLogo.style.display = "none"
        },
        showCursorGraf() {
            this.$refs.customCursorGraf.style.display = "block"
        },
        hideCursorGraf() {
            this.$refs.customCursorGraf.style.display = "none"
        },
        showCursorReveal(index) {
            const cursor = this.$refs[`customCursorReveal${index}`][0]
            cursor.style.display = "block"
        },
        hideCursorReveal(index) {
            const cursor = this.$refs[`customCursorReveal${index}`][0]
            cursor.style.display = "none"
        },

        disableCustomCursor() {
            this.hideCursor()
        },
        enableCustomCursor() {
            this.showCursor()
        },
        disableCustomLogo() {
            this.hideCursorLogo()
        },
        enableCustomLogo() {
            this.showCursorLogo()
        },
        disableCustomGraf() {
            this.hideCursorGraf()
        },
        enableCustomGraf() {
            this.showCursorGraf()
        }
    }
}
</script>

<style lang="scss" scoped>
.conten {
    height: 100vh;
    background-image: url("/images/home/background_home.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.img_download {
    max-width: 1218px;
    width: 100%;
}
.background-subb {
    position: absolute;
    bottom: 140px;
    left: 590px;
    pointer-events: none;
}
.background-edit {
    position: absolute;
    top: 270px;
    left: 60px;
    pointer-events: none;
}
.background-video {
    position: absolute;
    top: 270px;
    right: 90px;
    pointer-events: none;
}
.background-connect {
    position: absolute;
    bottom: 130px;
    right: 300px;
    pointer-events: none;
}
.background-ai {
    position: absolute;
    bottom: 0px;
    left: 320px;
    pointer-events: none;
}
.background-time {
    position: absolute;
    top: 310px;
    right: 600px;
    pointer-events: none;
}
.reveal {
    width: 393px;
    height: 389px;
    padding: 56px 65px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;

    overflow: hidden;
    &:after {
        content: "";
        position: absolute;
        inset: 1.5px;
        border-radius: 18px;
        background: rgba(13, 16, 29, 0.95);
        backdrop-filter: blur(22px);
    }
}
.custom-cursorr {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 336.385px;
    opacity: 0.3;
    background: #f6c205;
    filter: blur(15px);
    top: var(--y);
    left: var(--x);
    pointer-events: none;
    display: none;
    transform: translate(-50%, -50%);
}
.review_info {
    padding: 25px 48px 45px 75px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.17);
}
.feedback {
    height: 550px;
    width: 600px;
    padding: 75px 60px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.02);
    position: relative;
    overflow: hidden;
    &:after {
        content: "";
        position: absolute;
        inset: 1.5px;
        border-radius: 18px;
        background: rgba(13, 16, 29, 0.95);
        backdrop-filter: blur(22px);
    }
    .custom-cursorfeedback {
        position: absolute;
        width: 250px;
        height: 250px;
        border-radius: 336.385px;
        opacity: 0.3;
        background: #f6c205;
        filter: blur(15px);
        top: var(--y);
        left: var(--x);
        pointer-events: none;
        display: none;
        transform: translate(-50%, -50%);
    }
}
.intro {
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.17);
}
.background {
    gap: 160px;
    max-width: 1218px;
    width: 100%;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.02);
    height: 600px;
    padding: 65px 220px 0 75px;
    position: relative;
    overflow: hidden;
    .backdrop {
        pointer-events: none;
        position: absolute;
        top: 100px;
        left: 100px;
        z-index: 1;
        width: 130.086px;
        height: 240.188px;
        background: #ffc736;
        fill: #ffc736;
        opacity: 0.5;
        filter: blur(92px);
    }
    .backdrop-right {
        pointer-events: none;
        position: absolute;
        top: 50px;
        right: 203px;
        z-index: 1;
        width: 130.086px;
        height: 240.188px;
        background: #ffc736;
        fill: #ffc736;
        opacity: 0.5;
        filter: blur(92px);
    }
    .subtitle {
        position: relative;
        z-index: 2;
        border-radius: 19px 19px 0 0;
        padding: 1.5px;
        min-width: 357px;
        height: 800px;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        .move {
            pointer-events: none;
            background: black;
            width: 100%;
            height: 100%;
            overflow: hidden;
            // max-height: 100%;
            height: 534px;
            border-radius: 19px 19px 0 0;
            z-index: 23;
        }
        .background-sub {
            font-size: 10px;
            padding: 14px;
            border-radius: 19px 19px 0 0;
            width: 100%;
            height: calc(100% + 320px);
            background: #0a0d1a;
            transition: transform 0.5s ease-in-out;
            transform: translateY(0);
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 19px;
            background: conic-gradient(from var(--angle), var(--c2), var(--c1) 0.05turn, var(--c1) 0.01turn, var(--c2) 0.1turn);
            z-index: -1;
            opacity: 0;
            transition: opacity 1s;
        }

        &.animate::before {
            opacity: 1;
            animation: borderRotate var(--d) linear forwards;
        }

        &.animate:nth-child(2)::before {
            background: radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 25%, var(--c2) 35%);
            animation: borderRadial var(--d) linear infinite forwards;
        }
    }
    .info-logo {
        position: absolute;
        width: 420px;
    }
    .audio-logo {
        left: 600px;
        pointer-events: none;
        position: relative;
        z-index: 2;
        border-radius: 19px 19px 0 0;
        padding: 1.5px;
        min-width: 357px;
        height: 800px;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        .move {
            pointer-events: none;
            background: black;
            width: 100%;
            height: 100%;
            overflow: hidden;
            // max-height: 100%;
            height: 534px;
            border-radius: 19px 19px 0 0;
            z-index: 23;
        }
        .background-sub {
            font-size: 10px;
            padding: 14px;
            border-radius: 19px 19px 0 0;
            width: 100%;
            height: calc(100% + 320px);
            background: #0a0d1a;
            transition: transform 0.5s ease-in-out;
            transform: translateY(0);
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 19px;
            background: conic-gradient(from var(--anglelogo), var(--c2), var(--c1) 0.05turn, var(--c1) 0.01turn, var(--c2) 0.1turn);
            z-index: -1;
            opacity: 0;
            transition: opacity 1s;
        }

        &.animate::before {
            opacity: 1;
            animation: borderRotateLogo var(--d) linear forwards;
        }

        &.animate:nth-child(2)::before {
            background: radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 10%, var(--c2) 12%);
            animation: borderRadialLogo var(--d) linear infinite forwards;
        }
    }
    @keyframes borderRotateLogo {
        0%,
        50% {
            --anglelogo: 0deg;
        }
        100% {
            --anglelogo: 360deg;
        }
    }
    @keyframes borderRadialLogo {
        0% {
            --gradX: 100%;
            --gradY: 0%;
        }
        25% {
            --gradX: 100%;
            --gradY: 100%;
        }
        50% {
            --gradX: 0%;
            --gradY: 100%;
        }
        75% {
            --gradX: 0%;
            --gradY: 0%;
        }
        100% {
            --gradX: 100%;
            --gradY: 0%;
        }
    }
    @keyframes borderRotate {
        0%,
        50% {
            --angle: 320deg;
        }
        100% {
            --angle: 680deg;
        }
    }

    @keyframes borderRadial {
        0% {
            --gradX: 50%;
            --gradY: 0%;
        }
        25% {
            --gradX: 100%;
            --gradY: 100%;
        }
        50% {
            --gradX: 0%;
            --gradY: 100%;
        }
        75% {
            --gradX: 0%;
            --gradY: 0%;
        }
        100% {
            --gradX: 0%;
            --gradY: 0%;
        }
    }

    &:hover:before {
        opacity: 1;
    }
    &:after {
        content: "";
        position: absolute;
        inset: 1.5px;
        border-radius: 18px;
        background: rgba(13, 16, 29, 0.95);
        backdrop-filter: blur(22px);
    }

    .custom-cursor {
        position: absolute;
        width: 350px;
        height: 350px;
        border-radius: 336.385px;
        opacity: 0.3;
        background: #f6c205;
        filter: blur(15px);
        pointer-events: none;
        display: none;
        transform: translate(-50%, -50%);
    }
    .icon {
        padding-top: 7px;
    }
    .text {
        font-size: 15px;
        line-height: 27px; /* 168.75% */
        opacity: 0.7;
    }
}
.feature-1 {
    width: 35%;
    .use {
        width: 100%;
        padding: 35px 70px;
        height: 135px;
        border-radius: 20px;
        border: 0px solid rgba(255, 255, 255, 0.17);
        background: rgba(255, 255, 255, 0.02);
    }
    .edit {
        width: 100%;
        padding: 75px 68px 99px 68px;
        height: 526px;
        border-radius: 20px;
        border: 0px solid rgba(255, 255, 255, 0.17);
        background: rgba(255, 255, 255, 0.02);

        .icon {
            position: absolute;
            left: -94px;
            bottom: -265px;
        }
        .text {
            width: 236px;
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(180deg, #04a980 0%, #4ec99e 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .text-2 {
            margin-top: 15px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 31px;
        }
    }
}
.feature-2 {
    width: 65%;
    .update {
        overflow: hidden;
        height: 428px;
        width: 100%;
        padding: 80px 0 82px 70px;
        border-radius: 20px;
        border: 0px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.02);
        .bk-update {
            width: 115px;
            padding: 4px 10px;
            border-radius: 40px;
            background: linear-gradient(180deg, #f65f01 0%, #903801 100%);
        }
        .text {
            width: 302px;
            background: linear-gradient(90deg, #ee5c01 0%, #ff9046 85.33%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 32px;
            font-weight: 700;
        }
        .text-2 {
            width: 340px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 34px; /* 212.5% */
            margin-top: 25px;
        }
        .icon {
            position: absolute;
            top: -225px;
            right: -384px;
        }
    }
    .time {
        padding: 53px 0 50px 68px;
        overflow: hidden;
        width: 527px;
        height: 233px;
        border-radius: 20px;
        border: 0px solid rgba(255, 255, 255, 0.17);
        background: rgba(255, 255, 255, 0.02);
        .text {
            width: 195px;
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(90deg, #992bff 0%, #ca92fd 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .icon {
            position: absolute;
            bottom: -176px;
            left: 0;
        }
    }
    .ai {
        padding: 46px 22px 28px 35px;
        border-radius: 20px;
        border: 0px solid rgba(255, 255, 255, 0.17);
        background: rgba(255, 255, 255, 0.02);
        width: 254px;
        height: 233px;
        .text {
            color: #f0b12e;
            font-size: 32px;
            font-weight: 700;
            line-height: 39px; /* 121.875% */
        }
        .text-2 {
            color: rgba(255, 255, 255, 0.7);
            line-height: 26px; /* 162.5% */
        }
    }
}
.star-1 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    pointer-events: none;
}
.star-3 {
    position: absolute;
    top: 2400px;
    left: 0;
    z-index: -1;
    pointer-events: none;
}
.star-4 {
    position: absolute;
    top: 300px;
    right: 0;
    z-index: -1;
    pointer-events: none;
}
.star-5 {
    position: absolute;
    top: 4500px;
    left: 0;
    z-index: -1;
    pointer-events: none;
}
.icon-dl-tiktok {
    position: absolute;
    bottom: 0;
    left: -160px;
    pointer-events: none;
}

.icon-dl-video {
    position: absolute;
    bottom: -110px;
    right: -160px;
    pointer-events: none;
}

.star-2 {
    position: absolute;
    top: 800px;
    right: 0;
    z-index: -1;
    pointer-events: none;
}
.tilted-video {
    transform: perspective(1000px) rotateX(11deg);
    transform-origin: top center;
}

.info {
    margin-top: 530px;
}
@property --angle {
    syntax: "<angle>";
    initial-value: 90deg;
    inherits: true;
}
@property --anglelogo {
    syntax: "<angle>";
    initial-value: 90deg;
    inherits: true;
}
@property --gradX {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: true;
}

@property --gradY {
    syntax: "<percentage>";
    initial-value: 0%;
    inherits: true;
}
</style>
