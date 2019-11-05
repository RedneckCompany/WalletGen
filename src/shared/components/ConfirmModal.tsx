import React from 'react';
import { Modal, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Colors, Fonts, Metrics } from '../themes'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.overlay,
  },
  modal: {
    padding: Metrics.largerMargin,
    width: Metrics.dialog.width,
    maxHeight: '70%',
    backgroundColor: Colors.primary,
  },
  title: {
    ...Fonts.sectionTitle(),
    marginBottom: Metrics.smallerMargin,
  },
  description: {
    ...Fonts.textDark(),
    marginBottom: Metrics.smallerMargin,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomAction: {
    marginTop: Metrics.tightMargin,
    marginHorizontal: Metrics.tightMargin,
  },
  bottomActionText: {
    fontSize: 16,
    textAlign: 'right',
    color: Colors.main,
    paddingLeft: Metrics.smallMargin,
  },
});

interface ConfirmModalProps {
  visible: boolean,
  onCancel: Function,
  onConfirm: Function,

  title?: string,
  description?: string,
}

function ConfirmModal({ visible, onCancel, onConfirm, title, description }: ConfirmModalProps ) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={onCancel} style={styles.background} />

        <View style={styles.modal}>
          {title && <Text numberOfLines={2} style={styles.title}>{title}</Text>}

          {description && <Text style={styles.description}>{description}</Text>}


          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={onCancel} style={styles.bottomAction}>
              <Text style={styles.bottomActionText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onConfirm} style={styles.bottomAction}>
              <Text style={styles.bottomActionText}>Confirm</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </Modal>
  );

}

export default ConfirmModal;
