
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageRust from "../../src/components/MdiLanguageRust.vue";

test("MdiLanguageRust snapshot", () => {
  const wrapper = mount(MdiLanguageRust, {});
  expect(wrapper.html()).toMatchSnapshot();
});
