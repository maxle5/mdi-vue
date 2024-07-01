
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiArrowDown from "../../src/components/MdiWifiArrowDown.vue";

test("MdiWifiArrowDown snapshot", () => {
  const wrapper = mount(MdiWifiArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
