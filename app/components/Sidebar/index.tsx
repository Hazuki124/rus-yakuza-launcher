import {ipcRenderer, remote, shell} from 'electron';
import React, { Component } from 'react';
import { Layout, Button, Badge, Tooltip } from 'antd';
import classNames from 'classnames';
import { TeamOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import styles from './styles.css';
import FileDownloader from '../../utils/FileDownloader';
import { LoadingOutlined } from '@ant-design/icons';

type Props = {
  updateIsAvailable: boolean;
  updateDownloadInProgress: boolean;
  updateIsDownloaded: boolean;
  launcherUpdateInfo: {
    url?: string;
    version?: string;
  };
};

type State = {
  show: boolean;
};

export default class Sidebar extends Component<Props, State> {
  private timeoutId;

  constructor(props: Readonly<Props>) {
    // Required step: always call the parent class' constructor
    super(props);

    this.openLauncherLink = this.openLauncherLink.bind(this);

    // Set the state directly. Use props if necessary.
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ show: true });
    }, 420);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  closeApp() {
    const window = remote.getCurrentWindow();
    window.close();
  }

  openOurVkGroupLink() {
    shell.openExternal('https://vk.com/ru_yakuza');
  }

  openDonateLink() {
    shell.openExternal('https://vk.com/app6887721_-168985967');
  }

  openPatronsLink() {
    shell.openExternal('https://likeadragon.tilda.ws');
  }

  openLink(url: string) {
    shell.openExternal(url);
  }

  openLauncherLink() {
    const { launcherUpdateInfo } = this.props;
    if (
      launcherUpdateInfo &&
      FileDownloader.isValidURL(launcherUpdateInfo.url)
    ) {
      shell.openExternal(launcherUpdateInfo.url);
    }
  }

  forceInstallUpdate() {
    ipcRenderer.send('force-install');
  }

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const { show } = this.state;
    const { updateIsAvailable, updateDownloadInProgress, updateIsDownloaded } = this.props;
    const appVersion = remote.app.getVersion();

    const isNewVersionAvailable = updateIsAvailable ? 1 : 0;

    return (
      <Sider width={300} className={styles.container}>
        <Layout>
          <Header
            style={{ padding: '20px 10px 10px 10px' }}
            className={styles.common}
          >
            <h1
              className={classNames({
                [styles.title]: true,
                [styles.appear]: show
              })}
            >
              Yakuza Launcher
            </h1>
          </Header>
          <Content className={styles.common}>
            <ul
              style={{ opacity: 0 }}
              className={classNames({
                [styles.list]: true,
                [styles.appear]: show
              })}
            >
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={this.openOurVkGroupLink}
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <i className="fab fa-vk" aria-hidden="true" />
                  <span style={{ marginLeft: '7px' }}>
                    ???????? ???????????? ??????????????????
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={() => this.openLink('https://t.me/ru_yakuza')}
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <i className="fab fa-telegram" aria-hidden="true" />
                  <span style={{ marginLeft: '7px' }}>
                    ?????? Telegram-??????????
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={() =>
                    this.openLink('https://t.me/joinchat/VPd8YAKDpSxfA1fX')
                  }
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <i className="fab fa-telegram" aria-hidden="true" />
                  <span style={{ marginLeft: '7px' }}>
                    ?????? Telegram-??????
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={() =>
                    this.openLink(
                      'https://www.youtube.com/channel/UCLpnVo066Sv5dOKR4ilg2gQ'
                    )
                  }
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <i className="fab fa-youtube" aria-hidden="true" />
                  <span style={{ marginLeft: '7px' }}>
                    ?????? YouTube-??????????
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={() =>
                    this.openLink(
                      'https://forum.zoneofgames.ru/forum/125-like-a-dragon/'
                    )
                  }
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <i className="fa fa-link" aria-hidden="true" />
                  <span style={{ marginLeft: '7px' }}>
                    ?????? ???????????? ???? ZOG
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={this.openDonateLink}
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <i className="fas fa-coins" />
                  <span style={{ marginLeft: '7px' }}>
                    ?????????????????????????? ??????????????
                  </span>
                </Button>
              </li>
              {/*
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={this.openPatronsLink}
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <TeamOutlined /> ???????????? ?????????????????? ??????????????
                </Button>
              </li>
              */}
              {/*
              <li>
                <Button
                  ghost={!show}
                  type="link"
                  onClick={this.closeApp}
                  className={classNames({
                    [styles.listLink]: true,
                    [styles.noAnimation]: !show
                  })}
                >
                  <LogoutOutlined /> ??????????????
                </Button>
              </li>
              */}
            </ul>
          </Content>
          <Footer
            className={classNames({
              [styles.common]: true,
              [styles.footer]: true,
              [styles.noAnimation]: true,
              [styles.canSelect]: true
            })}
          >
            {updateIsAvailable &&
              <Tooltip placement="top" title="???????????????? ????????????????????">
                <Badge count={isNewVersionAvailable} color={isNewVersionAvailable ? 'cyan' : ''}>
                  <div>
                    ????????????: {appVersion}
                  </div>
                </Badge>
              </Tooltip>
            }
            {!isNewVersionAvailable && (
              <div>
                ????????????: {appVersion}
              </div>
            )}
            {!updateIsDownloaded && updateDownloadInProgress && (
              <div>
                <Button type="link" className={styles.loadingBtn}>
                  <LoadingOutlined /> ???????????????? ????????????????????...
                </Button>
              </div>
            )}
            {updateIsDownloaded && (
              <div>
                <Button type="link" onClick={this.forceInstallUpdate}>
                  <ExclamationCircleOutlined /> ???????????????????? ???????????? ?? ??????????????????
                </Button>
              </div>
            )}
            {/*
            <Button
              className={classNames({
                [styles.launcherDownloadLink]: true,
                [styles.invisible]: isNewVersionAvailable === 0
              })}
              type="link"
              onClick={this.openLauncherLink}
            >
              ???????????? ???????????????????? ????????????????
            </Button>
            */}
          </Footer>
        </Layout>
      </Sider>
    );
  }
}
