
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPercentAlert from "../../src/components/MdiWaterPercentAlert.vue";

test("MdiWaterPercentAlert snapshot", () => {
  const wrapper = mount(MdiWaterPercentAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
