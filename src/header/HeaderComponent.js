import React from 'react';
import {
    HeaderContainer,
    SkipToContent,
    HeaderMenuButton,
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    Header
} from 'carbon-components-react';

const HeaderComponent = () => {
    return <div>
		<HeaderContainer
  			render={({ isSideNavExpanded, onClickSideNavExpand }) => (
    			<>
      				<Header aria-label="IBM Platform Name">
        				<SkipToContent />
        				<HeaderMenuButton
          					aria-label="Open menu"
          					isCollapsible
          					onClick={onClickSideNavExpand}
          					isActive={isSideNavExpanded}
        				/>
        				<HeaderName href="#" prefix="IBM">
        					Carbon Training React
        				</HeaderName>
						<HeaderNavigation aria-label="IBM [Platform]">
							<HeaderMenuItem href="#">Link 1</HeaderMenuItem>
							<HeaderMenuItem href="#">Link 2</HeaderMenuItem>
							<HeaderMenuItem href="#">Link 3</HeaderMenuItem>
							<HeaderMenu aria-label="Link 4">
								<HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
								<HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
								<HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
							</HeaderMenu>
						</HeaderNavigation>
        				<HeaderGlobalBar>
          					<HeaderGlobalAction
          						aria-label="Search">
          					</HeaderGlobalAction>
          					<HeaderGlobalAction
          						aria-label="Notifications">
          					</HeaderGlobalAction>
          					<HeaderGlobalAction
          						aria-label="App Switcher">	  
          					</HeaderGlobalAction>
        				</HeaderGlobalBar>
      				</Header>
    			</>
  			)}
		/>
    </div>
}

export default HeaderComponent;