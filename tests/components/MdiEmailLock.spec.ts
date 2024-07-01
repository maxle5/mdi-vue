
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailLock from "../../src/components/MdiEmailLock.vue";

test("MdiEmailLock snapshot", () => {
  const wrapper = mount(MdiEmailLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
