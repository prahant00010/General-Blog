import { useMutation, useQueryClient } from '@tanstack/react-query'
import { blogApi } from '@/services/api'
import type { Blog, CreateBlogInput } from '@/types/blog'

export const useCreateBlog = () => {
  const queryClient = useQueryClient()

  return useMutation<Blog, Error, CreateBlogInput>({
    mutationFn: blogApi.createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] })
    },
  })
}

