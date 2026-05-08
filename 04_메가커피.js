const megaCoffee = {
  name : "메가커피",
  menus : [
    {name : '아메리카노', price : 2000, category : '커피', option : ['HOT', 'ICE']},
    {name : '카페라떼', price : 3000, category : '커피', option : ['HOT', 'ICE']},
    {name : '딸기스무디', price : 4500, category : '음료', option : ['ICE']},
    {name : '아메리카노', price : 4000, category : '음료', option : ['ICE']}    
  ],

  orders : [
    {menuName : '아메리카노', option : "ICE", quantity : 2},
    {menuName : '딸기스무디', option : "ICE", quantity : 1},
    {menuName : '카페라떼', option : "HOT", quantity : 3}
  ]
}

console.log("매장이름 : " + megaCoffee.name)
const menus = megaCoffee.menus;
console.log(`첫번째 메뉴 이름 : ${menus[0].name}`)
console.log(`두번째 메뉴 가격 : ${menus[1].price}`)
console.log(`세번째 메뉴 옵션 : ${menus[2].option}`)


console.log('--------------------------------')
const orders = megaCoffee.orders;
console.log(`첫번째 주문의 수량 : ${orders[0].quantity}`)
console.log(`두번째 주문의 메뉴이름 :${orders[1].menuName}`)
console.log(`두번째 주문의 옵션 :${orders[2].option}`)