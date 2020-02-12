import { useQuery } from 'react-query';
import API from 'data/fetch';

function useAllCategories() {
  return useQuery(
    ['allCategories'],
    API.common.fetchAllCategories,
  );
}

export default useAllCategories;
