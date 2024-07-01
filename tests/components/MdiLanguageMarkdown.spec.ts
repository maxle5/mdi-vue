
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageMarkdown from "../../src/components/MdiLanguageMarkdown.vue";

test("MdiLanguageMarkdown snapshot", () => {
  const wrapper = mount(MdiLanguageMarkdown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
