
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageSwift from "../../src/components/MdiLanguageSwift.vue";

test("MdiLanguageSwift snapshot", () => {
  const wrapper = mount(MdiLanguageSwift, {});
  expect(wrapper.html()).toMatchSnapshot();
});
