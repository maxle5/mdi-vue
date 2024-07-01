
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListText from "../../src/components/MdiFormatListText.vue";

test("MdiFormatListText snapshot", () => {
  const wrapper = mount(MdiFormatListText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
