
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatWrapSquare from "../../src/components/MdiFormatWrapSquare.vue";

test("MdiFormatWrapSquare snapshot", () => {
  const wrapper = mount(MdiFormatWrapSquare, {});
  expect(wrapper.html()).toMatchSnapshot();
});
