
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiOff from "../../src/components/MdiWifiOff.vue";

test("MdiWifiOff snapshot", () => {
  const wrapper = mount(MdiWifiOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
