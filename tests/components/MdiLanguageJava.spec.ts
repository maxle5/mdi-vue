
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageJava from "../../src/components/MdiLanguageJava.vue";

test("MdiLanguageJava snapshot", () => {
  const wrapper = mount(MdiLanguageJava, {});
  expect(wrapper.html()).toMatchSnapshot();
});
