import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from 'react-native';

export default function Perfil() {
	const [nome, setNome] = useState('João da Silva');
	const [email, setEmail] = useState('joao@exemplo.com');
	const [editando, setEditando] = useState(false);

	function salvarPerfil() {
		if (!nome.trim() || !email.trim()) {
			Alert.alert('Atenção', 'Preencha o nome e o email.');
			return;
		}

		setEditando(false);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.card}>
				<View style={styles.avatar}>
					<Text style={styles.avatarText}>{nome.charAt(0).toUpperCase()}</Text>
				</View>

				<Text style={styles.title}>Meu perfil</Text>

				<Text style={styles.label}>Nome</Text>
				<TextInput
					style={styles.input}
					value={nome}
					onChangeText={setNome}
					editable={editando}
					placeholder="Digite seu nome"
				/>

				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={setEmail}
					editable={editando}
					keyboardType="email-address"
					autoCapitalize="none"
					placeholder="Digite seu email"
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={editando ? salvarPerfil : () => setEditando(true)}
				>
					<Text style={styles.buttonText}>{editando ? 'Salvar' : 'Editar perfil'}</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#f4f6f8', padding: 20 },
	card: {
		backgroundColor: '#fff',
		borderRadius: 16,
		padding: 24,
		alignItems: 'stretch',
		elevation: 3,
	},
	avatar: {
		alignSelf: 'center',
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#2563eb',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatarText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
	title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
	label: { color: '#374151', fontWeight: '600', marginBottom: 6, marginTop: 12 },
	input: {
		borderWidth: 1,
		borderColor: '#d1d5db',
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
		color: '#111827',
	},
	button: {
		backgroundColor: '#2563eb',
		borderRadius: 8,
		padding: 14,
		alignItems: 'center',
		marginTop: 24,
	},
	buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
