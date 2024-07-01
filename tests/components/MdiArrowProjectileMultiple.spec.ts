
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowProjectileMultiple from "../../src/components/MdiArrowProjectileMultiple.vue";

test("MdiArrowProjectileMultiple snapshot", () => {
  const wrapper = mount(MdiArrowProjectileMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
