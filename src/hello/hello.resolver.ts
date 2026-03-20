import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(): string {
    console.log('testing code in aws ec2 instance 🔥');
    console.log('Hello GraphQL 🚀');
    return 'Hello GraphQL 🚀';
  }
}
