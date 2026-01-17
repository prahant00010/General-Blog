import { useQuery } from '@tanstack/react-query'
import { blogApi } from '@/services/api'
import type { Blog } from '@/types/blog'

export const useBlog = (id: string | null) => {
  return useQuery<Blog>({
    queryKey: ['blog', id],
    queryFn: () => blogApi.getBlogById(id!),
    enabled: !!id,
  })
}

