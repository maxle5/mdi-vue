
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScrewRoundTop from "../../src/components/MdiScrewRoundTop.vue";

test("MdiScrewRoundTop snapshot", () => {
  const wrapper = mount(MdiScrewRoundTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
