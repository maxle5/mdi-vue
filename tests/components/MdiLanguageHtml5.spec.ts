
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageHtml5 from "../../src/components/MdiLanguageHtml5.vue";

test("MdiLanguageHtml5 snapshot", () => {
  const wrapper = mount(MdiLanguageHtml5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
