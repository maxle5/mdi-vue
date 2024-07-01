
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationAngleUp from "../../src/components/MdiFormatTextRotationAngleUp.vue";

test("MdiFormatTextRotationAngleUp snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationAngleUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
