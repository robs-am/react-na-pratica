import { Plus } from 'lucide-react';
import { Header } from './components/header';
import { Tabs } from './components/tabs';
import { Button } from './components/ui/button';

export function App() {
  return (
    <div className="py-10 space-y-8">
      <Header />
      <Tabs />
      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant="primary">
            <Plus className="size-3" />
            Create new
          </Button>
        </div>
        <div className="flex items-center justify-between"></div>
      </main>
    </div>
  );
}
