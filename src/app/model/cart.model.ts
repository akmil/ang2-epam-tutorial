/**
  * Visitor Cart Model
  */
import { Visitor } from './visitor.interface';

export class VisitorCart  implements Visitor{
  created_at: Date;

  constructor(
    public id: number,
    public resort: string,
    public price: number,
    public dateStart: string,
    public dateEnd: string,
    public powder?: boolean,
    public backcountry?: boolean
  ) {
    this.id = Math.ceil(Math.random() * 8)+1;
    this.backcountry = false;
    this.created_at = new Date();
  }
}
