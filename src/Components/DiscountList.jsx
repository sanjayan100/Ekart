import DiscountCard from "./DiscountCard";

const DiscountList=()=>{
    const card=[
        {price:7000, desc:"Furniture",pic:"Sofa"},
        {price:1500, desc:"Books", pic:"bookCard"},
        {price:4000, desc:"Clothing", pic:"Shirts"},
        {price:3000, desc:"Bags", pic:"bag"}
    ]
    return <div className="sm:p-5 w-full">
    <div className=" sm-mx:pl-2 text-xl md:text-2xl lg:text-3xl mb-5 font-semibold">Get Up to 70% off</div>
    <div className="md-mx:flex-wrap flex gap-2 justify-evenly pb-10 overflow-x-scroll scrollbar" id="style-3">
        {
            card.map((e, index)=><DiscountCard key={index} desc={e.desc} price={e.price} pic={e.pic}/>)
        }
    </div>
</div>
    
}
export default DiscountList;