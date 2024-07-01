
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterfall from "../../src/components/MdiWaterfall.vue";

test("MdiWaterfall snapshot", () => {
  const wrapper = mount(MdiWaterfall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
