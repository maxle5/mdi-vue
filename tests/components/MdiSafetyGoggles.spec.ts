
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSafetyGoggles from "../../src/components/MdiSafetyGoggles.vue";

test("MdiSafetyGoggles snapshot", () => {
  const wrapper = mount(MdiSafetyGoggles, {});
  expect(wrapper.html()).toMatchSnapshot();
});
