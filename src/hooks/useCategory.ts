import { useQuery } from 'react-query';
import { getByCategory } from '../service';

export const useCategory = (categoryName: string) => {
    const getByCategoryQuery = useQuery(['category', categoryName], () => getByCategory(categoryName), {
        refetchOnWindowFocus: false
    })

    return getByCategoryQuery;
}