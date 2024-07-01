
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterBoiler from "../../src/components/MdiWaterBoiler.vue";

test("MdiWaterBoiler snapshot", () => {
  const wrapper = mount(MdiWaterBoiler, {});
  expect(wrapper.html()).toMatchSnapshot();
});
