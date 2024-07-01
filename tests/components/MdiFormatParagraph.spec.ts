
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormatParagraph from "../../src/components/MdiFormatParagraph.vue";

test("MdiFormatParagraph snapshot", () => {
  const wrapper = mount(MdiFormatParagraph, {});
  expect(wrapper.html()).toMatchSnapshot();
});
