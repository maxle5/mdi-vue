
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHighway from "../../src/components/MdiHighway.vue";

test("MdiHighway snapshot", () => {
  const wrapper = mount(MdiHighway, {});
  expect(wrapper.html()).toMatchSnapshot();
});
