import SolutionPage from './solucoes/SolutionPage';
import { vigilanciaContent } from './solucoes/vigilancia.content';

export default function VigilanciaEpidemiologica() {
  return (
    <SolutionPage
      path="/vigilancia-epidemiologica"
      serviceName="EpidBot for Epidemiological Surveillance"
      content={vigilanciaContent}
    />
  );
}
