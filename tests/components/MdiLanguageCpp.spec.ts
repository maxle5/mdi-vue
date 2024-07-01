
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageCpp from "../../src/components/MdiLanguageCpp.vue";

test("MdiLanguageCpp snapshot", () => {
  const wrapper = mount(MdiLanguageCpp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
