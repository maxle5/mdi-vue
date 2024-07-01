
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookLock from "../../src/components/MdiBookLock.vue";

test("MdiBookLock snapshot", () => {
  const wrapper = mount(MdiBookLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
