
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGarageVariant from "../../src/components/MdiGarageVariant.vue";

test("MdiGarageVariant snapshot", () => {
  const wrapper = mount(MdiGarageVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
