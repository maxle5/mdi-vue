
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusBoxOutline from "../../src/components/MdiMinusBoxOutline.vue";

test("MdiMinusBoxOutline snapshot", () => {
  const wrapper = mount(MdiMinusBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
