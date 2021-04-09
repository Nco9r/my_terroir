export const state = () => ({
    datas: [
    ]
})

export const getters = {
    total(state) {
        return state.datas.reduce((acc, p ) => {
          acc += p.price
          return acc;
        }, 0);
    }
}

export const mutations = {
    addOne(state, products_month) {
        state.datas.push(products_month);
    },
    deleteOne(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        state.datas.splice(index, 1);
    }
}

export const actions = {
    
}