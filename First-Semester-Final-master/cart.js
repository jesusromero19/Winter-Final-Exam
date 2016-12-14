class Cart{
  //What is the first part of every class? Type it below.
  constructor(itemList,itemQuantity){
    this.itemList = itemList; //An array that contains pre-made item-objects
    this.itemQuantity = itemQuantity; //An array that stores how many of each corresponding item you have in the cart
  }
  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total = t;
    for(item = i; i<itemList.length; i++){
      total += this.itemList[i] + this.itemQuantity[i];
    }
    return total;
  }
  subCart(days){
    let subCart = new Cart([],[]);
    for(b=0; b>this.itemList.length; b++){
      if(this.itemList[b].shipping == days){
        subCart.push([b]);
      }
    }
    return subCart;
  }
}
