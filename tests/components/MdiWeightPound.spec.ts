
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeightPound from "../../src/components/MdiWeightPound.vue";

test("MdiWeightPound snapshot", () => {
  const wrapper = mount(MdiWeightPound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
