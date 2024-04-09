import { get, writable } from "svelte/store";
import sc from "../data/sc.json";
import bf from "../data/bf.json";
import tm from "../data/tm.json";
import ex from "../data/ex.json";


export function getSc(){
    return sc.one;
}  


export function getEx(){
    return ex.one;
}


export function getBf(){
    // console.log(bf)
    return bf.one;
}

export function getTm(){
    return tm.one;
} 





// // Slugs


// // This function takes a string as "core-ciencias" and returns "Core Ciencias"
// export function _normalizeFirstSlug(txt_i:string){
//     let txt_o = "";
//     let splittedText_arr = txt_i.split("-");

//     for ( let i = 0; i < splittedText_arr.length; i++){
//         let word_txt = splittedText_arr[i];
//         word_txt = word_txt.charAt(0)
//         .toUpperCase() + word_txt.slice(1);
//         if(i == splittedText_arr.length -1 ){
//             txt_o += word_txt;
//         } else{
//             txt_o += word_txt + " ";

//         } 
//     } 
//     return txt_o
// } 

// //This function takes a string as "resuemens/core-ciencias/ovidio" and returns "Core Ciencias"
// //Usees _normalizeFirstSlug
// export function _getFirstSlug(txt_i: string){
//     let txt_o = ""
//     let splittedText_arr = txt_i.split("/");
//     txt_o = splittedText_arr[2];

//     txt_o = _normalizeFirstSlug(txt_o);
//     return txt_o
// } 

// console.log(_getFirstSlug("/sc/productos/fresh-mint"))



// //This function takes an array of objects and returns all the slugs of all the objects
//  export function _extractSlugs(arr_i: Array<object>){
//     let arr_o = [];
//     for (let i = 0; i < arr_i.length; i++) {
//         let obj = arr_i[i];
//         let slug_txt = obj.v_slug;
//         if(!arr_o.includes(slug_txt)){
//             arr_o.push(slug_txt);
//         } 
//     }
//     return arr_o
// } 



// console.log(_extractSlugs(sc.one.arr))
// let return1 = _extractSlugs(sc.one.arr);
// //This function takes an array of objects and filters the slugs to return non-repeated slugs.
// // Uses _extractSlugs and _getFirstSlug
// export function filterSlugs(arr_i: Array<object>): Array<string>{
//     let arr_p = _extractSlugs(arr_i);
//     let arr_o:Array<string> = [];

//     for(let i = 0; i < arr_p.length ; i++){
//         let slug_txt: string = arr_p[i];
//         let firstSlug =  _getFirstSlug(slug_txt);
//         if(!arr_o.includes(firstSlug)){
//             arr_o.push(firstSlug);
//         } 
        
//     }
//     return arr_o
// } 


// console.log(return1)

// // This function takes an array of objects and a string as "Core Ciencias" and returns all the objects with that first slug
// export function getProductsBySlug(arr_obj_i: Array<object>, category_txt_i: string){
    
//     let arr_o: Array<object> = [];
//     for(let i = 0; i < arr_obj_i.length; i++){
//         let obj = arr_obj_i[i];
//         let slug = obj.v_slug;
//         let firstSlug = _getFirstSlug(slug);
//         if(firstSlug == category_txt_i){
//             arr_o.push(obj);
//         } 
//     } 
//     return arr_o
// } 
// console.log(sc.one.arr);

// // console.log(getProductsBySlug(sc.1[0].arr,"Core Etica"));


export function getItemBySlug(txt_i:string, obj_i: object){
    let obj_o  = {};
    let arr_arr = obj_i.arr;
    let length_num = arr_arr.length;
    for(let i =0 ; i < length_num; i++){
        let item_obj = arr_arr[i];
        let slug_txt = item_obj.v_slug;
        // console.log(slug_txt)
        if(item_obj.v_slug == txt_i){
            obj_o = item_obj
            break; // Exit the loop once a match is found
        } 
    } 
    return obj_o
} 

// console.log(getItemBySlug("/productos/tropical-paradise", getSc()))


export function dotInNumber(num_i: number): string {
    let stringedNum_txt = num_i.toString();
    let length_num = stringedNum_txt.length;

    if (length_num > 3) {
        let firstPart = stringedNum_txt.slice(0, length_num - 3);
        let secondPart = stringedNum_txt.slice(length_num - 3);
        return firstPart + '.' + secondPart;
    } else {
        // Si el número tiene 3 dígitos o menos, simplemente devolvemos el número como está
        return stringedNum_txt;
    }
}



// // This function takes a string as "Core Etica" and returns "core-etica"
// export function denormalizeSlug(txt_i:string): string{
//     let txt_o = "";


//     let lowerText_txt = txt_i.toLocaleLowerCase();
//     let splittedText_arr = lowerText_txt.split(" ");
    
//     txt_o = splittedText_arr.join("-");    
//     return txt_o
// } 

// console.log(denormalizeSlug("Core Etica"))




// // Images

// // This function get a random image from the array of benefits
// export function getSomeBfImg():string{
//     let txt_o = "";
//     let arrayOfImages_arr = getBf();
//     let arr_p = [];
//     for(let i = 0; i < arrayOfImages_arr.arr.length; i++){
//         let img_txt = arrayOfImages_arr.arr[i].v_img;
//         arr_p.push(img_txt);
//         console.log(img_txt)

        
//     }
//     //Consigue un elemento random el array
//     let randomIndex_num = Math.floor(Math.random() * arr_p.length);
//     txt_o = arr_p[randomIndex_num];
//     return txt_o
// }  

// console.log(getSomeBfImg());






// // Price

// export function filterByPrice(arr_obj_i){
//     let arr_obj_o = [];
//     let prices_arr_obj = _categorizeByPrice_arr_txt_o(arr);
//     for (let i = 0; i < prices_arr_obj.length; i++){
//         let price_txt = prices_arr_obj[i];
//         let price_obj = {price: price_txt, arr: []};
//         arr_obj_o.push(price_obj);

//         for (let j = 0; j < arr_obj_i.length; j++){
//             let obj = arr_obj_i[j];
//             if(obj.v_txt_1 == price_txt){
//                 price_obj.arr.push(obj);
//             } 
//         } 
//     }

//     return arr_obj_o;
    
// }