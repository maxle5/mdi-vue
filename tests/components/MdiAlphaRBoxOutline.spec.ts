
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaRBoxOutline from "../../src/components/MdiAlphaRBoxOutline.vue";

test("MdiAlphaRBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaRBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
