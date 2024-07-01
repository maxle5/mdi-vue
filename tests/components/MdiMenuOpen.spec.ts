
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMenuOpen from "../../src/components/MdiMenuOpen.vue";

test("MdiMenuOpen snapshot", () => {
  const wrapper = mount(MdiMenuOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
