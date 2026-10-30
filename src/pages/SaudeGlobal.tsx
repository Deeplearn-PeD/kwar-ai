import SolutionPage from './solucoes/SolutionPage';
import { saudeGlobalContent } from './solucoes/saudeGlobal.content';

export default function SaudeGlobal() {
  return (
    <SolutionPage
      path="/saude-global"
      serviceName="EpidBot for Global Health and International Organisations"
      content={saudeGlobalContent}
    />
  );
}
