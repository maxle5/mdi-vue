
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiYoga from "../../src/components/MdiYoga.vue";

test("MdiYoga snapshot", () => {
  const wrapper = mount(MdiYoga, {});
  expect(wrapper.html()).toMatchSnapshot();
});
