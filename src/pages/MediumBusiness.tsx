import { PackagePricing, Pkg } from "./PackagePricing";

const packages: Pkg[] = [
  {
    name: "Grow+",
    price: "$1,550",
    features: [
      { en: "Total Annual Sales: Less than $2M", fr: "Ventes annuelles totales : moins de 2M $" },
      { en: "Bookkeeping: Monthly", fr: "Tenue de livres : mensuelle" },
      { en: "Number of Accounts: 7", fr: "Nombre de comptes : 7" },
      { en: "Number of Employees: < 10", fr: "Nombre d'employés : < 10" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés" },
      { en: "Government Correspondence", fr: "Correspondance gouvernementale" },
      { en: "General Accounting & Tax Inquiry: Unlimited", fr: "Demandes comptables et fiscales : illimitées" },
      { en: "Personal Tax Return: 2 Free", fr: "Déclaration personnelle : 2 gratuites" },
      { en: "Payroll Support", fr: "Soutien à la paie" },
      { en: "Advisory: Bi-Annual Review", fr: "Conseil : revue semestrielle" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
  {
    name: "Thrive+",
    price: "$2,050",
    features: [
      { en: "Total Annual Sales: Less than $3M", fr: "Ventes annuelles totales : moins de 3M $" },
      { en: "Bookkeeping: Bi-Weekly", fr: "Tenue de livres : bimensuelle" },
      { en: "Number of Accounts: 10", fr: "Nombre de comptes : 10" },
      { en: "Number of Employees: < 25", fr: "Nombre d'employés : < 25" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés" },
      { en: "Government Correspondence", fr: "Correspondance gouvernementale" },
      { en: "General Accounting & Tax Inquiry: Unlimited", fr: "Demandes comptables et fiscales : illimitées" },
      { en: "Personal Tax Return: 3 Free", fr: "Déclaration personnelle : 3 gratuites" },
      { en: "Payroll Support", fr: "Soutien à la paie" },
      { en: "Advisory: Quarterly Review", fr: "Conseil : revue trimestrielle" },
      { en: "Partner Access: Dedicated CPA", fr: "Accès à un associé : CPA dédié" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
  {
    name: "Elite+",
    price: "$2,550",
    features: [
      { en: "Total Annual Sales: $4M and above", fr: "Ventes annuelles totales : 4M $ et plus" },
      { en: "Bookkeeping: Weekly", fr: "Tenue de livres : hebdomadaire" },
      { en: "Number of Accounts: Unlimited", fr: "Nombre de comptes : illimité" },
      { en: "Number of Employees: Unlimited", fr: "Nombre d'employés : illimité" },
      { en: "Sales Tax Filing: Annual", fr: "Production des taxes de vente : annuelle" },
      { en: "Annual Corporate Tax Filing", fr: "Déclaration annuelle des sociétés" },
      { en: "Government Correspondence", fr: "Correspondance gouvernementale" },
      { en: "General Accounting & Tax Inquiry: Unlimited", fr: "Demandes comptables et fiscales : illimitées" },
      { en: "Personal Tax Return: 5 Free", fr: "Déclaration personnelle : 5 gratuites" },
      { en: "Payroll Support", fr: "Soutien à la paie" },
      { en: "Advisory: Quarterly Review", fr: "Conseil : revue trimestrielle" },
      { en: "Partner Access: Dedicated CPA", fr: "Accès à un associé : CPA dédié" },
      { en: "Xero / QBO Starter License", fr: "Licence Xero / QBO Starter" },
    ],
  },
];

const MediumBusiness = () => (
  <PackagePricing
    titleEn="Medium Business Packages"
    titleFr="Forfaits moyennes entreprises"
    subEn="Advisory-led monthly packages for established companies."
    subFr="Forfaits mensuels axés sur le conseil pour les entreprises établies."
    packages={packages}
  />
);

export default MediumBusiness;
