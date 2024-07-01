
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHairDryerOutline from "../../src/components/MdiHairDryerOutline.vue";

test("MdiHairDryerOutline snapshot", () => {
  const wrapper = mount(MdiHairDryerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
