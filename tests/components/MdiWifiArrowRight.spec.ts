
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiArrowRight from "../../src/components/MdiWifiArrowRight.vue";

test("MdiWifiArrowRight snapshot", () => {
  const wrapper = mount(MdiWifiArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
