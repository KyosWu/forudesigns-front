<template>
  <div class="manage-address">
    <h2 class="my-title">Exist Address</h2>
    <div class="address-table-wrap">
      <!--管理工具-->
      <div class="manage-address__tools">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <el-checkbox v-model="checked" v-if="isManage">All</el-checkbox>
        </transition>
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <span class="manage-address__tools__delete" v-if="isManage">
          <i class="el-icon-delete"></i>
          Delete
        </span>
        </transition>

        <el-button class="btn-01" @click="no_manage_func" v-if="isManage">Cancel</el-button>
        <el-button class="btn-01" @click="manage_func" v-if="!isManage">Manage</el-button>
        <el-button class="btn-01" @click="add_address_func">Add Address</el-button>
      </div>
      <!--数据组-->
      <div class="el-checkbox-group">
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe>
          <el-table-column
            prop="name"
            label="Name"
            align="center"
            width="150">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Address"
            align="center">
          </el-table-column>
          <el-table-column
            prop="phone"
            align="center"
            label="Phone"
            width="150">
          </el-table-column>
          <el-table-column
            prop="zipcode"
            align="center"
            label="zip Code"
            width="150">
          </el-table-column>
          <el-table-column
            align="center"
            label="Actions"
            width="350">
            <template slot-scope="scope">
              <el-button
                 el-button
                 size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              <el-button
                v-if="scope.$index !== tableIndex"
                size="mini"
                type="danger"
                @click="handleDefault(scope.$index, scope.row)">Select As Default</el-button>
              <el-button
                v-if="scope.$index === tableIndex"
                size="mini"
                disabled>Default Address</el-button>

              <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
              >
                <el-checkbox v-model="checked" v-if="isManage"></el-checkbox>
              </transition>
            </template>
          </el-table-column>
        </el-table>

      </div>
      <!--分页-->
      <!--<div class="page">-->
        <!--<el-pagination-->
          <!--@size-change="handleSizeChange"-->
          <!--@current-change="handleCurrentChange"-->
          <!--:current-page.sync="currentPage3"-->
          <!--:page-size="100"-->
          <!--layout="prev, pager, next, jumper"-->
          <!--:total="100">-->
        <!--</el-pagination>-->
      <!--</div>-->
      <div class="page">
        <el-pagination
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
    </div>

    <!--修改地址-->
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <Address v-if="isAddress"/>
    </transition>

    <!--delete消息通知-->
    <transition
    name="message">
      <Messages v-if="isMessage" :tableData="tableData"/>
    </transition>


  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Messages from '../../../components/model/message-box'
  import Address from '../../../components/my/Address'
    export default {
        name: "index",
      components: {
        Address,
        Messages
      },
      data () {
          return {
            tableData: [{
              name: 'Henry',
              address: 'Beijing chaoyang',
              phone: '2016-05-02',
              zipcode: '123'
            }, {
              name: 'Tom',
              address: 'Shanghai jinsha',
              phone: '2016-05-02',
              zipcode: '123'
            }],
            checked: false,
          }
      },
      computed: {
        ...mapGetters([
          'isAddress',
          'isMessage',
          'isManage',
          'isConfirm',
          'tableIndex'
        ])
      },
      methods: {
          ...mapActions([
            'set_address',
            'set_message',
            'set_manage',
            'set_default'
          ]),
        //  取消修改
        no_manage_func () {
          this.set_manage(false)
        },
        //  管理地址
        manage_func () {
          this.set_manage(true)
        },
        // 添加新地址
        add_address_func () {
          this.set_address(true)
        },
        //  修改地址
        handleEdit () {
          this.set_address(true)
        },
        // 删除地址
        handleDelete (index) {
          this.set_message([true, index])
        },
      //  设置默认地址
        handleDefault (index) {
          this.set_default(index)
          this.$message({
            type: 'success',
            dangerouslyUseHTMLString: true,
            showClose: true,
            message: 'Successful'
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .manage-address {
    width: 85%;
    .manage-address__tools {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: end;
      justify-content: flex-end;
      margin-bottom: 17px;
      button {
        height: 38px;
        margin-left: 24px;
        padding: 0 20px;
      }
      .manage-address__tools__delete {
        margin-left: 27px;
        cursor: pointer;
        color: #8c95a5;
        font-size: 14px;
      }
    }
    .page {
      padding: 22px 0;
      text-align: right;
      border-radius: 0 0 4px 4px!important;
    }
  }

  .my-title {
    margin: 0 0 12px;
    text-transform: uppercase;
    color: #40354e;
    font-size: 20px;
    font-weight: 700;
  }
  .message-enter-active {
    transition: all .3s ease;
  }
  .message-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .message-enter, .message-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>


<style scoped>
  .manage-address >>> .cell .el-button {
    cursor: pointer;
    border: 0;
    color: #4292e3;
    background-color: transparent;
  }
  .manage-address >>> .el-table th {
    background-color: #eaeaea!important;
  }
  .manage-address >>> .el-table tr td {
    padding: 17px 10px;
    border-bottom: 2px solid #dfdfeb;
  }
  .manage-address >>> .el-table tr td:nth-child(2){
    text-align: left;
  }
  .manage-address >>> .el-table th .cell {
    color: black;
  }
</style>
