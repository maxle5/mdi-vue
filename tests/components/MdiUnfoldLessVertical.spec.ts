
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnfoldLessVertical from "../../src/components/MdiUnfoldLessVertical.vue";

test("MdiUnfoldLessVertical snapshot", () => {
  const wrapper = mount(MdiUnfoldLessVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
