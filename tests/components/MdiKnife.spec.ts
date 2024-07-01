
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKnife from "../../src/components/MdiKnife.vue";

test("MdiKnife snapshot", () => {
  const wrapper = mount(MdiKnife, {});
  expect(wrapper.html()).toMatchSnapshot();
});
