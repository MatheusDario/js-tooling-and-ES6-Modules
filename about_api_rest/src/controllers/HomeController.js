import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Matheus',
      sobrenome: 'Dario',
      email: 'dario.matheus97@gmail.com',
      idade: 24,
      peso: 85.00,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
