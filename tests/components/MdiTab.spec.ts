
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTab from "../../src/components/MdiTab.vue";

test("MdiTab snapshot", () => {
  const wrapper = mount(MdiTab, {});
  expect(wrapper.html()).toMatchSnapshot();
});
