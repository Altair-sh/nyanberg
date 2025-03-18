'use client'
import { AgGridReact } from 'ag-grid-react'
import styles from './page.module.css'
import { AllCommunityModule, themeQuartz } from 'ag-grid-community'
import { useMemo } from 'react'
import { colorSchemeDark } from 'ag-grid-community'
import { useTheme } from 'next-themes'

export default function Home() {
    const { theme } = useTheme()
    const agTheme = useMemo(() => (theme === 'dark' ? themeQuartz.withPart(colorSchemeDark) : themeQuartz), [theme])

    return (
        <div className={styles.page} style={{ height: '500px' }}>
            <AgGridReact
                theme={agTheme}
                modules={[AllCommunityModule]}
                rowData={[
                    { id: 1, col1: 'Hello', col2: 'AG Grid' },
                    { id: 2, col1: 'Dark Mode', col2: 'Support' },
                ]}
                columnDefs={[
                    { field: 'col1', headerName: 'Column 1', filter: 'agTextColumnFilter' },
                    { field: 'col2', headerName: 'Column 2' },
                ]}
            />
        </div>
    )
}
