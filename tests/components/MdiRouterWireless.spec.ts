
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRouterWireless from "../../src/components/MdiRouterWireless.vue";

test("MdiRouterWireless snapshot", () => {
  const wrapper = mount(MdiRouterWireless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
