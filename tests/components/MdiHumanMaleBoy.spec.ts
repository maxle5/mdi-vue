
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleBoy from "../../src/components/MdiHumanMaleBoy.vue";

test("MdiHumanMaleBoy snapshot", () => {
  const wrapper = mount(MdiHumanMaleBoy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
