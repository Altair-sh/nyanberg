'use client'
import { AgGridReact } from 'ag-grid-react'
import styles from './page.module.css'
import { AllCommunityModule, themeQuartz } from 'ag-grid-community'
import { useState, useEffect } from 'react'
import { colorSchemeDark } from 'ag-grid-community'

export default function Home() {
    const [agTheme, setAgTheme] = useState(themeQuartz)

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setAgTheme(prefersDark ? themeQuartz.withPart(colorSchemeDark) : themeQuartz)

        const listener = (e: MediaQueryListEvent) => {
            setAgTheme(e.matches ? themeQuartz.withPart(colorSchemeDark) : themeQuartz)
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener)
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener)
        }
    }, [])

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
