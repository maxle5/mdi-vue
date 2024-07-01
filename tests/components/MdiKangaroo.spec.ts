
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKangaroo from "../../src/components/MdiKangaroo.vue";

test("MdiKangaroo snapshot", () => {
  const wrapper = mount(MdiKangaroo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
