<template>
  <div class="hello">
    <h1>Diari Jajan Februari 2021</h1>
    <h2>Pengeluaran Bulan Ini Rp.{{total}}</h2>
    
    <div>
      <b-button v-b-modal="'modal-center'" >TAMBAH ITEM</b-button>
      <form>
      <b-modal id="modal-center" hide-header-close centered title="Tambah Entri" ok-title="KIRIM" cancel-title="BATAL">   
        <label for="formNama">Nama {{ nama }}</label>  
        <br />
        <input type="text" v-model="nama" id="formNama" placeholder="Nama Makanan" />
        <br />
        <br />
        <label for="formHarga">Harga {{ harga }}</label>  
        <br />
        <input type="number" v-model="harga" id="formHarga" placeholder="Harga" />
        <br />
        <br />
        <p class="display_none">Jam {{ currentTime() }}</p>       
        <p class="display_none">Tanggal {{ currentDate() }}</p>  
        <template #modal-footer>
          <button v-b-modal="'modal-center'" @click="this.$emit('close')" class="btn btn-danger btn-sm m-1">Close</button>
          <button v-b-modal="'modal-center'" @click="submit()" class="btn btn-primary btn-sm m-1">Submit</button>
        </template>    
      </b-modal>
      </form>   
  </div>
















</div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  methods:{
    setJSON(data){
      this.myJson = data
    },
    currentTime(){
    const current = new Date();
    let currentHours = current.getHours();
    currentHours = ("0" + currentHours).slice(-2);
    const time = currentHours + ":" + current.getMinutes();
    this.time = time
    return time;
    },
    currentDate(){
    const month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const current = new Date();
    const date = current.getDate() +" "+ month[current.getMonth() - 5 ]+ " "+ (current.getFullYear() - 1);
    this.date = date
    return date;
    },
    submit(){ 
      const input={
        jam: this.time,
        tanggal: this.date,
        nama: this.nama, 
        pengeluaran: parseInt(this.harga)
      } 
      this.addCardItem(input);
    },
    ...mapActions(['addCardItem'])
  },
  data: function(){
    return{
      nama: '',
      harga: null,
      myJson: [],
      total: 0,
      time: '',
      date:'',
      detail:{}
      }
  }
    
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}

.display_none{
display: none;
}
</style>
