import React, { FC } from "react";
import {Appear, Heading, List, ListItem} from 'spectacle';

export const DesignSystems: FC = () =>
    <>
      <Heading size={6} textColor="secondary">
        Design Systems
      </Heading>
      <List style={{ listStylePosition: 'outside' }}>
        <Appear>
          <ListItem padding={10}>
            Define the bounds in which design is used in an organization and/or application
          </ListItem>
        </Appear>
        <Appear>
          <ListItem padding={10}>
            High level components that can combined and re-used to build a consistent User Interface
          </ListItem>
        </Appear>
        <Appear>
          <ListItem padding={10}>
            Establish common patterns for implementing the core concepts of UI design:
            <Appear>
              <List padding={10} bulletStyle="classicCheck">
                <ListItem>
                  Color
                </ListItem>
                <ListItem>
                  Typography
                </ListItem>
                <ListItem>
                  Size
                </ListItem>
                <ListItem>
                  Space
                </ListItem>
              </List>
            </Appear>
          </ListItem>
        </Appear>
      </List>
    </>