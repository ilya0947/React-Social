export default function random() {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    str = str.split('').sort(() => Math.random() - 0.5).join('').slice(0, 10);
    return str;
}

// const e = [{
//     label: 'react'
// }];
// // console.log(e.indexOf('e'))

//  function search(posts, keyWord) {
//     if (keyWord.length === 0) {
//         return posts;
//     }
//     return posts.filter(post => {
//         return post.label.indexOf(keyWord) > -1
//     });
// }

// console.log(search(e, 'c'))