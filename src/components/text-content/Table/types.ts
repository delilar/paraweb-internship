export interface ResponsiveSizeProps {
  desktop?: string;
  mobile?: string;
}

export interface TableProps {
  containerHeight?: ResponsiveSizeProps | string;
  containerWidth?: ResponsiveSizeProps | string;
  cellWidth?: ResponsiveSizeProps | string;
  cellHeight?: ResponsiveSizeProps | string;
  headerLabels: string[];
  data: string[][];
  className?: string;
}