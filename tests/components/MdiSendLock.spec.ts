
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSendLock from "../../src/components/MdiSendLock.vue";

test("MdiSendLock snapshot", () => {
  const wrapper = mount(MdiSendLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
