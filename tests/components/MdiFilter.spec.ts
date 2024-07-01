
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilter from "../../src/components/MdiFilter.vue";

test("MdiFilter snapshot", () => {
  const wrapper = mount(MdiFilter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
