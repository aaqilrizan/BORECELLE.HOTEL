document.addEventListener('alpine:init', () => {
    Alpine.store('user', {
        profile: {
            name: '',
            email: '',
            check_in: '',
            check_out: '',
            phone: '',
            local_adults: 0,
            local_children: 0,
            foreign_adults: 0,
            foreign_children: 0,

        },

        reservation: {
            singleRoomNum: 0,
            doubleRoomNum: 0,  
            tripleRoomNum: 0,
            wifi:false,
            pool:false,
            garden:false,
            extra_bed:0,
        },

        adventure: {
            adventure: ScubaDiving,
            adventure_date: '',
            adventure_time: '',
            adventure_adults: 0,
            adventure_children: 0,
        },

        updateUser() {
            localStorage.setItem(
              "user_profile",
              JSON.stringify(this.$store.user.profile)
            );
            localStorage.setItem(
              "user_reservation",
              JSON.stringify(this.$store.user.reservation)
            );
            localStorage.setItem(
              "user_payment_details",
              JSON.stringify(this.$store.user.payment)
            );
        },

        init() {
        this.profile =
          JSON.parse(localStorage.getItem("user_profile")) || this.profile;
        this.reservation =
          JSON.parse(localStorage.getItem("user_reservation")) || this.reservation;
        this.reservation =
          JSON.parse(localStorage.getItem("user_payment_details")) || this.payment;
        },

    })
})