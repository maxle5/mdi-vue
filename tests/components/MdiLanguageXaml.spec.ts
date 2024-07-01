
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageXaml from "../../src/components/MdiLanguageXaml.vue";

test("MdiLanguageXaml snapshot", () => {
  const wrapper = mount(MdiLanguageXaml, {});
  expect(wrapper.html()).toMatchSnapshot();
});
