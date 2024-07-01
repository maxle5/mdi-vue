
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseOutline from "../../src/components/MdiCloseOutline.vue";

test("MdiCloseOutline snapshot", () => {
  const wrapper = mount(MdiCloseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
