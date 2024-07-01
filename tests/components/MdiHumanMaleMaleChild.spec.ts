
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleMaleChild from "../../src/components/MdiHumanMaleMaleChild.vue";

test("MdiHumanMaleMaleChild snapshot", () => {
  const wrapper = mount(MdiHumanMaleMaleChild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
