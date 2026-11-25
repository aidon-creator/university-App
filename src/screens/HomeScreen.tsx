import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { student, subjects, news } from '../data/universityData';
import InfoCard from '../components/InfoCard';
import {
  getPosts,
  cleanHTML,
  UniversityPost,
} from '../services/api';

export default function HomeScreen({ navigation }: any) {
  const [posts, setPosts] = useState<UniversityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPosts()
      .then(data => setPosts(data))
      .catch(err => {
        console.log(err);
        setError('Жаңалықтарды жүктеу мүмкін болмады');
      })
      .finally(() => setLoading(false));
  }, []);

  const menu = [
    { title: '👤 Профиль', page: 'Profile' },
    { title: '📅 Сабақ кестесі', page: 'Schedule' },
    { title: '📊 Бағалар', page: 'Grades' },
    { title: '📚 Пәндер', page: 'Subjects' },
    { title: '✅ Қатысу', page: 'Attendance' },
    { title: '📰 Жаңалықтар', page: 'News' },
    { title: '🎉 Іс-шаралар', page: 'Events' },
    { title: '📖 Кітапхана', page: 'Library' },
    { title: '💳 Төлемдер', page: 'Payments' },
    { title: '🔔 Хабарламалар', page: 'Notifications' },
    { title: '⚙️ Баптаулар', page: 'Settings' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>
        Сәлем, {student.name}! 👋
      </Text>

      <Text style={styles.subtitle}>
        {student.university}
      </Text>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Студент кабинеті
        </Text>
        <Text style={styles.whiteText}>
          {student.group} • {student.year}
        </Text>
        <Text style={styles.whiteText}>
          Мамандық: {student.specialty}
        </Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{student.gpa}</Text>
          <Text style={styles.statLabel}>Менің GPA</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{subjects.length}</Text>
          <Text style={styles.statLabel}>Пән саны</Text>
        </View>
      </View>

      <Text style={styles.heading}>Негізгі бөлімдер</Text>

      <View style={styles.grid}>
        {menu.map(item => (
          <Text
            key={item.page}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.page)}
          >
            {item.title}
          </Text>
        ))}
      </View>

      <Text style={styles.heading}>Соңғы жаңалықтар</Text>

      {news.slice(0, 2).map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          subtitle={item.description}
          detail={item.date}
        />
      ))}

      <Text style={styles.heading}>
        🌐 ALT University жаңалықтары
      </Text>

      <Text style={styles.apiSubtitle}>
        Ресми сайттан алынған мәліметтер
      </Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#2457C5"
          style={{ margin: 25 }}
        />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        posts.map(item => (
          <View style={styles.apiCard} key={item.id}>
            <Text style={styles.apiId}>
              ID: {item.id}
            </Text>

            <Text style={styles.apiTitle}>
              {cleanHTML(item.title.rendered)}
            </Text>

            <Text style={styles.apiText}>
              {cleanHTML(item.content.rendered).slice(0, 350)}
            </Text>

            <Text style={styles.apiFooter}>
              ALT University
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FC',
    padding: 18,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17366F',
    marginTop: 15,
  },
  subtitle: {
    color: '#71809A',
    marginTop: 6,
  },
  banner: {
    backgroundColor: '#2457C5',
    padding: 23,
    borderRadius: 18,
    marginVertical: 20,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  whiteText: {
    color: 'white',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
  },
  statNumber: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2457C5',
  },
  statLabel: {
    color: '#71809A',
    marginTop: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#17366F',
    marginVertical: 17,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: 'white',
    padding: 17,
    borderRadius: 13,
    marginBottom: 12,
    color: '#2457C5',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  apiSubtitle: {
    color: '#71809A',
    marginBottom: 15,
  },
  apiCard: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    marginBottom: 14,
    elevation: 2,
  },
  apiId: {
    color: '#8A96AA',
    fontSize: 12,
    marginBottom: 9,
  },
  apiTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2457C5',
    marginBottom: 12,
  },
  apiText: {
    fontSize: 14,
    color: '#52627A',
    lineHeight: 22,
  },
  apiFooter: {
    color: '#8A96AA',
    fontSize: 11,
    marginTop: 12,
  },
  error: {
    color: 'red',
    padding: 15,
  },
});