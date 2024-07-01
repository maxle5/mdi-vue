
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowProjectile from "../../src/components/MdiArrowProjectile.vue";

test("MdiArrowProjectile snapshot", () => {
  const wrapper = mount(MdiArrowProjectile, {});
  expect(wrapper.html()).toMatchSnapshot();
});
