import { useQuery } from 'react-query';
import { getAllCategories } from '../service';

export const useCategories = () => {
    const categoriesQuery = useQuery(['categories'], getAllCategories, {
        refetchOnWindowFocus: false
    })

    return categoriesQuery;
}