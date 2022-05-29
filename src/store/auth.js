import firebase from 'firebase/app'

export default {
   state: {

   },

   mutations: {

   },

   actions: {
      async LOGIN({dispatch, commit}, {email, password}) {
         try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
         } catch (e) {

         }
      }
   },

   getters: {

   }
}