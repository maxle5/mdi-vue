
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatTextbox from "../../src/components/MdiFormatTextbox.vue";

test("MdiFormatTextbox snapshot", () => {
  const wrapper = mount(MdiFormatTextbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
