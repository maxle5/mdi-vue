
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationVertical from "../../src/components/MdiFormatTextRotationVertical.vue";

test("MdiFormatTextRotationVertical snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
