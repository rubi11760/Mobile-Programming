import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  Modal,
  Animated,
  StatusBar
} from 'react-native';

export default function BeautyServiceHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300));

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 200,
        useNativeDriver: true
      }).start(() => setMenuOpen(false));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFB6C1" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <View style={styles.hamburger}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BeautyHome</Text>
        <View style={styles.spacer} />
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.title}>Welcome to BeautyHome</Text>
          <Text style={styles.subtitle}>Professional beauty services at your doorstep</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Book Service Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Our Services</Text>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Haircut & Styling</Text>
            <Text style={styles.serviceText}>Professional hair services at home</Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Makeup</Text>
            <Text style={styles.serviceText}>Party, bridal, and everyday makeup</Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Facial & Skin Care</Text>
            <Text style={styles.serviceText}>Relaxing facials and treatments</Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Manicure & Pedicure</Text>
            <Text style={styles.serviceText}>Complete nail care services</Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Hair Spa & Treatment</Text>
            <Text style={styles.serviceText}>Deep conditioning and hair care</Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Waxing & Threading</Text>
            <Text style={styles.serviceText}>Smooth and gentle hair removal</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Why Choose Us?</Text>
          <Text style={styles.infoText}>
            Professional certified beauticians{'\n'}
            Services at your convenience{'\n'}
            Quality products and hygiene{'\n'}
            Affordable pricing{'\n'}
            Easy online booking
          </Text>
        </View>
      </ScrollView>

      {/* Side Menu */}
      <Modal
        visible={menuOpen}
        transparent={true}
        animationType="none"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity 
          style={styles.overlay} 
          activeOpacity={1} 
          onPress={toggleMenu}
        >
          <Animated.View 
            style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}
          >
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>BeautyHome</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Book Service</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>My Bookings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Service History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Beauticians</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Help & Support</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#FFB6C1',
  },
  menuButton: {
    padding: 8,
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  spacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#FFB6C1',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 20,
  },
  primaryButton: {
    backgroundColor: '#FFB6C1',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  servicesContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: '#FFF0F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FFB6C1',
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  serviceText: {
    fontSize: 14,
    color: '#666',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#FFF0F5',
    margin: 20,
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFB6C1',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 24,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFE4E1',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFB6C1',
  },
  closeButton: {
    fontSize: 24,
    color: '#333',
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});