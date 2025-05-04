import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return [
      '🚀 Bem-vindo à Steins;Gate Wiki API!',
      '',
      '🔧 Para criar, atualizar ou deletar, use os endpoints POST, PUT e DELETE correspondentes.',
      '⚙️ Divirta-se viajando pelas linhas do tempo!',
    ].join('\n');
  }
}
