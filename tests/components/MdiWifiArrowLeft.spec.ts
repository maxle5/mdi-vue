
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiArrowLeft from "../../src/components/MdiWifiArrowLeft.vue";

test("MdiWifiArrowLeft snapshot", () => {
  const wrapper = mount(MdiWifiArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
