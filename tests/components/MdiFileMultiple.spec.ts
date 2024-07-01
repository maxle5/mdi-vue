
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileMultiple from "../../src/components/MdiFileMultiple.vue";

test("MdiFileMultiple snapshot", () => {
  const wrapper = mount(MdiFileMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
