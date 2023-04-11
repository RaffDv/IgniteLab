import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  //   id methods
  public get Id(): string {
    return this._id;
  }

  //   contetent methods

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }
  //   recipientID methods

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }
  //   cartegory methods
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }
  //   createdAt methods

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  //   readAt methods

  public read() {
    return (this.props.readAt = new Date());
  }
  public unRead() {
    return (this.props.readAt = null);
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  //   canceledAt methods

  public get cancelAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  // cancel method
  public cancel() {
    this.props.canceledAt = new Date();
  }
}
