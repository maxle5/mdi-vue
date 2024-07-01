
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRouterWirelessSettings from "../../src/components/MdiRouterWirelessSettings.vue";

test("MdiRouterWirelessSettings snapshot", () => {
  const wrapper = mount(MdiRouterWirelessSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
