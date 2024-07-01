
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFont from "../../src/components/MdiFormatFont.vue";

test("MdiFormatFont snapshot", () => {
  const wrapper = mount(MdiFormatFont, {});
  expect(wrapper.html()).toMatchSnapshot();
});
