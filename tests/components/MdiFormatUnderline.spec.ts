
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatUnderline from "../../src/components/MdiFormatUnderline.vue";

test("MdiFormatUnderline snapshot", () => {
  const wrapper = mount(MdiFormatUnderline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
