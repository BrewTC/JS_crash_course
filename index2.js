//array 陣列
let classA =['小明','小白','曉華']
// console.log('轉學前:'+ classA)

// classA.push('小黃')
// console.log('轉學後:', classA)



let igPhotos = ['https://xx.img.com/a1/png',
                'https://xx.img.com/a2/png',
                'https://xx.img.com/a3/png'
            ]

// console.log('第1筆', igPhotos[0])
// console.log('第2筆', igPhotos[1])
// console.log('第3筆', igPhotos[2])


// console.log('igphotos:',igPhotos)

// console.log('igphotos length:',igPhotos.length)

//object 物件
const card ={
    name:'Brew的名片',
    address:'台灣省xxx',
    age:'00'
}

const post = {
    image:'https://xxx.img.com//a1.png',
    desc:'這是一張照片',
    date:'2021/01/01',
    comment:['好漂亮','我也要去','真漂亮','我也要去']
}

// console.log('照片', post.image)
// 照片 https://xxx.img.com//a1.png

const post2 = {
    image:'https://xxx.img.com//a1.png',
    desc:'這是一張照片',
    date:'2021/01/02',
    comment:['好漂亮','我也要去','真漂亮','我也要去']
}

//合併成一個

const wall = {
    post,
    post2
}

// console.log('wall', wall)
