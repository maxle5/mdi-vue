
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderAlphabeticalDescending from "../../src/components/MdiOrderAlphabeticalDescending.vue";

test("MdiOrderAlphabeticalDescending snapshot", () => {
  const wrapper = mount(MdiOrderAlphabeticalDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
