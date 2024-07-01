
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterAlertOutline from "../../src/components/MdiWaterAlertOutline.vue";

test("MdiWaterAlertOutline snapshot", () => {
  const wrapper = mount(MdiWaterAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
