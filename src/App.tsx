import React from 'react';
import { Menu, ChefHat, Sandwich, Ghost, Cookie, Salad, Coffee, IceCream, Star, Megaphone } from 'lucide-react';

function MenuItem({ title, price, description }: { title: string; price: string; description?: string }) {
  return (
    <div className="flex justify-between items-start p-4 hover:bg-orange-50 rounded-lg transition-colors">
      <div className="flex-1">
        <h3 className="font-bold text-orange-900">{title}</h3>
        {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
      </div>
      <span className="font-bold text-orange-600 ml-4">{price}</span>
    </div>
  );
}

function MenuSection({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-bold text-orange-900">{title}</h2>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50">
      <header className="bg-orange-500 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Nu Molho</h1>
          <p className="text-orange-100">O melhor cachorro-quente da cidade! 🌭</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <MenuSection title="Cachorros-Quentes Clássicos" icon={Sandwich}>
          <MenuItem 
            title="Cachorro Simples" 
            description="Salsicha, purê de batata, milho, ervilha, batata palha e molhos"
            price="R$ 12,00"
          />
          <MenuItem 
            title="Cachorro Completo"
            description="Salsicha, purê de batata, milho, ervilha, batata palha, queijo ralado, ovo de codorna e molhos"
            price="R$ 15,00"
          />
          <MenuItem 
            title="Cachorro Premium"
            description="Salsicha premium, bacon crocante, cebola caramelizada, queijo cheddar e molho especial"
            price="R$ 18,00"
          />
        </MenuSection>

        <MenuSection title="Cachorros-Quentes Gourmet" icon={ChefHat}>
          <MenuItem 
            title="Cachorro Mexicano"
            description="Salsicha, guacamole, pico de gallo, nachos e molho picante"
            price="R$ 20,00"
          />
          <MenuItem 
            title="Cachorro Italiano"
            description="Salsicha, molho de tomate, mussarela derretida, manjericão fresco e azeitonas"
            price="R$ 19,00"
          />
          <MenuItem 
            title="Cachorro Barbecue"
            description="Salsicha, barbecue caseiro, cebola roxa, bacon e batata palha"
            price="R$ 18,00"
          />
          <MenuItem 
            title="Cachorro Vegano"
            description="Salsicha vegetal, purê de batata-doce, milho, ervilha, tomate seco e molho de mostarda e mel"
            price="R$ 22,00"
          />
        </MenuSection>

        <MenuSection title="Cachorros-Quentes Monstruosos" icon={Ghost}>
          <MenuItem 
            title="Monstro do Bacon"
            description="Duas salsichas, bacon crocante, queijo cheddar, cebola crispy e molho especial"
            price="R$ 25,00"
          />
          <MenuItem 
            title="Monstro do Churrasco"
            description="Duas salsichas, carne moída, farofa, vinagrete e molho chimichurri"
            price="R$ 26,00"
          />
          <MenuItem 
            title="Monstro do Queijo"
            description="Duas salsichas, quatro tipos de queijo (cheddar, mussarela, prato e provolone) e molho de pimenta"
            price="R$ 24,00"
          />
        </MenuSection>

        <MenuSection title="Mini Hot Dogs" icon={Cookie}>
          <MenuItem 
            title="Mini Dog Simples"
            description="Versão pequena do clássico, ideal para crianças"
            price="R$ 8,00"
          />
          <MenuItem 
            title="Mini Dog Gourmet"
            description="Versão pequena com ingredientes premium"
            price="R$ 10,00"
          />
        </MenuSection>

        <MenuSection title="Acompanhamentos" icon={Salad}>
          <MenuItem title="Batata Frita Crocante" price="R$ 10,00" />
          <MenuItem title="Onion Rings" price="R$ 12,00" />
          <MenuItem title="Nuggets de Frango" price="R$ 14,00" />
        </MenuSection>

        <MenuSection title="Bebidas" icon={Coffee}>
          <MenuItem title="Refrigerante (lata)" price="R$ 6,00" />
          <MenuItem title="Suco Natural (500ml)" price="R$ 8,00" />
          <MenuItem title="Água Mineral" price="R$ 4,00" />
        </MenuSection>

        <MenuSection title="Sobremesas" icon={IceCream}>
          <MenuItem title="Churros Recheados" description="Doce de leite ou chocolate" price="R$ 10,00" />
          <MenuItem title="Sorvete de Casquinha" price="R$ 7,00" />
        </MenuSection>

        <MenuSection title="Destaque do Menu" icon={Star}>
          <MenuItem 
            title="Cachorro do Chef"
            description="Escolha do dia, surpresa gourmet preparada com ingredientes frescos e especiais"
            price="R$ 22,00"
          />
        </MenuSection>

        <MenuSection title="Promoções" icon={Megaphone}>
          <MenuItem 
            title="Combo Família"
            description="4 Cachorros Simples + 2 Batatas Fritas + 4 Refrigerantes"
            price="R$ 60,00"
          />
          <MenuItem 
            title="Combo Amigos"
            description="2 Cachorros Monstruosos + 1 Batata Frita + 2 Refrigerantes"
            price="R$ 45,00"
          />
        </MenuSection>
      </main>

      <footer className="bg-orange-900 text-orange-100 py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p>© 2024 Nu Molho. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Horário de funcionamento: Terça a Domingo, das 18h às 23h</p>
        </div>
      </footer>
    </div>
  );
}

export default App;