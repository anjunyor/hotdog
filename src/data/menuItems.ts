import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'cachorro-simples',
    title: 'Cachorro Simples',
    description: 'Salsicha, purê de batata, milho, ervilha, batata palha e molhos',
    price: 'R$ 12,00',
    category: 'classicos',
    ingredients: ['Salsicha', 'Purê de batata', 'Milho', 'Ervilha', 'Batata palha', 'Molhos'],
    nutritionalInfo: {
      calories: 450,
      protein: 15,
      carbs: 48,
      fats: 22
    }
  },
  {
    id: 'cachorro-completo',
    title: 'Cachorro Completo',
    description: 'Salsicha, purê de batata, milho, ervilha, batata palha, queijo ralado, ovo de codorna e molhos',
    price: 'R$ 15,00',
    category: 'classicos',
    ingredients: ['Salsicha', 'Purê de batata', 'Milho', 'Ervilha', 'Batata palha', 'Queijo ralado', 'Ovo de codorna', 'Molhos'],
    nutritionalInfo: {
      calories: 580,
      protein: 22,
      carbs: 52,
      fats: 28
    }
  },
  {
    id: 'cachorro-premium',
    title: 'Cachorro Premium',
    description: 'Salsicha premium, bacon crocante, cebola caramelizada, queijo cheddar e molho especial',
    price: 'R$ 18,00',
    category: 'classicos',
    ingredients: ['Salsicha premium', 'Bacon', 'Cebola caramelizada', 'Queijo cheddar', 'Molho especial'],
    nutritionalInfo: {
      calories: 620,
      protein: 25,
      carbs: 45,
      fats: 35
    }
  },
  // Adicione os outros itens do menu aqui seguindo o mesmo padrão
];