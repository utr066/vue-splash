import axios from "axios";
import { isCompositeType } from "graphql";

const state = {
    user: null
};

const getters = {};

const mutations = {
    setUser(state, user) {
        state.user = user;
    }
};

const actions = {
    async register(context, data) {
        //　例外処理いれろ
        try {
            const response = await axios.post("/api/register", data);
            context.commit("setUser", response.data);
        } catch (e) {
            console.error(e);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
