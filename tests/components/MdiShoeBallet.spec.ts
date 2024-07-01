
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShoeBallet from "../../src/components/MdiShoeBallet.vue";

test("MdiShoeBallet snapshot", () => {
  const wrapper = mount(MdiShoeBallet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
