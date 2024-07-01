
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSynagogue from "../../src/components/MdiSynagogue.vue";

test("MdiSynagogue snapshot", () => {
  const wrapper = mount(MdiSynagogue, {});
  expect(wrapper.html()).toMatchSnapshot();
});
