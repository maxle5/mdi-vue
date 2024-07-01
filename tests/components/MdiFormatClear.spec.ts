
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatClear from "../../src/components/MdiFormatClear.vue";

test("MdiFormatClear snapshot", () => {
  const wrapper = mount(MdiFormatClear, {});
  expect(wrapper.html()).toMatchSnapshot();
});
