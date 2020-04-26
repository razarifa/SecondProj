import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";



Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {

        holidays: []
    },
    actions: {

        // var a = document.getElementById('_country').value;

        fetchHolidays({ commit }) {

            axios.get("https://calendarific.com/api/v2/holidays?&api_key=8e47ab930f3ac7d878e8b2797b953762b94e51f7&country=AZ&year=2020")
                .then(
                    data => {
                        console.log(data.data.response.holidays)
                        let holidays = data.data.response.holidays;
                        commit("setHolidays", holidays);
                    }
                ).catch(err => {
                    console.log(err);
                });
        }
    },
    mutations: {

        setHolidays(state, payload) {
            state.holidays = payload;
        },
    },

})