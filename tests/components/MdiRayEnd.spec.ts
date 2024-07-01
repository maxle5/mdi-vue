
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRayEnd from "../../src/components/MdiRayEnd.vue";

test("MdiRayEnd snapshot", () => {
  const wrapper = mount(MdiRayEnd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
