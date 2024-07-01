
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageMarkdownOutline from "../../src/components/MdiLanguageMarkdownOutline.vue";

test("MdiLanguageMarkdownOutline snapshot", () => {
  const wrapper = mount(MdiLanguageMarkdownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
