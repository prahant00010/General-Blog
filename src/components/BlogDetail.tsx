import { useBlog } from '@/hooks/useBlog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface BlogDetailProps {
  blogId: string | null
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data: blog, isLoading, error } = useBlog(blogId)

  if (!blogId) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-center">
            Select a blog from the list to view its details
          </p>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
    return (
      <Card className="animate-pulse">
        <div className="h-64 bg-muted rounded-t-lg"></div>
        <CardHeader>
          <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
          <div className="h-8 bg-muted rounded w-3/4"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-destructive">Error loading blog: {error.message}</p>
        </CardContent>
      </Card>
    )
  }

  if (!blog) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">Blog not found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <div className="w-full h-64 overflow-hidden rounded-t-lg">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
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
        <CardTitle className="text-3xl">{blog.title}</CardTitle>
        <CardDescription>
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{blog.description}</p>
        <div className="prose prose-sm max-w-none">
          <p className="whitespace-pre-wrap text-foreground leading-relaxed">
            {blog.content}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

