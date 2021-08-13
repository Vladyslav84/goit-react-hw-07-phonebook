import axios from 'axios';

    axios.defaults.baseURL = 'http://localhost:3003';
   
    export async function fetcContacts ()  {
         const response = await axios.get(`/contacts`);
         return response.data;

};

    export async function postContacts (newContact)  {
        const response = await axios.post(`/contacts`, { console.log(newContact)
            // id: id ,
            // name: name,
            // number: number
         });
         return response.data;

};

    export async function deleteContacts (deleteContacts)  {
        const response = await axios.delete(`/contacts/${deleteContacts}` );
         return response.data;

};
// fetcContacts ()
// export async function fetcCastsId (movieId)  {
//        try {
//     const response = await axios.get(`/movie/${ movieId }/credits?api_key=AUTH_TOKEN&language=en-US`);
//     return response.data.cast;
//      } catch (error) {
//      alert(error.massage)
//     }
// };

// export async function fetchMoviesId  (movieId){
// try {
//     const response = await axios.get(`/movie/${ movieId }?api_key=AUTH_TOKEN&language=en-US`);
//     return response.data;
// } catch (error) {
//      alert(error.massage)
//     }
// };

// export async function getPopularMovies(){
// try {
//     const response = await axios.get(`/trending/movie/day?`);
//     return response.data.results;
// } catch (error) {
//     alert(error.massage)
// }
// };
 
// export async function fetchMoviesSearch(submitValue) {
// try {
//     const response = await axios.get(`/search/movie?api_key=AUTH_TOKEN&language=en-US&query=${ submitValue }&page=1&include_adult=false`);
//     return response.data.results;
// } catch (error) {
//     alert(error.massage)
// }
// };