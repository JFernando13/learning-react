import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { UserType } from '../models/user.model'

const getUsers = async (pageParam: number) => {
  const response = await fetch(`https://randomuser.me/api?results=10&page=${pageParam}&seed=juan`)
  const { results, info } = await response.json()

  return {
    users: results,
    page: info.page > 2 ? undefined : info.page + 1
  }
}

interface PrevData {
  pages: { users: UserType[] }[];
  pageParams: number; // ajusta este tipo según tus necesidades
}

export function useUser() {
  const queryClient = useQueryClient()

  const { data, error, isLoading, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: ({ pageParam }) => getUsers(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page,
    maxPages: 2
  })

  const users: UserType[] = data?.pages.flatMap(page => page.users) ?? []
  
  const deleteUser = (id: string) => () => {
    queryClient.setQueryData(['users'], (prevData: PrevData) => {
      const updatedPages = prevData.pages.map(page => ({
        ...page,
        users: page.users.filter(user => user.email !== id),
      }));
    
      const updatedData = {
        pages: updatedPages,
        pageParams: prevData.pageParams,
      };
    
      return updatedData;
    });
  }

  const resetUsers = async () => {
    await refetch()
  }

  return { user: { userList: users, isLoading, error }, hasNextPage, actions: { deleteUser, resetUsers, changePage: fetchNextPage } }
}