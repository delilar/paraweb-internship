import { FC } from "react";
import { TableProps, ResponsiveSizeProps } from "./types";
import classNames from "classnames";
import "@style/components/text-content/Table.scss";

/**
 * Преобразует параметр размера в объект с desktop и mobile свойствами
 */
const normalizeSize = (size?: ResponsiveSizeProps | string): ResponsiveSizeProps => {
  if (!size) return {};
  
  if (typeof size === 'string') {
    return {
      desktop: size,
      mobile: size
    };
  }
  
  return size;
};

const Table: FC<TableProps> = ({
  containerHeight,
  containerWidth,
  cellWidth,
  cellHeight,
  headerLabels,
  data,
  className,
}) => {
  const tableClassName = classNames("table-container", "text-content", className);
  
  // Нормализуем размеры
  const normalizedContainerWidth = normalizeSize(containerWidth);
  const normalizedContainerHeight = normalizeSize(containerHeight);
  const normalizedCellWidth = normalizeSize(cellWidth);
  const normalizedCellHeight = normalizeSize(cellHeight);

  // Создаем CSS переменные для контейнера
  const containerStyle = {
    '--container-width-desktop': normalizedContainerWidth.desktop,
    '--container-width-mobile': normalizedContainerWidth.mobile,
    '--container-height-desktop': normalizedContainerHeight.desktop,
    '--container-height-mobile': normalizedContainerHeight.mobile,
  } as React.CSSProperties;

  // Создаем CSS переменные для ячеек
  const cellStyle = {
    '--cell-width-desktop': normalizedCellWidth.desktop,
    '--cell-width-mobile': normalizedCellWidth.mobile,
    '--cell-height-desktop': normalizedCellHeight.desktop,
    '--cell-height-mobile': normalizedCellHeight.mobile,
  } as React.CSSProperties;

  return (
    <div className={tableClassName} style={containerStyle}>
      <table className="table">
        <thead>
          <tr>
            {headerLabels?.map((label) => (
              <th key={label} style={cellStyle}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={cellStyle}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;