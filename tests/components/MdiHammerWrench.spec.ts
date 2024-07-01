
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHammerWrench from "../../src/components/MdiHammerWrench.vue";

test("MdiHammerWrench snapshot", () => {
  const wrapper = mount(MdiHammerWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
