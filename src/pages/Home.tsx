import React from 'react';
import { Menu, ChefHat, Sandwich, Ghost, Cookie, Salad, Coffee, IceCream, Star, Megaphone } from 'lucide-react';
import { MenuItem } from '../components/MenuItem';
import { MenuSection } from '../components/MenuSection';
import { CartButton } from '../components/CartButton';
import { menuItems } from '../data/menuItems';

export function Home() {
  const getItemsByCategory = (category: string) => 
    menuItems.filter(item => item.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50">
      <header className="bg-orange-500 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Hot Dog Mania</h1>
          <p className="text-orange-100">O melhor cachorro-quente da cidade! 🌭</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <MenuSection title="Cachorros-Quentes Clássicos" icon={Sandwich}>
          {getItemsByCategory('classicos').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Cachorros-Quentes Gourmet" icon={ChefHat}>
          {getItemsByCategory('gourmet').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Cachorros-Quentes Monstruosos" icon={Ghost}>
          {getItemsByCategory('monstruosos').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Mini Hot Dogs" icon={Cookie}>
          {getItemsByCategory('mini').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Acompanhamentos" icon={Salad}>
          {getItemsByCategory('acompanhamentos').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Bebidas" icon={Coffee}>
          {getItemsByCategory('bebidas').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Sobremesas" icon={IceCream}>
          {getItemsByCategory('sobremesas').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Destaque do Menu" icon={Star}>
          {getItemsByCategory('destaque').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>

        <MenuSection title="Promoções" icon={Megaphone}>
          {getItemsByCategory('promocoes').map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuSection>
      </main>

      <footer className="bg-orange-900 text-orange-100 py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p>© 2024 Hot Dog Mania. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Horário de funcionamento: Terça a Domingo, das 18h às 23h</p>
        </div>
      </footer>

      <CartButton />
    </div>
  );
}