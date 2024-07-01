
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebRefresh from "../../src/components/MdiWebRefresh.vue";

test("MdiWebRefresh snapshot", () => {
  const wrapper = mount(MdiWebRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
