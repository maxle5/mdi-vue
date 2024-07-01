
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanWalker from "../../src/components/MdiHumanWalker.vue";

test("MdiHumanWalker snapshot", () => {
  const wrapper = mount(MdiHumanWalker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
