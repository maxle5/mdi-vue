
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSort from "../../src/components/MdiSort.vue";

test("MdiSort snapshot", () => {
  const wrapper = mount(MdiSort, {});
  expect(wrapper.html()).toMatchSnapshot();
});
