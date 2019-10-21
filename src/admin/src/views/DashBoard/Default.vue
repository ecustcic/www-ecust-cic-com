<template>
  <div class="default-dash">
    <div class="page-subheader mb-30">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="list">
              <div class="list-item pl-0">
                <div class="list-thumb ml-0 mr-3 pr-3 b-r text-muted">
                  <i class="fas fa-home"></i>
                </div>
                <div class="list-body">
                  <div class="list-title fs-2x">
                    <h3>
                      Welcome
                      <strong>{{ name }}</strong>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 d-flex justify-content-end h-md-down">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb no-padding bg-trans mb-0">
                <li class="breadcrumb-item">
                  <a href="/">
                    <i class="fas fa-home mr-2 fs14"></i>
                  </a>
                </li>
                <li class="breadcrumb-item">Admin</li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- page-sub-Header end-->
    <div class="page-content d-flex flex">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="list bg-white shadow-sm rounded mb-30">
              <a href="//weibo.com/u/2130417982" class="list-item" target="_blank">
                <div class="list-thumb avatar si-colored-facebook text-white rounded avatar40">
                  <i class="fab fa-weibo"></i>
                </div>
                <div class="list-body text-right">
                  <span class="list-title fs-1x">521</span>
                  <span class="list-content">Weibo Fans</span>
                </div>
              </a>
            </div>
          </div>
          <!--col-->
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="list bg-white shadow-sm rounded mb-30">
              <a href="//mp.weixin.qq.com/" class="list-item" target="_blank">
                <div class="list-thumb avatar si-colored-twitter text-white rounded avatar40">
                  <i class="fab fa-weixin"></i>
                </div>
                <div class="list-body text-right">
                  <span class="list-title fs-1x">1822</span>
                  <span class="list-content">Followers</span>
                </div>
              </a>
            </div>
          </div>
          <!--col-->
          <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
            <div class="list bg-white shadow-sm rounded">
              <a href="//connect.qq.com" class="list-item" target="_blank">
                <div class="list-thumb avatar bg-danger text-white rounded avatar40">
                  <i class="fab fa-qq"></i>
                </div>
                <div class="list-body text-right">
                  <span class="list-title fs-1x">100+</span>
                  <span class="list-content">Friends</span>
                </div>
              </a>
            </div>
          </div>
          <!--col-->
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="list bg-white shadow-sm rounded mb-30">
              <a href="//github.com/ecustcic" class="list-item" target="_blank">
                <div class="list-thumb avatar bg-success text-white rounded avatar40">
                  <i class="fab fa-github"></i>
                </div>
                <div class="list-body text-right">
                  <span class="list-title fs-1x">10</span>
                  <span class="list-content">Members</span>
                </div>
              </a>
            </div>
          </div>
          <!--col-->
        </div>
        <div class="row" id="user-activity">
          <div class="col-lg-12">
            <div class="portlet-box portlet-fullHeight border0 shadow-sm mb-30">
              <div class="portlet-header flex-row flex d-flex align-items-center">
                <div class="flex d-flex flex-column">
                  <h3>User Activity</h3>
                  <span>Last Week</span>
                </div>
                <div class="portlet-tools">
                  <ul class="nav">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        <i class="fa fa-sync"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="portlet-body pt-0">
                <div class="row align-items-center">
                  <div class="col-lg-5">
                    <div class="row pt-4 pb-4 text-center">
                      <div class="col-4 ml-auto b-r">
                        <span class="fa fa-square text-pink-light mb-2"></span>
                        <h4 class="mb-0">8721</h4>

                        <span class>Visitors</span>
                        <div class="text-muted fs12 pt-1">
                          <i class="mr-2 fa fa-arrow-up text-success"></i> 3.5%
                        </div>
                      </div>
                      <div class="col-4 mr-auto">
                        <i class="fa fa-square text-primary mb-2"></i>
                        <h4 class="mb-0">
                          <sub class="fs10 text-muted"></sub> 721
                        </h4>
                        <span class>Register</span>
                        <div class="text-muted fs12 pt-1">
                          <i class="mr-2 fa fa-arrow-up text-success"></i> .5%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="chartist">
                      <div class="ct-chart"></div>
                    </div>
                    <!--<canvas id="lineChart" height="130"></canvas>-->
                  </div>
                </div>
                <!--portlet-->
              </div>
            </div>
          </div>
          <!--col-->
        </div>
        <div class="row">
          <div class="col-12">
            <div class="portlet-box bg-trans mb-30 border0">
              <div class="portlet-body">
                <div class="row align-items-center">
                  <div class="col-lg-8">
                    <div id="world-map-markers" style="width:100%;height: 300px"></div>
                  </div>
                  <div class="col-lg-4">
                    <h5 class="font500 fs-1x b-b pb-2 mb-3 brd-primary-active">Top countries</h5>
                    <div class="clearfix pb-2">
                      <span class="float-right">
                        <i class="fa fa-eye mr-2"></i> 3992
                      </span>
                      <span class="font500 text-muted">Usa</span>
                    </div>
                    <div class="progress bg-white shadow-sm mb-3" style="height: 9px">
                      <div
                        style="width: 75%"
                        class="progress-bar bg-primary progress-bar-animated progress-bar-striped"
                      ></div>
                    </div>
                    <div class="clearfix pb-2">
                      <span class="float-right">
                        <i class="fa fa-eye mr-2"></i> 2394
                      </span>
                      <span class="font500 text-muted">Australia</span>
                    </div>
                    <div class="progress bg-white shadow-sm mb-3" style="height: 9px">
                      <div
                        style="width: 60%"
                        class="progress-bar bg-danger progress-bar-animated progress-bar-striped"
                      ></div>
                    </div>
                    <div class="clearfix pb-2">
                      <span class="float-right">
                        <i class="fa fa-eye mr-2"></i> 3943
                      </span>
                      <span class="font500 text-muted">Israel</span>
                    </div>
                    <div class="progress bg-white shadow-sm" style="height: 9px">
                      <div
                        style="width: 35%"
                        class="progress-bar bg-success progress-bar-animated progress-bar-striped"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="portlet-box portlet-fullHeight border0 shadow-sm mb-30">
              <div class="portlet-header flex-row flex d-flex align-items-center b-b">
                <div class="flex d-flex flex-column">
                  <h3>Recent Customers</h3>
                </div>
                <div class="portlet-tools">
                  <ul class="nav">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        <i class="fa fa-sync"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="portlet-body no-padding">
                <div class="list">
                  <div class="list-item b-b bg-light">
                    <div
                      class="list-thumb shadow-sm avatar40 bg-primary text-primary-light rounded-circle"
                    >JA</div>
                    <div class="list-body">
                      <span class="float-right fs12 text-muted">
                        <i class="fa fa-clock mr-2"></i>Just Now
                      </span>
                      <span class="list-title">John Adams</span>
                      <span class="list-content pt-1">
                        <i class="fa text-muted fa-map-marker mr-1 fs10"></i>
                        Sau Polo, 302012, Argentina
                      </span>
                    </div>
                  </div>
                  <!--list item-->
                  <div class="list-item b-b">
                    <div class="list-thumb shadow-sm avatar40 rounded-circle">
                      <img src="images/avatar1.jpg" alt class="img-fluid" />
                    </div>
                    <div class="list-body">
                      <span class="float-right fs12 text-muted">
                        <i class="fa fa-clock mr-2"></i>Just Now
                      </span>
                      <span class="list-title">Amily Howkins</span>
                      <span class="list-content pt-1">
                        <i class="fa text-muted fa-map-marker mr-1 fs10"></i>
                        Sau Polo, 302012, Argentina
                      </span>
                    </div>
                  </div>
                  <!--list item-->
                  <div class="list-item b-b bg-light">
                    <div class="list-thumb shadow-sm avatar40 rounded-circle">
                      <img src="images/avatar4.jpg" alt class="img-fluid" />
                    </div>
                    <div class="list-body">
                      <span class="float-right fs12 text-muted">
                        <i class="fa fa-clock mr-2"></i>Just Now
                      </span>
                      <span class="list-title">John Sinha</span>
                      <span class="list-content pt-1">
                        <i class="fa text-muted fa-map-marker mr-1 fs10"></i>
                        Sau Polo, 302012, Argentina
                      </span>
                    </div>
                  </div>
                  <!--list item-->
                  <div class="list-item b-b">
                    <div class="list-thumb shadow-sm avatar40 rounded-circle">
                      <img src="images/avatar5.jpg" alt class="img-fluid" />
                    </div>
                    <div class="list-body">
                      <span class="float-right fs12 text-muted">
                        <i class="fa fa-clock mr-2"></i>Just Now
                      </span>
                      <span class="list-title">Luiciya Wangdu</span>
                      <span class="list-content pt-1">
                        <i class="fa text-muted fa-map-marker mr-1 fs10"></i>
                        Sau Polo, 302012, Argentina
                      </span>
                    </div>
                  </div>
                  <!--list item-->
                  <div class="list-item b-b bg-light">
                    <div
                      class="list-thumb shadow-sm avatar40 bg-teal text-teal-light rounded-circle"
                    >AB</div>
                    <div class="list-body">
                      <span class="float-right fs12 text-muted">
                        <i class="fa fa-clock mr-2"></i>Just Now
                      </span>
                      <span class="list-title">Abraham Banjara</span>
                      <span class="list-content pt-1">
                        <i class="fa text-muted fa-map-marker mr-1 fs10"></i>
                        Sau Polo, 302012, Argentina
                      </span>
                    </div>
                  </div>
                  <!--list item-->
                  <div class="list-item">
                    <div class="list-thumb shadow-sm avatar40 rounded-circle">
                      <img src="images/avatar6.jpg" alt class="img-fluid" />
                    </div>
                    <div class="list-body">
                      <span class="float-right fs12 text-muted">
                        <i class="fa fa-clock mr-2"></i>Just Now
                      </span>
                      <span class="list-title">Juliat Thomas</span>
                      <span class="list-content pt-1">
                        <i class="fa text-muted fa-map-marker mr-1 fs10"></i>
                        Francisco, 344564, USA
                      </span>
                    </div>
                  </div>
                  <!--list item-->
                </div>
              </div>
            </div>
            <!--portlet-->
          </div>
          <!--col-->
          <div class="col-lg-6">
            <div class="portlet-box portlet-fullHeight border0 shadow-sm mb-30">
              <div class="portlet-header flex-row flex d-flex align-items-center b-b">
                <div class="flex d-flex flex-column">
                  <h3>Todo</h3>
                </div>
                <div class="portlet-tools">
                  <ul class="nav">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        <i class="fa fa-sync"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="portlet-body no-padding">
                <div class="p-3">
                  <div class="customUi-checkbox check-todo checkboxUi-primary">
                    <input type="checkbox" id="todo1" checked />
                    <label for="todo1" class="mb-0">
                      <span class="label-checkbox"></span>
                      <span class="fs12 text-muted d-block pb-1 text-primary">
                        <i class="fa fa-tag mr-2 fs10"></i> Project #2
                      </span>
                      <span
                        class="label-helper"
                      >Lorem ipsum dolor sit amet todo text will change dolor sit amet todo text will change ease</span>
                      <span class="fs12 text-muted d-block text-primary"></span>
                    </label>
                  </div>
                </div>
                <!--Todo item-->
                <div class="p-3">
                  <div class="customUi-checkbox check-todo checkboxUi-primary">
                    <input type="checkbox" id="todo2" checked />
                    <label for="todo2" class="mb-0">
                      <span class="fs12 text-muted d-block pb-1 text-primary">
                        <i class="fa fa-tag mr-2 fs10"></i> Project #2
                      </span>
                      <span class="label-checkbox"></span>
                      <span
                        class="label-helper"
                      >Lorem ipsum dolor sit amet todo text will change dolor sit amet todo text will change ease</span>
                    </label>
                  </div>
                </div>
                <!--Todo item-->
                <div class="p-3">
                  <div class="customUi-checkbox check-todo checkboxUi-primary">
                    <input type="checkbox" id="todo3" />
                    <label for="todo3" class="mb-0">
                      <span class="fs12 text-muted d-block pb-1 text-primary">
                        <i class="fa fa-tag mr-2 fs10"></i> Project #2
                      </span>
                      <span class="label-checkbox"></span>
                      <span
                        class="label-helper"
                      >Lorem ipsum dolor sit amet todo text will change dolor sit amet todo text will change ease</span>
                    </label>
                  </div>
                </div>
                <!--Todo item-->
                <div class="p-3">
                  <div class="customUi-checkbox check-todo checkboxUi-primary">
                    <input type="checkbox" id="todo4" />
                    <label for="todo4" class="mb-0">
                      <span class="fs12 text-muted d-block pb-1 text-primary">
                        <i class="fa fa-tag mr-2 fs10"></i> Project #2
                      </span>
                      <span class="label-checkbox"></span>
                      <span
                        class="label-helper"
                      >Lorem ipsum dolor sit amet todo text will change dolor sit amet todo text will change ease</span>
                    </label>
                  </div>
                </div>
                <!--Todo item-->
              </div>
            </div>
            <!--portlet-->
          </div>
          <!--col-->
        </div>
      </div>
    </div>
    <footer class="content-footer bg-light b-t">
      <div class="d-flex flex align-items-center pl-15 pr-15">
        <div class="d-flex flex p-3 ml-auto">
          <div>
            <a href="#" class="d-inline-flex pl-0 pr-2 b-r">Contact</a>
            <a href="#" class="d-inline-flex pl-2 pr-2 b-r">Storage</a>
            <a href="#" class="d-inline-flex pl-2 pr-2">Privacy</a>
          </div>
        </div>
        <div class="d-flex flex p-3 mr-auto justify-content-end">
          <div class="text-muted">© Copyright 2014-2018. Assan</div>
        </div>
      </div>
    </footer>
    <!-- footer end-->
  </div>
</template>

<script>
import SmoothScroll from "smooth-scroll";
export default {
  name: "DefaultDash",
  computed: {
    name: function() {
      return this.$store.state.name;
    }
  },
  mounted() {
    new SmoothScroll("[data-scroll]", {
      speed: 2000,
      easing: "easeInOutCubic",
      offset: 25
    });
  }
};
</script>