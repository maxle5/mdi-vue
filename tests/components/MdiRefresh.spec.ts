
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRefresh from "../../src/components/MdiRefresh.vue";

test("MdiRefresh snapshot", () => {
  const wrapper = mount(MdiRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
