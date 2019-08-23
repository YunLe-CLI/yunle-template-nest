import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class ExampleType {
  @Field()
  str: string;
}
