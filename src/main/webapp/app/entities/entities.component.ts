import { Component, Provide, Vue } from 'vue-property-decorator';

import UserService from '@/entities/user/user.service';
import BookService from './book/book.service';
import SaleService from './sale/sale.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

@Component
export default class Entities extends Vue {
  @Provide('userService') private userService = () => new UserService();
  @Provide('bookService') private bookService = () => new BookService();
  @Provide('saleService') private saleService = () => new SaleService();
  // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
}
