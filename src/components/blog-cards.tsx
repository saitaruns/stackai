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
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

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
    const [currentPage, setCurrentPage] = useState(1)
    const blogsPerPage = 9

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
                setCurrentPage(1)
            }
        }

        const timer = setTimeout(() => {
            filterBlogs()
        }, 1500)

        return () => clearTimeout(timer)
    }, [blogs, query, selectedUserId])

    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

    return (
        <div className='flex flex-col gap-4 px-2 md:w-10/12 mx-auto'>
            <div className="space-y-4 mt-8">
                <h1 className='text-4xl'>Blogs</h1>
                <p className='md:w-8/12'>
                    Welcome to our blog section! Here you can find a variety of articles written by different users. Use the search bar and filters to find blogs that interest you.
                </p>
            </div>
            <div className='flex gap-2 justify-end'>
                <div className='flex w-full md:w-6/12 gap-2'>
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
            </div >
            <div className='flex flex-wrap'>
                {currentBlogs?.map((blog) => (
                    <div className='p-2 md:w-1/2 lg:w-1/3 ' key={blog.id}>
                        <Card className='size-full relative'>
                            <Image
                                src={`https://picsum.photos/seed/${blog.id}/200/300`}
                                alt="blog image"
                                width={200}
                                height={300}
                                className='object-cover w-full h-40 rounded-t-md'
                            />
                            <CardHeader className='min-h-16'>
                                <CardTitle className='text-xl line-clamp-1 capitalize'>
                                    {blog.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='min-h-32'>
                                <div className='line-clamp-3'>
                                    {blog.body}
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-end absolute bottom-0 w-full'>
                                <Link
                                    className='text-blue-500 hover:underline'
                                    href={`/blog/${blog.id}`}>
                                    Read More
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
            <div className='flex justify-center gap-2 mt-4 items-center'>
                <Button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    Previous
                </Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next
                </Button>
            </div>
        </div >
    )
}

export default BlogCards