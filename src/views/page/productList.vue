<template>
  <div class="product-list-container">
    <SearchBox @submit="searchSubmit" :data="categoryList" />
    <a-button class="product-add-btn">
      <router-link :to="{ name: 'ProductAdd' }">添加商品</router-link>
    </a-button>
    <productTable
      :data="tableData"
      :page="page"
      @change="changePage"
      :categoryList="categoryList"
      @edit="editProduct"
      @remove="removeProduct"
    />
  </div>
</template>

<script>
import SearchBox from '@/components/searchBox.vue';
import { getProductList, deleteProduct } from '@/api/production';
import categoryApi from '@/api/category';
import productTable from '@/components/productsTable.vue';

export default {
  components: {
    SearchBox,
    productTable,
  },
  data() {
    return {
      categoryObj: {},
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      tableData: [],
      searchForm: {},
      categoryList: [],
    };
  },
  async created() {
    const resp = await categoryApi.getCategoryList();
    this.categoryList = resp.data;
    resp.data.forEach((item) => {
      this.categoryObj[item.id] = item;
    });
    this.getTableData();
  },
  methods: {
    searchSubmit(form) {
      this.searchForm = form;
      this.getTableData();
    },
    async getTableData() {
      const resp = await getProductList({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm,
      });
      console.log(resp);
      this.page.total = resp.total;
      this.tableData = resp.data.map((item) => ({
        ...item,
        categoryName: this.categoryObj[item.category].name,
      }));
    },
    changePage(page) {
      this.page = page;
      this.getTableData();
    },
    editProduct(record) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: record.id,
        },
      });
    },
    removeProduct(record) {
      this.$confirm({
        title: '确认删除',
        content: () => (
          <div style="color:red;">{`确认删除标题为:${record.title}的商品吗`}</div>
        ),
        onOk: () => {
          deleteProduct({
            id: record.id,
          }).then(() => {
            console.log(this);
            this.getTableData();
          });
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'confirm-box',
      });
    },
  },
};
</script>

<style lang="less">
.product-list-container {
  position: relative;
  .product-add-btn {
    position: absolute;
    right: 10px;
    top: 4px;
  }
}
</style>
