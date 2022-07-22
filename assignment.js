class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=function(id){
         let myFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(myFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let myFarm= this.farms.find(item=>item.farmId===oldId)
            //   myFarm.farmId = newFarmId
            //   myFarm.name=newName
            //   myFarm.farmer=newFarmer
            //   myFarm.phone=newPhone
            //   myFarm.address=newAddress
      }
      this.getFarm=function(id){
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.farms.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(initialId,newId, newName, newPrice){
            let yields= this.products.find(item=>item.productId===initialId)
            yields.farmId=newId
            yields.name=newName
            yields.farmer=newPrice
    }
    this.getProducta=function(id){
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=function(){
      console.log(this.products)
     }
     this.calculateOrderCost=function(id,quantity){
      let yields= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${yields.name}, the cost of your order is ${yields.price*quantity}`)
      console.log("For" + quantity + "of" + yields.name +",the cost of your order is " + yields.price*quantity)
      this.orders.push(yields)
      this.order
  
     }
  }
  } 
  
  let farmerResults= new Mkulima()
  farmerResults.addFarm("748","Poutry farm","Beatrice","+2547748599","Tetu,Nyeri")

  farmerResults.addFarm("401","Hay land","Lydiah","+254706214941","Solio ranch,Laikipia")
  
  
  farmerResults.updateFarm("33","738","animal farm","Davis Obino","+254797916750","Nanyuki")
  
  console.log(farmerResults.farms)
  
  farmerResults.getFarm("401")
  console.log(farmerResults.farms)
