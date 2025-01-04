"use client"

import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from './ui/input'

const BlogCards = ({ blogs }: {
    blogs: {
        id: number,
        userId: number,
        title: string,
        body: string
    }[]
}) => {
    const [filteredBlogs, setFilteredBlogs] = useState(blogs)
    const [query, setQuery] = useState('')
    const [selectedUserId, setSelectedUserId] = useState('')
    const userIds = blogs?.reduce((acc, blog) => {
        if (!acc.includes(blog.userId)) {
            acc.push(blog.userId)
        }
        return acc
    }, [] as number[])

    useEffect(() => {
        const filterBlogs = () => {
            if (blogs) {
                let filtered = blogs
                if (query) {
                    filtered = filtered.filter(blog => blog.title.toLowerCase().includes(query.toLowerCase()))
                }
                if (selectedUserId) {
                    filtered = filtered.filter(blog => blog.userId === Number(selectedUserId))
                }
                setFilteredBlogs(filtered)
            }
        }

        const timer = setTimeout(() => {
            filterBlogs()
        }, 1500)

        return () => clearTimeout(timer)
    }, [blogs, query, selectedUserId])

    return (
        <div className='flex flex-col gap-4 px-2 md:w-10/12 mx-auto'>
            <div className='flex gap-2 justify-between'>
                <h2 className='text-2xl'>Filters</h2>
                <div className='flex w-6/12 gap-2'>
                    <Input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                    <Select onValueChange={(value) => setSelectedUserId(value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select userId" />
                        </SelectTrigger>
                        <SelectContent>
                            {userIds?.map(user => (
                                <SelectItem key={user} value={String(user)}>
                                    {user}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <p>
                {filteredBlogs?.length} blogs found
            </p>
            <div className='flex flex-wrap'>
                {filteredBlogs?.map((blog) => (
                    <div className='p-1 md:w-1/2 lg:w-1/3 h-[200px]' key={blog.id}>
                        <Card className='size-full'>
                            <CardHeader>
                                <CardTitle>
                                    {blog.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {blog.body}
                            </CardContent>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogCards