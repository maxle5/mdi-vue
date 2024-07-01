
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageKotlin from "../../src/components/MdiLanguageKotlin.vue";

test("MdiLanguageKotlin snapshot", () => {
  const wrapper = mount(MdiLanguageKotlin, {});
  expect(wrapper.html()).toMatchSnapshot();
});
