
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound20 from "../../src/components/MdiSurroundSound20.vue";

test("MdiSurroundSound20 snapshot", () => {
  const wrapper = mount(MdiSurroundSound20, {});
  expect(wrapper.html()).toMatchSnapshot();
});
