
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiPlus from "../../src/components/MdiWifiPlus.vue";

test("MdiWifiPlus snapshot", () => {
  const wrapper = mount(MdiWifiPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
