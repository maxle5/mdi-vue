
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSynagogueOutline from "../../src/components/MdiSynagogueOutline.vue";

test("MdiSynagogueOutline snapshot", () => {
  const wrapper = mount(MdiSynagogueOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
