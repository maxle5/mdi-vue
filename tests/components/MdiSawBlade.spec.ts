
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSawBlade from "../../src/components/MdiSawBlade.vue";

test("MdiSawBlade snapshot", () => {
  const wrapper = mount(MdiSawBlade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
