'use client';

import React, { memo, useState } from 'react';
import Link from 'next/link';
import { Images } from '@/assets';
import { enUs, useLanguage, useRouter, useTheme, useUser } from '@/contexts';
import { usePathname } from 'next/navigation';
import { Image, Text, Collapsible } from '@/components';
import { stringify } from '@/lib/utils';
import { CONFIG } from '@/commons';
import { useMyPortfolios } from '@/endpoints';
import { utils } from '@/lib';

type SubItems = {
  href: string;
  title: string;
  image_unfocused?: string;
  image_focused?: string;
};

type Childrens = {
  href: string;
  title: string;
  image_unfocused?: string;
  image_focused?: string;
};

type Feature = {
  href: string;
  title: keyof typeof enUs;
  image_unfocused: string;
  image_focused: string;
  subItems: SubItems[];
  childrens: Childrens[];
};

const ACCESS = CONFIG.ROUTES as Feature[];

// const getAccessList = (type: string) => {
//   return ACCESS[type as keyof typeof ACCESS];
// };

const Component = memo(
  () => {
    const router = useRouter();
    const pathname = usePathname();
    const language = useLanguage();
    const user = useUser();
    const theme = useTheme();

    const myPortfolios = useMyPortfolios({
      token: user.token || ``,
      startAt: `2000-01-01 23:59:59`,
      endAt: `2000-01-01 23:59:59`,
      enabled:
        ![`/login`, `/sign-up`, `/client-account-creation`].includes(
          pathname,
        ) && !utils.isEmpty(user.token),
    });

    const [expandedItem, setExpandedItem] = useState(``);

    const handleLogout = () => {
      user.reset();
      router.reload();
    };

    // const list: Feature[] = getAccessList(user?.type ?? ``) || [];
    const sideBarItems: Feature[] = ACCESS.map((item) => {
      if (item.href === `/my-portfolio`) {
        return {
          ...item,
          subItems: [
            ...(myPortfolios.data?.data.list || []).map((item1) => {
              return {
                href: `/my-portfolio?portfolio_code=${item1.portfolio_code}`,
                title: `${item1.portfolio_name} - ${
                  item1.portfolio_group
                } (${language.translate(`t_risk`)} ${
                  item1.portfolio_risk_level
                })`,
              };
            }),
            ...item.subItems,
          ],
        };
      }
      return item;
    });

    const selectedSideBarItem = ACCESS.find(({ href, subItems, childrens }) => {
      return (
        href === pathname ||
        subItems.find(({ href: href1 }) => {
          return href1 === pathname;
        }) ||
        childrens.find(({ href: href2 }) => {
          return href2 === pathname;
        })
      );
    });

    if (!selectedSideBarItem) {
      return null;
    }

    type SideBarItem = {
      isFocused: boolean;
      title: string;
      image_unfocused?: string;
      image_focused?: string;
    };

    const renderItemComponent = ({
      isFocused,
      title,
      image_unfocused,
      image_focused,
    }: SideBarItem) => {
      return (
        <div key={title} className={`cursor-pointer rounded-xl p-2`}>
          <div
            className='flex items-center rounded-md p-2'
            style={{
              ...(isFocused && {
                backgroundColor: theme.colors.containerBackground,
              }),
            }}
          >
            {image_unfocused && image_focused && (
              <Image
                alt={title}
                source={isFocused ? image_focused : image_unfocused}
                className='w-6'
              />
            )}
            <span className={`invisible ml-2 select-none md:visible`}>
              {title}
            </span>
          </div>
        </div>
      );
    };

    return (
      <div
        className={`no-scrollbar h-[100vh] w-[7rem] overflow-y-scroll p-4 shadow md:w-[18rem]`}
        style={{
          backgroundColor: theme.colors.onBackground,
        }}
      >
        <div className={`flex flex-wrap items-center justify-center gap-2`}>
          <Image className={`h-12 w-12`} source={Images.logo1} alt={`user`} />
          <Text
            className={`font-semibolds text-center`}
            style={{ color: theme.colors.onPrimary }}
          >{`Good morning, ${user.display_name}`}</Text>
        </div>
        <div className={`mt-4 flex flex-col`}>
          {sideBarItems.map(
            (
              { href, title, image_unfocused, image_focused, subItems },
              index,
              array,
            ) => {
              const isFocused = pathname === href;
              const isRouteExistInSubitem =
                subItems.findIndex((item) => {
                  return item.href === pathname;
                }) > -1;

              if (subItems?.length > 0) {
                return (
                  <div
                    key={href}
                    onClick={() => {
                      if (expandedItem === href) {
                        return setExpandedItem(``);
                      }

                      setExpandedItem(href);
                    }}
                  >
                    <Collapsible
                      className={index !== 0 ? `mt-2` : ``}
                      propIsExpanded={
                        expandedItem === href || isRouteExistInSubitem
                      }
                      collapsedChildren={subItems.map((item) => {
                        const isSubItemFocused = pathname === item.href;

                        return (
                          <div
                            key={item.title}
                            className={`ml-4 border-l-2 border-l-gray-300 pt-1`}
                          >
                            <Link href={item.href}>
                              {renderItemComponent({
                                isFocused: isSubItemFocused,
                                title: item.title,
                              })}
                            </Link>
                          </div>
                        );
                      })}
                    >
                      {renderItemComponent({
                        isFocused: false,
                        title,
                        image_unfocused,
                        image_focused,
                      })}
                    </Collapsible>
                  </div>
                );
              }

              return (
                <Link
                  key={title}
                  className={index !== 0 ? `mt-2` : ``}
                  href={href}
                  onClick={() => {
                    setExpandedItem(``);

                    if (index === array.length - 1) {
                      handleLogout();
                    }
                  }}
                >
                  {renderItemComponent({
                    isFocused,
                    title,
                    image_unfocused,
                    image_focused,
                  })}
                </Link>
              );
            },
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (stringify(prevProps) !== stringify(nextProps)) {
      return false;
    }

    return true;
  },
);

Component.displayName = `SideBar`;

export { Component };
