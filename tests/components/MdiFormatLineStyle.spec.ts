
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatLineStyle from "../../src/components/MdiFormatLineStyle.vue";

test("MdiFormatLineStyle snapshot", () => {
  const wrapper = mount(MdiFormatLineStyle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
