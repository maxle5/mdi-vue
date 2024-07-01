
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMale from "../../src/components/MdiHumanMale.vue";

test("MdiHumanMale snapshot", () => {
  const wrapper = mount(MdiHumanMale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
