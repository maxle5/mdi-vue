
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDevTo from "../../src/components/MdiDevTo.vue";

test("MdiDevTo snapshot", () => {
  const wrapper = mount(MdiDevTo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
