
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRouterWirelessOff from "../../src/components/MdiRouterWirelessOff.vue";

test("MdiRouterWirelessOff snapshot", () => {
  const wrapper = mount(MdiRouterWirelessOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
