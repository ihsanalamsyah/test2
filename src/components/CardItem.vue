<template>


<div>


    <div v-for="item in allCardItem" :key="item.id" class="CardItemz">

    <table>
        <thead>
            <tr>
                <th colspan="3" style="text-align: left;" v-if="item.tanggal === '18 Februari 2021'">  
                   {{item.tanggal}} 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>{{item.jam}}</th>
                <th>{{item.nama}}</th>
                <th>Rp. {{item.pengeluaran}}</th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th></th>
                <th>Total</th>
                <th>Rp. [Total]</th>
            </tr>
        </tfoot>
    </table>

     
      
      
    </div>
</div>

    
       
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CardItem',
    methods:{
        ...mapActions(['fetchCard'])
    },
    computed: mapGetters(['allCardItem']),
    created(){
        this.fetchCard();
    }

    
    
}
</script>

<style>

</style>