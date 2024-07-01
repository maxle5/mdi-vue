
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanFemaleFemaleChild from "../../src/components/MdiHumanFemaleFemaleChild.vue";

test("MdiHumanFemaleFemaleChild snapshot", () => {
  const wrapper = mount(MdiHumanFemaleFemaleChild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
