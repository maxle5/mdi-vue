
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookRemoveMultiple from "../../src/components/MdiBookRemoveMultiple.vue";

test("MdiBookRemoveMultiple snapshot", () => {
  const wrapper = mount(MdiBookRemoveMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
