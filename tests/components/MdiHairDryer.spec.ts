
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHairDryer from "../../src/components/MdiHairDryer.vue";

test("MdiHairDryer snapshot", () => {
  const wrapper = mount(MdiHairDryer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
