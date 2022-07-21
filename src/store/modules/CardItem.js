import axios from "axios";

const state={
    CardItem:[
        {
            id: 1,
            nama: "rendang",
            pengeluaran: 77249
        },
        {
            id: 2,
            nama: "soto",
            pengeluaran: 32154
        }
    ]
};

const getters={
    allCardItem: (state) => state.CardItem
};

const actions={
    async fetchCard({commit}){
        const response = await 
        axios
        .get('http://localhost:3000/detail');
        
        commit('setCardItem', response.data)

    },
    async addCardItem({commit}, input ){
        const response = await
        axios
        .post('http://localhost:3000/detail', input)

        commit('newCardItem', response.data)

    }
};

const mutations= {
    setCardItem:(state, CardItem) => (state.CardItem = CardItem),
    newCardItem:(state, CardItem) => state.CardItem.unshift(CardItem)
};

export default{
    state,
    getters,
    actions,
    mutations
};