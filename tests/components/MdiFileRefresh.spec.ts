
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileRefresh from "../../src/components/MdiFileRefresh.vue";

test("MdiFileRefresh snapshot", () => {
  const wrapper = mount(MdiFileRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
