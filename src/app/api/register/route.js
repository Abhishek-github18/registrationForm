import { NextResponse } from 'next/server';

export async function POST(req) {
  const { firstName, lastName, tin, zip, email } = await req.json();

  try {
    // Make the backend call from the server
    const response = await fetch('http://localhost:5000/register-testing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, tin, zip, email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    // Send the response back to the client
    return NextResponse.json(jsonResponse, { status: response.status });
  } catch (error) {
    console.error('Error during fetch:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}