
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationUp from "../../src/components/MdiFormatTextRotationUp.vue";

test("MdiFormatTextRotationUp snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
