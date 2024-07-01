
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrendingUp from "../../src/components/MdiTrendingUp.vue";

test("MdiTrendingUp snapshot", () => {
  const wrapper = mount(MdiTrendingUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
