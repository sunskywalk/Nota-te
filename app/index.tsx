import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaseholderImage = require('../assets/images/fundal.jpeg');
const Logo = require('../assets/images/logo.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/* Фоновое изображение */}
      <Image source={PlaseholderImage} style={styles.Back} />
      
      {/* Лого и текст поверх фонового изображения */}
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.Centredlogo} />
        <Text style={styles.text}>Дай бог тебе здоровья.</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center', // Центрируем содержимое вертикально
  },
  Back: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Сохраняем пропорции изображения
    zIndex: -1, // Убираем фоновое изображение на задний план
  },
  Centredlogo: {
    width: 261, // Исправляем размеры логотипа для центрального размещения
    height: 341,
    marginBottom: 20, // Отступ между логотипом и текстом
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
