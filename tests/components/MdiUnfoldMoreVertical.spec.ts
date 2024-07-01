
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUnfoldMoreVertical from "../../src/components/MdiUnfoldMoreVertical.vue";

test("MdiUnfoldMoreVertical snapshot", () => {
  const wrapper = mount(MdiUnfoldMoreVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
