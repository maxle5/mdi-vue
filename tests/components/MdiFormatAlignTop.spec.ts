
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatAlignTop from "../../src/components/MdiFormatAlignTop.vue";

test("MdiFormatAlignTop snapshot", () => {
  const wrapper = mount(MdiFormatAlignTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
