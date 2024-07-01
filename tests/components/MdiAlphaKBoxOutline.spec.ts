
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaKBoxOutline from "../../src/components/MdiAlphaKBoxOutline.vue";

test("MdiAlphaKBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaKBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
