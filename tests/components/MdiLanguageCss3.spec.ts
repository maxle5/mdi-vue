
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageCss3 from "../../src/components/MdiLanguageCss3.vue";

test("MdiLanguageCss3 snapshot", () => {
  const wrapper = mount(MdiLanguageCss3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
