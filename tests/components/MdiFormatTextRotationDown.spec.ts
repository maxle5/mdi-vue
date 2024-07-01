
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationDown from "../../src/components/MdiFormatTextRotationDown.vue";

test("MdiFormatTextRotationDown snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
