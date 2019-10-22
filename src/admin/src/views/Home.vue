<template>
  <div class="home" data-spy="scroll" data-target="#dashboard" data-offset="50">
    <aside id="page-aside" class="page-aside aside-fixed">
      <div class="sidenav darkNav">
        <a
          href="/"
          class="app-logo d-flex flex flex-row align-items-center overflow-hidden justify-content-center"
        >
          <i class="inline-icon rounded avatar32 d-inline-flex">
            <img src="../assets/logo.png" alt height="32" />
          </i>
          <span class="logo-text d-inline-flex">
            <span class="font700 d-inline-block mr-1">ECUST</span> CIC
          </span>
        </a>
        <div class="flex">
          <div class="aside-content slim-scroll">
            <ul class="metisMenu" id="metisMenu">
              <li class="nav-title">
                Main
                <span class="nav-thumbnail">MAIN</span>
              </li>
              <li class="mm-active">
                <div class="nav-thumbnail">
                  <i class="fa fa-tachometer-alt"></i>
                </div>
                <a class="has-arrow" href="javascript:void(0)" aria-expanded="true">
                  <span class="nav-text">Dashboard&nbsp;</span>
                  <span class="badge text-danger-light badge-danger ml-1 badge-text anibadge">Hot</span>
                </a>
                <ul id="dashboard">
                  <li class="mm-active">
                    <span class="nav-thumbnail">01</span>
                    <a data-scroll href="/admin/dashboard#">Top</a>
                  </li>
                  <li>
                    <span class="nav-thumbnail">02</span>
                    <a data-scroll href="/admin/dashboard#user-activity">User Activity</a>
                  </li>
                  <li>
                    <span class="nav-thumbnail">03</span>
                    <a data-scroll href="/admin/dashboard#user-info">User Info</a>
                  </li>
                  <!-- <router-link tag="li" to="/dashboard2">
                    <span class="nav-thumbnail">03</span>
                    <a>Dashboard 2</a>
                  </router-link>-->
                </ul>
              </li>
            </ul>
          </div>
          <!-- aside content end-->
        </div>
        <!-- aside hidden scroll end-->
        <div class="aside-footer p-3 pl-25">
          <div class>App Version - 1.0</div>
        </div>
        <!-- aside footer end-->
      </div>
      <!-- sidenav end-->
    </aside>
    <!-- page-aside end-->
    <main class="content">
      <header class="navbar page-header whiteHeader navbar-expand-lg">
        <ul class="nav flex-row mr-auto">
          <li class="nav-item">
            <a href="javascript:void(0)" class="nav-link sidenav-btn h-lg-down">
              <span class="navbar-toggler-icon"></span>
            </a>
            <a
              class="nav-link sidenav-btn h-lg-up"
              href="#page-aside"
              data-toggle="dropdown"
              data-target="#page-aside"
            >
              <span class="navbar-toggler-icon"></span>
            </a>
          </li>
        </ul>
        <ul class="nav flex-row order-lg-2 ml-auto nav-icons">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="javascript:void(0)"
              id="dropdown-notify"
              data-toggle="dropdown"
            >
              <i class="icon-Envelope"></i>
              <span class="badge badge-primary d-block text-white">1</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-lg dropdown-menu-right no-padding"
              aria-labelledby="dropdown-notify"
            >
              <div class="dropdown-header-top flex d-flex align-items-center">
                <span class="d-flex flex text-dark dropdown-title">Notifications</span>
                <a class="d-flex d-inline-flex text-primary">
                  <i class="fas fa-check fs10 mr-2 d-flex d-inline-flex align-self-center"></i>
                  Mark all as read
                </a>
              </div>
              <div style="height: 320px">
                <div class="slim-scroll">
                  <ul class="list">
                    <li class="list-item align-items-center unread">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 bg-info text-white rounded-circle">
                        <i class="icon-Twitter"></i>
                      </div>
                      <div class="list-body">
                        <span class="list-title">New Followers</span>
                        <span class="list-content">6 New Followers</span>
                        <span class="list-meta">3 Hours ago</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center unread">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 bg-warning text-white rounded-circle">
                        <i class="icon-Ticket"></i>
                      </div>
                      <div class="list-body">
                        <span class="list-title">New Support Ticket</span>
                        <span class="list-content">Adam need some helps</span>
                        <span class="list-meta">5 Hours ago</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 bg-teal text-white rounded-circle">
                        <i class="icon-Paypal"></i>
                      </div>
                      <div class="list-body">
                        <span class="list-title">Payment Sent</span>
                        <span class="list-content">You have sent $200 to Joseph</span>
                        <span class="list-meta">18 Hours ago</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 bg-danger text-white rounded-circle">
                        <i class="icon-Envelope"></i>
                      </div>
                      <div class="list-body">
                        <span class="list-title">Email Confirmation</span>
                        <span class="list-content">Confirm your email to complete sign up</span>
                        <span class="list-meta">Yesterday</span>
                      </div>
                    </li>
                    <!--item-->
                  </ul>
                </div>
              </div>
              <a class="dropdown-footer">View All Notifications</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="javascript:void(0)" id="dropdownChat" data-toggle="dropdown">
              <i class="icon-Speach-Bubbles"></i>
              <span class="badge badge-success text-white anibadge d-block">9</span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right no-padding dropdown-menu-lg"
              aria-labelledby="dropdownChat"
            >
              <div class="dropdown-header-top flex d-flex align-items-center">
                <span class="d-flex flex text-dark dropdown-title">Recent</span>
                <a class="d-flex d-inline-flex text-primary">
                  <i class="fa fs10 fa-plus mr-2 d-flex d-inline-flex align-self-center"></i>
                  New Message
                </a>
              </div>
              <div style="height: 350px">
                <div class="slim-scroll">
                  <ul class="list chat-list">
                    <li class="list-item align-items-center chat-user user-online unread">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 rounded-circle">
                        <img src="images/avatar1.jpg" class="img-fluid" alt />
                      </div>
                      <div class="list-body">
                        <span class="list-title">Emily Doe</span>
                        <span class="list-content">We'have created a support ticket but</span>
                        <span class="list-meta">3 Hours ago</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center chat-user">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 rounded-circle">
                        <img src="images/avatar2.jpg" class="img-fluid" alt />
                      </div>
                      <div class="list-body">
                        <span class="list-title">Adam Voges</span>
                        <span class="list-content">We'have created a support ticket but</span>
                        <span class="list-meta">7 Hours ago</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center chat-user">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 rounded-circle">
                        <img src="images/avatar5.jpg" class="img-fluid" alt />
                      </div>
                      <div class="list-body">
                        <span class="list-title">Pamela Anderson</span>
                        <span class="list-content">We'have created a support ticket but</span>
                        <span class="list-meta">20 Hours ago</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center chat-user user-dnd">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div class="list-thumb avatar avatar50 rounded-circle">
                        <img src="images/avatar4.jpg" class="img-fluid" alt />
                      </div>
                      <div class="list-body">
                        <span class="list-title">Robin Edwards</span>
                        <span class="list-content">We'have created a support ticket but</span>
                        <span class="list-meta">Yesterday</span>
                      </div>
                    </li>
                    <!--item-->
                    <li class="list-item align-items-center chat-user user-away">
                      <a href="javascript:void(0)" class="list-link"></a>
                      <div
                        class="list-thumb avatar avatar50 bg-primary-light text-primary rounded-circle"
                      >
                        <i class="icon-Boy"></i>
                      </div>
                      <div class="list-body">
                        <span class="list-title">Abraham Josef</span>
                        <span class="list-content">We'have created a support ticket but</span>
                        <span class="list-meta">3 Days ago</span>
                      </div>
                    </li>
                    <!--item-->
                  </ul>
                </div>
              </div>
              <a class="dropdown-footer">View All Messages</a>
            </div>
          </li>
          <li class="nav-item dropdown tools-dropdown h-lg-down">
            <a href="javascript:void(0)" data-toggle="dropdown" class="nav-link">
              <i class="icon-Filter-2"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
              <div class="row no-margin">
                <div class="col-4 p-3 text-center">
                  <a href="index.html" class="d-block tool-item">
                    <i class="icon-New-Mail text-teal"></i>
                    <div class="tool-heading fs12">New Email</div>
                  </a>
                </div>
                <div class="col-4 p-3 text-center">
                  <a href="index.html" class="d-block tool-item">
                    <i class="icon-Folder-Add text-success"></i>
                    <div class="tool-heading fs12">New Project</div>
                  </a>
                </div>
                <div class="col-4 p-3 text-center">
                  <a href="index.html" class="d-block tool-item">
                    <i class="icon-Administrator text-primary"></i>
                    <div class="tool-heading fs12">My Profile</div>
                  </a>
                </div>
                <div class="col-4 p-3 text-center">
                  <a href="index.html" class="d-block tool-item">
                    <i class="icon-Gear text-dark"></i>
                    <div class="tool-heading fs12">Settings</div>
                  </a>
                </div>
                <div class="col-4 p-3 text-center">
                  <a href="index.html" class="d-block tool-item">
                    <i class="icon-Server-2 text-info"></i>
                    <div class="tool-heading fs12">Server Space</div>
                  </a>
                </div>
                <div class="col-4 p-3 text-center">
                  <a href="index.html" class="d-block tool-item">
                    <i class="icon-Ticket text-danger"></i>
                    <div class="tool-heading fs12">Tickets</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown user-dropdown align-items-center">
            <a
              class="nav-link"
              href="javascript:void(0)"
              id="dropdown-user"
              role="button"
              data-toggle="dropdown"
            >
              <span class="user-states states-online">
                <img :src="head" alt class="img-fluid rounded-circle" />
              </span>
              <span class="ml-2 h-lg-down dropdown-toggle">{{ name }}</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user">
              <div class="text-center p-3 pt-0 b-b mb-5">
                <span class="mb-0 d-block font300 text-title fs-1x">
                  Hi!
                  <span class="font700">{{ name }}</span>
                </span>
                <span class="fs12 mb-0 text-muted">Administrator</span>
              </div>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="icon-User"></i>My Profile
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="icon-Newspaper"></i> Tasks
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="icon-Speach-Bubble4"></i> Messages
                <span
                  class="badge badge-text text-primary-active bg-primary-light ml-2"
                >5 New</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="icon-Gear"></i> Settings
                <span
                  class="badge badge-text text-danger-active bg-danger-light ml-2"
                >Update</span>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="page-login.html">
                <i class="icon-Power"></i> logout
              </a>
            </div>
          </li>
          <li class="h-lg-up nav-item">
            <a
              href="javascript:void(0)"
              class="nav-link collapsed"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-expanded="false"
            >
              <i class="icon-Magnifi-Glass2"></i>
            </a>
          </li>
        </ul>
        <div class="collapse navbar-collapse search-collapse" id="navbarToggler">
          <form class="form-inline ml-1">
            <button class="no-padding bg-trans border0" type="button">
              <i class="icon-Magnifi-Glass2"></i>
            </button>
            <input
              class="form-control border0"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </header>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.home {
  display: -ms-flexbox;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import $ from "jquery";
import Identicon from "identicon.js";
import { Hash } from "crypto";
export default {
  name: "home",
  data() {
    return {
      head: null
    };
  },
  computed: {
    name: function() {
      return this.$store.state.name;
    }
  },
  mounted() {
    let hash = Hash("md5");
    hash.update(this.name);
    var imgData = new Identicon(hash.digest("hex"), 30).toString();
    this.head = "data:image/png+xml;base64," + imgData;

    $("#metisMenu").metisMenu({});
    $(".slim-scroll").slimScroll({
      height: "100%",
      color: "#e5f2ff"
    });
    $(".sidenav-btn").on("click", function() {
      $("#page-aside").toggleClass("aside-folded");
      $(".sidenav-btn").toggleClass("toggler-folded");
    });
  }
};
</script>
