
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatWrapTopBottom from "../../src/components/MdiFormatWrapTopBottom.vue";

test("MdiFormatWrapTopBottom snapshot", () => {
  const wrapper = mount(MdiFormatWrapTopBottom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
