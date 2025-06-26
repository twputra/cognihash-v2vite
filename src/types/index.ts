export interface NavigationItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  demo?: React.ReactNode;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Metric {
  value: string;
  label: string;
}