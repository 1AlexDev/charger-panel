import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const chargers = await prisma.charger.findMany();
    return new Response(JSON.stringify(chargers), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch chargers' }), { status: 500 });
  }
}

export async function POST(req) {
  const { chargerId, userName } = await req.json();

  try {
    const charger = await prisma.charger.findUnique({ where: { id: chargerId } });

    if (!charger) {
      return new Response(JSON.stringify({ error: 'Charger not found' }), { status: 404 });
    }

    if (userName === null) {
      // Sign In
      await prisma.charger.update({ where: { id: chargerId }, data: { signedOutBy: null } });
      return new Response(JSON.stringify({ message: 'Charger signed in successfully!' }), { status: 200 });
    } else if (!charger.signedOutBy) {
      // Sign Out
      await prisma.charger.update({ where: { id: chargerId }, data: { signedOutBy: userName } });
      return new Response(JSON.stringify({ message: 'Charger signed out successfully!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ error: 'Charger is already signed out.' }), { status: 400 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update charger' }), { status: 500 });
  }
}