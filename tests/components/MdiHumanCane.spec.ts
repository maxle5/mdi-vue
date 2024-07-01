
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanCane from "../../src/components/MdiHumanCane.vue";

test("MdiHumanCane snapshot", () => {
  const wrapper = mount(MdiHumanCane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
