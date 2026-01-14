'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderOpen, Plus, MoreVertical, FileText, Trash2, Edit2 } from 'lucide-react'

interface Collection {
  id: string
  name: string
  description: string
  promptCount: number
  createdAt: string
  color: string
}

const sampleCollections: Collection[] = [
  {
    id: '1',
    name: 'Marketing Favorites',
    description: 'My go-to prompts for marketing campaigns',
    promptCount: 12,
    createdAt: '2024-01-10',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: '2',
    name: 'Coding Helpers',
    description: 'Prompts that help me code faster',
    promptCount: 8,
    createdAt: '2024-01-08',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: '3',
    name: 'Content Creation',
    description: 'Blog posts, social media, and more',
    promptCount: 15,
    createdAt: '2024-01-05',
    color: 'from-amber-500 to-orange-500',
  },
]

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>(sampleCollections)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newCollection, setNewCollection] = useState({ name: '', description: '' })

  const handleCreateCollection = () => {
    if (!newCollection.name.trim()) return

    const collection: Collection = {
      id: Date.now().toString(),
      name: newCollection.name,
      description: newCollection.description,
      promptCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      color: 'from-indigo-500 to-purple-500',
    }

    setCollections([collection, ...collections])
    setNewCollection({ name: '', description: '' })
    setShowCreateModal(false)
  }

  const handleDeleteCollection = (id: string) => {
    setCollections(collections.filter((c) => c.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0F0F23]">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#0a0a1a]">
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white">My Collections</h1>
              <p className="text-gray-400 text-sm">
                Organize your favorite prompts into collections
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg"
            >
              <Plus className="w-4 h-4" />
              New Collection
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6">
        {collections.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-[#1A1A2E] rounded-xl border border-gray-800"
          >
            <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FolderOpen className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No Collections Yet</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Create your first collection to organize prompts by project, topic, or workflow.
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg"
            >
              <Plus className="w-4 h-4" />
              Create Collection
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Create New Card */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setShowCreateModal(true)}
              className="bg-[#1A1A2E] rounded-xl border border-dashed border-gray-700 p-6 flex flex-col items-center justify-center min-h-[200px] hover:border-indigo-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                <Plus className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors">
                Create New Collection
              </span>
            </motion.button>

            {/* Existing Collections */}
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="bg-[#1A1A2E] rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500/50 transition-colors group"
              >
                {/* Color Bar */}
                <div className={`h-2 bg-gradient-to-r ${collection.color}`} />

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${collection.color} flex items-center justify-center`}>
                        <FolderOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Created {collection.createdAt}
                        </p>
                      </div>
                    </div>
                    <div className="relative group/menu">
                      <button className="p-1.5 text-gray-500 hover:text-white rounded-lg hover:bg-gray-800/50">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      <div className="absolute right-0 top-full mt-1 w-36 bg-[#0F0F23] border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all z-10">
                        <button className="w-full px-3 py-2 text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 flex items-center gap-2">
                          <Edit2 className="w-4 h-4" />
                          Rename
                        </button>
                        <button
                          onClick={() => handleDeleteCollection(collection.id)}
                          className="w-full px-3 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {collection.description || 'No description'}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">{collection.promptCount} prompts</span>
                    </div>
                    <a
                      href={`/dashboard/collections/${collection.id}`}
                      className="text-sm text-indigo-400 hover:text-indigo-300"
                    >
                      View Collection
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowCreateModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[#1A1A2E] rounded-xl border border-gray-800 p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-bold text-white mb-4">Create Collection</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Collection Name
                </label>
                <input
                  type="text"
                  value={newCollection.name}
                  onChange={(e) => setNewCollection({ ...newCollection, name: e.target.value })}
                  placeholder="My Awesome Collection"
                  className="w-full px-4 py-2.5 bg-[#0F0F23] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Description (optional)
                </label>
                <textarea
                  value={newCollection.description}
                  onChange={(e) => setNewCollection({ ...newCollection, description: e.target.value })}
                  placeholder="What prompts will this collection contain?"
                  rows={3}
                  className="w-full px-4 py-2.5 bg-[#0F0F23] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCollection}
                className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                Create
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
