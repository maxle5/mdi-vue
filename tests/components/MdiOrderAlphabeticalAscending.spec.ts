
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderAlphabeticalAscending from "../../src/components/MdiOrderAlphabeticalAscending.vue";

test("MdiOrderAlphabeticalAscending snapshot", () => {
  const wrapper = mount(MdiOrderAlphabeticalAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
