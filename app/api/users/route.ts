import prisma from '@/lib/prisma_db';
import { NextResponse } from 'next/server';


// Handle GET all users
export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  }
  

// Create users 
export async function POST(request: Request) {
    const body = await request.json();
    const user = await prisma.user.create({
      data: body,
    });
    return NextResponse.json(user);
  }


  // Update users
export async function PUT(request: Request) {
    const body = await request.json();
    const user = await prisma.user.update({
      where: { id: body.id },
      data: body,
    });
    return NextResponse.json(user);
  }


// Delete users
export async function DELETE(request: Request) {
  const { id } = await request.json();
  const user = await prisma.user.delete({
    where: { id },
  });
  return NextResponse.json(user);
}



