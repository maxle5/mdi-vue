
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiArrowLeftRight from "../../src/components/MdiWifiArrowLeftRight.vue";

test("MdiWifiArrowLeftRight snapshot", () => {
  const wrapper = mount(MdiWifiArrowLeftRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
