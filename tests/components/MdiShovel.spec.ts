
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShovel from "../../src/components/MdiShovel.vue";

test("MdiShovel snapshot", () => {
  const wrapper = mount(MdiShovel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
