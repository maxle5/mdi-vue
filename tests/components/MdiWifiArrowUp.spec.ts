
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiArrowUp from "../../src/components/MdiWifiArrowUp.vue";

test("MdiWifiArrowUp snapshot", () => {
  const wrapper = mount(MdiWifiArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
