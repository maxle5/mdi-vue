
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterCheck from "../../src/components/MdiWaterCheck.vue";

test("MdiWaterCheck snapshot", () => {
  const wrapper = mount(MdiWaterCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
