
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageR from "../../src/components/MdiLanguageR.vue";

test("MdiLanguageR snapshot", () => {
  const wrapper = mount(MdiLanguageR, {});
  expect(wrapper.html()).toMatchSnapshot();
});
