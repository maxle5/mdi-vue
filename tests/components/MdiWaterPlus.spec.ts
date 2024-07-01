
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPlus from "../../src/components/MdiWaterPlus.vue";

test("MdiWaterPlus snapshot", () => {
  const wrapper = mount(MdiWaterPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
