
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanFemaleDance from "../../src/components/MdiHumanFemaleDance.vue";

test("MdiHumanFemaleDance snapshot", () => {
  const wrapper = mount(MdiHumanFemaleDance, {});
  expect(wrapper.html()).toMatchSnapshot();
});
