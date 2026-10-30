import SolutionPage from './solucoes/SolutionPage';
import { pesquisaContent } from './solucoes/pesquisa.content';

export default function Pesquisa() {
  return (
    <SolutionPage
      path="/pesquisa"
      serviceName="EpidBot for Research and Universities"
      content={pesquisaContent}
    />
  );
}
