import { SlashCommand } from '@dnd/discord';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @SlashCommand({
    name: 'ping',
    description: 'This is a test command that returns pong',
  })
  getData(): { message: string } {
    return { message: 'Welcome to dungeons-and-dscords!' };
  }
}
