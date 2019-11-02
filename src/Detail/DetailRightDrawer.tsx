import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DrawerItem from '../shared/components/DrawerItem';
import ConfirmModal from '../shared/components/ConfirmModal';
import { removeWallet } from '../shared/actions/walletActions';
import ReceiveModal from './components/ReceiveModal';

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
});

interface DetailRightDrawerProps {
  readonly actions;
  readonly navigation;
}

function DetailRightDrawer({ actions, navigation }: DetailRightDrawerProps) {
  const [showReceiveModal, setShowReceiveModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const { publicKey } = navigation.state.params;

  const closeAll = () => {
    setShowReceiveModal(false)
    setModalDelete(false);
    navigation.closeDrawer();
  }

  const confirmDelete = () => {
    const { id } = navigation.state.params;
    actions.removeWallet(id);
    setModalDelete(false);
    navigation.closeDrawer();
    navigation.goBack(null);
  }

  return (
    <View style={styles.container}>
      <DrawerItem 
        onPress={() => setShowReceiveModal(true)}
        text={'Receive payment'}
      />
      {showReceiveModal && 
        <ReceiveModal
          visible={showReceiveModal}
          onClose={closeAll}
          publicKey={publicKey}
        />
      }

      <DrawerItem 
        onPress={() => setModalDelete(true)}
        text={'Delete wallet'}
      />
      <ConfirmModal
        visible={modalDelete}
        onCancel={closeAll}
        onConfirm={confirmDelete}
        title={'Delete wallet ?'}
        description={'Are you sure you want to delete this wallet ?'}
      />
    </View>
  );
}

const mapDispatchToProps = (dispatch)  => {
  return {
    actions: bindActionCreators({ removeWallet }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(DetailRightDrawer);
