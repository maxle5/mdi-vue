
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound21 from "../../src/components/MdiSurroundSound21.vue";

test("MdiSurroundSound21 snapshot", () => {
  const wrapper = mount(MdiSurroundSound21, {});
  expect(wrapper.html()).toMatchSnapshot();
});
