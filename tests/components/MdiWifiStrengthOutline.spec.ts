
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWifiStrengthOutline from "../../src/components/MdiWifiStrengthOutline.vue";

test("MdiWifiStrengthOutline snapshot", () => {
  const wrapper = mount(MdiWifiStrengthOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
