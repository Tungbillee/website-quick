import{b as W}from"./route-block-83d24a4e.js";import{_ as et,r as st,h as it,o,c,a as t,t as l,i as h,d as m,b as d,n as X,F as K,e as J,j as Z,k as p,f as nt,p as at,g as ot}from"./index-fa9880dc.js";const tt={data(){return{type_manage:"goi",type_transaction:"payment",dateRange:"",dataPaymentHistory:[],show_history_action:!1,user:{},isConfirmDeleteDevice:!1,pagination:{current_page:1,per_page:25,total:0,total_pages:0,loading:!1},type_status_history:"all",dataHistoryAction:[],pagination_history:{current_page:1,per_page:10,total:0,total_pages:0,loading:!1},dateRangeHistory:""}},watch:{type_manage(i){i==="giaodich"&&this.$nextTick(()=>{setTimeout(()=>{this.openDateRangePicker()},500)}),i==="history"&&this.$nextTick(()=>{setTimeout(()=>{this.openDateRangePickerHistory()},500)})},type_transaction(i){this.dataPaymentHistory=[],this.pagination.current_page=1,this.getPaymentHistory()},dateRange(i){this.dataPaymentHistory=[],this.pagination.current_page=1,this.getPaymentHistory()},dateRangeHistory(i){this.dataHistoryAction=[],this.pagination_history.current_page=1,this.getHistoryAction()},type_status_history(i){this.dataHistoryAction=[],this.pagination_history.current_page=1,this.getHistoryAction()}},created(){this.getUser(),this.getPaymentHistory(),this.getHistoryAction()},methods:{img(i){return"images/admin-panel/"+i},clickpageAccount(i){if(this[i]=!this[i],this[i]){const a=_=>{_.target.closest(".popup-class")||(this[i]=!1,window.removeEventListener("click",a))};window.addEventListener("click",a)}},goToBuyPoint(){window.open("https://www.facebook.com/Quick.magic1/","_blank")},getColorByPercentage(i,a){const _=i??0,n=(_-(a??0))/_*100;return n>50?"text-green":n>30?"text-yellow":"text-red"},confirmDeleteDevice(){this.isConfirmDeleteDevice=!0},async deleteDevice(){(await this.api({path:"/web/user/delete-device",method:"POST"})).success&&(this.isConfirmDeleteDevice=!1,this.getUser())},goToBuyPackage(){this.$router.push("/buy-pankage")},goToBuySubtitle(){this.$router.push("/buy-subtitle")},goToBuyVoice(){this.$router.push("/buy-voice")},loadMoreHistoryAction(i){i&&!this.pagination_history.loading&&this.pagination_history.current_page<this.pagination_history.total_pages&&(this.pagination_history.current_page+=1,this.getHistoryAction())},async getHistoryAction(){if(this.pagination_history.loading)return;this.pagination_history.loading=!0;let i=await this.api({path:"/web/user/get-history-video",params:{date_range:this.dateRangeHistory,type:this.type_status_history,page:this.pagination_history.current_page,limit:this.pagination_history.per_page}});console.log(this.dateRangeHistory),console.log(i),i.success&&(this.dataHistoryAction=[...this.dataHistoryAction,...i.data],this.pagination_history.total=i.pagination.total,this.pagination_history.total_pages=i.pagination.total_pages,this.pagination_history.loading=!1)},loadMorePayment(i){i&&!this.pagination.loading&&this.pagination.current_page<this.pagination.total_pages&&(this.pagination.current_page+=1,this.getPaymentHistory())},async getPaymentHistory(){if(this.pagination.loading)return;this.pagination.loading=!0;let i=await this.api({path:"/web/user/get-payment",params:{date_range:this.dateRange,type:this.type_transaction,page:this.pagination.current_page,limit:this.pagination.per_page}});i.success&&(this.dataPaymentHistory=[...this.dataPaymentHistory,...i.payment_history],this.pagination.total=i.pagination.total,this.pagination.total_pages=i.pagination.total_pages,this.pagination.loading=!1)},calculateDeviceRefreshTime(i){if(!i)return"0 ngày";const a=new Date(i),_=new Date(a.setMonth(a.getMonth()+1)),u=new Date,e=_.getTime()-u.getTime();return e<=0?"0 ngày":`${Math.ceil(e/(1e3*60*60*24))} ngày nữa`},async getUser(i=3){try{let a=await this.api({path:"/web/user/get-info"});if(a.success)this.user=a.data_user;else throw new Error("API request failed")}catch(a){if(console.error("Error fetching user info:",a),i>0)return await new Promise(_=>setTimeout(_,1e3)),this.getUser(i-1);console.error("Max retry attempts reached")}},formatnumber(i){return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getPackageIcon(i){const a={Normal:"icon_plus.svg",Pro:"icon_Pro.svg",Advance:"icon_Advance.svg"};return this.img(a[i]||"default_icon.svg")},formatExpiryDate(i){return moment(i).format("HH:mm - DD/MM/YYYY ")},calculatePercentageWidth(i,a){const _=i??0,u=a??0;if(_===0)return"0%";const n=(_-u)/_*100;return`${Math.min(100,Math.max(0,n))}%`},calculateRemainingMinutes(i,a){const e=(i??0)-(a??0);return this.formatnumber(e)},formatExpiryDateMonth(i){if(!i)return"-";const a=new Date;a.setHours(0,0,0,0);const _=new Date(i);_.setHours(0,0,0,0);const u=_.getTime()-a.getTime(),e=Math.floor(u/(1e3*60*60*24)),n=String(_.getDate()).padStart(2,"0"),g=String(_.getMonth()+1).padStart(2,"0"),v=_.getFullYear(),y=`${n}/${g}/${v}`;return e<0?`Đã hết hạn (${y})`:e===0?`Hết hạn hôm nay (${y})`:`Còn ${e} ngày`},openDateRangePicker(){$('input[name="datetimes_payment"]').daterangepicker({ranges:{"Hôm nay":[moment(),moment()],"Hôm qua":[moment().subtract(1,"days"),moment().subtract(1,"days")],"7 ngày qua":[moment().subtract(6,"days"),moment()],"30 ngày qua":[moment().subtract(29,"days"),moment()],"Tháng này":[moment().startOf("month"),moment().endOf("month")],"Tháng trước":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},alwaysShowCalendars:!0,startDate:"27/10/2024",endDate:"02/11/2024",locale:{format:"DD/MM/YYYY"}},(i,a,_)=>{this.dateRange=i.format("DD/MM/YYYY")+" - "+a.format("DD/MM/YYYY")})},openDateRangePickerHistory(){$('input[name="datetimes_history"]').daterangepicker({ranges:{"Hôm nay":[moment(),moment()],"Hôm qua":[moment().subtract(1,"days"),moment().subtract(1,"days")],"7 ngày qua":[moment().subtract(6,"days"),moment()],"30 ngày qua":[moment().subtract(29,"days"),moment()],"Tháng này":[moment().startOf("month"),moment().endOf("month")],"Tháng trước":[moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]},alwaysShowCalendars:!0,startDate:"27/10/2024",endDate:"02/11/2024",locale:{format:"DD/MM/YYYY"}},(i,a,_)=>{this.dateRangeHistory=i.format("DD/MM/YYYY")+" - "+a.format("DD/MM/YYYY")})}}},r=i=>(at("data-v-405bb4ad"),i=i(),ot(),i),ct={class:"container-settings"},rt=r(()=>t("div",{class:"spaces"},null,-1)),lt={class:"contents"},dt={class:"info"},_t={class:"flex-bw-al"},ht={class:"flex-al gap-10"},ut=["src"],gt={class:"fw-600 fz-20 text-long1"},yt={class:"flex-al gap-6 fz-16"},vt={class:"text-green"},mt={class:"flex-al gap-3"},pt=["src"],ft=r(()=>t("div",{class:"text-yellow fw-600"},"Point",-1)),xt={class:"flex-bw-al mgt-15"},bt={class:"flex-al gap-3"},wt=["src"],kt=r(()=>t("div",null,"Thiết bị đang kết nối:",-1)),Dt={class:"text-yellow"},Tt={class:"text-300 mgt-10"},Mt={class:"flex gap-10"},Pt=["src"],Ht=r(()=>t("div",null,"Mua gói",-1)),Ct={class:"table"},Yt={class:"header flex-al"},At=r(()=>t("div",null,"Quản lý gói cước",-1)),Rt=r(()=>t("div",null,"Quản lý giao dịch",-1)),Bt=r(()=>t("div",null,"Lịch sử hành động",-1)),St={key:0,class:"body"},zt={class:"flex-al gap-5"},Et=["src"],Ot={key:0,class:"fz-24 fw-600"},It={key:1,class:"fz-24 fw-600"},Lt={key:0,class:"expired flex-bw-al"},qt={class:"flex-al gap-5"},Nt=["src"],Vt={class:"text-red fz-16 fw-500"},Gt=r(()=>t("div",{class:"text-yellow fz-16 fw-600"},"Gia hạn ngay",-1)),jt={class:"infos"},Ft=r(()=>t("div",{class:"title-info"},"Thời hạn gói cước",-1)),Qt={class:"contens-info flex-al gap-3"},Ut={key:0},Wt={key:1},Xt=r(()=>t("div",{class:"text-300"},"-",-1)),Kt={class:"text-yellow"},Jt={class:"text-300"},Zt={class:"infos flex-bw-al"},$t=r(()=>t("div",{class:"title-info"},"Số phút tách phụ đề",-1)),te={class:"flex-al contens-info gap-5"},ee=r(()=>t("div",{class:"curso"},null,-1)),se={class:"loading"},ie={class:"infos flex-bw-al"},ne=r(()=>t("div",{class:"title-info"},"Ký tự lồng tiếng",-1)),ae={class:"flex-al contens-info gap-5"},oe=r(()=>t("div",{class:"curso"},null,-1)),ce={class:"loading"},re={key:1,class:"transaction"},le={class:"config flex-bw-al"},de={class:"flex select-transaction"},_e={class:"selects-type flex-al gap-3"},he=["src"],ue=r(()=>t("div",{class:"text-300"},[t("input",{type:"text",name:"datetimes_payment",class:"text-300"})],-1)),ge=["src"],ye={class:"body-transaction"},ve={class:"header-transaction flex-al"},me=r(()=>t("div",{class:"titles-transaction",style:{"min-width":"200px",width:"100%"}},"Thời gian",-1)),pe=r(()=>t("div",{class:"titles-transaction",style:{"min-width":"250px",width:"100%"}},"Giá trị giao dịch",-1)),fe={key:0,class:"titles-transaction",style:{"min-width":"250px"}},xe={key:1,class:"titles-transaction",style:{"min-width":"250px",width:"100%"}},be={key:2,class:"titles-transaction",style:{"min-width":"200px",width:"100%"}},we=r(()=>t("div",{class:"titles-transaction",style:{"min-width":"150px"}},"Trạng thái",-1)),ke={class:"table-transaction"},De={class:"titles-transaction",style:{"min-width":"200px",width:"100%"}},Te={class:"titles-transaction flex-al gap-10",style:{"min-width":"250px",width:"100%"}},Me={key:0,class:"text-red"},Pe={key:1,class:"text-green"},He={class:"flex-al gap-5"},Ce=["src"],Ye=r(()=>t("div",{class:"text-yellow fw-600"},"Point",-1)),Ae={key:0,class:"titles-transaction",style:{"min-width":"250px"}},Re={key:0},Be={key:1},Se={key:2},ze={key:1,class:"titles-transaction",style:{"min-width":"250px",width:"100%"}},Ee={key:0,class:"flex-al text-300"},Oe={key:1,class:"flex-al mgt-10 text-300"},Ie={key:2,class:"titles-transaction",style:{"min-width":"200px",width:"100%"}},Le={class:"titles-transaction",style:{"min-width":"150px"}},qe={key:0,class:"text-green"},Ne={key:0,ref:"sentinel",class:"sentinel"},Ve={key:2,class:"transaction"},Ge={class:"header-history flex-bw-al"},je={class:"selects-type flex-al gap-3"},Fe=["src"],Qe=r(()=>t("div",{class:"text-300"},[t("input",{type:"text",name:"datetimes_history",class:"text-300"})],-1)),Ue=["src"],We=["src"],Xe=r(()=>t("div",null,[t("span",{class:"text-300"},"Trạng thái: "),p(" Tất cả")],-1)),Ke=["src"],Je={key:0,class:"select-action"},Ze={class:"table-history"},$e=nt('<div class="header-history flex-al" data-v-405bb4ad><div class="title-history" style="min-width:200px;" data-v-405bb4ad>Thời gian</div><div class="title-history" style="min-width:220px;width:50%;" data-v-405bb4ad>Video</div><div class="title-history" style="min-width:250px;width:50%;" data-v-405bb4ad>Chi tiết hành động</div><div class="title-history" style="min-width:150px;" data-v-405bb4ad>Trạng thái</div></div>',1),ts={class:"body-history"},es={class:"title-history",style:{"min-width":"200px"}},ss={class:"title-history",style:{"min-width":"220px",width:"50%"}},is={class:"title-history flex-al gap-5",style:{"min-width":"250px",width:"50%"}},ns=r(()=>t("span",{class:"text-300"},"lồng tiếng",-1)),as=r(()=>t("div",{class:"text-300"},"|",-1)),os=r(()=>t("span",{class:"text-300"},"phụ đề",-1)),cs={class:"title-history",style:{"min-width":"150px"}},rs={key:0,class:"text-green"},ls={key:1,class:"text-red"},ds={key:2,class:"text-yellow"},_s={ref:"sentinel",class:"sentinel"},hs={key:0,class:"confirm-delete-device flex-al-jt"},us={class:"confirm-delete-device-content flex-cl-al"},gs=["src"],ys=r(()=>t("div",{class:"fw-600 fz-16"},"Xác nhận xoá thiết bị",-1)),vs=r(()=>t("div",{class:"text-300 mgt-10 text-al"},"Sau khi xoá thiết bị hiện tại, bạn có thể kết nối tài khoản QuickMagic với một thiết bị khác.",-1));function ms(i,a,_,u,e,n){var y,f,x,b,w,k,D,T,M,P,H,C,Y,A,R,B,S,z,E,O,I,L,q,N,V,G,j,F,Q,U;const g=st("Icon"),v=it("observe-visibility");return o(),c("div",ct,[rt,t("div",lt,[t("div",dt,[t("div",_t,[t("div",ht,[t("img",{src:n.img("user.svg"),alt:""},null,8,ut),t("div",gt,l((y=e.user)==null?void 0:y.email),1)]),t("div",yt,[t("div",vt,"Số dư: "+l(n.formatnumber(((f=e.user)==null?void 0:f.balance)??0)),1),t("div",mt,[t("img",{src:n.img("icon_point.svg"),alt:""},null,8,pt),ft])])]),t("div",xt,[t("div",null,[t("div",bt,[t("img",{src:n.img("icon_device.svg"),alt:""},null,8,wt),kt,t("div",Dt,l(((x=e.user)==null?void 0:x.name_device)??"Chưa kết nối thiết bị nào"),1),t("div",{onClick:a[0]||(a[0]=s=>n.confirmDeleteDevice()),class:h(["delete-device",{no_active:!e.user.delete_device}])},"Xoá thiết bị",2)]),t("div",Tt,"Được làm mới thiết bị sau: "+l(n.calculateDeviceRefreshTime(((b=e.user)==null?void 0:b.active_at)??0)),1)]),t("div",Mt,[t("div",{class:"buy flex-al gap-5",onClick:a[1]||(a[1]=(...s)=>n.goToBuyPackage&&n.goToBuyPackage(...s))},[t("img",{src:n.img("icon_buy.svg"),alt:""},null,8,Pt),Ht]),t("div",{onClick:a[2]||(a[2]=(...s)=>n.goToBuyPoint&&n.goToBuyPoint(...s)),class:"button flex-al-jt"},"Nạp Point")])])]),t("div",Ct,[t("div",Yt,[t("div",{class:h(["flex-al items-center gap-3",{active:e.type_manage==="goi"}]),onClick:a[3]||(a[3]=s=>e.type_manage="goi")},[m(g,{size:"20",src:n.img("icon_goi.svg"),alt:""},null,8,["src"]),At],2),t("div",{class:h(["flex-al items-center gap-3",{active:e.type_manage==="giaodich"}]),onClick:a[4]||(a[4]=s=>e.type_manage="giaodich")},[m(g,{size:"20",src:n.img("icon_card.svg"),alt:""},null,8,["src"]),Rt],2),t("div",{class:h(["flex-al items-center gap-3",{active:e.type_manage==="history"}]),onClick:a[5]||(a[5]=s=>e.type_manage="history")},[m(g,{size:"20",src:n.img("icon_history.svg"),alt:""},null,8,["src"]),Bt],2)]),e.type_manage==="goi"?(o(),c("div",St,[t("div",zt,[t("img",{src:n.getPackageIcon((w=e.user)==null?void 0:w.name_package),alt:""},null,8,Et),((k=e.user)==null?void 0:k.purchase_term)<1?(o(),c("div",Ot,"Gói cước : 1 tuần")):(o(),c("div",It,"Gói cước : "+l(((D=e.user)==null?void 0:D.purchase_term)??0)+" tháng",1))]),e.user.has_expired?(o(),c("div",Lt,[t("div",qt,[t("img",{src:n.img("icon_clock.svg"),alt:""},null,8,Nt),t("div",null,[t("div",Vt,"Gói cước: "+l((T=e.user)==null?void 0:T.purchase_term)+" tháng của bạn đã hết hạn",1)])]),Gt])):d("",!0),t("div",jt,[Ft,t("div",Qt,[((M=e.user)==null?void 0:M.purchase_term)<1?(o(),c("div",Ut,"Thời hạn mua: 1 tuần")):(o(),c("div",Wt,"Thời hạn mua: "+l((P=e.user)==null?void 0:P.purchase_term)+" tháng",1)),Xt,t("div",Kt,l(n.formatExpiryDateMonth((H=e.user)==null?void 0:H.expiry_date)),1),t("div",Jt," ( hết hạn vào ngày "+l(n.formatExpiryDate((C=e.user)==null?void 0:C.expiry_date))+") ",1)])]),t("div",Zt,[t("div",null,[$t,t("div",te,[t("div",null,l(n.formatnumber(((Y=e.user)==null?void 0:Y.number_minutes_subtitle)??0))+" phút",1),ee,t("div",{class:h(n.getColorByPercentage((A=e.user)==null?void 0:A.number_minutes_subtitle,(R=e.user)==null?void 0:R.minutes_used))}," Còn lại: "+l(n.calculateRemainingMinutes(((B=e.user)==null?void 0:B.number_minutes_subtitle)??0,((S=e.user)==null?void 0:S.minutes_used)??0))+" phút ",3)]),t("div",se,[t("div",{class:h(["item",n.getColorByPercentage(((z=e.user)==null?void 0:z.number_minutes_subtitle)??0,((E=e.user)==null?void 0:E.minutes_used)??0)]),style:X({width:n.calculatePercentageWidth(((O=e.user)==null?void 0:O.number_minutes_subtitle)??0,((I=e.user)==null?void 0:I.minutes_used)??0)})},null,6)])])]),t("div",ie,[t("div",null,[ne,t("div",ae,[t("div",null,l(n.formatnumber(((L=e.user)==null?void 0:L.number_voice_characters)??0))+" ký tự",1),oe,t("div",{class:h(n.getColorByPercentage((q=e.user)==null?void 0:q.number_voice_characters,(N=e.user)==null?void 0:N.voice_used))}," Còn lại: "+l(n.calculateRemainingMinutes(((V=e.user)==null?void 0:V.number_voice_characters)??0,((G=e.user)==null?void 0:G.voice_used)??0))+" ký tự ",3)]),t("div",ce,[t("div",{class:h(["item",n.getColorByPercentage((j=e.user)==null?void 0:j.number_voice_characters,(F=e.user)==null?void 0:F.voice_used)]),style:X({width:n.calculatePercentageWidth((Q=e.user)==null?void 0:Q.number_voice_characters,(U=e.user)==null?void 0:U.voice_used)})},null,6)])])])])):d("",!0),e.type_manage==="giaodich"?(o(),c("div",re,[t("div",le,[t("div",de,[t("div",{class:h(["item-select",{active:e.type_transaction==="payment"}]),onClick:a[6]||(a[6]=s=>e.type_transaction="payment")},"Thanh toán",2),t("div",{class:h(["item-select",{active:e.type_transaction==="history"}]),onClick:a[7]||(a[7]=s=>e.type_transaction="history")},"Lịch sử nạp",2)]),t("div",_e,[t("img",{src:n.img("icon_lich.svg"),alt:""},null,8,he),ue,t("img",{src:n.img("icon_arrow.svg"),alt:""},null,8,ge)])]),t("div",ye,[t("div",ve,[me,pe,e.type_transaction==="payment"?(o(),c("div",fe,"Loại")):d("",!0),e.type_transaction==="payment"?(o(),c("div",xe,"Chi tiết")):d("",!0),e.type_transaction==="history"?(o(),c("div",be,"Đại lý hỗ trợ")):d("",!0),we]),t("div",ke,[(o(!0),c(K,null,J(e.dataPaymentHistory,s=>(o(),c("div",{class:"items-transaction flex-al",key:s.id},[t("div",De,l(n.formatExpiryDate(s==null?void 0:s.created_at)),1),t("div",Te,[e.type_transaction==="payment"?(o(),c("div",Me,"-"+l(n.formatnumber((s==null?void 0:s.transaction_value)??0)),1)):d("",!0),e.type_transaction==="history"?(o(),c("div",Pe,"+"+l(n.formatnumber((s==null?void 0:s.transaction_value)??0)),1)):d("",!0),t("div",He,[t("img",{src:n.img("icon_point.svg"),alt:""},null,8,Ce),Ye])]),e.type_transaction==="payment"?(o(),c("div",Ae,[(s==null?void 0:s.type_payment)==="package"?(o(),c("div",Re,"Mua gói : "+l(s==null?void 0:s.name_package),1)):d("",!0),(s==null?void 0:s.type_payment)==="subtitle"?(o(),c("div",Be,"Mua tách phụ đề")):d("",!0),(s==null?void 0:s.type_payment)==="voice"?(o(),c("div",Se,"Mua ký tự lồng tiếng")):d("",!0)])):d("",!0),e.type_transaction==="payment"?(o(),c("div",ze,[s!=null&&s.number_minutes_subtitle?(o(),c("div",Ee,"Tách phụ đề: "+l(n.formatnumber((s==null?void 0:s.number_minutes_subtitle)??0))+" phút",1)):d("",!0),s!=null&&s.number_voice_characters?(o(),c("div",Oe,"Lồng tiếng: "+l(n.formatnumber((s==null?void 0:s.number_voice_characters)??0))+" ký tự",1)):d("",!0)])):d("",!0),e.type_transaction==="history"?(o(),c("div",Ie,l(s==null?void 0:s.name_agency),1)):d("",!0),t("div",Le,[s.status==="success"?(o(),c("div",qe,"Thành công")):d("",!0)])]))),128)),e.type_transaction==="payment"?Z((o(),c("div",Ne,null,512)),[[v,n.loadMorePayment]]):d("",!0)])])])):d("",!0),e.type_manage==="history"?(o(),c("div",Ve,[t("div",Ge,[t("div",je,[t("img",{src:n.img("icon_lich.svg"),alt:""},null,8,Fe),Qe,t("img",{src:n.img("icon_arrow.svg"),alt:""},null,8,Ue)]),t("div",{class:"selects-type flex-al gap-6 popup-class",onClick:a[11]||(a[11]=s=>n.clickpageAccount("show_history_action"))},[t("img",{src:n.img("icon_filter.svg"),alt:""},null,8,We),Xe,t("img",{src:n.img("icon_arrow.svg"),alt:""},null,8,Ke),e.show_history_action?(o(),c("div",Je,[t("div",{class:"items",onClick:a[8]||(a[8]=s=>e.type_status_history="all")},"Tất cả"),t("div",{class:"items",onClick:a[9]||(a[9]=s=>e.type_status_history="done")},"Thành công"),t("div",{class:"items",onClick:a[10]||(a[10]=s=>e.type_status_history="error")},"Thất bại")])):d("",!0)])]),t("div",Ze,[$e,t("div",ts,[(o(!0),c(K,null,J(e.dataHistoryAction,s=>(o(),c("div",{class:"item-history flex-al",key:s.id},[t("div",es,l(n.formatExpiryDate(s==null?void 0:s.created_at)),1),t("div",ss,l(s==null?void 0:s.name),1),t("div",is,[t("div",null,[p(l(s==null?void 0:s.sum_character_voice)+" ký tự ",1),ns]),as,t("div",null,[p(l(s==null?void 0:s.minutes_used)+" phút ",1),os])]),t("div",cs,[s.status==="done"?(o(),c("div",rs,"Thành công")):d("",!0),s.status==="error"?(o(),c("div",ls,"Thất bại")):d("",!0),s.status==="processing"?(o(),c("div",ds,"Đang xử lý")):d("",!0)])]))),128)),Z(t("div",_s,null,512),[[v,n.loadMoreHistoryAction]])])])])):d("",!0)])]),e.isConfirmDeleteDevice?(o(),c("div",hs,[t("div",us,[t("div",null,[t("img",{src:n.img("icon_warning_device.svg"),alt:""},null,8,gs)]),ys,vs,t("div",{class:"button-delete mgt-30 fw-600",style:{width:"100%"},onClick:a[12]||(a[12]=(...s)=>n.deleteDevice&&n.deleteDevice(...s))},"Xoá thiết bị")])])):d("",!0)])}typeof W=="function"&&W(tt);const xs=et(tt,[["render",ms],["__scopeId","data-v-405bb4ad"]]);export{xs as default};