
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatFloatRight from "../../src/components/MdiFormatFloatRight.vue";

test("MdiFormatFloatRight snapshot", () => {
  const wrapper = mount(MdiFormatFloatRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
