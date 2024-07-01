
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEslint from "../../src/components/MdiEslint.vue";

test("MdiEslint snapshot", () => {
  const wrapper = mount(MdiEslint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
