
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountLock from "../../src/components/MdiAccountLock.vue";

test("MdiAccountLock snapshot", () => {
  const wrapper = mount(MdiAccountLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
