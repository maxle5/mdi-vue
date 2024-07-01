
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextWrappingWrap from "../../src/components/MdiFormatTextWrappingWrap.vue";

test("MdiFormatTextWrappingWrap snapshot", () => {
  const wrapper = mount(MdiFormatTextWrappingWrap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
