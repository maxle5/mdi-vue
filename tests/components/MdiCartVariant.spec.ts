
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartVariant from "../../src/components/MdiCartVariant.vue";

test("MdiCartVariant snapshot", () => {
  const wrapper = mount(MdiCartVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
