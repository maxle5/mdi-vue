
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatListCheckbox from "../../src/components/MdiFormatListCheckbox.vue";

test("MdiFormatListCheckbox snapshot", () => {
  const wrapper = mount(MdiFormatListCheckbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
