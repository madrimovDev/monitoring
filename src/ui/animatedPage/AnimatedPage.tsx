import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

const AnimatedPage = ( { children }: { children: ReactNode } ) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -100
			}}
			animate={{
				opacity: 1,
				y: 0
			}}
			exit={{ opacity: 0, y: -100, transition: { duration: 0.01, type: 'spring' } }}
		>
			{children}
		</motion.div>
	)

}

export default AnimatedPage