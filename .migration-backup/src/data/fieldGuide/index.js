import * as beforeYouMove from './beforeYouMove';
import * as administrativeReality from './administrativeReality';
import * as visasAndStatus from './visasAndStatus';
import * as commonMistakesAndDelays from './commonMistakesAndDelays';
import * as housingReality from './housingReality';
import * as moneyBankingAndPayments from './moneyBankingAndPayments';
import * as healthcareReality from './healthcareReality';
import * as workAndIncomeReality from './workAndIncomeReality';
import * as digitalInfrastructure from './digitalInfrastructure';
import * as dailyLifeAndBureaucracy from './dailyLifeAndBureaucracy';
import * as movingWithSomeone from './movingWithSomeone';
import * as returningHome from './returningHome';
import * as howGoMateFitsIn from './howGoMateFitsIn';

const categoryMap = {
  'before-you-move': beforeYouMove,
  'administrative-reality': administrativeReality,
  'visas-status': visasAndStatus, // corrected mapping key from 'visas-and-status' to 'visas-status' to match category ID in FieldGuidePage
  'common-mistakes-delays': commonMistakesAndDelays, // corrected mapping key
  'housing-reality': housingReality,
  'money-banking-payments': moneyBankingAndPayments, // corrected mapping key
  'healthcare-reality': healthcareReality,
  'work-income-reality': workAndIncomeReality, // corrected mapping key
  'digital-infrastructure': digitalInfrastructure,
  'daily-life-bureaucracy': dailyLifeAndBureaucracy, // corrected mapping key
  'moving-with-someone': movingWithSomeone,
  'returning-home': returningHome,
  'how-gomate-fits-in': howGoMateFitsIn
};

export const getArticlesByCategory = (categoryId) => {
  const categoryModule = categoryMap[categoryId];
  if (!categoryModule) return [];
  
  // Convert module exports object to array of articles
  return Object.values(categoryModule).filter(item => item && item.title);
};

export const getArticleById = (categoryId, articleId) => {
  const articles = getArticlesByCategory(categoryId);
  return articles.find(article => article.id === articleId);
};