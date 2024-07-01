
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiMinus from "../../src/components/MdiWifiMinus.vue";

test("MdiWifiMinus snapshot", () => {
  const wrapper = mount(MdiWifiMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
