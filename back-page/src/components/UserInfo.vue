<template>
  <div class="app-container">
    <header>
      <img src="./assets/Final.png" alt="Logo" class="logo" width="15%"/>
    </header>
    <div class="main-container">
      <aside class="sidebar">
        <nav>
          <ul>
            <li>
              <div class="nolink">
                <img src="./assets/個人頭像.png" class="icon" />
                XXX,您好
              </div>
            </li>
            <li>
              <router-link to="/eventList" class="link">
                <img src="./assets/事件檢視.png" class="icon" />
                事件檢視
              </router-link>
            </li>
            <li style="background-color: #f5f2ca;">
              <router-link to="/userInfo" class="link" style="background-color: #f5f2ca;">
                <img src="./assets/使用者資訊.png" class="icon" />
                使用者資訊
              </router-link>
            </li>
            <li>
              <router-link to="/managementPage" class="link">
                <img src="./assets/社群管理.png" class="icon" />
                社群管理
              </router-link>
            </li>
            <li>
              <router-link to="/statisticsPage" class="link">
                <img src="./assets/數據統計.png" class="icon" />
                數據統計
              </router-link>
            </li>
            <li>
              <router-link to="/networkInfo" class="link">
                <img src="./assets/網路資訊.png" class="icon" />
                網路資訊
              </router-link>
            </li>
            <li>
              <router-link to="/resourcePage" class="link">
                <img src="./assets/素養資料.png" class="icon" />
                素養資料
              </router-link>
            </li>
          </ul>
        </nav>
        <footer>
          <router-link to="/login" class="link">
            <img src="./assets/登出.png" class="icon" />
            登出
          </router-link>
        </footer>
      </aside>
      <main class="content">
        <div class="title_light">
          <h2>使用者資訊</h2>
          <div class="light">
            <h1>社群使用紅綠燈</h1>
            <div 
              @click="filterByStatus('安全')" 
              class="light-color green status-circle" 
              :class="{'selected': selectedStatus === '安全'}"
            ></div>
            <div 
              @click="filterByStatus('警示')" 
              class="light-color yellow status-circle" 
              :class="{'selected': selectedStatus === '警示'}"
            ></div>
            <div 
              @click="filterByStatus('危險')" 
              class="light-color red status-circle" 
              :class="{'selected': selectedStatus === '危險'}"
            ></div>
            <div 
              @click="filterByStatus(null)" 
              class="light-color white" 
              :class="{'selected': selectedStatus === null}"
            >all</div>
          </div>
        </div>
       
        <div class="register-container">
          <table class="styled-table">
            <thead>
              <tr>
                <th>序號</th>
                <th>帳號</th>
                <th>姓名</th>
                <th>學校/班級</th>
                <th>身分狀態</th>
                <th>待辦事項</th>
                <th>功能</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in filteredTableData" :key="index" :class="{'odd-row': index % 2 !== 0}">
                <td style="text-align: center;">{{ index + 1 }}</td>
                <td style="text-align: center;">{{ row.Account }}</td>
                <td style="text-align: center;">{{ row.Name }}</td>
                <td style="text-align: center;">{{ row.School }}/ {{ row.Class }}</td>
                <td class="status flex">
                  <span class="status-circle" :class="{'red': row.State === '危險', 'yellow': row.State === '警示', 'green': row.State === '安全'}"></span>
                  {{ row.State }}
                </td>
                <td>
                  <div v-if="!row.Todo0">-觀看影片</div>
                  <div v-if="!row.Todo1">-答題測驗</div>
                  <div v-if="!row.Todo2">-校方介入</div>
                  <div v-if="row.Todo0 && row.Todo1 && row.Todo2">無</div>
                </td>
                <td style="text-align: center;"> 
                    <router-link :to="{ name: 'userPage', params: { account: row.Account } }">
                      <input type="submit" value="查看" class="button02">
                    </router-link> 
                    <input type="submit" value="已處理" class="button02" @click="handleTodoChange(row.Account)">
                  </td>

              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script scoped src="./JavaScript/UserInfo.js" ></script>
<style scoped src="./style/Common.css" ></style>
<style scoped src="./style/table.css" ></style>

<style scoped>
.status-circle {
  display: inline-block;
  border-radius: 50%;
  width: 26px; /* 添加寬度 */
  height: 26px; /* 添加高度 */
  margin: 6px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.selected {
  box-shadow: 0 0 5px 1px rgba(74, 87, 103, 0.2); /* 外框效果 */
  border: 3px solid rgb(255, 254, 254);
}

.red {
  background-color: rgb(239, 116, 116);
}

.yellow {
  background-color: rgb(255, 196, 114);
}

.green {
  background-color: rgb(127, 207, 144);
}

.white {
  background-color: rgb(255, 255, 255);
  border: 1px solid #8dacd2;
  color: #7991ad;
}

.status-circle:active {
  transform: scale(1.3);
  animation: blink 0.3s ease-in-out;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

</style>