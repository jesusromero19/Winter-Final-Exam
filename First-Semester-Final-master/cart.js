class Cart{
  //What is the first part of every class? Type it below.
constructor(itemList,itemQuantity){
  this.itemList = itemList; //An array that contains pre-made item-objects
  this.itemQuantity = itemQuantity; //An array that stores how many of each corresponding item you have in the cart
}
  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList = i;
    this.itemQuantity = q;
  }

}
