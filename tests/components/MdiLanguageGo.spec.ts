
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageGo from "../../src/components/MdiLanguageGo.vue";

test("MdiLanguageGo snapshot", () => {
  const wrapper = mount(MdiLanguageGo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
