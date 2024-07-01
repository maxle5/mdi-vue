
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageTypescript from "../../src/components/MdiLanguageTypescript.vue";

test("MdiLanguageTypescript snapshot", () => {
  const wrapper = mount(MdiLanguageTypescript, {});
  expect(wrapper.html()).toMatchSnapshot();
});
