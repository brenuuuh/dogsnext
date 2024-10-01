import Imc from '@/components/imc';

export const metadata = {
  title: 'IMC',
  description: 'Calcule seu IMC',
};

export default function ImcPage() {
  return (
    <main>
      <h1>IMC</h1>
      <Imc />
    </main>
  );
}
