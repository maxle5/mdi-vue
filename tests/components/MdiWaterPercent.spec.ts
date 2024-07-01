
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPercent from "../../src/components/MdiWaterPercent.vue";

test("MdiWaterPercent snapshot", () => {
  const wrapper = mount(MdiWaterPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
