import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CardComp = ({ cart }) => {
    const dispatch = useDispatch();

    return (
        <div className="my-10 flex items-center justify-between">
            <img className="w-[150px] h-[150px] object-cover" src={cart?.image} alt="" />
            <div className="w-[500px]">
                <div className="text-xl">{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div className="font-bold text-2xl">{cart?.price} TL ({cart?.quantity})</div>
            <div onClick={() => dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white text-2xl cursor-pointer rounded-md w-[150px] h-16 flex items-center justify-center">Ürünü Sil</div>
        </div>
    );
}

export default CardComp;
