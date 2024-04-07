<template>
  <!-- <header1></header1> -->
  <div class="index-banner uk-position-relative">
    <!-- banner-->
    <div class="page-banner uk-text-center uk-visible@m">
      <img
        src="https://www.yesglobal.com.cn/res/201906/10/6215069a21796b8e.jpg"
      />
    </div>
    <div class="page-banner uk-text-center uk-hidden@m">
      <img
        src="https://www.yesglobal.com.cn/res/201906/10/6215069a21796b8e.jpg"
      />
    </div>
    <!-- nav -->
    <div class="navbar-container uk-position-top-left uk-visible@m">
      <div class="topbar">
        <div class="uk-container">
          <div uk-grid="" class="uk-grid">
            <div class="uk-width-auto uk-first-column">
              <a class="logo" href="/"
                ><img
                  src=""
              /></a>
            </div>
            <div class="uk-width-expand">
              <nav>
                <ul class="uk-grid-collapse uk-grid" uk-grid="">
                  <li class="uk-width-expand uk-first-column">
                    <a @click="router.push('/')">首页</a>
                  </li>
                  <li class="uk-width-expand">
                    <a @click="router.push('/about')">资讯中心</a>
                  </li>
                  <li class="uk-width-expand">
                    <a @click="router.push('/RecommendedactivityView')">活动公告</a>
                  </li>
                  <li class="uk-width-expand">
                    <a
                      href="/settledown.html"
                      class=""
                      aria-expanded="false"
                      @mouseenter="ishaiwai = true"
                      @mouseleave="ishaiwai = false"
                      >海外生活服务</a
                    >
                    <div
                      class="nav-dropdown uk-dropdown uk-dropdown-bottom-center"
                      uk-dropdown="pos: bottom-justify"
                      :class="{ 'uk-open': ishaiwai }"
                    >
                      <a href="settledown.html" title="海外安家服务" target=""
                        >海外安家服务</a
                      >
                      <a href="Insurance.html" title="海外保险服务" target=""
                        >海外保险服务</a
                      >
                      <a href="education.html" title="海外教育规划" target=""
                        >海外教育规划</a
                      >
                    </div>
                  </li>
                  <li class="uk-width-expand">
                    <a
                      href="/profile.html"
                      class=""
                      aria-expanded="false"
                      @mouseenter="isguanyu = true"
                      @mouseleave="isguanyu = false"
                      >关于寰宇</a
                    >
                    <div
                      class="nav-dropdown uk-dropdown uk-dropdown-bottom-center"
                      :class="{ 'uk-open': isguanyu }"
                    >
                      <a href="profile.html" title="寰宇海外" target=""
                        >寰宇海外</a
                      >
                      <a href="messages.html" title="创始人寄语" target=""
                        >创始人寄语</a
                      >
                      <a href="partner.html" title="全球合伙人" target=""
                        >全球合伙人</a
                      >
                      <a href="downloads.html" title="资料下载" target=""
                        >资料下载</a
                      >
                      <a
                        href="complaints.html"
                        title="全球客户投诉平台"
                        target=""
                        >全球客户投诉平台</a
                      >
                      <a href="contact.html" title="联系我们" target=""
                        >联系我们</a
                      >
                    </div>
                  </li>
                  <li class="uk-width-expand">
                    <a href="eb1a.html">EB-1A成功案例</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="uk-width-auto topbar-contact">
              <div class="uk-flex uk-flex-middle">
                <img
                  src="https://www.yesglobal.com.cn/tpl/www/images/phone.png"
                />
                <span>400-001-9801</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="subnav">
        <div class="uk-container">
          <div class="subnav-box">
            <ul>
              <li>
                <a href="javascript:;" class="">美洲移民</a>
                <div class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/c6f42f55336815e0.png"
                        />
                        美国</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/2fd3579168d83e25.png"
                        />
                        加拿大</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="javascript:;" class="" aria-expanded="false"
                  >欧洲移民</a
                >
                <div uk-dropdown="offset:0" class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/344ef3826194416f.png"
                        />
                        希腊</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/8c4d7f6487f4b49e.png"
                        />
                        西班牙</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/bab64e00d6379156.png"
                        />
                        马耳他</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/5ebe795419fabd60.png"
                        />
                        塞浦路斯</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="javascript:;" class="" aria-expanded="false"
                  >大洋洲移民</a
                >
                <div uk-dropdown="offset:0" class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li class="uk-active">
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/d7f3f37df0f33488.png"
                        />
                        澳大利亚</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/24e8cba64b0eef7a.png"
                        />
                        新西兰</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="javascript:;" class="" aria-expanded="false"
                  >亚洲移民</a
                >
                <div uk-dropdown="offset:0" class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201906/13/50893a6357be4fe1.png"
                        />
                        土耳其</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/55bba832b41b646a.png"
                        />
                        中国</a
                      >
                    </li>
                    <li class="">
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/41ba4f2135ef9754.png"
                        />
                        中国香港</a
                      >
                    </li>
                    <li class="uk-active">
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/ddd4e3625b728756.png"
                        />
                        马来西亚</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/aa40a748bed4186b.png"
                        />
                        泰国</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/4c0734db950a6332.png"
                        />
                        日本</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">海外置业</a>
              </li>

              <li>
                <a href="javascript:;" class="" aria-expanded="false"
                  >国际教育</a
                >
                <div uk-dropdown="offset:0" class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li class="uk-active">
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/202107/29/148106ac906a65d9.png"
                        />青少年教育</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/e211de22d71bb99d.png"
                        />升学规划</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/34d86ca9f8534f11.png"
                        />海外留学</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/c8ed286601582761.png"
                        />背景提升</a
                      >
                    </li>
                    <li>
                      <a href=""
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/7a89af55e704b4a4.png"
                        />海归创业班</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- page-nav -->
    <div class="page-nav uk-position-bottom-left uk-width-1-1">
      <div class="uk-container">
        <div
          class="uk-child-width-1-5@l uk-child-width-1-4 uk-grid-collapse uk-grid"
          uk-grid=""
        >
          <div class="uk-first-column">
            <a
              href=""
              class="on"
            >
              <span>新闻动态</span>
              <i class="uk-visible@m">News</i>
            </a>
          </div>
          <div>
            <a href="">
              <span>移民百科</span>
              <i class="uk-visible@m">Immigration Wiki</i>
            </a>
          </div>
          <div>
            <a href="">
              <span>移民生活</span>
              <i class="uk-visible@m">Overseas Life</i>
            </a>
          </div>
          <div>
            <a href="">
              <span>成功案列</span>
              <i class="uk-visible@m">Successful Case</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="breadcrumb">
    <div class="uk-container">
      <ul>
        <li>您的位置：</li>
        <li><a href="/">首页</a></li>
        <li><a href="/about">资讯中心</a></li>
      </ul>
    </div>
  </div>
  <section class="uk-margin-large">
    <div class="uk-container">
      <h3 class="pg-title uk-margin-medium-bottom">
        新闻动态 <span>News</span>
      </h3>
      <div class="uk-grid-large uk-grid" uk-grid="">
        <div class="uk-width-2-3@m news-list-content uk-first-column">
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202404/01/thumb_9407.jpg"
                    alt="干货 | EB1A申请为何会被拒？原因在这里！"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a @click="router.push('/info')"
                    >干货 | EB1A申请为何会被拒？原因在这里！</a
                  >
                </h5>
                <p>
                  凭借无投资风险及排期时间短等优势，EB1A申请在近几年热度高涨。但EB1A申请需要大量的证据支撑及详实的文件..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>04-01</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/28/thumb_9400.jpg"
                    alt="官宣！新加坡EP申请门槛再次提高"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href="https://www.yesglobal.com.cn/2205.html"
                    >官宣！新加坡EP申请门槛再次提高</a
                  >
                </h5>
                <p>
                  2024年3月4日新加坡人力部宣布：将再次调高新加坡就业准证（EP）的收入门槛！并从2025年1月起，将从原有的5..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-28</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/28/thumb_9394.jpg"
                    alt="最新！希腊移民新政解读"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href=""
                    >最新！希腊移民新政解读</a
                  >
                </h5>
                <p>
                  2024年3月21日希腊国民经济和财政部长哈齐达基斯宣布了关于希腊本次“黄金签证”的调整细则。哈齐达基斯宣布..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-28</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/25/thumb_9388.png"
                    alt="十年美签到期，可申请续签免面试！"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href=""
                    >十年美签到期，可申请续签免面试！</a
                  >
                </h5>
                <p>
                  十年美签如何申请免面试及申请条件2014年11月美国驻华大使馆签证处为首批获得十年签的中国申请人颁发了新签..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-25</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/22/thumb_9382.jpg"
                    alt="攻略 | 市场型企业高管如何申请EB1A杰出人才移民？"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href=""
                    >攻略 | 市场型企业高管如何申请EB1A杰出人才移民？</a
                  >
                </h5>
                <p>
                  01EB1A高性价比备受追捧近年来，越来越多的企业高管通过EB1A杰出人才移民拿到美国绿卡。对于企业高管来说，..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-22</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/22/thumb_9378.jpg"
                    alt="马耳他移民法案修订更新！"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href=""
                    >马耳他移民法案修订更新！</a
                  >
                </h5>
                <p>
                  2024年3月6日马耳他移民局突然对移民法案做出修订，并于3月7日立即执行！——此次，针对马耳他永居项目MPRP..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-22</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/20/thumb_9374.jpg"
                    alt="突发！加拿大移民全面设置语言门槛！"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href=""
                    >突发！加拿大移民全面设置语言门槛！</a
                  >
                </h5>
                <p>
                  2024年3月14日继阿省提名AOS突然暂停后，萨省企业家移民也于前两日突发重大改革:——新增语言要求、强制商考..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-20</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="news-list-box">
            <div class="uk-grid-small uk-flex-middle uk-grid" uk-grid="">
              <div class="uk-width-1-4 uk-visible@m uk-first-column">
                <a href=""
                  ><img
                    src="https://www.yesglobal.com.cn/res/202403/18/thumb_9367.jpg"
                    alt="清华本硕也被拒！细说香港优才的几种拒签信！"
                /></a>
              </div>
              <div class="uk-width-expand">
                <h5>
                  <a href=""
                    >清华本硕也被拒！细说香港优才的几种拒签信！</a
                  >
                </h5>
                <p>
                  香港入境处最近公布了2022至2023年各项入境计划申请人数及获批人数的统计数字；其中优秀人才入境计划的增长..
                </p>
              </div>
              <div class="uk-width-auto uk-visible@m">
                <div class="news-list-date">
                  <span>03-18</span>
                  <a href=""
                    ><img
                      src="https://www.yesglobal.com.cn/tpl/www/images/arrow-right.jpg"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div class="uk-margin">
            <ul class="pages">
              <li>
                <a
                  href=""
                  >上一页</a
                >
              </li>
              <li>
                <a
                  href=""
                  class="active"
                  >1</a
                >
              </li>
              <li>
                <a
                  href=""
                  >2</a
                >
              </li>
              <li>
                <a
                  href=""
                  >3</a
                >
              </li>
              <li>
                <a
                  href=""
                  >4</a
                >
              </li>
              <li>
                <a
                  href=""
                  >5</a
                >
              </li>
              <li>
                <a
                  href=""
                  >6</a
                >
              </li>
              <li>
                <a
                  href=""
                  >下一页</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-width-1-3@m">
          <h3 class="pg-title uk-margin-small-bottom">
            热点资讯 <span>Latest Events</span>
          </h3>
          <div class="uk-inline-clip side-figure">
            <img
              src="https://www.yesglobal.com.cn/res/202105/26/thumb_8308.png"
              alt="2021年6月签证排期公告：EB-5前进1个月，EB-1继续无排期！"
            />
            <h6 class="uk-position-bottom uk-overlay">
              2021年6月签证排期公告：EB-5前进1个月，EB..
            </h6>
            <a
              href=""
              class="uk-position-cover"
            ></a>
          </div>
          <div class="uk-margin side-more">
            <div class="uk-text-truncate">
              <a href=""
                >10月美签预约全部取消全部取消，2020年恢复无望</a
              >
            </div>
            <hr />
            <div class="uk-text-truncate">
              <a href=""
                >2020年10月美国移民排期公布（新财年第一个月：表B开放）</a
              >
            </div>
            <hr />
            <div class="uk-text-truncate">
              <a href=""
                >日本新签证制度：给予日本留学生2年创业时间</a
              >
            </div>
            <hr />
            <div class="uk-text-truncate">
              <a href=""
                >加拿大移民部公布新政细节：这些人不用离境也能申请工签</a
              >
            </div>
            <hr />
          </div>
          <h3 class="pg-title uk-margin-small-bottom">
            热门项目 <span>Hot Project</span>
          </h3>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201912/26/thumb_5530.png"
              alt="美国杰出人才移民"
            />
            <h6 class="uk-position-bottom uk-overlay">美国杰出人才移民</h6>
            <a
              href=""
              class="uk-position-cover"
            ></a>
          </div>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201905/23/thumb_2957.jpg"
              alt="西班牙置业移民"
            />
            <h6 class="uk-position-bottom uk-overlay">西班牙置业移民</h6>
            <a
              href=""
              class="uk-position-cover"
            ></a>
          </div>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201812/19/thumb_328.jpg"
              alt="马耳他投资移民"
            />
            <h6 class="uk-position-bottom uk-overlay">马耳他投资移民</h6>
            <a
              href=""
              class="uk-position-cover"
            ></a>
          </div>
          <div class="uk-inline-clip side-figure uk-margin-small-bottom">
            <img
              src="https://www.yesglobal.com.cn/res/201903/18/thumb_1462.jpg"
              alt="圣基茨尼维斯护照"
            />
            <h6 class="uk-position-bottom uk-overlay">圣基茨尼维斯护照</h6>
            <a
              href=""
              class="uk-position-cover"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer1></footer1>
</template>
<script setup lang="ts">
import './uikit.css'
import './iven.css'
import { useRouter } from 'vue-router'
import footer1 from '@/components/footer.vue'
import { ref } from 'vue'

const router = useRouter()

const ishaiwai = ref(false)
const isguanyu = ref(false)
</script>
<style scoped>
.nav-dropdown {
  transform: none !important;
}
.subnav-box > ul > li > a:hover + .uk-dropdown {
  display: block;
}
.subnav-box .uk-dropdown:hover {
  display: block;
}
.dp-switcher-title li:hover a {
  background: rgb(0, 102, 204);
  text-decoration: none;
}
</style>
