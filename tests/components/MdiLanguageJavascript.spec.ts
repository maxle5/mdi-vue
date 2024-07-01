
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageJavascript from "../../src/components/MdiLanguageJavascript.vue";

test("MdiLanguageJavascript snapshot", () => {
  const wrapper = mount(MdiLanguageJavascript, {});
  expect(wrapper.html()).toMatchSnapshot();
});
