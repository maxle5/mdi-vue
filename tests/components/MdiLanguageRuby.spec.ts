
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageRuby from "../../src/components/MdiLanguageRuby.vue";

test("MdiLanguageRuby snapshot", () => {
  const wrapper = mount(MdiLanguageRuby, {});
  expect(wrapper.html()).toMatchSnapshot();
});
