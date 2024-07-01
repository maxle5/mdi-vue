
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiArrowUpDown from "../../src/components/MdiWifiArrowUpDown.vue";

test("MdiWifiArrowUpDown snapshot", () => {
  const wrapper = mount(MdiWifiArrowUpDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
