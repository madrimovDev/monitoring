import { lazy, ReactNode, Suspense } from 'react'
import { LoadingPage } from '@pages'

interface SuspenseWithLoaderPropsType {
	children: ReactNode
}

const SuspenseWithLoader = ( { children }: SuspenseWithLoaderPropsType ) => {
	return <Suspense fallback={<LoadingPage />}>
		{children}
	</Suspense>
}
export default SuspenseWithLoader