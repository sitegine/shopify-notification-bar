import { Layout, Page, Text, Card, BlockStack, Link } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Index() {
  return (
    <Page>
      <TitleBar title="Top Notification Bar" />

      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <Text variant="headingLg" as="h2">
                  🎉 Your Top Notification Bar app is installed!
                </Text>
                <Text as="p">
                  This app displays a customizable bar at the top of your store
                  using a Theme App Extension.
                </Text>

                <Text variant="headingMd" as="h3">
                  🔧 Setup Instructions
                </Text>
                <BlockStack gap="200">
                  <Text as="p">
                    1. Go to <strong>Online Store → Themes → Customize</strong>
                  </Text>
                  <Text as="p">
                    2. Open <strong>App embeds</strong> (bottom left corner)
                  </Text>
                  <Text as="p">
                    3. Enable <strong>Notification Bar</strong>
                  </Text>
                  <Text as="p">
                    4. Customize the message, colors, and behavior
                  </Text>
                </BlockStack>

                <Text variant="headingMd" as="h3">
                  ✅ Features
                </Text>
                <ul>
                  <li>Rich text editor for your message</li>
                  <li>Dismiss (close) button</li>
                  <li>Display once per day, month, forever, or every visit</li>
                  <li>Responsive design, always visible</li>
                </ul>

                <Text as="p">
                  Want more features like targeting, scheduling, or analytics?
                  <br />
                  Contact us at{" "}
                  <Link
                    url="https://sitegine.com"
                    target="_blank"
                    removeUnderline
                  >
                    Sitegine.com
                  </Link>
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
