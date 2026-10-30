import SolutionPage from './solucoes/SolutionPage';
import { hospitaisContent } from './solucoes/hospitais.content';

export default function Hospitais() {
  return (
    <SolutionPage
      path="/hospitais"
      serviceName="EpidBot for Hospitals and Laboratories"
      content={hospitaisContent}
    />
  );
}
