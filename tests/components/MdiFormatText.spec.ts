
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatText from "../../src/components/MdiFormatText.vue";

test("MdiFormatText snapshot", () => {
  const wrapper = mount(MdiFormatText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
