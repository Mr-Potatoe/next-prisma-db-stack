import prisma from "@/lib/prisma_db";
import { NextResponse } from "next/server";

// Handle GET all posts
export async function GET() {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
}


// Handle POST create post
export async function POST(request: Request) {
    const body = await request.json();
    const post = await prisma.post.create({
        data: body,
    });
    return NextResponse.json(post);
}

// Handle PUT update post
export async function PUT(request: Request) {
    const body = await request.json();
    const post = await prisma.post.update({
        where: { id: body.id },
        data: body,
    });
    return NextResponse.json(post);
}

// Handle DELETE delete post
export async function DELETE(request: Request) {
    const { id } = await request.json();
    const post = await prisma.post.delete({
        where: { id },
    });
    return NextResponse.json(post);
}
