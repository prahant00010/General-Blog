import { useQuery } from '@tanstack/react-query'
import { blogApi } from '@/services/api'
import type { Blog } from '@/types/blog'

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ['blogs'],
    queryFn: blogApi.getAllBlogs,
  })
}

