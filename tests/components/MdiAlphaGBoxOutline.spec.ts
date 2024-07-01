
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaGBoxOutline from "../../src/components/MdiAlphaGBoxOutline.vue";

test("MdiAlphaGBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaGBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
