import { useBlogs } from '@/hooks/useBlogs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Blog } from '@/types/blog'

interface BlogListProps {
  onSelectBlog: (blog: Blog) => void
  selectedBlogId: string | null
}

export function BlogList({ onSelectBlog, selectedBlogId }: BlogListProps) {
  const { data: blogs, isLoading, error } = useBlogs()

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
              <div className="h-6 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-destructive">Error loading blogs: {error.message}</p>
        </CardContent>
      </Card>
    )
  }

  if (!blogs || blogs.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">No blogs found. Create one to get started!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedBlogId === blog.id ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => onSelectBlog(blog)}
        >
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              {blog.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
            <CardTitle className="text-lg">{blog.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-2">
              {blog.description}
            </CardDescription>
            <p className="text-xs text-muted-foreground mt-2">
              {new Date(blog.date).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

