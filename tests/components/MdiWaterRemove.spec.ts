
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterRemove from "../../src/components/MdiWaterRemove.vue";

test("MdiWaterRemove snapshot", () => {
  const wrapper = mount(MdiWaterRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
