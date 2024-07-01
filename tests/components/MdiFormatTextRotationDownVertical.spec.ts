
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationDownVertical from "../../src/components/MdiFormatTextRotationDownVertical.vue";

test("MdiFormatTextRotationDownVertical snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationDownVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
