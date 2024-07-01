
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextRotationNone from "../../src/components/MdiFormatTextRotationNone.vue";

test("MdiFormatTextRotationNone snapshot", () => {
  const wrapper = mount(MdiFormatTextRotationNone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
