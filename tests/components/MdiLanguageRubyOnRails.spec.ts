
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageRubyOnRails from "../../src/components/MdiLanguageRubyOnRails.vue";

test("MdiLanguageRubyOnRails snapshot", () => {
  const wrapper = mount(MdiLanguageRubyOnRails, {});
  expect(wrapper.html()).toMatchSnapshot();
});
