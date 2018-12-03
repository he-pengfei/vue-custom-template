<template>
    <div class="body">
        <div class="left">
            <div class="logoCon">
                <img src="../image/logo.jpg" alt="" class="logo">
            </div>
            <v-menu></v-menu>
        </div>
        <div class="right">
            <div class="top">
                <!-- <div>Manage System</div> -->

                <!-- <div style="color:#000">{{this.resLogin.id}}</div> -->
                <div class="userInfo">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            小飞飞
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            
                            <el-dropdown-item command="userinfo">个人信息</el-dropdown-item>
                            <el-dropdown-item command="message">用户消息</el-dropdown-item>
                            <el-dropdown-item command="sign">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </div>
            <div class="right_body">
                <router-view></router-view>
            </div>

        </div>
    </div>
    
</template>
<script>
import Vmenu from "../components/menu.vue";

export default {
  components: {
    "v-menu": Vmenu
  },
  data() {
    return {
    };
  },


  methods: {

    handleCommand(command) {
      if (command == "sign") {
        sessionStorage.removeItem("userInfo");
        this.$router.push("/login");
      }
    },
    initWebpack() {
      //初始化websocket
      const wsuri = "wss://echo.websocket.org";
      this.websock = new WebSocket(wsuri); //这里面的this都指向vue
      this.websock.onopen = this.websocketopen;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
      this.websock.onerror = this.websocketerror;
    },
    websocketopen() {
     
      console.log("WebSocket连接成功");
    },
    websocketonmessage(e) {
      //数据接收
      console.log(e);
      this.productinfos = JSON.parse(e.data);
    },
    websocketclose() {
      //关闭
      console.log("WebSocket关闭");
    },
    websocketerror() {
      //失败
      console.log("WebSocket连接失败");
    }
  },
  created() {
    
    let userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      console.log(this.initWebpack(), "websocket");
    } else {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped >
.body {
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}
.left {
  width: 300px;
  background: #535d64;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
}
.logoCon {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
}
.logo {
  height: 50px;
  width: 50px;
}
.logoCon > span {
  color: #fff;
}
.right {
  display: flex;
  flex: 1;
  flex-direction: column;
  background:#efefef;
}
.top {
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  color: #fff;
  font-size: 30px;
}
.userInfo {
  margin-right: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.el-dropdown-link {
  color: #fff;
}
.right_body {
  display: flex;
  flex: 1;
}
</style>

