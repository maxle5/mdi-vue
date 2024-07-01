
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlipVertical from "../../src/components/MdiFlipVertical.vue";

test("MdiFlipVertical snapshot", () => {
  const wrapper = mount(MdiFlipVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
