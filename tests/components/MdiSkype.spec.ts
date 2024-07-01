
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkype from "../../src/components/MdiSkype.vue";

test("MdiSkype snapshot", () => {
  const wrapper = mount(MdiSkype, {});
  expect(wrapper.html()).toMatchSnapshot();
});
