import { lazy, ReactNode, Suspense } from 'react'
import { LoadingPage } from '@pages'

interface SuspenseWithLoaderPropsType {
	children: ReactNode
}

export const lazyPage = (url: string) => lazy(() => import(url))


const SuspenseWithLoader = ( { children }: SuspenseWithLoaderPropsType ) => {
	return <Suspense fallback={<LoadingPage />} children={children} />
}
export default SuspenseWithLoader