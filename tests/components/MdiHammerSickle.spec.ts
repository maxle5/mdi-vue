
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHammerSickle from "../../src/components/MdiHammerSickle.vue";

test("MdiHammerSickle snapshot", () => {
  const wrapper = mount(MdiHammerSickle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
