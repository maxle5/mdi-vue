
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSunWirelessOutline from "../../src/components/MdiSunWirelessOutline.vue";

test("MdiSunWirelessOutline snapshot", () => {
  const wrapper = mount(MdiSunWirelessOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
