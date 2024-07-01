
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageRefresh from "../../src/components/MdiImageRefresh.vue";

test("MdiImageRefresh snapshot", () => {
  const wrapper = mount(MdiImageRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
