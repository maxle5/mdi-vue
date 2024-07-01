
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextVariant from "../../src/components/MdiFormatTextVariant.vue";

test("MdiFormatTextVariant snapshot", () => {
  const wrapper = mount(MdiFormatTextVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
