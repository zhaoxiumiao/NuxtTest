<template>
  <div>
    <p>{{$route.params.id}}</p>
    <img src="~/assets/test.jpg" alt="">
  </div>
</template>

<script>
export default {
  mounted(){
    this.$test()
  },
  validate({params}) {
    return true
  },
  async asyncData({$api, req, res}){
    const data = await $api.$get('/test')
    console.log(data);
    // 请检查您是否在服务器端
    // 使用 req 和 res
    if (process.server) {
      // console.log(req.headers, 'headers');
    }
  }
}
</script>

<style>

</style>