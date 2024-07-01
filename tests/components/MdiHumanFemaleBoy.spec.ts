
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanFemaleBoy from "../../src/components/MdiHumanFemaleBoy.vue";

test("MdiHumanFemaleBoy snapshot", () => {
  const wrapper = mount(MdiHumanFemaleBoy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
