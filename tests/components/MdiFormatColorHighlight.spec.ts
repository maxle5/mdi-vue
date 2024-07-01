
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatColorHighlight from "../../src/components/MdiFormatColorHighlight.vue";

test("MdiFormatColorHighlight snapshot", () => {
  const wrapper = mount(MdiFormatColorHighlight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
