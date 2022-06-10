/* eslint-disable react-hooks/exhaustive-deps */
import { ToastProvider } from '@radix-ui/react-toast'
import { ToastViewport } from 'components/ui/baseLibrary/Toast'
import * as React from 'react'
import type { AlertProps } from './Alert'
import Alert from './Alert'

/* eslint-disable @typescript-eslint/no-type-alias */
export type AlertType = 'add-item' | 'delete-item'

export type AlertOptions = Omit<AlertProps, 'removeAlert'>
interface AlertContext {
	alert: (type: AlertOptions) => void
}

const Context = React.createContext<AlertContext | undefined>(undefined)

type AlertsState = Map<number | string, React.ReactNode>

const AlertProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [alerts, setAlerts] = React.useState<AlertsState>(new Map())

	const removeAlert = (id: number | string) => {
		setAlerts(a => {
			const newAlerts = new Map(a)
			newAlerts.delete(id)
			return newAlerts
		})
	}

	const addAlert: (props: AlertOptions) => void = props => {
		console.log('adding alert')
		setAlerts(a => {
			const newAlerts = new Map(a)
			const id = Math.floor(Math.random() * 500)

			newAlerts.set(
				id,
				<Alert key={id} {...props} removeAlert={() => removeAlert(id)} />,
			)

			return newAlerts
		})
	}

	const value = React.useMemo(() => ({ alert: addAlert }), [alerts])

	return (
		<Context.Provider value={value}>
			<ToastProvider swipeDirection='right'>
				{children}
				{[...alerts.values()]}
				<ToastViewport />
			</ToastProvider>
		</Context.Provider>
	)
}

export const useAlert = () => {
	const context = React.useContext(Context)
	if (!context) {
		throw new Error(
			'Unable to find Alert context. Make sure you are witin an AlertProvider.',
		)
	}

	return context
}

export default AlertProvider
