
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleHeight from "../../src/components/MdiHumanMaleHeight.vue";

test("MdiHumanMaleHeight snapshot", () => {
  const wrapper = mount(MdiHumanMaleHeight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
