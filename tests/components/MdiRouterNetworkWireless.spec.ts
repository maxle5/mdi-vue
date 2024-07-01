
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRouterNetworkWireless from "../../src/components/MdiRouterNetworkWireless.vue";

test("MdiRouterNetworkWireless snapshot", () => {
  const wrapper = mount(MdiRouterNetworkWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
