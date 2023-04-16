import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore
const Entities = () => import('@/entities/entities.vue');

// prettier-ignore
const Book = () => import('@/entities/book/book.vue');
// prettier-ignore
const BookUpdate = () => import('@/entities/book/book-update.vue');
// prettier-ignore
const BookDetails = () => import('@/entities/book/book-details.vue');
// prettier-ignore
const Sale = () => import('@/entities/sale/sale.vue');
// prettier-ignore
const SaleUpdate = () => import('@/entities/sale/sale-update.vue');
// prettier-ignore
const SaleDetails = () => import('@/entities/sale/sale-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default {
  path: '/',
  component: Entities,
  children: [
    {
      path: 'book',
      name: 'Book',
      component: Book,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'book/new',
      name: 'BookCreate',
      component: BookUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'book/:bookId/edit',
      name: 'BookEdit',
      component: BookUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'book/:bookId/view',
      name: 'BookView',
      component: BookDetails,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'sale',
      name: 'Sale',
      component: Sale,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'sale/new',
      name: 'SaleCreate',
      component: SaleUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'sale/:saleId/edit',
      name: 'SaleEdit',
      component: SaleUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'sale/:saleId/view',
      name: 'SaleView',
      component: SaleDetails,
      meta: { authorities: [Authority.USER] },
    },
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ],
};
