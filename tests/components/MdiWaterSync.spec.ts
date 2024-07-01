
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterSync from "../../src/components/MdiWaterSync.vue";

test("MdiWaterSync snapshot", () => {
  const wrapper = mount(MdiWaterSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
