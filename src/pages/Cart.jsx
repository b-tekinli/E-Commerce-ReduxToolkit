import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CardComp from "../components/card/CardComp";

const Cart = () => {
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

    console.log(carts, totalAmount, itemCount, "carts");

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]);

    return (
        <div>
            {
                carts?.length > 0 ? (
                    <div>
                        {carts?.map((cart, i) => (
                            <CardComp key={i} cart={cart} />
                        ))}
                        <div className="flex items-center justify-end text-2xl">
                            Toplam Tutar :
                            <span className="font-bold ml-3 text-3xl">
                                {totalAmount} TL
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="text-4xl flex items-center justify-center h-screen text-red-500 font-bold">
                        Kartınız boş!
                    </div>
                )
            }
        </div>
    );
};

export default Cart;
