export const dynamic = 'force-dynamic';

export async function GET(request: Request, response: Response) {
  return Response.json('hello');
}
