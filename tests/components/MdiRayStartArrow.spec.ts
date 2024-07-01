
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayStartArrow from "../../src/components/MdiRayStartArrow.vue";

test("MdiRayStartArrow snapshot", () => {
  const wrapper = mount(MdiRayStartArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
