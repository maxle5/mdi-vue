
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLocker from "../../src/components/MdiLocker.vue";

test("MdiLocker snapshot", () => {
  const wrapper = mount(MdiLocker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
