
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRefresh from "../../src/components/MdiTableRefresh.vue";

test("MdiTableRefresh snapshot", () => {
  const wrapper = mount(MdiTableRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
