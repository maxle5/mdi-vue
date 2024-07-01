
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanguageLua from "../../src/components/MdiLanguageLua.vue";

test("MdiLanguageLua snapshot", () => {
  const wrapper = mount(MdiLanguageLua, {});
  expect(wrapper.html()).toMatchSnapshot();
});
