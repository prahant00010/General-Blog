import { useState } from 'react'
import type { Blog } from '@/types/blog'
import { BlogList } from '@/components/BlogList'
import { BlogDetail } from '@/components/BlogDetail'
import { CreateBlogForm } from '@/components/CreateBlogForm'

function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  const handleSelectBlog = (blog: Blog) => {
    setSelectedBlog(blog)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">CA Monk Blog</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Blog List */}
          <div className="space-y-4">
            <CreateBlogForm />
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
              <BlogList
                onSelectBlog={handleSelectBlog}
                selectedBlogId={selectedBlog?.id || null}
              />
            </div>
          </div>

          {/* Right Panel - Blog Detail */}
          <div className="sticky top-4">
            <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
              <BlogDetail blogId={selectedBlog?.id || null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
