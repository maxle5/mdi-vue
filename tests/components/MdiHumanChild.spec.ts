
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanChild from "../../src/components/MdiHumanChild.vue";

test("MdiHumanChild snapshot", () => {
  const wrapper = mount(MdiHumanChild, {});
  expect(wrapper.html()).toMatchSnapshot();
});
