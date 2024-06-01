import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './../../redux/categorySlice';

const Category = ({ setCategory }) => {
    const dispatch = useDispatch();

    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
            <div className='border-b pb-1 px-2 text-xl font-bold'>Kategori</div>

            <div onClick={() => setCategory()} className="text-lg  cursor-pointer hover:bg-gray-200 p-2 rounded capitalize">
                Tümü
            </div>

            {
                categories?.map((category, i) => (
                    <div onClick={() => setCategory(category)} className='text-lg cursor-pointer hover:bg-gray-200 p-2 rounded capitalize' key={i}>{category}</div>
                ))
            }
        </div>
    )
}

export default Category;
