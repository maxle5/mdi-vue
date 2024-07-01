
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound31 from "../../src/components/MdiSurroundSound31.vue";

test("MdiSurroundSound31 snapshot", () => {
  const wrapper = mount(MdiSurroundSound31, {});
  expect(wrapper.html()).toMatchSnapshot();
});
