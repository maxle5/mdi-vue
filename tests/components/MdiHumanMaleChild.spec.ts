
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleChild from "../../src/components/MdiHumanMaleChild.vue";

test("MdiHumanMaleChild snapshot", () => {
  const wrapper = mount(MdiHumanMaleChild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
