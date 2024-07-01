
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound512 from "../../src/components/MdiSurroundSound512.vue";

test("MdiSurroundSound512 snapshot", () => {
  const wrapper = mount(MdiSurroundSound512, {});
  expect(wrapper.html()).toMatchSnapshot();
});
