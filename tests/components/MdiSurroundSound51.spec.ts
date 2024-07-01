
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound51 from "../../src/components/MdiSurroundSound51.vue";

test("MdiSurroundSound51 snapshot", () => {
  const wrapper = mount(MdiSurroundSound51, {});
  expect(wrapper.html()).toMatchSnapshot();
});
