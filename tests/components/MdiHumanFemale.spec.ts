
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanFemale from "../../src/components/MdiHumanFemale.vue";

test("MdiHumanFemale snapshot", () => {
  const wrapper = mount(MdiHumanFemale, {});
  expect(wrapper.html()).toMatchSnapshot();
});
