
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookRefresh from "../../src/components/MdiBookRefresh.vue";

test("MdiBookRefresh snapshot", () => {
  const wrapper = mount(MdiBookRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
