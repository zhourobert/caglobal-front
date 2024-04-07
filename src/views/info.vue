<template>
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
              <a class="logo" href="https://www.yesglobal.com.cn/"
                ><img
                  src="https://www.yesglobal.com.cn/res/202010/14/80073c4fdd34f875.jpg"
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
                    <a href="/cactivity/recommendedactivity.html">活动公告</a>
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
                      >关于行成</a
                    >
                    <div
                      class="nav-dropdown uk-dropdown uk-dropdown-bottom-center"
                      :class="{ 'uk-open': isguanyu }"
                    >
                      <a href="profile.html" title="行成海外" target=""
                        >行成海外</a
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
                <div uk-dropdown="offset:0" class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li>
                      <a href="https://www.yesglobal.com.cn/90.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/c6f42f55336815e0.png"
                        />
                        美国</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/91.html"
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
                      <a href="https://www.yesglobal.com.cn/87.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/344ef3826194416f.png"
                        />
                        希腊</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/86.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/8c4d7f6487f4b49e.png"
                        />
                        西班牙</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/84.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/bab64e00d6379156.png"
                        />
                        马耳他</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/83.html"
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
                      <a href="https://www.yesglobal.com.cn/92.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/d7f3f37df0f33488.png"
                        />
                        澳大利亚</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/93.html"
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
                      <a href="https://www.yesglobal.com.cn/588.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201906/13/50893a6357be4fe1.png"
                        />
                        土耳其</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/94.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/55bba832b41b646a.png"
                        />
                        中国</a
                      >
                    </li>
                    <li class="">
                      <a href="https://www.yesglobal.com.cn/95.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/41ba4f2135ef9754.png"
                        />
                        中国香港</a
                      >
                    </li>
                    <li class="uk-active">
                      <a href="https://www.yesglobal.com.cn/96.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/ddd4e3625b728756.png"
                        />
                        马来西亚</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/97.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/201812/17/aa40a748bed4186b.png"
                        />
                        泰国</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/98.html"
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
                <a href="https://www.yesglobal.com.cn/ownership">海外置业</a>
              </li>

              <li>
                <a href="javascript:;" class="" aria-expanded="false"
                  >国际教育</a
                >
                <div uk-dropdown="offset:0" class="uk-dropdown">
                  <ul class="dp-switcher-title">
                    <li class="uk-active">
                      <a href="https://www.yesglobal.com.cn/2004.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/202107/29/148106ac906a65d9.png"
                        />青少年教育</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/2005.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/e211de22d71bb99d.png"
                        />升学规划</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/2006.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/34d86ca9f8534f11.png"
                        />海外留学</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/2007.html"
                        ><img
                          src="https://www.yesglobal.com.cn/res/202108/02/c8ed286601582761.png"
                        />背景提升</a
                      >
                    </li>
                    <li>
                      <a href="https://www.yesglobal.com.cn/2008.html"
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
              href="https://www.yesglobal.com.cn/news/Real-title-policy.html"
              class="on"
            >
              <span>新闻动态</span>
              <i class="uk-visible@m">News</i>
            </a>
          </div>
          <div>
            <a href="https://www.yesglobal.com.cn/news/newss.html">
              <span>移民百科</span>
              <i class="uk-visible@m">Immigration Wiki</i>
            </a>
          </div>
          <div>
            <a href="https://www.yesglobal.com.cn/news/common-problem.html">
              <span>移民生活</span>
              <i class="uk-visible@m">Overseas Life</i>
            </a>
          </div>
          <div>
            <a href="https://www.yesglobal.com.cn/news/xingchengdongtai.html">
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
        <li><a @click="router.push('/')">首页</a></li>
        <li><a @click="router.push('/about')">资讯中心</a></li>
        <li>干货 | EB1A申请为何会被拒？原因在这里！</li>
      </ul>
    </div>
  </div>
  <section class="uk-margin-large">
    <div class="uk-container">
      <div class="uk-grid-large uk-grid" uk-grid="">
        <div class="uk-width-2-3@m uk-first-column">
          <!-- 详情 -->
          <article>
            <h1>干货 | EB1A申请为何会被拒？原因在这里！</h1>
            <div class="article-meta">
              时间：2024-04-01 16:27:40 来源：行成国际 点击量：12
            </div>
            <hr />
            <p>
              <span style="text-wrap: nowrap"
                >凭借无投资风险及排期时间短等优势，EB1A申请在近几年热度高涨。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >但EB1A申请需要大量的证据支撑及详实的文件准备，因此专业的文案是EB1A申请的重要基石。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >行成在咨询过程中发现许多委托非专业机构办理EB1A申请的客户在第一次递交时遭遇了被拒。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >在此，行成特意对EB1A申请中常见的拒签原因和改进方向做出了总结。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >常见拒签原因及改进方向：</span
                ></strong
              >
            </p>
            <p><span style="text-wrap: nowrap">在申请审理中，</span></p>
            <p>
              <span style="text-wrap: nowrap"
                >由于移民官重点考量的是<strong
                  >“专业性、真实性、优秀性、美国受益”几大方向。</strong
                ></span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >因此行成建议申请人可重点从<strong
                  >如下几个维度对材料进行改善和提升。</strong
                ></span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p style="text-align: center">
              <span style="text-wrap: nowrap"
                ><img
                  src="https://www.yesglobal.com.cn/res/202404/01/auto_9408.png"
                  title="image"
                  alt="image"
              /></span>
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <strong><span style="text-wrap: nowrap">01</span></strong>
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >只有原创材料，而未体现贡献：</span
                ></strong
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >原创贡献是影响获批的关键，本质是要证明申请人在行业的专业性。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >EB1A申请中原创贡献主要指专业领域的突出贡献成就，包括可量化的专利、软著、论文、产品等，也包括一些理论成果。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >在材料准备中，申请人<strong>不仅只是提交专利注册信息、论文引用量等基础信息，更需要证明这些贡献的价值。</strong>很多申请人在材料准备中，</span
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap">只堆叠原始资料，</span
                ><span style="text-wrap: nowrap">不阐述应用成果</span></strong
              ><span style="text-wrap: nowrap"
                >，结果却被移民局在拒签信中指出<strong>“无法体现应用广泛和行业价值”</strong>。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >对学术领域申请人来说，需要对论文具体引用情况进行分析，<strong>比如是否被高水平学术期刊引用，被行业中高影响力人士引用等</strong>。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >同时，还要进一步阐述，论文是否带来了进一步的学术研究或产业应用。对于商业领域申请人，则需要阐述专利的商业转化和应用成果。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p style="text-align: center">
              <img
                src="https://www.yesglobal.com.cn/res/202404/01/auto_9409.jpg"
                title="new-york-4756152_960_720"
                alt="new-york-4756152_960_720"
              />
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <strong><span style="text-wrap: nowrap">02</span></strong>
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >只有浅层媒体报道，而未深入陈述个人：</span
                ></strong
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >媒体报道是申请人个人成就的一个直观展现。对于一些申请人来说，</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >他们所在的公司在业内影响力较强，有机会出席或参加一些业内活动，</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >因此提供的媒体报道文章多是活动相关的新闻。</span
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >其实，该类报道对申请人媒体申请项的帮助意义不大。</span
                ></strong
              ><span style="text-wrap: nowrap">EB1A的媒体报道必须</span>
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >针对申请人个人的成就内容展开，同时也需要提供证据证明发布平台为主流媒体平台。</span
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >因此，在媒体报道层面，需要围绕申请人个人，</span
                ></strong
              ><strong
                ><span style="text-wrap: nowrap"
                  >展现其杰出的工作表现和工作成就，塑造其个人形象和行业地位。</span
                ></strong
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >同时，报道陈述方式也不可过于浮夸，没有材料支撑的夸大性新闻会使移民局对“真实性”产生疑问。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p style="text-align: center">
              <span style="text-wrap: nowrap"
                ><img
                  src="https://www.yesglobal.com.cn/res/202404/01/auto_9410.jpg"
                  title="chicago-796121_960_720"
                  alt="chicago-796121_960_720"
              /></span>
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <strong><span style="text-wrap: nowrap">03</span></strong>
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >只罗列经历，而缺乏一致性：</span
                ></strong
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >EB1A申请不限学历，也不局限行业，但这并不意味着移民局对申请人职业经历就没有要求，</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >移民局在评估申请资格时高度重视申请人职业生涯的连贯性。</span
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >对于“跨界”申请人，需要明确定位，保持方向的一致性。如果不能“合理融合”，</span
                ></strong
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >往往会让移民官混淆定位，对专业性产生质疑。</span
                ></strong
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >对于“跨界”和转行的申请人，<strong>行成的建议是</strong>，并不需要对两段经历“一视同仁”介绍，</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >而是重点突出目前的领域，从而使移民官明确申请人定位。对于毕业专业和就业领域不一致的申请人</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >以及转职和跨行业的申请人，申请材料应重点描述转入新领域后的工作经历，突出在新领域从事的工作内容和取得的成就。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >行成曾遇到一位申请人</span
                ></strong
              ><span style="text-wrap: nowrap"
                >，<strong>同时拥有医学学术背景和商业背景</strong>，前期是副主任医师，后自主创办公司，研发相关领域的产品。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >该申请人在第一次申请委托其他机构办理时被拒，便是因为没有突出两段经历的主次关系，</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap">导致移民官混淆，</span
              ><strong
                ><span style="text-wrap: nowrap"
                  >未能明确申请人具体是医学领域定位还是商业领域定位</span
                ></strong
              ><span style="text-wrap: nowrap">。</span>
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >该申请人在委托行成做第二次申请时，<strong>行成为其弱化了前期的学术成就，重点突出了其后期的创业经历、技术成果和企业成就</strong>，于加急后获得无补件批准。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p style="text-align: center">
              <img
                src="https://www.yesglobal.com.cn/res/202404/01/auto_9411.jpg"
                title="taxi-1574278_960_720"
                alt="taxi-1574278_960_720"
              />
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p>
              <strong><span style="text-wrap: nowrap">04</span></strong>
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >“自由裁量权”与“整体性优秀”：</span
                ></strong
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >在多年EB1A文案处理经验中，行成还发现移民官拥有<strong>“自由裁量权”</strong>，能够根据主观判断决定通过与否。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >即使认可申请人满足了十项申请标准中的三项，移民官依旧可以选择拒签。</span
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"
                  >因此，行成还会特别注重对申请人“整体性优秀”的凸显与表现，避免申请人因“整体性优秀”不够的理由而遭到拒签。</span
                ></strong
              >
            </p>
            <p>
              <strong
                ><span style="text-wrap: nowrap"><br /></span
              ></strong>
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >最后，行成想跟大家分享的是，<strong
                  >美国移民局在评定申请人是否符合资格时，并不仅仅依赖于条文与规章。</strong
                ></span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >他们评价的标准不是材料的堆砌，而是申请人真实的职业生涯。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"
                >“杰出人才”的材料要呈现出充分的专业性、深度性、真实性，同时符合美国利益，才能轻松获得移民官的认可。</span
              >
            </p>
            <p>
              <span style="text-wrap: nowrap"><br /></span>
            </p>
            <p><br /></p>
          </article>
          <div class="uk-margin-medium">
            <div class="d-page">
              <p>
                上一篇：
                <a
                  href="https://www.yesglobal.com.cn/2202.html"
                  title="十年美签到期，可申请续签免面试！"
                  >十年美签到期，可申请续签免面试！</a
                >
              </p>
              <p>下一篇： 没有了</p>
            </div>
          </div>

          <!--  相关资讯 -->
          <h3 class="pg-title uk-margin-remove-bottom">
            相关资讯 <span>Related news</span>
          </h3>
          <hr />
          <div
            class="uk-grid-small uk-child-width-1-2@m uk-grid uk-grid-stack"
            uk-grid=""
          ></div>
        </div>
        <div class="uk-width-1-3@m">
          <h3 class="pg-title uk-margin-small-bottom">
            最新移民百科 <span>Encyclopedias</span>
          </h3>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>1</i
              ><a href="https://www.yesglobal.com.cn/1927.html"
                >移民澳大利亚的话，我中国国籍还在吗？</a
              >
            </h6>
            <p class="uk-text-truncate">
              澳大利亚一直都是一个移民大国，凭借着优质的生活环境和社会福利..
            </p>
          </div>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>2</i
              ><a href="https://www.yesglobal.com.cn/1924.html"
                >2020受国内欢迎的移民美国方式的条件都是什么？</a
              >
            </h6>
            <p class="uk-text-truncate">
              自21世纪以来，人们的生活方式和水平都发生了巨大的改变，也有不..
            </p>
          </div>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>3</i
              ><a href="https://www.yesglobal.com.cn/1900.html"
                >选择美国杰出人才申请前必须了解的五个步骤！</a
              >
            </h6>
            <p class="uk-text-truncate">
              第一步：了解美国杰出人才EB1A（E11）- 中国自主申请人真实数量及..
            </p>
          </div>
          <div class="baike">
            <h6 class="uk-text-truncate">
              <i>4</i
              ><a href="https://www.yesglobal.com.cn/936.html"
                >入籍澳大利亚之后要知道的公民权利和义务</a
              >
            </h6>
            <p class="uk-text-truncate">
              权利是指一国公民依法应享有的权利和利益，或者法律关系主体在法..
            </p>
          </div>

          <h3 class="pg-title uk-margin-small-bottom">
            实时政策要点 <span>Events</span>
          </h3>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1974.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202011/23/thumb_8172.png"
                    alt="美国排期更新，EB1又前进4个月，即将引来无排期！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1974.html"
                    >美国排期更新，EB1又前进4个月，即将引来无排期！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  美国国务院签证办公室公布了2020年12月的签证公告（Visa Bulleti..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1946.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202010/12/thumb_8087.png"
                    alt="10月美签预约全部取消全部取消，2020年恢复无望"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1946.html"
                    >10月美签预约全部取消全部取消，2020年恢复无望</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  十月美签预约全部取消美国驻华使领馆发布最新通知，取消10月30日..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1932.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202009/23/thumb_8047.png"
                    alt="日本新签证制度：给予日本留学生2年创业时间"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1932.html"
                    >日本新签证制度：给予日本留学生2年创业时间</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  人民网东京9月23日电据《日本经济新闻》报道，为了给在日外国留学..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1929.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202009/23/thumb_8041.png"
                    alt="加拿大移民部公布新政细节：这些人不用离境也能申请工签"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1929.html"
                    >加拿大移民部公布新政细节：这些人不用离境也能申请工签</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  来源：中新网9月21日电据加拿大《星岛日报》综合报道，哪些临时居..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1888.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202009/01/thumb_7888.png"
                    alt="注意：美国移民局部分移民服务费用将从10月2日起涨价！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1888.html"
                    >注意：美国移民局部分移民服务费用将从10月2日起涨价！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  中新网9月1日电据美国《世界日报》报道，日前，美国国土安全部调..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1786.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202007/27/thumb_7376.png"
                    alt="日本放宽入境限制，持有在留签证，就可以入境日本！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1786.html"
                    >日本放宽入境限制，持有在留签证，就可以入境日本！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  考虑到长期在日本居住的外国人出现暂时离境后不能返回日本的情况..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/1411.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/202003/18/thumb_6100.jpg"
                    alt="要闻：加拿大宣布封国，非公民及非永久居民不得入境！"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/1411.html"
                    >要闻：加拿大宣布封国，非公民及非永久居民不得入境！</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  据CTV报道，在加东时间3月16日下午1时举行的新闻发布会上，加拿大..
                </p>
              </div>
            </div>
          </div>
          <div class="yaodian">
            <div class="uk-grid-small uk-grid" uk-grid="">
              <div class="uk-width-1-3 uk-first-column">
                <a href="https://www.yesglobal.com.cn/935.html"
                  ><img
                    src="https://www.yesglobal.com.cn/res/201909/26/thumb_4247.jpg"
                    alt="美国会启动对总统弹劾程序，特朗普会被弹劾下台吗?"
                /></a>
              </div>
              <div class="uk-width-2-3">
                <h6 class="uk-text-truncate">
                  <a href="https://www.yesglobal.com.cn/935.html"
                    >美国会启动对总统弹劾程序，特朗普会被弹劾下台吗?</a
                  >
                </h6>
                <p class="uk-text-truncate">
                  美国总统特朗普遭弹劾美国众议院议长佩洛西在东部时间周二下午5点..
                </p>
              </div>
            </div>
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
import footer1 from '@/components/footer.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
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
