
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationAngleDown from "../../src/components/MdiFormatTextRotationAngleDown.vue";

test("MdiFormatTextRotationAngleDown snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationAngleDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
