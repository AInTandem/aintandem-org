import { getImage } from 'astro:assets';
import logo from '../../public/logo.png';

export async function GET() {
  const image = await getImage({
    src: logo,
    width: 32,
    height: 32,
    format: 'png',
  });

  return new Response(image.data, {
    headers: { 'Content-Type': 'image/png' },
  });
}
