
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaZBoxOutline from "../../src/components/MdiAlphaZBoxOutline.vue";

test("MdiAlphaZBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaZBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
