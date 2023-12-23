import * as TabsPrimitive from '@radix-ui/react-tabs';
interface TabsProps extends TabsPrimitive.TabsProps {
}
interface TabsListProps extends TabsPrimitive.TabsListProps {
}
interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
}
interface TabsContentProps extends TabsPrimitive.TabsContentProps {
}
declare const Tabs: import("react").ForwardRefExoticComponent<TabsPrimitive.TabsProps & import("react").RefAttributes<HTMLDivElement>>;
declare const TabsList: import("react").ForwardRefExoticComponent<TabsListProps & import("react").RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: import("react").ForwardRefExoticComponent<TabsTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
declare const TabsContent: import("react").ForwardRefExoticComponent<TabsContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, };
