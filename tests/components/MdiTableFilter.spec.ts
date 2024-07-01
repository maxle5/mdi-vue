
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableFilter from "../../src/components/MdiTableFilter.vue";

test("MdiTableFilter snapshot", () => {
  const wrapper = mount(MdiTableFilter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
