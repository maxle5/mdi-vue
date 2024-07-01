
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanMaleFemaleChild from "../../src/components/MdiHumanMaleFemaleChild.vue";

test("MdiHumanMaleFemaleChild snapshot", () => {
  const wrapper = mount(MdiHumanMaleFemaleChild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
