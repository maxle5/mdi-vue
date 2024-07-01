
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatStrikethroughVariant from "../../src/components/MdiFormatStrikethroughVariant.vue";

test("MdiFormatStrikethroughVariant snapshot", () => {
  const wrapper = mount(MdiFormatStrikethroughVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
