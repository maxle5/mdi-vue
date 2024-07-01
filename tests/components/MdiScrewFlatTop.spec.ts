
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScrewFlatTop from "../../src/components/MdiScrewFlatTop.vue";

test("MdiScrewFlatTop snapshot", () => {
  const wrapper = mount(MdiScrewFlatTop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
