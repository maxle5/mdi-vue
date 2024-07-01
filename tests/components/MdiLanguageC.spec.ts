
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageC from "../../src/components/MdiLanguageC.vue";

test("MdiLanguageC snapshot", () => {
  const wrapper = mount(MdiLanguageC, {});
  expect(wrapper.html()).toMatchSnapshot();
});
