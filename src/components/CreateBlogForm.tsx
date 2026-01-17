import { useState } from 'react'
import { useCreateBlog } from '@/hooks/useCreateBlog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function CreateBlogForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [categories, setCategories] = useState('')

  const createBlog = useCreateBlog()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const categoryArray = categories
      .split(',')
      .map((cat) => cat.trim().toUpperCase())
      .filter((cat) => cat.length > 0)

    if (!title || !description || !content || !coverImage || categoryArray.length === 0) {
      alert('Please fill in all fields')
      return
    }

    try {
      await createBlog.mutateAsync({
        title,
        description,
        content,
        coverImage,
        category: categoryArray,
      })
      
      // Reset form
      setTitle('')
      setDescription('')
      setContent('')
      setCoverImage('')
      setCategories('')
      setIsOpen(false)
    } catch (error) {
      console.error('Failed to create blog:', error)
    }
  }

  if (!isOpen) {
    return (
      <div className="mb-4">
        <Button onClick={() => setIsOpen(true)} className="w-full">
          Create New Blog
        </Button>
      </div>
    )
  }

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Create New Blog</CardTitle>
        <CardDescription>Fill in the details to create a new blog post</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="categories">Categories (comma-separated)</Label>
            <Input
              id="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="e.g., FINANCE, TECH, CAREER"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a short description"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <Input
              id="coverImage"
              type="url"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the full blog content"
              rows={10}
              required
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={createBlog.isPending}>
              {createBlog.isPending ? 'Creating...' : 'Create Blog'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsOpen(false)
                setTitle('')
                setDescription('')
                setContent('')
                setCoverImage('')
                setCategories('')
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

