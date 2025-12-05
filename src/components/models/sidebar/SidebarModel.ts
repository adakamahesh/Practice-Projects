export interface SidebarItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface SidebarModel {
  width?: number | string;
  backgroundColor?: string;
  items: SidebarItem[];
}
