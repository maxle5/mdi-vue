
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatColorText from "../../src/components/MdiFormatColorText.vue";

test("MdiFormatColorText snapshot", () => {
  const wrapper = mount(MdiFormatColorText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
