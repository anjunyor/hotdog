import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <Link 
      to={`/produto/${item.id}`}
      className="flex justify-between items-start p-4 hover:bg-orange-50 rounded-lg transition-colors group"
    >
      <div className="flex-1">
        <h3 className="font-bold text-orange-900 group-hover:text-orange-600 transition-colors">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold text-orange-600">{item.price}</span>
        <ChevronRight className="w-4 h-4 text-orange-400 group-hover:text-orange-600 transition-colors" />
      </div>
    </Link>
  );
}