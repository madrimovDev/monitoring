import { notification } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

const notifications = (
	type: NotificationType,
	status?: number | string,
	desc?: string
) => {
	notification[type]({
		message: status,
		description: desc,
	})
}

export default notifications
