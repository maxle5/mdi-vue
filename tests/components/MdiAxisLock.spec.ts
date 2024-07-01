
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAxisLock from "../../src/components/MdiAxisLock.vue";

test("MdiAxisLock snapshot", () => {
  const wrapper = mount(MdiAxisLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
