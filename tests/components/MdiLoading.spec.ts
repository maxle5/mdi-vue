
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLoading from "../../src/components/MdiLoading.vue";

test("MdiLoading snapshot", () => {
  const wrapper = mount(MdiLoading, {});
  expect(wrapper.html()).toMatchSnapshot();
});
