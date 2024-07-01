
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLineSpacing from "../../src/components/MdiFormatLineSpacing.vue";

test("MdiFormatLineSpacing snapshot", () => {
  const wrapper = mount(MdiFormatLineSpacing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
