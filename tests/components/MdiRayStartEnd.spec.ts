
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayStartEnd from "../../src/components/MdiRayStartEnd.vue";

test("MdiRayStartEnd snapshot", () => {
  const wrapper = mount(MdiRayStartEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
