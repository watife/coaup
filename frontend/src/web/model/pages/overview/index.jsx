import React from 'react'
// import PropTypes from 'prop-types'
import { Icon, Button } from 'web/components/core'

import { CircularProgressbar } from 'react-circular-progressbar'
import InfiniteCalendar from 'react-infinite-calendar'

import './styled.scss'

const Overview = () => {
  return (
    <section className="overview">
      <main className="overview-main">
        <section className="overview-top">
          <div className="overview-top__header">
            <p className="overview-top--label">Week Report</p>
            <Icon
              className="overview-top__header--icon"
              type="notification"
            />
          </div>

          <div className="overview-top-box">
            <div className="overview-card overview-progress">
              <div className="overview__header">
                <p className="overview-card--title">Progress</p>
                <Icon type="more" />
              </div>
              <div className="overview-card__body overview-progress__body">
                <div className="overview-card__info">
                  <h3>578</h3>
                  <span>todo</span>
                  <div className="overview-card__info--week">
                    <Icon
                      type="trend"
                      className="overview-progress--icon"
                    />
                    <p>+15% done</p>
                  </div>
                </div>
                <div className="overview-card__chart">
                  <CircularProgressbar
                    value={40}
                    text={`${40}%`}
                    strokeWidth={7}
                    className="overview-card__chart--icon"
                  />
                </div>
              </div>
            </div>
            <div className="overview-card overview-time">
              <div className="overview__header">
                <p className="overview-card--title">Time</p>
                <Icon type="more" />
              </div>
              <div className="overview-card__body overview-time__body">
                <div className="overview-card__info">
                  <h3>40</h3>
                  <span>left</span>
                  <div className="overview-card__info--week">
                    <Icon
                      type="trend"
                      className="overview-time--icon"
                    />
                    <p>+15h tracked</p>
                  </div>
                </div>
                <div className="overview-card__chart">
                  <CircularProgressbar
                    value={40}
                    text={`${40}%`}
                    strokeWidth={7}
                    className="overview-card__chart--icon overview-card__chart--icon-green"
                  />
                </div>
              </div>
            </div>
            <div className="overview-card overview-project">
              <div className="overview__header">
                <p className="overview-card--title">Projects</p>
                <Icon type="more" />
              </div>
              <div className="overview-card__body overview-project__body">
                <div className="overview-card__info">
                  <h3>7</h3>
                  <span>pending</span>
                  <div className="overview-card__info--week">
                    <Icon
                      type="trend"
                      className="overview-project--icon"
                    />
                    <p>+2 completed</p>
                  </div>
                </div>
                <div className="overview-card__chart">
                  <CircularProgressbar
                    value={40}
                    text={`${40}%`}
                    strokeWidth={7}
                    className="overview-card__chart--icon overview-card__chart--icon-yellow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overview-bottom">
          <main className="overview-bottom__main">
            <div className="overview__header">
              <p className="overview-card--title">Tasks</p>
            </div>
            <div className="overview-bottom-card overview-bottom__main--card">
              <div className="overview-bottom-card--task overview-task-info">
                <div className="overview-task-info__header">
                  <h4 className="overview-task-info--title">
                    Work on some of the logic for login page
                  </h4>
                  <p className="overview-task-info--project">coaup</p>
                </div>
                <div className="overview-task-info__due">
                  <span>Due Date:</span>
                  <p>Jan 20, 2021</p>
                </div>
                <div className="overview-task-info__associate">
                  <div className="overview-task-info__associate--info">
                    <span>Added by:</span>
                    <p>Boluwatife Fakorede</p>
                  </div>
                  <div className="overview-task-info__associate--status overview-task-info__associate--completed">
                    completed
                  </div>
                </div>
              </div>
              <div className="overview-bottom-card--task overview-task-info">
                <div className="overview-task-info__header">
                  <h4 className="overview-task-info--title">
                    Work on some of the logic for login page
                  </h4>
                  <p className="overview-task-info--project">coaup</p>
                </div>
                <div className="overview-task-info__due">
                  <span>Due Date:</span>
                  <p>Jan 20, 2021</p>
                </div>
                <div className="overview-task-info__associate">
                  <div className="overview-task-info__associate--info">
                    <span>Added by:</span>
                    <p>Boluwatife Fakorede</p>
                  </div>
                  <div className="overview-task-info__associate--status overview-task-info__associate--completed">
                    completed
                  </div>
                </div>
              </div>
              <div className="overview-bottom-card--task overview-task-info">
                <div className="overview-task-info__header">
                  <h4 className="overview-task-info--title">
                    Work on some of the logic for login page
                  </h4>
                  <p className="overview-task-info--project">coaup</p>
                </div>
                <div className="overview-task-info__due">
                  <span>Due Date:</span>
                  <p>Jan 20, 2021</p>
                </div>
                <div className="overview-task-info__associate">
                  <div className="overview-task-info__associate--info">
                    <span>Added by:</span>
                    <p>Boluwatife Fakorede</p>
                  </div>
                  <div className="overview-task-info__associate--status overview-task-info__associate--due">
                    Due
                  </div>
                </div>
              </div>
              <div className="overview-bottom-card--task overview-task-info">
                <div className="overview-task-info__header">
                  <h4 className="overview-task-info--title">
                    Work on some of the logic for login page
                  </h4>
                  <p className="overview-task-info--project">coaup</p>
                </div>
                <div className="overview-task-info__due">
                  <span>Due Date:</span>
                  <p>Jan 20, 2021</p>
                </div>
                <div className="overview-task-info__associate">
                  <div className="overview-task-info__associate--info">
                    <span>Added by:</span>
                    <p>Boluwatife Fakorede</p>
                  </div>
                  <div className="overview-task-info__associate--status overview-task-info__associate--active">
                    active
                  </div>
                </div>
              </div>
              <div className="overview-bottom-card__btn-box">
                <Button
                  size="small"
                  className="overview-bottom-card__btn"
                >
                  Show More
                </Button>
              </div>
            </div>
          </main>
          <aside className="overview-bottom__aside">
            <div className="overview__header">
              <p className="overview-card--title">Calendar</p>
            </div>
            <div className="overview-events">
              <div className="overview-events__calendarbox">
                <InfiniteCalendar
                  width="100%"
                  height={250}
                  className="overview-events__calendar"
                  overscanMonthCount={1}
                />
              </div>
              <div className="overview-events__detail">
                <div className="overview-events__detail-box">
                  <div className="overview-events__grid">
                    <p className="overview-events__detail--title">
                      You have holiday scheduled for today
                    </p>
                    <p className="overview-events__detail--time">
                      12pm
                    </p>
                  </div>
                  <p className="overview-events__detail--type">
                    Holiday
                  </p>
                </div>
                <div className="overview-events__detail-box">
                  <div className="overview-events__grid">
                    <p className="overview-events__detail--title">
                      Go to the gym at 10pm
                    </p>
                    <p className="overview-events__detail--time">
                      9pm
                    </p>
                  </div>
                  <p className="overview-events__detail--type">Gym</p>
                </div>
                <div className="overview-events__detail-box">
                  <div className="overview-events__grid">
                    <p className="overview-events__detail--title">
                      Go to the gym at 10pm
                    </p>
                    <p className="overview-events__detail--time">
                      9pm
                    </p>
                  </div>
                  <p className="overview-events__detail--type">Gym</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </section>
  )
}

// Overview.propTypes = {
//
// }

export default Overview
