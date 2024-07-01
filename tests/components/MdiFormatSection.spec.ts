
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatSection from "../../src/components/MdiFormatSection.vue";

test("MdiFormatSection snapshot", () => {
  const wrapper = mount(MdiFormatSection, {});
  expect(wrapper.html()).toMatchSnapshot();
});
