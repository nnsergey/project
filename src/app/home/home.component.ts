import { Component } from '@angular/core';
import { ProductClasification } from '../product-clasification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ProductClasificationList : ProductClasification[]  = [ 
  {
    id: 1,
    name: 'Селедка',
    category: 'Еда',
    description: 'Селедка соленая',
    price: 10000,
    notegeneral: 'Акция',
    notespecial: 'Пересоленая',
  },
  {
    id: 2,
    name: 'Тушенка',
    category: 'Еда',
    description: 'Тушенка говяжья',
    price: 20000,
    notegeneral: 'Вкусная',
    notespecial: 'Жилы',
  },
  {
    id: 3,
    name: 'Сгущенка',
    category: 'Вкусности',
    description: 'В банках',
    price: 30000,
    notegeneral: 'С ключом',
    notespecial: 'Вкусная',
  },
  {
    id: 4,
    name: 'Квас',
    category: 'Вода',
    description: 'В бутылках',
    price: 15000,
    notegeneral: 'Вятский',
    notespecial: 'Теплый',
  },
  {
    id: 5,
    name: 'Хлеб',
    category: 'Еда',
    description: 'Черный',
    price: 5000,
    notegeneral: 'Нарезанный',
    notespecial: 'Свежий',
  },
  {
    id: 6,
    name: 'Кола',
    category: 'Вода',
    description: 'В железных банках',
    price: 12000,
    notegeneral: 'Акция',
    notespecial: 'Сладкая',
  },
  {
    id: 7,
    name: 'Рис',
    category: 'Еда',
    description: 'В пакетах',
    price: 8000,
    notegeneral: 'Для плова',
    notespecial: 'Рассыпчатый',
  },
  {
    id: 8,
    name: 'Молоко',
    category: 'Вода',
    description: 'В бутылках',
    price: 7000,
    notegeneral: 'Белое',
    notespecial: 'Вкусное',
  },
  {
    id: 9,
    name: 'Сметана',
    category: 'Еда',
    description: '25%',
    price: 14000,
    notegeneral: 'Акция',
    notespecial: 'Жирная',
  },
  {
    id: 10,
    name: 'Креветки',
    category: 'Еда',
    description: 'Королевские',
    price: 21000,
    notegeneral: 'Крупные',
    notespecial: 'С головой',
  },
  

  ];
}

